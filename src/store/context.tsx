import React, { useState } from "react";
import { Todo } from "../types";

interface TodoContextInterface {
  items: Todo[];
  addTodo: (enteredText: string) => void;
  closeTodoItem: (todoID: string) => void;
}

export const TodoContext = React.createContext<TodoContextInterface>({
  items: [],
  addTodo: (enteredText: string) => {},
  closeTodoItem: (todoID: string) => {}
});

const TodoContextProvider: React.FC<React.ReactNode> = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const addTodoHandler = (enteredText: string) => {
    setTodos((prevTodos) =>
      prevTodos.concat({
        id: new Date().toISOString(),
        text: enteredText
      })
    );
  };

  const closeTodoItemHandler = (todoID: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoID);
    });
  };

  const contextTodo: TodoContextInterface = {
    items: todos,
    addTodo: addTodoHandler,
    closeTodoItem: closeTodoItemHandler
  };

  return (
    <TodoContext.Provider value={contextTodo}>{children}</TodoContext.Provider>
  );
};

export default TodoContextProvider;
