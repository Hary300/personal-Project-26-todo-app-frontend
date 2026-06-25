import {
  Controller,
  type Control,
  type FieldPath,
  type FieldValues,
} from 'react-hook-form';

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { Calendar1Icon } from 'lucide-react';
import { Calendar } from '@/components/ui/calendar';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';

type InputDateProps<T extends FieldValues> = {
  name: FieldPath<T>;
  control: Control<T>;
};

export default function InputDate<T extends FieldValues>({
  name,
  control,
}: InputDateProps<T>) {
  return (
    <div className='flex flex-col gap-1'>
      <div
        id={`${name}-field`}
        className='flex flex-col-reverse border rounded-md py-md px-lg'
      >
        <Controller
          name={name}
          control={control}
          render={({ field, fieldState }) => (
            <>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant='outline'
                    className={cn(
                      'w-full justify-between',
                      !field.value && 'text-muted-foreground',
                      fieldState.error && 'border-red-500'
                    )}
                  >
                    {field.value && format(field.value, 'EEEE, dd MMMM yyyy')}
                    <Calendar1Icon />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className='w-auto bg-white dark:bg-black'>
                  <Calendar
                    mode='single'
                    selected={field.value}
                    onSelect={field.onChange}
                    className='rounded-lg border'
                  />
                </PopoverContent>
              </Popover>

              <label
                htmlFor='date'
                className='leading-4 text-xs text-neutral-600'
              >
                Select date
              </label>
            </>
          )}
        />
      </div>
    </div>
  );
}
