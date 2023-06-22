import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

function Detail() {
  const params = useParams();
  const navigate = useNavigate();
  let { todos } = useSelector((state) => state.todos);
  const foundTodo = todos.find((item) => {
    return item.id === params.id;
  });

  return (
    <div>
      <p>{foundTodo.id}</p>
      <p>{foundTodo.title}</p>
      <p>{foundTodo.contents}</p>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        돌아가기
      </button>
    </div>
  );
}

export default Detail;
