import type { PriorityLevel, TodoData } from '../types';
import { api } from './todo.api';

// CREATE
export async function createNewTodo(payload: TodoData) {
  const result = await api.post('/todos', payload);
  return result.data;
}

// GET
export async function getTodayTodos() {
  const result = await api.get('/todos/today');
  return result.data;
}

export async function getUpcomingTodos() {
  const result = await api.get('/todos/upcoming');
  return result.data;
}

export async function getCompletedTodos() {
  const result = await api.get('/todos/completed');
  return result.data;
}

export async function getPriorityFilteredTodos(level: PriorityLevel) {
  const result = await api.get(`/todos/priority?level=${level}`);
  return result.data;
}

export async function searchTodo(keyword: string) {
  const result = await api.get(`/todos/search?keyword=${keyword}`);
  return result.data;
}

// UPDATE
export async function updateTodo(id: string) {
  const result = await api.patch(`/todos/${id}`);
  return result.data;
}

export async function toggleTodo(id: string) {
  const result = await api.patch(`/todos/${id}/toggle`);
  return result.data;
}

// DELETE
export async function deleteTodo(id: string) {
  const result = await api.delete(`/todos/${id}`);
  return result.data;
}
