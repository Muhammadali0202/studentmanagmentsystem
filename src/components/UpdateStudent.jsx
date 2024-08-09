import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { TextField } from '@mui/material';

export default function UpdateStudentDialog({editDialogueOpen,currentStudent}) {

  const handleClose = () => {
    setOpen(false);
  };

  return (
      <Dialog
        open={editDialogueOpen}
        // onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle>
          Update Student
        </DialogTitle>
        <DialogContent>
            <TextField 
            margin='dense'
            name='name'
            label= 'Student Name'
            type='text'
            fullWidth
            value={''}
            // onChange={}
            />
            <TextField
              margin='dense'
              name='age'
              label= 'Student Age'
              type='number'
              fullWidth
              value={''}
              // onChange={}
              />
          
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}> Save</Button>
        </DialogActions>
      </Dialog>
  );
}
