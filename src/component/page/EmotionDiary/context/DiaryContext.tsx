import { createContext } from "react";
import { Diary } from "../../../../model/Diary";

export const DiaryStateContext = createContext<readonly Readonly<Diary>[]>([]);
export const DiaryDispatchContext = createContext<{
    onCreate: (payload:Diary) => void;
    onUpdate: (payload:Diary) => void;
    onDelete: (id: number) => void;
  } | undefined>(undefined);