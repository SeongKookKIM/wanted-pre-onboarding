import { useEffect, useRef, useState } from "react";
import Btn from "./Btn";
import { useSelector } from "react-redux";
import { RootState } from "../store/Store";

function List() {
  const [todoList, setTodoList] = useState<string[]>([]);

  const reduxList = useSelector((state: RootState) => state.todoList);

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    setTodoList(reduxList);
  }, [reduxList]);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [todoList]);

  return (
    <>
      {todoList && todoList.length > 0 ? (
        <>
          {todoList.map((list, idx) => {
            return (
              <li key={idx}>
                <textarea
                  ref={textareaRef}
                  className="todo-list-content"
                  typeof="text"
                  name="content"
                  value={list}
                  disabled={true}
                ></textarea>

                <Btn btnName={"Delete"} deleteNumber={idx} />
              </li>
            );
          })}
        </>
      ) : (
        <div className="list-emty">
          <p>리스트를 작성해주세요.</p>
        </div>
      )}
    </>
  );
}

export default List;
