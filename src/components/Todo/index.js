import React, { useEffect, useState } from "react";
import axios from "../../axios";
import Author from "../Author";
import Form from "../Form";
import Key from "../Key";
import TodoList from "../TodoList";
import { Container } from "./styles";

function Todo() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("/todos");
      setTodos(response.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const addTodo = async (e) => {
    e.preventDefault();
    if (input.length === 0) return null;
    try {
      console.log('Sending request to add todo:', input);
      const response = await axios.post("/todos", {
        text: input,
        completed: false,
      });
      console.log('Todo added successfully:', response.data);
      fetchData();
      setInput("");
    } catch (error) {
      console.error("Error adding todo:", error);
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
      }
    }
  };

  return (
    <Container>
      <h2>List of Todos</h2>
      <Form input={input} setInput={setInput} addTodo={addTodo} />
      <TodoList todos={todos} fetchData={fetchData} />
      <Key />
      <Author />
    </Container>
  );
}

export default Todo;