'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/store/authStore';

/**
 * Client-side route guard for /admin (Approach A). Waits for the persisted
 * auth state to rehydrate, then redirects unauthenticated users to /login.
 */
export default function AdminGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const isLoggedIn = useAuthStore((s) => s.isLoggedIn);
  const hasHydrated = useAuthStore((s) => s.hasHydrated);

  useEffect(() => {
    if (hasHydrated && !isLoggedIn) {
      router.replace('/login');
    }
  }, [hasHydrated, isLoggedIn, router]);

  if (!hasHydrated || !isLoggedIn) {
    return (
      <div className="admin-guard-pending" role="status" aria-live="polite">
        Checking access…
      </div>
    );
  }

  return <>{children}</>;
}
