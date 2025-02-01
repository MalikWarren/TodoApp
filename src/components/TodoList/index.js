import React from "react";
import axios from "../../axios";
import { ListContainer, Row, Text, DeleteIcon } from "./styles";

function TodoList({ todos, fetchData }) {
  const updateTodo = async (id) => {
    try {
      const response = await axios.put(`/todos/${id}`, {
        id,
      });
      fetchData();
      return response.data.json;
    } catch (err) {
      console.error(err.message);
    }
  };

  const deleteTodo = async (id) => {
    try {
      const response = await axios.delete(`/todos/${id}`, {
        id,
      });
      fetchData();
      return response.data.json;
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <ListContainer>
      {todos?.map((todo) => (
        <Row key={todo._id}>
          <Text
            isCompleted={todo.completed}
            onClick={()  =>  {
              updateTodo(todo._id)
              alert(`Marking "${todo.text}" as completed!`);
            }}
          >
            {todo.text}
          </Text>
          <DeleteIcon
            data-testid="close"
            onClick={() => {
              deleteTodo(todo._id)
              if (window.confirm("Are you sure you want to delete this todo?")) {
                fetchData(); // Example deletion logic
              }
            }}
          >
            🗑
          </DeleteIcon>
        </Row>
      ))}
    </ListContainer>
  );
}

export default TodoList;
