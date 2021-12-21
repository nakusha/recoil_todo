import { useRecoilValue } from "recoil";
import { toDoStatus } from "../atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";

const ToDoList = () => {
  const toDos = useRecoilValue(toDoStatus);

  return (
    <div>
      <h1>To dos</h1>
      <hr />
      <CreateToDo />
      <ul>
        {toDos.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul>
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
