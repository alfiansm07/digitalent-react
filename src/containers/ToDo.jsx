import React, { useState } from "react";
import ToDoForm from "../components/ToDoForm";
import ToDoTable from "../components/ToDoTable";
import Typography from "@mui/material/Typography";
const ToDo = () => {
  //data awal
  const [todos, setTodos] = useState([
    { id: 1, name: "Review DOM", isCompleted: true },
    { id: 2, name: "Belajar Nge-React", isCompleted: false },
    { id: 3, name: "Belajar Component React", isCompleted: false },
  ]);
  //   fungsi menambahkan todo
  const addTodos = (namaTodoYangBaru) => {
    const newId = todos[todos.length - 1].id + 1;
    const objTodoYangBaru = {
      id: newId,
      name: namaTodoYangBaru,
      isCompleted: false,
    };
    const todosYangBaru = [...todos, objTodoYangBaru];
    setTodos(todosYangBaru);
  };
  //   fungsi untuk mengganti tombol seleseaikan
  const completedTodo = (idTodo) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === idTodo) {
        todo.isCompleted = true;
      }
      return todo;
    });
    setTodos(newTodos);
  };

  return (
    <>
      <Typography variant="h5">aplikasi ToDo</Typography>
      <ToDoForm fnAddTodos={addTodos} />
      {/* lempar todos ke dalam table */}
      <ToDoTable todos={todos} fnCompletedTodo={completedTodo} />
    </>
  );
};

export default ToDo;
