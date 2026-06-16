import { z } from 'zod';

export const registerSchema = z
  .object({
    username: z
      .string()
      .trim()
      .min(1, 'Username cannot be empty')
      .min(3, 'Min 3 characters'),
    email: z
      .string()
      .trim()
      .min(1, 'Email cannot be empty')
      .email('Email is not valid'),
    password: z
      .string()
      .min(1, 'Password cannot be empty')
      .min(8, 'Min 8 characters'),
    confirmPassword: z.string().min(1, 'Confirm password cannot be empty'),
  })
  .refine((data) => data.confirmPassword === data.password, {
    message: 'Password does not match',
    path: ['confirmPassword'],
  });

export type RegisterFormData = z.infer<typeof registerSchema>;
