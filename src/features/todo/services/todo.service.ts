import axios from 'axios';
import type { PriorityLevel, TodoData } from '../types';
import { api } from './todo.api';

// CREATE
export async function createNewTodo(payload: TodoData) {
  try {
    const result = await api.post('/todos', payload);
    return result.data;
  } catch (error) {
    if (axios.isAxiosError(error)) console.log(error.response?.data);
  }
}

// GET
export async function getTodayTodos() {
  try {
    const result = await api.get('/todos/today');
    return result.data;
  } catch (error) {
    if (axios.isAxiosError(error)) console.log(error.response?.data);
  }
}

export async function getUpcomingTodos() {
  try {
    const result = await api.get('/todos/upcoming');
    return result.data;
  } catch (error) {
    if (axios.isAxiosError(error)) console.log(error.response?.data);
  }
}

export async function getCompletedTodos() {
  try {
    const result = await api.get('/todos/completed');
    return result.data;
  } catch (error) {
    if (axios.isAxiosError(error)) console.log(error.response?.data);
  }
}

export async function getPriorityFilteredTodos(level: PriorityLevel) {
  try {
    const result = await api.get(`/todos/priority?level=${level}`);
    return result.data;
  } catch (error) {
    if (axios.isAxiosError(error)) console.log(error.response?.data);
  }
}

export async function searchTodo(keyword: string) {
  try {
    const result = await api.get(`/todos?keyword=${keyword}`);
    return result.data;
  } catch (error) {
    if (axios.isAxiosError(error)) console.log(error.response?.data);
  }
}

// UPDATE
export async function updateTodo(id: string) {
  try {
    const result = await api.patch(`/todos/${id}`);
    return result.data;
  } catch (error) {
    if (axios.isAxiosError(error)) console.log(error.response?.data);
  }
}

export async function toggleTodo(id: string) {
  try {
    const result = await api.patch(`/todos/${id}/toggle`);
    return result.data;
  } catch (error) {
    if (axios.isAxiosError(error)) console.log(error.response?.data);
  }
}

// DELETE
export async function deleteTodo(id: string) {
  try {
    const result = await api.delete(`/todos/${id}`);
    return result.data;
  } catch (error) {
    if (axios.isAxiosError(error)) console.log(error.response?.data);
  }
}
