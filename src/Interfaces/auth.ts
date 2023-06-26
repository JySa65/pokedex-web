export interface IAuthJwt {
  id: number;
  email: string;
  exp: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  password?: string;
  phone: string;
  isActive: boolean;
}

export interface ILogin {
  email: string;
  password: string;
}
