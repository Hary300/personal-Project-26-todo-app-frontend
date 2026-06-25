import type z from 'zod';
import type { todoSchema } from '../schemas/todo.schema';

export type TodoData = z.infer<typeof todoSchema>;

export type PriorityLevel = 'low' | 'medium' | 'high';
