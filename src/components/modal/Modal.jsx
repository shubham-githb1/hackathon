import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Modal";
import "./Modal.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>ADD TRANSACTION</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'>
        <Box sx={style}>
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            ADD TRANSACTION
          </Typography>
          <hr />
          <br />
          <Box
            component='form'
            sx={{
              "& .MuiTextField-root": {
                m: 0.5,
                width: "90%",
              },
            }}
            noValidate
            autoComplete='off'>
            <div>
              <TextField
                id='outlined-basic'
                label='Amount'
                variant='outlined'
              />
              <TextField
                id='outlined-multiline'
                label='Description'
                multiline
                rows={4}
              />
              <TextField id='outlined-basic' label='User' variant='outlined' />
            </div>
          </Box>
          <Button variant='contained'>Submit</Button>
        </Box>
      </Modal>
    </div>
  );
}
