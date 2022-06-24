import React from "react";
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const ToDoTable = (props) => {
  const { todos } = props;
  return (
    <>
      <TableContainer>
        <Table sx={{ maxWidth: 650 }}>
          {/* kepala table */}
          <TableHead>
            <TableRow>
              <TableCell>ToDo Id</TableCell>
              <TableCell>ToDO Name</TableCell>
              <TableCell>ToDo status</TableCell>
              <TableCell>action</TableCell>
            </TableRow>
          </TableHead>
          <tbody>
            {/* looping props.todos untuk menghasildan data per baris */}
            {todos.map((todo) => {
              return (
                <TableRow key={todo.id}>
                  <TableCell>{todo.id}</TableCell>
                  <TableCell>{todo.name}</TableCell>
                  <TableCell>
                    {todo.isCompleted ? "Selesai" : "Belum Selesai"}
                  </TableCell>
                  <TableCell>
                    {todo.isCompleted ? (
                      ""
                    ) : (
                      <Button
                        variant="contained"
                        onClick={() => props.fnCompletedTodo(todo.id)}
                      >
                        {" "}
                        Selesaikan
                      </Button>
                    )}
                  </TableCell>
                </TableRow>
              );
            })}
          </tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ToDoTable;
