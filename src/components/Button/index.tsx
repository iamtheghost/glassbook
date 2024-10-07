import { cn } from "@/utils";
import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";

const buttonStyles = cva(
  [
    "w-full",
    "rounded-md",
    "font-semibold",
    "focus:outline-none",
    "disabled:cursor-not-allowed",
    "rounded-full",
  ],
  {
    variants: {
      variant: {
        solid: "transition-colors duration-300",
        outline: "border-2 transition-colors duration-300",
        ghost: "transition-colors duration-300",
        disabled: "disabled",
      },
      size: {
        sm: "px-4 py-2 text-sm",
        md: "px-4 py-2 text-base",
        lg: "px-6 py-3 text-lg",
      },
      colorscheme: {
        primary: "text-white",
        secondary: "text-gray-300",
      },
    },
    compoundVariants: [
      {
        variant: "solid",
        colorscheme: "primary",
        className: "bg-gray-400 hover:bg-gray-600 opacity-70",
      },
      {
        variant: "outline",
        colorscheme: "primary",
        className:
          "text-gray-300 border-slate-200 bg-transparent hover:text-zinc-800 hover:bg-primary-100",
      },
      {
        variant: "ghost",
        colorscheme: "primary",
        className:
          "text-gray-300 bg-transparent hover:backdrop-filter hover:backdrop-blur-sm hover:bg-zinc-300 opacity-70 hover:text-blue-950",
      },
      {
        variant: "disabled",
        colorscheme: "primary",
        className: "text-neutral-500 bg-slate-600 bg-opacity-60 disabled",
      },
    ],
    defaultVariants: {
      variant: "solid",
      size: "md",
      colorscheme: "primary",
    },
  }
);

type ButtonProps = ComponentProps<"button"> & VariantProps<typeof buttonStyles>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, size, colorscheme, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonStyles({ variant, size, colorscheme, className }))}
        {...props}
      />
    );
  }
);
