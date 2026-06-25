import type {
  loginSchema,
  registerSchema,
} from '@/features/auth/schemas/auth.schema';
import type z from 'zod';

// register
export type RegisterFormData = z.infer<typeof registerSchema>;

export type RegisterResponse = {
  data: RegisterFormData;
  success: boolean;
  message: string;
};

// Login
export type LoginFormData = z.infer<typeof loginSchema>;

export type LoginResponseData = {
  email: string;
  id: string;
  token: string;
  username: string;
};

export type LoginResponse = {
  data: LoginResponseData;
  success: boolean;
  message: string;
};
