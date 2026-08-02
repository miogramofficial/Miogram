export interface RegisterUserInput {
  username: string;
  email: string;
  password: string;
  fullName: string;
}

export interface LoginUserInput {
  email: string;
  password: string;
}