import useDark from '@/contexts/theme/useDark';
import { Moon, Sun } from 'lucide-react';

export default function DarkModeButton() {
  const { isDark, setLightMode, setDarkMode } = useDark();
  return (
    <div className='w-18 lg:w-22 border rounded-2xl p-md flex gap-md items-center justify-center'>
      <button
        className={`rounded-md p-sm cursor-pointer size-6 lg:size-8 text-white ${!isDark ? 'bg-primary ' : ''}`}
        onClick={setLightMode}
      >
        <Sun className='size-full' />
      </button>
      <button
        className={`rounded-md p-sm cursor-pointer size-6 lg:size-8 ${isDark ? 'bg-primary ' : ''}`}
        onClick={setDarkMode}
      >
        <Moon className='size-full' />
      </button>
    </div>
  );
}
