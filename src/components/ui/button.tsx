import { VariantProps, cva } from "class-variance-authority";

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
}

const buttonVariants = cva("rounded-full", {
  variants: {
    variant: {
      primary: "bg-purple text-white hover:bg-purple-hover",
      secondary:
        "bg-purple-opacity-10 dark:bg-white text-purple hover:bg-purple-hover dark:hover:bg-purple-opacity-25",
      destructive: "bg-red text-white hover:bg-red-hover",
    },
    size: {
      small: "h-8 lg:h-10 px-4 lg:text-body-l lg:font-bold",
      large: "h-12 px-5 text-heading-m",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "small",
  },
});

export const Button = ({
  className,
  children,
  variant,
  size,
  ...props
}: ButtonProps) => {
  return (
    <button className={buttonVariants({ className, variant, size })} {...props}>
      {children}
    </button>
  );
};
