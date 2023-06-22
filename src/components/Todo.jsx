import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteTodo, changeTodo } from "../redux/modules/todo";

function Todo(props) {
  const dispatch = useDispatch;
  const { todo } = props;
  const navigate = useNavigate;

  return (
    <div key={todo.id}>
      <p>{todo.title}</p>
      <p>{todo.contents}</p>
      <button
        onClick={() => {
          dispatch(deleteTodo(todo.id));
        }}
      >
        삭제
      </button>
      <button
        onClick={() => {
          dispatch(changeTodo(todo.id));
        }}
      >
        {todo.isDone ? "취소" : "완료"}
      </button>
      <button
        onClick={() => {
          navigate(`/detail/${todo.id}`);
        }}
      >
        상세보기
      </button>
    </div>
  );
}

export default Todo;
