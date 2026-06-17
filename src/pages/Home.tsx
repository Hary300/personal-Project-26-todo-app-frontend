import Button from '@/components/shared/Button';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  function handleLogoutClick() {
    localStorage.removeItem('token');
    navigate('/Login');
  }
  return (
    <div>
      <h1>HOME</h1>
      <Button type='button' title='Logout' onClick={handleLogoutClick} />
    </div>
  );
}
