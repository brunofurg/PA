import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import FormControl from '@mui/material/FormControl';
import UploadFile from './UploadFile';
//import Trabalhos from '../components/Trabalhos';

export default function WorkDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

 
  return (
    <React.Fragment>
      <Button size="small" className="bg-primary" variant="contained" onClick={handleClickOpen}>
        Importar Analítico
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>Importação Analítico em PDF</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Selecione um arquivo em .pdf com demonstrativo analítico para realizar importação de dados.
          </DialogContentText>
          <Box
            noValidate
            component="form"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              m: 'auto',
              width: 'fit-content',
            }}
          >
            <FormControl sx={{ mt: 2, minWidth: 120 }}>
                <div>
                    <span>
                        <UploadFile />
                        {/* <Trabalhos /> */}

                    </span>
                </div>

            </FormControl>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Fechar</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

