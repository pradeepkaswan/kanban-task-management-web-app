import { cn } from "../../helpers/cn";

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const Textarea = ({ className, ...props }: TextareaProps) => {
  return (
    <textarea
      className={cn(
        "flex w-full resize-none rounded border border-grey-medium-opacity-25 bg-white px-4 py-2 text-body-l focus-visible:outline-none disabled:cursor-not-allowed dark:bg-grey-dark dark:text-white ",
        className,
      )}
      {...props}
    />
  );
};
