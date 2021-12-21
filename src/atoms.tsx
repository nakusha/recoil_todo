import { atom, selector } from "recoil";

export enum Categories {
  "TO_DO",
  "DOING",
  "DONE",
}

export interface IToDo {
  text: string;
  id: number;
  category: Categories;
}

export const categoryState = atom<Categories>({
  key: "category",
  default: Categories.TO_DO,
});

export const toDoStatus = atom<IToDo[]>({ key: "toDo", default: [] });

export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoStatus);
    const cateogry = get(categoryState);

    return toDos.filter((todo) => todo.category === cateogry);
  },
});
