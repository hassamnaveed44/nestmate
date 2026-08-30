// src/components/ui/Button.tsx
import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

const buttonVariants = cva(
  "inline-flex min-h-[44px] items-center justify-center gap-2 rounded-button font-sans text-base transition-all duration-200 ease-out focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-charcoal text-warm-ivory hover:opacity-90",
        secondary:
          "border border-sand-border bg-transparent text-charcoal hover:bg-soft-sand/40",
        ghost: "bg-transparent text-charcoal hover:bg-soft-sand/40",
        danger: "bg-terracotta text-warm-ivory hover:opacity-90",
      },
      size: {
        default: "px-6 py-3",
        sm: "px-4 py-2 text-sm",
      },
    },
    defaultVariants: { variant: "primary", size: "default" },
  }
);

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  href?: string;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, href, children, ...props }, ref) => {
    const classes = cn(buttonVariants({ variant, size }), className);

    if (href) {
      return (
        <Link href={href} className={classes}>
          {children}
        </Link>
      );
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";