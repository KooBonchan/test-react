import Todo from './Todo';
export interface TodoContextType {
  items: Todo[];
  handleCommit: (todo: Todo) => void;
  handleDelete: (todo: Todo) => void;
  handleDoneToggle: (todo: Todo) => void;
}