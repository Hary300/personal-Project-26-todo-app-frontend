import type { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

type ProtectedRoute = {
  children: ReactNode;
};

export default function ProtectedRoute({ children }: ProtectedRoute) {
  const token = localStorage.getItem('token');

  if (!token) {
    return <Navigate to='/login' replace />;
  }

  return children;
}
