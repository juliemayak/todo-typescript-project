import "./styles.css";
import Todos from "./components/Todos";
import NewTodo from "./components/NewTodo";
import TodoContextProvider from "./store/context";

export default function App() {
  return (
    <TodoContextProvider>
      <div>
        <NewTodo />
        <Todos />
      </div>
    </TodoContextProvider>
  );
}
