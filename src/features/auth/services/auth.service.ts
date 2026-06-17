import type {
  LoginFormData,
  LoginResponse,
  RegisterFormData,
  RegisterResponse,
} from '../types/types';
import { api } from './auth.api';

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
