// Auth domain types. Shared by the API module, the zustand store, and pages.

export interface AuthData {
  token: string | null;
  transactionTrackingId: string | null;
}

export interface UserProfile {
  name: string;
  email: string;
}

/**
 * Payload sent to the register endpoint. Field names mirror the source
 * backend contract so this drops onto the real API unchanged.
 */
export interface RegisterPayload {
  fullName: string;
  email: string;
  mobile: string;
  password: string;
  houseNoAndStreet: string;
  cityOrDistrict: string;
  state: string;
  country: string;
  zipCode: string;
  subscriptionFor: string;
  subscriptionCost: string;
  amount: number;
  subscriptionType: string;
  paymentMethod: string;
  transactionId: string;
}

/** Base shape every api function resolves to. */
export interface ApiResult {
  ok: boolean;
  message?: string;
}

export interface SendOtpResult extends ApiResult {}

export interface VerifyOtpResult extends ApiResult {
  token?: string;
}

export interface RegisterResult extends ApiResult {}
