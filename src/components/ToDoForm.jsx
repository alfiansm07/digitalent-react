import React, { useState } from "react";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";

const ToDoForm = (props) => {
  const [inputData, setInputData] = useState("");
  const { fnAddTodos } = props;

  //fungsi untuk perubahaninput
  const inputOnchangeHandler = (event) => {
    setInputData(event.target.value);
  };

  //fungsi untuk form submit
  const formSubmithandler = (event) => {
    event.preventDefault();
    fnAddTodos(inputData);
    // kosongkan input
    setInputData("");
  };
  return (
    <>
      <form style={{ margin: "10px" }} action="" onSubmit={formSubmithandler}>
        <TextField
          type="text"
          name="todo-baru"
          id="todoBaru"
          size="small"
          label="input kerjaan
          baru "
          value={inputData}
          onChange={inputOnchangeHandler}
        />
        <Button size="medium" variant="contained" type="submit">
          submit kerjaan
        </Button>
      </form>
    </>
  );
};

export default ToDoForm;
