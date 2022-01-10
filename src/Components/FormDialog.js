import React from "react";
import { Dialog, DialogContent, Button, DialogActions } from "@mui/material";

import { DialogTitle } from "@mui/material";
import FormComponent from "./FormComponent";

function FormDialog(props) {
  return (
    <form>
      <Dialog
        open={props.open}
        onClose={props.handleDialogClose}
        style={{ minWidth: "100vw" }}
      >
        <DialogTitle>Ajouter une tâche</DialogTitle>
        <DialogContent>
          <FormComponent formik={props.formik}/>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleDialogClose}> Annuler</Button>
          <Button type="submit" onClick={props.handleSubmit}> Ajouter</Button>
        </DialogActions>
      </Dialog>
    </form>
  );
}

export default FormDialog;
