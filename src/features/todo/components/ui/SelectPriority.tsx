import {
  Controller,
  type Control,
  type FieldPath,
  type FieldValues,
} from 'react-hook-form';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

type SelectPriorityProps<T extends FieldValues> = {
  name: FieldPath<T>;
  control: Control<T>;
  onOpenChange?: (open: boolean) => void;
  // errorMessage?: string;
};

export default function SelectPriority<T extends FieldValues>({
  name,
  control,
  onOpenChange,
  // errorMessage,
}: SelectPriorityProps<T>) {
  return (
    <div className='flex flex-col gap-1 '>
      <div
        id={`${name}-field`}
        className='flex flex-col-reverse border rounded-md py-md px-lg'
      >
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <Select
              value={field.value}
              onValueChange={field.onChange}
              onOpenChange={onOpenChange}
            >
              <SelectTrigger className='cursor-pointer'>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value='low'>Low</SelectItem>
                  <SelectItem value='medium'>Medium</SelectItem>
                  <SelectItem value='high'>High</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          )}
        />

        <label
          htmlFor={name}
          className='mb-1 leading-4 text-xs text-neutral-600'
        >
          Select Priority
        </label>
      </div>
      {/* {errorMessage && (
        <p
          className={`text-sm text-accent-red opacity-0 ${errorMessage && 'opacity-100'}`}
        >
          {errorMessage}
        </p>
      )} */}
    </div>
  );
}
