import React from "react";
import {
  Grid,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";






function FormComponent({formik}) {

  console.log(formik.values.date);
  return (
    <>
      <Grid container direction="column">
        <Grid marginBottom="1rem" marginTop="1rem">
          <TextField
            label="Todo..."
            variant="outlined"
            name="todoText"
            value={formik.values.todoText}
            onChange={formik.handleChange}
          />
        </Grid>

        <FormControl>
          <InputLabel>Priorité</InputLabel>
          <Select
            labelId="priorityLabel"
            label="Priorité"
            name="priority"
            onChange={formik.handleChange}
            value={formik.values.priority}
          >
            <MenuItem value="Bas">Bas</MenuItem>
            <MenuItem value="Moyen">Moyen</MenuItem>
            <MenuItem value="Haut">Haut</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid marginTop="1rem">
        <TextField
          type="date"
          variant="outlined"
          label="date"
          name="date"
          InputLabelProps={{ shrink: true }}
          onChange={formik.handleChange}
          value={formik.values.date}
        />
      </Grid>
    </>
  );
}

export default FormComponent;
