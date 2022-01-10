import {
  Grid,
  Paper,
  Typography,
  Chip,
  ButtonGroup,
  Button,
  Icon,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import React from "react";

function TodoList(props) {
  return (
    <Grid container direction="column" style={{ marginTop: "1.2rem" }}>
      {props.todos.map((todo) => {
        return (
          <Grid item key={todo.id}>
            <Paper style={{ padding: "2rem", marginTop: "1rem" }} elevation={4}>
              <Grid container justifyContent="space-between">
                <Grid item>
                  <Typography variant="h6">{todo.val}</Typography>
                </Grid>
                <Grid>
                  {" "}
                  <Chip color="primary" label={todo.priority} size="small" />
                </Grid>
              </Grid>
              <Typography style={{ marginBottom: "0.2rem" }} variant="body2">
                Date : {todo.date}
              </Typography>
     
              <ButtonGroup variant="text" style={{paddingTop:"12px", margin:"0"}} size="small">
                <Button  variant="oulined" ><IconButton color="primary"><DeleteIcon/></IconButton></Button>
                <Button  variant="oulined"><IconButton color="primary"><EditIcon/></IconButton></Button>
                <Button  variant="oulined"><IconButton color="primary"><DeleteIcon/></IconButton></Button>
              </ButtonGroup>
         
            </Paper>
          </Grid>
        );
      })}
    </Grid>
  );
}

export default TodoList;
