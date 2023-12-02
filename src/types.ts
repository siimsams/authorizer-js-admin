export interface GrapQlResponseType {
  data: any | undefined
  errors: Error[]
}
export interface ApiResponse<T> {
  errors: Error[]
  data: T | undefined
}
export interface ConfigType {
  authorizerURL: string
  redirectURL: string
  clientID: string
  extraHeaders?: Record<string, string>
  adminSecret: string
  debug?: boolean
}

export interface User {
  id: string
  email: string
  preferred_username: string
  email_verified: boolean
  signup_methods: string
  given_name?: string | null
  family_name?: string | null
  middle_name?: string | null
  nickname?: string | null
  picture?: string | null
  gender?: string | null
  birthdate?: string | null
  phone_number?: string | null
  phone_number_verified?: boolean | null
  roles?: string[]
  created_at: number
  updated_at: number
  is_multi_factor_auth_enabled?: boolean
  app_data?: Record<string, any>
}

export interface UpdateUserInput {
  id: string;
  email?: string;
  email_verified?: boolean;
  given_name?: string;
  family_name?: string;
  middle_name?: string;
  nickname?: string;
  gender?: string;
  birthdate?: string;
  phone_number?: string;
  picture?: string;
  roles?: string[];
  is_multi_factor_auth_enabled?: boolean;
  app_data?: Record<string, any>;
}

export interface InviteMemberInput {
  emails: string[];
  redirect_uri?: string;
}

type JWTKeyType = 'HS256' | 'HS384' | 'HS512' | 'RS256' | 'RS384' | 'RS512' | 'ES256' | 'ES384' | 'ES512';


export interface GenerateJWTKeysInput {
  type: JWTKeyType
}

export interface GenerateJWTKeysResponse {
  secret?: string;
  public_key?: string;
  private_key?: string;
}

export interface TestEndpointInput {
  endpoint: string;
  event_name: string;
  event_description?: string;
  headers?: Record<string, any>;
}

export interface TestEndpointResponse {
  http_status: number;
  response: string;
}

export interface AddWebhookInput {
  event_name: string;
  event_description?: string;
  endpoint: string;
  enabled: boolean;
  headers?: Record<string, any>;
}

export interface UpdateWebhookInput {
  id: string;
  event_name?: string;
  event_description?: string;
  endpoint?: string;
  enabled?: boolean;
  headers?: Record<string, any>;
}

export interface AddEmailTemplateInput {
  event_name: string;
  subject: string;
  template: string;
  design?: string;
}

export interface UpdateEmailTemplateInput {
  id: string;
  event_name?: string;
  template?: string;
  subject?: string;
  design?: string;
}

export interface AuthToken {
  message?: string
  access_token: string
  expires_in: number
  id_token: string
  refresh_token?: string
  user?: User
  should_show_email_otp_screen?: boolean
  should_show_mobile_otp_screen?: boolean
}

export interface GenericResponse {
  message: string
}

export type Headers = Record<string, string>

export interface LoginInput {
  email?: string
  phone_number?: string
  password: string
  roles?: string[]
  scope?: string[]
  state?: string
}

export interface SignupInput {
  email?: string
  password: string
  confirm_password: string
  given_name?: string
  family_name?: string
  middle_name?: string
  nickname?: string
  picture?: string
  gender?: string
  birthdate?: string
  phone_number?: string
  roles?: string[]
  scope?: string[]
  redirect_uri?: string
  is_multi_factor_auth_enabled?: boolean
  state?: string
  app_data?: Record<string, any>
}

export interface MagicLinkLoginInput {
  email: string
  roles?: string[]
  scopes?: string[]
  state?: string
  redirect_uri?: string
}

export interface VerifyEmailInput {
  token: string
  state?: string
}

export interface VerifyOtpInput {
  email?: string
  phone_number?: string
  otp: string
  state?: string
}

export interface ResendOtpInput {
  email?: string
  phone_number?: string
}

export interface GraphqlQueryInput {
  query: string
  variables?: Record<string, any>
  headers?: Headers
}

export interface MetaData {
  version: string
  client_id: string
  is_google_login_enabled: boolean
  is_facebook_login_enabled: boolean
  is_github_login_enabled: boolean
  is_linkedin_login_enabled: boolean
  is_apple_login_enabled: boolean
  is_twitter_login_enabled: boolean
  is_microsoft_login_enabled: boolean
  is_email_verification_enabled: boolean
  is_basic_authentication_enabled: boolean
  is_magic_link_login_enabled: boolean
  is_sign_up_enabled: boolean
  is_strong_password_enabled: boolean
}

export interface UpdateProfileInput {
  old_password?: string
  new_password?: string
  confirm_new_password?: string
  email?: string
  given_name?: string
  family_name?: string
  middle_name?: string
  nickname?: string
  gender?: string
  birthdate?: string
  phone_number?: string
  picture?: string
  is_multi_factor_auth_enabled?: boolean
  app_data?: Record<string, any>
}

export interface ForgotPasswordInput {
  email: string
  state?: string
  redirect_uri?: string
}

export interface ResetPasswordInput {
  token: string
  password: string
  confirm_password: string
}

export interface SessionQueryInput {
  roles?: string[]
}

export interface IsValidJWTQueryInput {
  jwt: string
  roles?: string[]
}

export interface ValidJWTResponse {
  valid: string
  message: string
}

export enum OAuthProviders {
  Apple = 'apple',
  Github = 'github',
  Google = 'google',
  Facebook = 'facebook',
  LinkedIn = 'linkedin',
}

export enum ResponseTypes {
  Code = 'code',
  Token = 'token',
}

export interface AuthorizeInput {
  response_type: ResponseTypes
  use_refresh_token?: boolean
  response_mode?: string
}

export interface AuthorizeResponse {
  state: string
  code?: string
  error?: string
  error_description?: string
}

export interface RevokeTokenInput {
  refresh_token: string
}

export interface GetTokenInput {
  code?: string
  grant_type?: string
  refresh_token?: string
}

export interface GetTokenResponse {
  access_token: string
  expires_in: number
  id_token: string
  refresh_token?: string
}

export interface ValidateJWTTokenInput {
  token_type: 'access_token' | 'id_token' | 'refresh_token'
  token: string
  roles?: string[]
}

export interface ValidateJWTTokenResponse {
  is_valid: boolean
  claims: Record<string, any>
}

export interface ValidateSessionInput {
  cookie?: string
  roles?: string[]
}

export interface ValidateSessionResponse {
  is_valid: boolean
  user: User
}

export interface GetUserRequest {
  id?: string
  email?: string
}

export interface PaginationInput {
  page?: number
  limit?: number
}

export interface WebhookLogInput {
  pagination?: PaginationInput, 
  webhook_id?: string
}

export interface VerificationResponse {
  id: string
  token: string
  email: string
  expires: number
  identifier: string 
}

export interface ServerConfigResponse {
  ENV?: 'production' | 'development'
  ADMIN_SECRET?: string
  DATABASE_TYPE?: 'postgres' | 'mysql' | 'planetscale' | 'sqlite' | 'sqlserver' | 'mongodb' | 'arangodb' | 'yugabyte' | 'mariadb' | 'cassandradb' | 'scylladb' | 'couchbase' | 'dynamodb'
  DATABASE_URL?: string
  DATABASE_NAME?: string
  DATABASE_PORT?: string
  DATABASE_HOST?: string
  DATABASE_USERNAME?: string
  DATABASE_PASSWORD?: string
  DATABASE_CERT?: string
  DATABASE_CERT_KEY?: string
  DATABASE_CA_CERT?: string
  PORT?: string
  AUTHORIZER_URL?: string
  REDIS_URL?: string
  COOKIE_NAME: string
  SMTP_HOST?: string
  SMTP_PORT?: string
  SMTP_USERNAME?: string
  SMTP_PASSWORD?: string
  SENDER_EMAIL?: string
  SENDER_NAME?: string
  RESET_PASSWORD_URL?: string
  DISABLE_BASIC_AUTHENTICATION?: boolean
  DISABLE_EMAIL_VERIFICATION?: boolean
  DISABLE_MAGIC_LINK_LOGIN?: boolean
  DISABLE_LOGIN_PAGE?: boolean
  DISABLE_SIGN_UP?: boolean
  DISABLE_PLAYGROUND?: boolean
  ROLES?: string
  DEFAULT_ROLES?: string
  PROTECTED_ROLES?: string
  JWT_ROLE_CLAIM?: string
  JWT_TYPE?: string
  JWT_SECRET?: string
  JWT_PRIVATE_KEY?: string
  JWT_PUBLIC_KEY?: string
  ORGANIZATION_NAME?: string
  ORGANIZATION_LOGO?: string
  CUSTOM_ACCESS_TOKEN_SCRIPT?: string
  ACCESS_TOKEN_EXPIRY_TIME?: string
  AWS_REGION?: string
  AWS_ACCESS_KEY_ID?: string
  AWS_SECRET_ACCESS_KEY?: string
  COUCHBASE_BUCKET?: string
  COUCHBASE_BUCKET_RAM_QUOTA?: string
  COUCHBASE_SCOPE?: string
  GOOGLE_CLIENT_ID?: string
  GOOGLE_CLIENT_SECRET?: string
  GITHUB_CLIENT_ID?: string
  GITHUB_CLIENT_SECRET?: string
  FACEBOOK_CLIENT_ID?: string
  FACEBOOK_CLIENT_SECRET?: string
  LINKEDIN_CLIENT_ID?: string
  LINKEDIN_CLIENT_SECRET?: string
  APPLE_CLIENT_ID?: string
  APPLE_CLIENT_SECRET?: string
  TWITTER_CLIENT_ID?: string
  TWITTER_CLIENT_SECRET?: string
  MICROSOFT_CLIENT_ID?: string
  MICROSOFT_CLIENT_SECRET?: string
  MICROSOFT_ACTIVE_DIRECTORY_TENANT_ID?: string
}

export interface Env {
  ACCESS_TOKEN_EXPIRY_TIME?: string;
  ADMIN_SECRET?: string;
  DATABASE_NAME?: string;
  DATABASE_URL?: string;
  DATABASE_TYPE?: string;
  DATABASE_USERNAME?: string;
  DATABASE_PASSWORD?: string;
  DATABASE_HOST?: string;
  DATABASE_PORT?: string;
  CLIENT_ID: string;
  CLIENT_SECRET: string;
  CUSTOM_ACCESS_TOKEN_SCRIPT?: string;
  SMTP_HOST?: string;
  SMTP_PORT?: string;
  SMTP_USERNAME?: string;
  SMTP_PASSWORD?: string;
  SMTP_LOCAL_NAME?: string;
  SENDER_EMAIL?: string;
  SENDER_NAME?: string;
  JWT_TYPE?: string;
  JWT_SECRET?: string;
  JWT_PRIVATE_KEY?: string;
  JWT_PUBLIC_KEY?: string;
  ALLOWED_ORIGINS: string[];
  APP_URL?: string;
  REDIS_URL?: string;
  RESET_PASSWORD_URL?: string;
  DISABLE_EMAIL_VERIFICATION: boolean;
  DISABLE_BASIC_AUTHENTICATION: boolean;
  DISABLE_MAGIC_LINK_LOGIN: boolean;
  DISABLE_LOGIN_PAGE: boolean;
  DISABLE_SIGN_UP: boolean;
  DISABLE_REDIS_FOR_ENV: boolean;
  DISABLE_STRONG_PASSWORD: boolean;
  DISABLE_MULTI_FACTOR_AUTHENTICATION: boolean;
  ENFORCE_MULTI_FACTOR_AUTHENTICATION: boolean;
  ROLES: string[];
  PROTECTED_ROLES: string[];
  DEFAULT_ROLES: string[];
  JWT_ROLE_CLAIM?: string;
  GOOGLE_CLIENT_ID?: string;
  GOOGLE_CLIENT_SECRET?: string;
  GITHUB_CLIENT_ID?: string;
  GITHUB_CLIENT_SECRET?: string;
  FACEBOOK_CLIENT_ID?: string;
  FACEBOOK_CLIENT_SECRET?: string;
  LINKEDIN_CLIENT_ID?: string;
  LINKEDIN_CLIENT_SECRET?: string;
  APPLE_CLIENT_ID?: string;
  APPLE_CLIENT_SECRET?: string;
  TWITTER_CLIENT_ID?: string;
  TWITTER_CLIENT_SECRET?: string;
  MICROSOFT_CLIENT_ID?: string;
  MICROSOFT_CLIENT_SECRET?: string;
  MICROSOFT_ACTIVE_DIRECTORY_TENANT_ID?: string;
  ORGANIZATION_NAME?: string;
  ORGANIZATION_LOGO?: string;
  APP_COOKIE_SECURE: boolean;
  ADMIN_COOKIE_SECURE: boolean;
  DEFAULT_AUTHORIZE_RESPONSE_TYPE?: string;
  DEFAULT_AUTHORIZE_RESPONSE_MODE?: string;
  DISABLE_PLAYGROUND: boolean;
  DISABLE_MAIL_OTP_LOGIN: boolean;
  DISABLE_TOTP_LOGIN: boolean;
}

export type ServerConfigInput = keyof ServerConfigResponse

export interface IdInput {
  id: string
}

export interface WebhookResponse {
  id: string
  event_name: string
  endpoint: string
  enabled: boolean
  headers: Record<string, string>
  created_at: string
  updated_at: string
}

export interface WebhookLogResponse {
  id: string
  http_status: string 
  request: string
  response: string
  webhook_id: string
  created_at: string
  updated_at: string
}

export interface PaginationResponse {
  offset: number
  total: number
  page: number
  limit: number
}

export interface EmailTemplateResponse {
  id: string
  event_name: string
  template: string
  design: string
  subject: string
  created_at: number
  updated_at: number
}
