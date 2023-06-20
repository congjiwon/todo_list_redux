// import uuid from "react";

const initialState = {
  todo: [
    {
      //   id: uuid(),
      id: 1,
      title: "1",
      contents: "11",
      isDone: false,
    },
    {
      //   id: uuid(),
      id: 2,
      title: "2",
      contents: "22",
      isDone: true,
    },
  ],
};

const todos = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default todos;
