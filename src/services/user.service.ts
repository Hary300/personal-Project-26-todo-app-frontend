import type { RegisterFormData } from '../schemas/auth.schema';
import { api } from './api';

async function sendDataRegister(payload: RegisterFormData) {
  const response = await api.post('/register', payload);
  return response.data;
}

export { sendDataRegister };
