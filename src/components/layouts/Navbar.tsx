import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import Button from '@/components/ui/AppButton';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ChevronDown, LogOutIcon } from 'lucide-react';

export default function Navbar() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [username] = useState(() => {
    const saved = localStorage.getItem('data');
    if (!saved) return null;
    const data = JSON.parse(saved);
    return data.username;
  });
  const [open, setOpen] = useState(false);

  async function handleLogoutClick() {
    localStorage.removeItem('token');
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsLoading(false);
    toast.success('Logout successfully');
    navigate('/login');
  }

  return (
    <div className='h-15 border-b flex justify-between px-xl lg:px-30 items-center'>
      <p className='font-bold font-cold text-display-xs lg:text-display-sm'>
        ToDo
      </p>
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger asChild>
          <div>
            <Button
              variant='logoutButton'
              type='button'
              className='flex text-sm lg:text-md'
            >
              {username}
              <ChevronDown
                className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
              />
            </Button>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem
            variant='destructive'
            onSelect={(e) => e.preventDefault()}
          >
            <LogOutIcon />
            <Button
              variant='logoutButton'
              type='button'
              onClick={handleLogoutClick}
              disabled={isLoading}
            >{`${isLoading ? 'Loading...' : 'Logout'}`}</Button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
