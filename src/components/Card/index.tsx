import { cn } from "@/utils";
import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";
import { Button } from "../Button";
import { Text } from "../Text";
const cardStyles = cva(
  [
    "items-center",
    "backdrop-blur-sm",
    "w-full",
    "h-full",
    "rounded-lg",
    "shadow-lg",
    "p-6",
  ],
  {
    variants: {
      variant: {
        outline: "border-2",
        darkSolid: "bg-zinc-900 opacity-70",
        lightSolid: "",
      },
      colorscheme: {
        primary: "text-white",
        secondary: "text-neutral-900",
      },
      textArg: {
        light: "light",
        dark: "dark",
      },
    },
    compoundVariants: [
      {
        variant: "outline",
        colorscheme: "primary",
        className: "backdrop-filter backdrop-blur-sm border-2",
      },
      {
        variant: "darkSolid",
        colorscheme: "primary",
        className: "border-slate-200 backdrop-filter backdrop-blur-sm",
      },
      {
        variant: "lightSolid",
        colorscheme: "secondary",
        className:
          "backdrop-filter backdrop-blur-sm bg-opacity-60 bg-slate-200",
      },
    ],
  }
);

type CardProps = ComponentProps<"div"> & VariantProps<typeof cardStyles>;

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ variant, colorscheme, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(cardStyles({ variant, colorscheme, className }))}
        {...props}
      >
        <Text
          as="h1"
          emphasis={"low"}
          size={"sm"}
          align={"center"}
          color={props.textArg}
          className="mb-8"
        >
          A general purpose component.
        </Text>
        <Button variant={"outline"} children={"Action Text"} />
      </div>
    );
  }
);
