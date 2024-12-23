import Todo from './Todo';
export interface TodoContextType {
  items: Todo[];
  handleCommit: (todo: Todo) => void;
  handleDelete: (id: number) => void;
  handleDoneToggle: (id: number) => void;
}