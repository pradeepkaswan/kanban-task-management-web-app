import { cn } from "../../helpers/cn";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = ({ className, type, ...props }: InputProps) => {
  return (
    <input
      type={type}
      className={cn(
        "border-border flex w-full rounded border bg-white px-4 py-2 text-body-l focus-visible:outline-none disabled:cursor-not-allowed  dark:bg-grey-dark dark:text-white ",
        className,
      )}
      {...props}
    />
  );
};
