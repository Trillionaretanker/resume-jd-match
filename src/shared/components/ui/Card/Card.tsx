
import { cva, type VariantProps } from "class-variance-authority";
import clsx from "clsx";
import type { HTMLAttributes, ReactNode } from "react";

const cardVariants = cva(
  "rounded-3xl transition-all duration-200",
  {
    variants: {
      variant: {
        default:
          "border border-slate-200 bg-white shadow-sm",
        elevated:
          "bg-white shadow-xl",
        outlined:
          "border-2 border-slate-200 bg-white",
      },
      padding: {
        none: "p-0",
        sm: "p-4",
        md: "p-6",
        lg: "p-10",
      },
    },
    defaultVariants: {
      variant: "default",
      padding: "lg",
    },
  }
);

interface CardProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  children: ReactNode;
}

export default function Card({
  children,
  className,
  variant,
  padding,
  ...props
}: CardProps) {
  return (
    <div
      className={clsx(cardVariants({ variant, padding }), className)}
      {...props}
    >
      {children}
    </div>
  );
}