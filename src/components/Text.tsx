import { useState } from "react";
import Btn from "./Btn";

function Text() {
  const [todoText, setTodoText] = useState<string>("");

  return (
    <>
      <input
        type="text"
        name="content"
        autoComplete="off"
        className="todo-text"
        value={todoText}
        onChange={(e) => {
          setTodoText(e.target.value);
        }}
      />
      <Btn btnName={"Add"} setTodoText={setTodoText} todoText={todoText} />
    </>
  );
}

export default Text;
