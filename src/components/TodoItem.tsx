interface TodoItemProps {
  text: string;
  closeTodoItem: (id: string) => void;
}

const TodoItem = ({ text, closeTodoItem }: TodoItemProps): JSX.Element => {
  return (
    <li className="todo-item">
      {text}
      <p className="todo-item-close" onClick={closeTodoItem}>
        X
      </p>
    </li>
  );
};

export default TodoItem;
