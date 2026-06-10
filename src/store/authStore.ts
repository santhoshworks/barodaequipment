import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import type { UserProfile } from '@/lib/auth/types';

interface AuthState {
  token: string | null;
  transactionTrackingId: string | null;
  user: UserProfile | null;
  isLoggedIn: boolean;
  /** True once persisted state has rehydrated on the client. */
  hasHydrated: boolean;

  setAuth: (data: {
    token: string | null;
    transactionTrackingId?: string | null;
  }) => void;
  setUser: (user: UserProfile | null) => void;
  logout: () => void;
  setHasHydrated: (v: boolean) => void;
}

// SSR-safe storage: on the server there is no localStorage, so hand persist a
// no-op store. Real reads/writes happen only in the browser.
const noopStorage: Storage = {
  getItem: () => null,
  setItem: () => {},
  removeItem: () => {},
  clear: () => {},
  key: () => null,
  length: 0,
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      token: null,
      transactionTrackingId: null,
      user: null,
      isLoggedIn: false,
      hasHydrated: false,

      setAuth: ({ token, transactionTrackingId = null }) =>
        set({
          token,
          transactionTrackingId,
          isLoggedIn: !!token,
        }),

      setUser: (user) => set({ user }),

      logout: () =>
        set({
          token: null,
          transactionTrackingId: null,
          user: null,
          isLoggedIn: false,
        }),

      setHasHydrated: (v) => set({ hasHydrated: v }),
    }),
    {
      name: 'baroda-auth',
      storage: createJSONStorage(() =>
        typeof window !== 'undefined' ? window.localStorage : noopStorage,
      ),
      partialize: (s) => ({
        token: s.token,
        transactionTrackingId: s.transactionTrackingId,
        user: s.user,
        isLoggedIn: s.isLoggedIn,
      }),
      onRehydrateStorage: () => (state) => {
        state?.setHasHydrated(true);
      },
    },
  ),
);
