import { Button } from "./ui/button";

export const Board = () => {
  const data = true;

  return (
    <div className=" flex h-screen w-full flex-col items-center justify-center gap-7 px-4 text-center lg:border-t lg:border-border">
      <p className="text-heading-l">
        This board is empty. Create a new column to get started.
      </p>
      <Button size="large">+ Add New Column</Button>
    </div>
  );
};
