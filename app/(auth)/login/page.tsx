'use client';

import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import toast from 'react-hot-toast';
import Field from '@/components/auth/Field';
import OtpInput from '@/components/auth/OtpInput';
import { useAuthStore } from '@/store/authStore';
import { sendOtp, verifyOtp, fetchUserProfile } from '@/lib/auth/api';
import { loginEmailSchema, type LoginEmailValues } from '@/lib/auth/schemas';

const OTP_TTL = 600; // seconds (10 min), matches source

function maskEmail(email: string) {
  return email.replace(
    /(.{2})(.*)(@.*)/,
    (_, a: string, b: string, c: string) =>
      `${a}${'•'.repeat(Math.min(b.length, 4))}${c}`,
  );
}

export default function LoginPage() {
  const router = useRouter();
  const setAuth = useAuthStore((s) => s.setAuth);
  const setUser = useAuthStore((s) => s.setUser);

  const [step, setStep] = useState<'enter' | 'verify'>('enter');
  const [email, setEmail] = useState('');
  const [otpCode, setOtpCode] = useState<string[]>(['', '', '', '', '', '']);
  const [sending, setSending] = useState(false);
  const [verifying, setVerifying] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginEmailValues>({ resolver: zodResolver(loginEmailSchema) });

  useEffect(() => {
    if (countdown > 0) {
      timerRef.current = setTimeout(() => setCountdown((c) => c - 1), 1000);
    }
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [countdown]);

  const onSendOtp = async ({ email: value }: LoginEmailValues) => {
    setSending(true);
    try {
      const res = await sendOtp(value);
      if (res.ok) {
        setEmail(value);
        setStep('verify');
        setCountdown(OTP_TTL);
        toast.success(`OTP sent to ${maskEmail(value)}`);
      } else {
        toast.error(res.message || 'Failed to send OTP');
      }
    } catch {
      toast.error('Network error');
    } finally {
      setSending(false);
    }
  };

  const onVerify = async (code: string) => {
    if (code.length !== 6) return;
    setVerifying(true);
    try {
      const res = await verifyOtp(email, code);
      if (res.ok && res.token) {
        setAuth({ token: res.token });
        const profile = await fetchUserProfile(res.token);
        setUser(profile);
        toast.success('Signed in successfully');
        router.replace('/admin');
      } else {
        toast.error(res.message || 'Invalid OTP');
        setOtpCode(['', '', '', '', '', '']);
      }
    } catch {
      toast.error('Something went wrong');
    } finally {
      setVerifying(false);
    }
  };

  const onResend = async () => {
    if (countdown > 0) return;
    setSending(true);
    try {
      const res = await sendOtp(email);
      if (res.ok) {
        setCountdown(OTP_TTL);
        setOtpCode(['', '', '', '', '', '']);
        toast.success('New OTP sent');
      } else {
        toast.error(res.message || 'Failed to resend');
      }
    } catch {
      toast.error('Failed to resend');
    } finally {
      setSending(false);
    }
  };

  if (step === 'verify') {
    const mins = Math.floor(countdown / 60);
    const secs = String(countdown % 60).padStart(2, '0');
    return (
      <>
        <h2 className="auth-title">Check your inbox</h2>
        <p className="auth-subtitle">
          Code sent to <strong>{maskEmail(email)}</strong>
        </p>

        <label className="form-label">Enter OTP</label>
        <OtpInput
          value={otpCode}
          onChange={setOtpCode}
          onComplete={onVerify}
          disabled={verifying}
        />

        <div className="otp-meta">
          {countdown > 0 ? (
            <span>
              OTP expires in{' '}
              <strong>
                {mins}:{secs}
              </strong>
            </span>
          ) : (
            <button
              type="button"
              className="auth-link-btn"
              onClick={onResend}
              disabled={sending}
            >
              {sending ? 'Sending…' : 'Resend OTP'}
            </button>
          )}
        </div>

        <button
          type="button"
          className="btn btn-primary auth-submit"
          onClick={() => onVerify(otpCode.join(''))}
          disabled={verifying || otpCode.some((d) => !d)}
        >
          {verifying ? 'Verifying…' : 'Verify & Sign In'}
        </button>

        <button
          type="button"
          className="auth-link-btn auth-back"
          onClick={() => setStep('enter')}
        >
          ← Use a different email
        </button>
      </>
    );
  }

  return (
    <>
      <h2 className="auth-title">Sign in with OTP</h2>
      <p className="auth-subtitle">
        We&apos;ll send a one-time code to your email.
      </p>

      <form onSubmit={handleSubmit(onSendOtp)} className="auth-form" noValidate>
        <Field
          label="Email address"
          type="email"
          placeholder="you@company.com"
          required
          error={errors.email?.message}
          {...register('email')}
        />

        <button
          type="submit"
          className="btn btn-primary auth-submit"
          disabled={sending}
        >
          {sending ? 'Sending…' : 'Send OTP'}
        </button>
      </form>

      <p className="auth-footer">
        Don&apos;t have an account? <Link href="/signup">Create one</Link>
      </p>
    </>
  );
}
