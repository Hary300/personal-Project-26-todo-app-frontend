import type { ReactNode } from 'react';
import Navbar from './Navbar';

type MainLayoutProps = {
  children: ReactNode;
};
export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className='max-w-360'>
      <Navbar />
      {children}
    </div>
  );
}
