export type TaskProps = {
  id: string;
  content: string;
  isCompleted: boolean;
  onDeleteTask: (id: string) => void;
  onUpdateTaskStatus: (id: string, isCompleted: boolean) => void;
};
