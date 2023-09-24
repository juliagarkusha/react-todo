import React from "react";
import useTodo from "../../hooks/useTodo";
import "./styles.scss";

const Statistics = () => {
  const { todoCount, todoIsCompletedCount, todoInProgressCount } = useTodo();

  return (
    <ul className="statistics">
      <li>
        <span>All tasks:</span>
        <span>{todoCount}</span>
      </li>
      <li>
        <span>Completed tasks:</span>
        <span>{todoIsCompletedCount}</span>
      </li>
      <li>
        <span>In progress tasks:</span>
        <span>{todoInProgressCount}</span>
      </li>
    </ul>
  )
}

export default Statistics;
