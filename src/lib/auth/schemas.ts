import { z } from 'zod';

// Mirrors the source's validateEmail regex: requires a dotted domain.
const emailRegex = /^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$/;

export const emailField = z
  .string()
  .min(1, 'Email is required')
  .regex(emailRegex, 'Please enter a valid email');

export const loginEmailSchema = z.object({
  email: emailField,
});
export type LoginEmailValues = z.infer<typeof loginEmailSchema>;

export const otpSchema = z.object({
  otp: z
    .string()
    .length(6, 'Enter the 6-digit code')
    .regex(/^\d{6}$/, 'Code must be 6 digits'),
});
export type OtpValues = z.infer<typeof otpSchema>;

// Password rules ported verbatim from the source SignUp page.
export const passwordSchema = z
  .string()
  .min(1, 'Password is required')
  .regex(/[A-Z]/, 'Uppercase letter missing')
  .regex(/[a-z]/, 'Lowercase letter missing')
  .regex(/[0-9]/, 'Number missing')
  .regex(/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/, 'Symbol missing')
  .min(6, 'Minimum 6 characters');

export const signupStep1Schema = z
  .object({
    name: z.string().min(1, 'Name is required'),
    email: emailField,
    mobile: z
      .string()
      .min(1, 'Mobile is required')
      .regex(/^\d{10}$/, 'Must be 10 digits'),
    password: passwordSchema,
    confirmPassword: z.string().min(1, 'Please confirm your password'),
  })
  .refine((d) => d.password === d.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Passwords do not match',
  });
export type SignupStep1Values = z.infer<typeof signupStep1Schema>;

export const signupStep2Schema = z.object({
  houseStreet: z.string().min(1, 'Required'),
  city: z.string().min(1, 'Required'),
  state: z.string().min(1, 'Required'),
  country: z.string().min(1, 'Required'),
  zip: z.string().min(1, 'Required'),
});
export type SignupStep2Values = z.infer<typeof signupStep2Schema>;
