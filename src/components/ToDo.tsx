import { useSetRecoilState } from "recoil";
import { Categories, IToDo, toDoStatus } from "../atoms";

const ToDo = ({ text, category, id }: IToDo) => {
  const onClick = (newCategory: Categories) => {
    setToDos((oldToDos) => {
      const index = oldToDos.findIndex((item) => item.id === id);
      const newToDo = { text, id, category: newCategory };

      return [
        ...oldToDos.slice(0, index),
        newToDo,
        ...oldToDos.slice(index + 1),
      ];
    });
  };
  const setToDos = useSetRecoilState(toDoStatus);
  // const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
  //   const {
  //     currentTarget: { name },
  //   } = event;
  //   setToDos((oldToDos) => {
  //     const index = oldToDos.findIndex((item) => item.id === id);
  //     const newToDo = { text, id, category: name as any };

  //     return [
  //       ...oldToDos.slice(0, index),
  //       newToDo,
  //       ...oldToDos.slice(index + 1),
  //     ];
  //   });
  // };
  return (
    <li>
      <span>{text}</span>
      {category !== Categories.DOING && (
        <button onClick={() => onClick(Categories.DOING)}>Doing</button>
        // <button name="DOING" onClick={onClick}>
        //   Doing
        // </button>
      )}
      {category !== Categories.TO_DO && (
        <button onClick={() => onClick(Categories.TO_DO)}>To Do</button>
        // <button name="TO_DO" onClick={onClick}>
        //   To Do
        // </button>
      )}
      {category !== Categories.DONE && (
        <button onClick={() => onClick(Categories.DONE)}>Done</button>
        // <button name="DONE" onClick={onClick}>
        //   Done
        // </button>
      )}
    </li>
  );
};

export default ToDo;
