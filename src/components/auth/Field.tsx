'use client';

import { forwardRef } from 'react';

interface FieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  /** Show the success state (valid + non-empty). */
  valid?: boolean;
}

/**
 * Labelled input compatible with react-hook-form's `register`. Spread the
 * registration onto it: `<Field label="Email" {...register('email')} />`.
 */
const Field = forwardRef<HTMLInputElement, FieldProps>(function Field(
  { label, error, valid, required, id, className, ...rest },
  ref,
) {
  const inputId = id ?? rest.name;
  const stateClass = error ? 'is-invalid' : valid ? 'is-valid' : '';

  return (
    <div className="form-group auth-field">
      <label className="form-label" htmlFor={inputId}>
        {label}
        {required && <span className="auth-field-req"> *</span>}
      </label>
      <input
        id={inputId}
        ref={ref}
        className={`form-control ${stateClass} ${className ?? ''}`.trim()}
        aria-invalid={!!error}
        {...rest}
      />
      {error && <p className="auth-field-error">{error}</p>}
    </div>
  );
});

export default Field;
