import React, { useState } from "react";
import useLocalStorageState from "use-local-storage-state";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { v4 as uuidv4 } from "uuid";
import Header from "./Components/Header";
import TodoList from "./Components/TodoList";
import FormDialog from "./Components/FormDialog";
import { useFormik } from "formik";

function App() {

  const [inputValue, setInputValue] = useState("");
  // const [todos, setTodos] = useLocalStorageState("mytodo", []);
  const [todos, setTodos] = useState([]);

  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [editTodoId, setEditTodoId] = useState("");

  const handleDialogClose = () => {
    setIsDialogOpen(false)
  }

  const handleDialogOpen = () => {
    setIsDialogOpen(true)
  }
   const handleFabClick = () => {
    console.log("Click")
  }

  const getCurrentDate = () => {
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    var today  = new Date();
    today.toLocaleDateString("fr-FR", options);
  };


  const formik = useFormik({
    initialValues: {
      todoText: '',
      priority: 'Bas',
      date:getCurrentDate()
    },
  });

  const handleSubmit = (e) => {


    const {todoText, priority, date} = formik.values
    setTodos([...todos,{id: uuidv4(), val :todoText, priority: priority, date: date }])

    
  };


  // //1: Récuperer la valeur dans l'input
  // const handleChange = (e) => {
  //   setInputValue(e.target.value);
  // };

  // //3: Suppression du todo
  // const deleteTodo = (todo) => {
  //   setTodos(todos.filter((t) => t.id !== todo.id));
  // };

  // //Marquer une tâche comme accompli en fonction de son id
  // const taskDone = (todo) => {
  //   const newTodos = [...todos];
  //   const t = newTodos.find((t) => t.id === todo.id);
  //   t.done = !t.done;
  //   setTodos(newTodos);
  // };

  // const editTodo = (todo) => {
  //   setIsEditionMoalOpen(true);
  //   console.log(iseditionModalOpen);
  // };

  return (
    <>
      <CssBaseline />
      <Container>
        <Header handleFabClick={handleDialogOpen}/>

        <TodoList todos={todos}/>
      </Container>
      <FormDialog 
      open={isDialogOpen} 
      handleDialogClose={handleDialogClose}
      handleSubmit={handleSubmit}
      formik={formik}
      />
    </>
  );
}

export default App;
