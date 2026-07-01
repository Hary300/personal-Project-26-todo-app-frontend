import Button from '@/components/ui/AppButton';
import { Dialog, DialogContent, DialogFooter } from '@/components/ui/dialog';
import { useState, type Dispatch, type SetStateAction } from 'react';
import { useForm } from 'react-hook-form';
import TextArea from './ui/TextArea';
import type { TodoData } from '../types';
import { zodResolver } from '@hookform/resolvers/zod';
import { todoSchema } from './../schemas/todo.schema';
import SelectPriority from './ui/SelectPriority';
import { XIcon } from 'lucide-react';
import { Dialog as DialogPrimitive } from 'radix-ui';
import InputDate from './ui/InputDate';
import { createNewTodo } from '../services/todo.service';

type CreateNewTodoProps = {
  isOpen: boolean;
  onOpenChange: Dispatch<SetStateAction<boolean>>;
};

export default function CreateNewTodo({
  isOpen,
  onOpenChange,
}: CreateNewTodoProps) {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors, isSubmitting },
  } = useForm<TodoData>({
    defaultValues: {
      task: '',
      priority: 'medium',
      date: new Date(),
      complete: false,
    },
    resolver: zodResolver(todoSchema),
  });

  const [isSelectOpen, setIsSelectOpen] = useState(false);

  const onSubmit = (data: TodoData) => {
    console.log('test');
    const payload = { ...data, date: data.date.toISOString() };
    onOpenChange(false);
    console.log(payload);
    createNewTodo(data);
    reset();
  };

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      reset();
    }

    onOpenChange(open);
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent
        onPointerDownOutside={(e) => {
          if (isSelectOpen) {
            e.preventDefault();
          }
        }}
      >
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='flex flex-col gap-xl lg:gap-3xl'
        >
          <div className='flex justify-between'>
            <h3 className='font-bold text-lg lg:text-display-xs'>Add Task</h3>
            <DialogPrimitive.Close data-slot='dialog-close' asChild>
              <XIcon className='cursor-pointer' />
            </DialogPrimitive.Close>
          </div>

          <TextArea
            name='task'
            register={register}
            errorMessage={errors.task?.message}
          />

          <SelectPriority
            name='priority'
            control={control}
            onOpenChange={setIsSelectOpen}
          />

          <InputDate name='date' control={control} />
          <DialogFooter>
            <Button type='submit' disabled={isSubmitting}>
              {isSubmitting ? 'Loading...' : 'Save'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
