# Auth Layer — barodaequip-next

**Date:** 2026-06-10
**Status:** Approved

## Goal

Port the auth layer from the source Vite/React app (`baroda-enterprise-frontend`)
into `barodaequip-next`, re-expressed in this app's stack (Next 16 App Router,
TypeScript, SCSS + Bootstrap classes, zustand, react-hook-form + zod).

Behavior is preserved; styling and state plumbing follow this repo's conventions.

## Decisions

- **Login flow:** OTP (email → send code → verify 6-digit → token), matching source.
- **Signup flow:** 2-step wizard (account info + live password rules → address),
  same `register` payload shape as source.
- **API:** Port the source's mock behavior into a typed, swappable module reading
  `NEXT_PUBLIC_API_BASE_URL`. Each function swaps to real `fetch` later with no
  call-site changes. OTP `123456` (or any 6 digits) passes; `existing@example.com`
  registration is rejected — same as source.
- **State:** zustand store with `persist` to `localStorage` (token key `token`,
  matching source). Exposes `isLoggedIn`, `user`, `token`, `setAuth`, `logout`.
- **Route guard:** Client-side (Approach A). `/admin` redirects unauthed users to
  `/login`. Middleware/cookie approach deferred until a real httpOnly backend lands.
- **Navbar:** shows Login when logged out, Logout when logged in.
- **Toasts:** add `react-hot-toast` (used by source), mount `<Toaster/>` in root layout.

## File layout

```
src/lib/auth/types.ts       AuthData, RegisterPayload, UserProfile, ApiResult<T>
src/lib/auth/schemas.ts     zod: loginEmail, otp, signupStep1, signupStep2
src/lib/auth/api.ts         sendOtp, verifyOtp, register, fetchUserProfile (mock, swappable)
src/store/authStore.ts      zustand + persist
src/components/auth/Field.tsx       RHF-aware labelled input w/ error + valid states
src/components/auth/OtpInput.tsx    6-box OTP entry, auto-advance, auto-submit
src/components/auth/AdminGuard.tsx  client guard used by admin layout
app/(auth)/login/page.tsx   rewrite → OTP flow
app/(auth)/signup/page.tsx  rewrite → 2-step wizard
app/admin/layout.tsx        wrap children in <AdminGuard>
src/components/layout/Navbar.tsx    Login/Logout link
app/layout.tsx              mount <Toaster/>
src/styles/_auth.scss       extend: OTP boxes, stepper, password rules, field states
.env.example / .env.local   NEXT_PUBLIC_API_BASE_URL
```

## Out of scope (YAGNI)

Real backend calls, password reset, refresh tokens, role-based permissions,
SSR/cookie sessions. All deferred until the real API is provided.

## Verification

`npm run build` (Next compile + typecheck) must pass. Manual smoke: login OTP
`123456` → lands on `/admin`; logout returns to public; visiting `/admin` while
logged out redirects to `/login`.
