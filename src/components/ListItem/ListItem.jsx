import React from "react";
import Button from "../Button/Button";
import useTodo from "../../hooks/useTodo";

const ListItem = (props) => {
  const {
    id,
    title,
    isCompleted,
    className,
  } = props;

  const { updateTodoStatus, deleteTodo } = useTodo();

  return (
    <tr id={id}>
      <td className={className}>{title}</td>
      <td className={className}>
        <Button
          text={isCompleted ? 'Delete' : 'Complete'}
          color={isCompleted ? 'error' : 'primary'}
          onClick={() => isCompleted ? deleteTodo(id) : updateTodoStatus(id)}
        />
      </td>
    </tr>
  )
}

export default ListItem;
