import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import { Toaster } from 'sonner';
import ProtectedRoute from '../routes/ProtectedRoute';
import useDark from '@/contexts/theme/useDark';
import { useEffect } from 'react';

function App() {
  const { isDark } = useDark();
  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);
  return (
    <div>
      <Toaster position='top-center' />
      <Routes>
        <Route
          path='/'
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
