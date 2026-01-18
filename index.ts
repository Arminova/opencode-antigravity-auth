export {
  AntigravityCLIOAuthPlugin,
  GoogleOAuthPlugin,
} from "./src/plugin";

export {
  authorizeAntigravity,
  exchangeAntigravity,
} from "./src/antigravity/oauth";

export type {
  AntigravityAuthorization,
  AntigravityTokenExchangeResult,
} from "./src/antigravity/oauth";

// ============================================
// Extended exports for standalone server usage
// ============================================

// Account storage
export {
  loadAccounts,
  saveAccounts,
  clearAccounts,
} from "./src/plugin/storage";

// Account manager
export {
  AccountManager,
  parseRateLimitReason,
  calculateBackoffMs,
} from "./src/plugin/accounts";

export type { ModelFamily } from "./src/plugin/accounts";

// Token refresh
export {
  refreshAccessToken,
  AntigravityTokenRefreshError,
} from "./src/plugin/token";

// Auth utilities
export {
  accessTokenExpired,
  parseRefreshParts,
  formatRefreshParts,
  calculateTokenExpiry,
} from "./src/plugin/auth";

// Storage types
export type {
  AccountStorageV3,
  AccountMetadataV3,
} from "./src/plugin/storage";

export { getStoragePath } from "./src/plugin/storage";

// Request transformation
export {
  prepareAntigravityRequest,
  transformAntigravityResponse,
  isGenerativeLanguageRequest,
} from "./src/plugin/request";

// Project context
export { ensureProjectContext } from "./src/plugin/project";

// Constants
export {
  ANTIGRAVITY_ENDPOINT_FALLBACKS,
  ANTIGRAVITY_PROVIDER_ID,
} from "./src/constants";

// OAuth listener for CLI
export { startOAuthListener } from "./src/plugin/server";

// Types
export type { ManagedAccount } from "./src/plugin/accounts";
