import Button from '@/components/Button';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

export default function Home() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  async function handleLogoutClick() {
    localStorage.removeItem('token');
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsLoading(false);
    toast.success('Logout successfully', { position: 'top-center' });
    navigate('/login');
  }
  return (
    <div>
      <h1>HOME</h1>
      <Button
        type='button'
        title={`${isLoading ? 'Loading...' : 'Logout'}`}
        onClick={handleLogoutClick}
        disabled={isLoading}
      />
    </div>
  );
}
