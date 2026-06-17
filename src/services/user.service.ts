import type { LoginFormData, RegisterFormData } from '../schemas/auth.schema';
import { api } from './api';

type RegisterResponse = {
  data: RegisterFormData;
  success: boolean;
  message: string;
};

type LoginResponseData = {
  email: string;
  id: string;
  token: string;
  username: string;
};

type LoginResponse = {
  data: LoginResponseData;
  success: boolean;
  message: string;
};

async function sendDataRegister(
  payload: RegisterFormData
): Promise<RegisterResponse> {
  const response = await api.post('/register', payload);
  return response.data;
}

async function sendDataLogin(payload: LoginFormData): Promise<LoginResponse> {
  const response = await api.post('/login', payload);
  return response.data;
}

export { sendDataRegister, sendDataLogin };
