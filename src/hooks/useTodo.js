import { useContext } from "react";
import { Todo } from "../context/Todo";

const useTodo = () => useContext(Todo);

export default useTodo;
