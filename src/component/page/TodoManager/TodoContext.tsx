import { createContext } from "react";
import { TodoContextType } from "../../../model/TodoContextType";

export const TodoContext =
  createContext<TodoContextType | undefined>(undefined);
