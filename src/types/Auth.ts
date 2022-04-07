export interface AuthState {
  token: AuthForm | null,
  loading: boolean,
  error: string | null,
}

export interface AuthForm {
  username: string,
  password: string,
}

export interface Token {
  token_type: string,
  access_token: string,
  expires_in: number,
  refresh_token: string,
  user_id: string,
}
