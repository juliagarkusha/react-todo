import React, { useState } from "react";
import ListItem from "../ListItem/ListItem";
import useTheme from "../../hooks/useTheme";
import useTodo from "../../hooks/useTodo";
import "./styles.scss";

const List = () => {
  const { todoList, todoCount } = useTodo();
  const { theme } = useTheme();

  if (!todoCount) {
    return (
      <span className="todo__list--placeholder">No tasks found</span>
    )
  }

  return (
    <table className={`todo__list todo__list--${theme}`}>
      <thead>
        <tr>
          <th className={`todo__header todo__header--${theme}`}>Task</th>
          <th className={`todo__header todo__header--${theme}`}>Action</th>
        </tr>
      </thead>
      <tbody>
        {
          todoList.map((todo) => (
            <ListItem
              key={todo.id}
              id={todo.id}
              title={todo.title}
              isCompleted={todo.completed}
              className={`todo__item--${theme}`}
            />
          ))
        }
      </tbody>
    </table>
  )
}

export default List;
