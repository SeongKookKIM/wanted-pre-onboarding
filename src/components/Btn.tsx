import { useDispatch, useSelector } from "react-redux";
import { handlerTodoList, handlerDeleteList, RootState } from "../store/Store";

interface BtnPropsType {
  btnName: string;
  setTodoText?: React.Dispatch<React.SetStateAction<string>>;
  todoText?: string;
  deleteNumber?: number;
}

function Btn({ btnName, todoText, setTodoText, deleteNumber }: BtnPropsType) {
  const reduxList = useSelector((state: RootState) => state.todoList);

  let dispatch = useDispatch();

  const hanlderBtnClick = () => {
    if (btnName === "Add") {
      dispatch(handlerTodoList(todoText));
      if (setTodoText !== undefined) {
        setTodoText("");
      }
    } else {
      let updatedList = reduxList.filter((_, index) => index !== deleteNumber);

      dispatch(handlerDeleteList(updatedList));
    }
  };

  return (
    <span
      className={btnName === "Delete" ? "delete-btn" : "add-btn"}
      onClick={hanlderBtnClick}
    >
      {btnName}
    </span>
  );
}

export default Btn;
