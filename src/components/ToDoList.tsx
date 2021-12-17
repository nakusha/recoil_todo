import { useForm } from "react-hook-form";
import {
  atom,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";

const toDoStatus = atom<IToDo[]>({ key: "toDo", default: [] });
interface IForm {
  toDo: string;
}

interface IToDo {
  text: string;
  id: number;
  category: "TO_DO" | "DOING" | "DONE";
}

const ToDoList = () => {
  const [toDos, setToDos] = useRecoilState(toDoStatus);

  const { register, handleSubmit, setValue } = useForm<IForm>();

  const onValid = ({ toDo }: IForm) => {
    console.log("Add Data", toDo);
    setToDos((oldToDos) => [
      { text: toDo, id: Date.now(), category: "TO_DO" },
      ...oldToDos,
    ]);
    setValue("toDo", "");
  };

  return (
    <div>
      <h1>To dos</h1>
      <form onSubmit={handleSubmit(onValid)}>
        <input
          {...register("toDo", {
            required: "Need Todo list",
          })}
          placeholder="Write a to do"
        />
        <button>Add</button>
      </form>
      <ul>
        {toDos.map((toDo) => (
          <li>{toDo.text}</li>
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
