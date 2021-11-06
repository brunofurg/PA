import * as React from "react";
//import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
// import FormControl from "@mui/material/FormControl";
// import UploadFile from "./UploadFile";
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
      <Button
        size="small"
        className="bg-primary"
        variant="contained"
        onClick={handleClickOpen}
      >
        Importar Analítico
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>26/09D - 543807 - BOMAR RESOLVE</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Dados cadastrados e importados divergentes. Verifique situação e
            caso esteja errado pagamento clicar em "Solicitar ESTORNO" para
            enviar email ao OGMO/RG solicitando pagamento correto.
            <span className="text-red-400 flex p-2 mt-2">
              <li>
                {" "}
                BrutoINPUT: 750,25 <strong>{`<`}</strong> BrutoIMPORT: 459,31
              </li>
            </span>
          </DialogContentText>
          <div className="flex flex-row justify-between p-2 m-2">
            <div className="flex justify-center">
              <Button variant="contained" color="primary">
                Solicitar Estorno
              </Button>
            </div>
            <div className="flex flex-col place-content-end space-y-2">
              <Button variant="contained" color="secondary">
                Resolvido
              </Button>
              <Button variant="contained" color="success">
                Está OK
              </Button>
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={handleClose}>
            Fechar
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
