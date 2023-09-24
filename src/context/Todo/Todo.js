import React, { createContext, useState } from "react";

const list = [
  {"title":"hfhfh","completed":false,"rating":7,"id":"32"},
  {"title":"пвпвпвп","completed":false,"rating":90,"id":"35"},
  {"title":"пвпвпвп","completed":true,"rating":42,"id":"36"},
  {"title":"пвпвпвп","completed":false,"rating":7,"id":"37"},
  {"title":"fsdgdf","completed":true,"rating":46,"id":"38"},
  {"title":"fsdgdfscd","completed":true,"rating":12,"id":"39"},
  {"title":"fsdgdfscd","completed":false,"rating":85,"id":"40"}
];

const defaultValue = {
  todoList: list,
  updateTodoStatus: () => void 0,
  deleteTodo: () => void 0,
  todoCount: list.length,
  todoIsCompletedCount: 0,
  todoInProgressCount: 0,
}

export const Todo = createContext(defaultValue);

const TodoProvider = (props) => {
  const {
    children,
  } = props;

  const [ todoList, setTodoList ] = useState(list);

  const todoCount = todoList.length;
  const todoIsCompletedCount = todoList.filter(todo => todo.completed).length;
  const todoInProgressCount = todoCount - todoIsCompletedCount;

  const getTodo = (id) => todoList.find(item => item.id === id);

  const updateTodoStatus = (id) => {
    const todo = getTodo(id);

    const updatedTodoList = todoList.map(todoItem => {
      if(todoItem.id === todo.id) {
        return { ...todo, completed: true };
      }

      return todoItem;
    })

    setTodoList(updatedTodoList);
  }

  const deleteTodo = (id) => {
    const todo = getTodo(id);

    const updatedTodoList = todoList.filter(todoItem => todoItem.id !== todo.id);
    setTodoList(updatedTodoList);
  }

  return (
    <Todo.Provider
      value={{
        todoList,
        updateTodoStatus,
        deleteTodo,
        todoCount,
        todoIsCompletedCount,
        todoInProgressCount,
      }}
    >
      {children}
    </Todo.Provider>
  )
}

export default TodoProvider;
