'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import toast from 'react-hot-toast';
import Field from '@/components/auth/Field';
import { register as registerUser } from '@/lib/auth/api';
import {
  signupStep1Schema,
  signupStep2Schema,
  type SignupStep1Values,
  type SignupStep2Values,
} from '@/lib/auth/schemas';

const PASSWORD_RULES: { label: string; test: (p: string) => boolean }[] = [
  { label: 'Uppercase', test: (p) => /[A-Z]/.test(p) },
  { label: 'Lowercase', test: (p) => /[a-z]/.test(p) },
  { label: 'Number', test: (p) => /[0-9]/.test(p) },
  { label: 'Symbol', test: (p) => /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(p) },
  { label: 'Min 6 chars', test: (p) => p.length >= 6 },
];

export default function SignupPage() {
  const router = useRouter();
  const [step, setStep] = useState<1 | 2>(1);
  const [account, setAccount] = useState<SignupStep1Values | null>(null);
  const [loading, setLoading] = useState(false);

  const step1 = useForm<SignupStep1Values>({
    resolver: zodResolver(signupStep1Schema),
    mode: 'onTouched',
  });
  const step2 = useForm<SignupStep2Values>({
    resolver: zodResolver(signupStep2Schema),
    defaultValues: { country: 'India' },
    mode: 'onTouched',
  });

  const password = step1.watch('password') ?? '';

  const onStep1 = (values: SignupStep1Values) => {
    setAccount(values);
    setStep(2);
  };

  const onStep2 = async (address: SignupStep2Values) => {
    if (!account) return;
    setLoading(true);
    try {
      const res = await registerUser({
        fullName: account.name,
        email: account.email.toLowerCase(),
        mobile: account.mobile,
        password: account.password,
        houseNoAndStreet: address.houseStreet,
        cityOrDistrict: address.city,
        state: address.state,
        country: address.country,
        zipCode: address.zip,
        subscriptionFor: 'Backend Developer',
        subscriptionCost: '0',
        amount: 0,
        subscriptionType: 'Direct Intern',
        paymentMethod: 'full',
        transactionId: `FREE-${Date.now()}`,
      });
      if (res.ok) {
        toast.success('Registration successful! Please sign in.');
        router.push('/login');
      } else {
        const msg = res.message || 'Registration failed';
        toast.error(
          msg.toLowerCase().includes('email already')
            ? 'This email is already registered. Please sign in.'
            : msg,
        );
      }
    } catch {
      toast.error('Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <h2 className="auth-title">Create an account</h2>
      <p className="auth-subtitle">
        Join Baroda Equipment and access your dashboard.
      </p>

      <div className="auth-stepper">
        <div className={`auth-step ${step >= 1 ? 'is-active' : ''}`}>
          <span className="auth-step-dot">1</span>Account
        </div>
        <div className="auth-step-line" />
        <div className={`auth-step ${step >= 2 ? 'is-active' : ''}`}>
          <span className="auth-step-dot">2</span>Address
        </div>
      </div>

      {step === 1 && (
        <form
          onSubmit={step1.handleSubmit(onStep1)}
          className="auth-form"
          noValidate
        >
          <Field
            label="Full name"
            required
            error={step1.formState.errors.name?.message}
            {...step1.register('name')}
          />
          <Field
            label="Email"
            type="email"
            required
            error={step1.formState.errors.email?.message}
            {...step1.register('email')}
          />
          <Field
            label="Mobile number"
            type="tel"
            inputMode="numeric"
            maxLength={10}
            required
            error={step1.formState.errors.mobile?.message}
            {...step1.register('mobile')}
          />
          <Field
            label="Password"
            type="password"
            required
            error={step1.formState.errors.password?.message}
            {...step1.register('password')}
          />

          <div className="password-rules">
            <span className="password-rules-title">Password requirements</span>
            <div className="password-rules-list">
              {PASSWORD_RULES.map((rule) => (
                <span
                  key={rule.label}
                  className={`password-rule ${rule.test(password) ? 'is-met' : ''}`}
                >
                  ✓ {rule.label}
                </span>
              ))}
            </div>
          </div>

          <Field
            label="Confirm password"
            type="password"
            required
            error={step1.formState.errors.confirmPassword?.message}
            {...step1.register('confirmPassword')}
          />

          <button type="submit" className="btn btn-primary auth-submit">
            Continue
          </button>
        </form>
      )}

      {step === 2 && (
        <form
          onSubmit={step2.handleSubmit(onStep2)}
          className="auth-form"
          noValidate
        >
          <Field
            label="House / Street"
            required
            error={step2.formState.errors.houseStreet?.message}
            {...step2.register('houseStreet')}
          />
          <div className="auth-row">
            <Field
              label="City"
              required
              error={step2.formState.errors.city?.message}
              {...step2.register('city')}
            />
            <Field
              label="State"
              required
              error={step2.formState.errors.state?.message}
              {...step2.register('state')}
            />
          </div>
          <div className="auth-row">
            <Field
              label="Country"
              required
              error={step2.formState.errors.country?.message}
              {...step2.register('country')}
            />
            <Field
              label="ZIP code"
              required
              error={step2.formState.errors.zip?.message}
              {...step2.register('zip')}
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary auth-submit"
            disabled={loading}
          >
            {loading ? 'Creating account…' : 'Create account'}
          </button>
          <button
            type="button"
            className="auth-link-btn auth-back"
            onClick={() => setStep(1)}
          >
            ← Back to account info
          </button>
        </form>
      )}

      <p className="auth-footer">
        Already have an account? <Link href="/login">Sign in</Link>
      </p>
    </>
  );
}
