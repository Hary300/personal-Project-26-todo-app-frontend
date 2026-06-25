import MainLayout from '@/components/layouts/MainLayout';
import Button from '@/components/ui/AppButton';
import DarkModeButton from '@/components/ui/DarkModeButton';
import CreateNewTodo from '@/features/todo/components/CreateNewTodo';
import { Plus } from 'lucide-react';
import { useState } from 'react';

export default function Home() {
  const [showForm, setShowForm] = useState(false);
  return (
    <MainLayout>
      <div className='flex flex-col w-full max-w-150 items-center gap-xl lg:gap-2xl'>
        <div className='flex justify-between w-full items-center'>
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
        <div className='w-full lg:max-w-75'>
          <CreateNewTodo isOpen={showForm} onOpenChange={setShowForm} />
          <Button
            className='flex items-center justify-center'
            onClick={() => setShowForm((prev) => !prev)}
          >
            <Plus />
            Add Task
          </Button>
        </div>
      </div>
    </MainLayout>
  );
}
