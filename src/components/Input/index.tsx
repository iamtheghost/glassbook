import { cn } from "@/utils";
import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";

const inputStyles = cva([
  "w-full",
  "h-full",
  "border",
  "border-gray-100",
  "bg-gray-700",
  "bg-opacity-60",
  "p-2",
  "rounded-lg",
  "rounded-md",
  "transition-all",
  "duration-100",
  "outline-none",
  "focus:outline-gray-300",
  "focus:border-gray-300",
  "placeholder:text-white",
  "text-white",
  "placeholder:text-sm",
]);

type InputProps = ComponentProps<"input"> & VariantProps<typeof inputStyles>;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        type="text"
        autoComplete="off"
        className={cn(inputStyles({ className }))}
        {...props}
      />
    );
  }
);
