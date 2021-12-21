import { useForm } from "react-hook-form";
import { useRecoilState, useSetRecoilState } from "recoil";
import { IToDo, toDoStatus } from "../atoms";

interface IForm {
  toDo: string;
}

const CreateToDo = () => {
  const setToDos = useSetRecoilState(toDoStatus);
  const { register, handleSubmit, setValue } = useForm<IForm>();

  const handleValid = ({ toDo }: IForm) => {
    setToDos((oldToDos: IToDo[]) => [
      { text: toDo, id: Date.now(), category: "TO_DO" },
      ...oldToDos,
    ]);
    setValue("toDo", "");
  };

  return (
    <form onSubmit={handleSubmit(handleValid)}>
      <input
        {...register("toDo", {
          required: "Need Todo list",
        })}
        placeholder="Write a to do"
      />
      <button>Add</button>
    </form>
  );
};

export default CreateToDo;
