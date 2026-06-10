'use client';

import { useRef } from 'react';

interface OtpInputProps {
  value: string[];
  onChange: (next: string[]) => void;
  /** Called with the joined code once all 6 boxes are filled. */
  onComplete?: (code: string) => void;
  disabled?: boolean;
}

/** Six-box OTP entry with auto-advance, backspace-back, and auto-submit. */
export default function OtpInput({
  value,
  onChange,
  onComplete,
  disabled,
}: OtpInputProps) {
  const refs = useRef<Array<HTMLInputElement | null>>([]);

  const handleChange = (index: number, raw: string) => {
    const digit = raw.replace(/\D/g, '').slice(-1);
    const next = [...value];
    next[index] = digit;
    onChange(next);

    if (digit && index < 5) {
      refs.current[index + 1]?.focus();
    }
    if (next.every((d) => d)) {
      onComplete?.(next.join(''));
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (e.key === 'Backspace' && !value[index] && index > 0) {
      refs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    const text = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, 6);
    if (!text) return;
    e.preventDefault();
    const next = Array.from({ length: 6 }, (_, i) => text[i] ?? '');
    onChange(next);
    if (next.every((d) => d)) onComplete?.(next.join(''));
    else refs.current[text.length]?.focus();
  };

  return (
    <div className="otp-input" role="group" aria-label="One-time code">
      {value.map((digit, idx) => (
        <input
          key={idx}
          ref={(el) => {
            refs.current[idx] = el;
          }}
          type="text"
          inputMode="numeric"
          autoComplete={idx === 0 ? 'one-time-code' : 'off'}
          maxLength={1}
          value={digit}
          disabled={disabled}
          aria-label={`Digit ${idx + 1}`}
          className="otp-box"
          onChange={(e) => handleChange(idx, e.target.value)}
          onKeyDown={(e) => handleKeyDown(idx, e)}
          onPaste={handlePaste}
        />
      ))}
    </div>
  );
}
