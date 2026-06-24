import MainLayout from '@/components/layouts/MainLayout';
import DarkModeButton from '@/components/ui/DarkModeButton';

export default function Home() {
  return (
    <MainLayout>
      <div className='flex justify-between w-full max-w-150 items-center'>
        <div className='flex flex-col gap-xxs lg:gap-md'>
          <h1 className='font-bold text-xl lg:text-display-sm'>
            What’s on Your Plan Today?
          </h1>
          <p className='text-neutral-600 text-sm lg:text-md'>
            Your productivity starts now.
          </p>
        </div>
        <DarkModeButton />
      </div>
    </MainLayout>
  );
}
