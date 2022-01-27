import TodoItem from "./TodoItem";
import { TodoContext } from "../store/context";
import { useContext } from "react";

// const Todos:React.FC<TodosProps> = ({items}) => {
// const Todos:React.FC<{items: Todo[]}>  = ({items}) => {
// const Todos = ({items}: {items: Todo[]}) => {
// const Todos = (props: TodosProps): JSX.Element => {

const Todos = (): JSX.Element => {
  const { items, closeTodoItem } = useContext(TodoContext);

  return (
    <div>
      <h1>TO DO</h1>
      <ul>
        {items.map(({ id, text }) => (
          <TodoItem
            key={id}
            text={text}
            closeTodoItem={() => closeTodoItem(id)}
          />
        ))}
      </ul>
    </div>
  );
};

export default Todos;
