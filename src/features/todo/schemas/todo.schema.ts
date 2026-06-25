import z from 'zod';

export const todoSchema = z.object({
  task: z.string().trim().min(1, 'Task is required'),
  priority: z.enum(['low', 'medium', 'high']),
  date: z.coerce.date(),
  complete: z.boolean(),
});
