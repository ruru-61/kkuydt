import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-highlight hover:scale-105 transition-all duration-300",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border-2 border-primary bg-background text-primary hover:bg-highlight hover:text-white hover:border-highlight transition-all duration-300",
        secondary: "bg-secondary text-secondary-foreground hover:bg-highlight hover:scale-105 transition-all duration-300",
        ghost: "hover:bg-highlight/10 hover:text-highlight transition-all duration-300",
        link: "text-primary underline-offset-4 hover:underline hover:text-highlight transition-all duration-300",
        hero: "bg-primary text-primary-foreground border-2 border-primary hover:bg-highlight hover:border-highlight hover:scale-110 shadow-lg font-bold transition-all duration-300",
        accent: "bg-accent text-accent-foreground hover:bg-highlight hover:scale-105 transition-all duration-300",
        highlight: "bg-highlight text-white hover:bg-highlight/90 hover:scale-105 transition-all duration-300",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-12 rounded-lg px-10 text-base",
        xl: "h-14 rounded-xl px-12 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
