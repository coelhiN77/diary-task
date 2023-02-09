export interface ITask {
  id: string;
  title: string;
  description: string;
  isFav: boolean;
}

export enum PivotKeysEnum {
  Tasks = "List",
  TaskForm = "TaskForm",
}