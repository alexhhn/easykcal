// export type Todo = {
//   id: string;
//   title: string;
//   done: boolean;
// };

export type CompleteActivity = {
  userId: string;
  date: string;
};

export type TaskCategory = "living" | "bath" | "entry" | "office" | "other";

export type Task = {
  id: string;
  title: string;
  description?: string;
  category: TaskCategory;
  completed: boolean;
  repeatable: boolean;
  completeHistory: CompleteActivity[];
};
