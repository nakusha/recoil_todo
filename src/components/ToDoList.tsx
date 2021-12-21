import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { Categories, categoryState, toDoSelector } from "../atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";

const ToDoList = () => {
  const toDos = useRecoilValue(toDoSelector);
  const [category, setCategory] = useRecoilState(categoryState);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as any);
  };

  return (
    <div>
      <h1>To dos</h1>
      <hr />
      <select value={category} onInput={onInput}>
        <option value={Categories.TO_DO}>To Do</option>
        <option value={Categories.DOING}>Doing</option>
        <option value={Categories.DONE}>Done</option>
      </select>
      <CreateToDo />
      {toDos?.map((todo) => (
        <ToDo key={todo.id} {...todo} />
      ))}

      {/* <input
          {...register("email", {
            required: "Need email input",
            minLength: { value: 5, message: "Too Short" },
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@naver.com$/,
              message: "Only naver mail",
            },
          })}
          placeholder="Write a to do"
        />
        <span>{errors?.email?.message}</span>
        <input
          {...register("name", {
            required: "Need Name",
            minLength: { value: 5, message: "Too Short" },
          })}
          placeholder="Write a to do"
        />
        <input
          {...register("schedule", {
            required: "Need schedule",
            minLength: { value: 5, message: "Too Short" },
            // validate: (value) =>
            //   value.includes("nico") ? "no nicos allow" : true,
            validate: {
              noNico: (value) =>
                value.includes("nico") ? "no nicos allowed" : true,
              noNick: (value) =>
                value.includes("nick") ? "no nick allowed" : true,
            },
          })}
          placeholder="Write a to do"
        />
        <span>{errors?.schedule?.message}</span>
        <input
          {...register("password", {
            required: "Need schedule",
            minLength: { value: 5, message: "Too Short" },
          })}
          placeholder="Write a to do"
        />
        <span>{errors?.password?.message}</span>
        <input
          {...register("password1", {
            required: "Need schedule",
            minLength: { value: 5, message: "Too Short" },
          })}
          placeholder="Write a to do"
        />
        <span>{errors?.password1?.message}</span> */}
    </div>
  );
};

export default ToDoList;
