export type Subtask = {
  title: string;
  isCompleted: boolean;
};

export type Task = {
  title: string;
  description: string;
  status: Column["name"];
  subTasks: Subtask[];
};

export type Column = {
  name: string;
  tasks: Task[];
};

export type Board = {
  name: string;
  columns: Column[];
};
