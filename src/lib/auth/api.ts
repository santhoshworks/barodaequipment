// Auth API module.
//
// Behavior is currently MOCKED (ported 1:1 from the source app) but the shape
// is swap-ready: set NEXT_PUBLIC_API_BASE_URL and replace each function body
// with the commented `request(...)` call — call sites and return types stay the
// same.

import type {
  RegisterPayload,
  RegisterResult,
  SendOtpResult,
  UserProfile,
  VerifyOtpResult,
} from './types';

export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL ?? '';

const delay = (ms = 800) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Thin fetch wrapper for when the real backend is wired. Unused by the mocks
 * today; kept here so swapping a function over is a one-line change.
 */
export async function request<T>(
  path: string,
  init?: RequestInit,
): Promise<T> {
  const res = await fetch(`${API_BASE_URL}${path}`, {
    headers: { 'Content-Type': 'application/json', ...(init?.headers ?? {}) },
    ...init,
  });
  if (!res.ok) {
    throw new Error(`Request failed: ${res.status}`);
  }
  return res.json() as Promise<T>;
}

export async function sendOtp(email: string): Promise<SendOtpResult> {
  await delay();
  // return request<SendOtpResult>('/auth/send-otp', {
  //   method: 'POST', body: JSON.stringify({ email }),
  // });
  console.log(`[Mock] OTP sent to ${email}`);
  return { ok: true, message: 'OTP sent successfully' };
}

export async function verifyOtp(
  email: string,
  otp: string,
): Promise<VerifyOtpResult> {
  await delay();
  // return request<VerifyOtpResult>('/auth/verify-otp', {
  //   method: 'POST', body: JSON.stringify({ email, otp }),
  // });
  if (otp === '123456' || otp.length === 6) {
    return { ok: true, token: `mock-jwt-token-${email}-${otp}` };
  }
  return { ok: false, message: 'Invalid OTP' };
}

export async function register(
  userData: RegisterPayload,
): Promise<RegisterResult> {
  await delay();
  // return request<RegisterResult>('/auth/register', {
  //   method: 'POST', body: JSON.stringify(userData),
  // });
  console.log('[Mock] Registering user:', userData);
  if (userData.email === 'existing@example.com') {
    return { ok: false, message: 'Email already exists' };
  }
  return { ok: true, message: 'Registration successful' };
}

export async function fetchUserProfile(token: string): Promise<UserProfile> {
  await delay(300);
  // return request<UserProfile>('/user/profile', {
  //   headers: { Authorization: `Bearer ${token}` },
  // });
  console.log('[Mock] Fetching profile with token:', token);
  return { name: 'Demo User', email: 'user@example.com' };
}
