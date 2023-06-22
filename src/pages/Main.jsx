import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import uuid from "react-uuid";
import { setTodo } from "../redux/modules/todo";
import Todo from "../components/Todo";

function Main() {
  let { todos } = useSelector((state) => state.todos);
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const dispatch = useDispatch();

  //TODO추가
  const addTodoHandler = () => {
    setTitle("");
    setContents("");
    dispatch(
      setTodo({
        id: uuid(),
        title: title,
        contents: contents,
        isDone: false,
      })
    );
  };

  return (
    <div>
      <header>
        <p>My Todo List</p>
      </header>

      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        제목:
        <input
          type="text"
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        ></input>
        내용:
        <input
          type="text"
          value={contents}
          onChange={(event) => {
            setContents(event.target.value);
          }}
        ></input>
        <button onClick={addTodoHandler}>등록</button>
      </form>
      <main>
        <h1> 📝 In progress</h1>
        {todos.map((item) => {
          if (item.isDone === false)
            return <Todo todo={item} key={item.id} todos={todos} />;
          return null;
        })}

        <h1> 💯 Done</h1>
        {todos.map((item) => {
          if (item.isDone === true)
            return <Todo todo={item} key={item.id} todos={todos} />;
          return null;
        })}
      </main>
    </div>
  );
}

export default Main;
