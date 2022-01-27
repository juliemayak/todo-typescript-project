import React, { useRef } from "react";
import { TodoContext } from "../store/context";
import { useContext } from "react";

const NewTodo = (): JSX.Element => {
  // context
  const { addTodo } = useContext(TodoContext);

  const todoInputRef = useRef<HTMLInputElement>(null);
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = todoInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      // error
      return;
    }
    addTodo(enteredText);
  };

  return (
    <form action="submit" onSubmit={submitHandler}>
      <label htmlFor="text"></label>
      <input ref={todoInputRef} type="text" name="text" id="text" />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
