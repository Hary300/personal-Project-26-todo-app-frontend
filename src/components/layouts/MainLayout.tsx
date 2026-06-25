import type { ReactNode } from 'react';
import Navbar from './Navbar';

type MainLayoutProps = {
  children: ReactNode;
};
export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className='max-w-360 m-auto'>
      <Navbar />
      <div className='flex flex-col justify-center items-center pt-xl lg:pt-5xl px-xl'>
        {children}
      </div>
    </div>
  );
}
