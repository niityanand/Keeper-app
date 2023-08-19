import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <Paper elevation={3} className="note">
      <Typography variant="h6">{props.title}</Typography>
      <Typography>{props.content}</Typography>
      <IconButton onClick={handleClick}>
        <DeleteIcon />
      </IconButton>
    </Paper>
  );
}

export default Note;
