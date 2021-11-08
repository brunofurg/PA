import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import FormControl from "@mui/material/FormControl";
import UploadFile from "./UploadFile";
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
        <DialogTitle>Importação Analítico em PDF</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Selecione um arquivo em .pdf com demonstrativo analítico.
          </DialogContentText>
          <Box
            noValidate
            component="form"
            sx={{
              display: "flex",
              flexDirection: "column",
              m: "auto",
              width: "fit-content",
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

// import { MdThumbUp as ThumbUp } from "react-icons/md";
// //import { MdOutlineThumbDown as ThumbDown } from "react-icons/md";
// //import { MdOutlineDone as UmVisto } from "react-icons/md";
// import { MdDoneAll as DoubleCheck } from "react-icons/md";
// //import { MdOutlinePlaylistAddCheck as PlaylistCheck } from "react-icons/md";
// import { RiMailCheckLine as MailCheck } from "react-icons/ri";
// import { AiOutlineDoubleLeft as MuitoMenor } from "react-icons/ai";

// import * as React from "react";
// //import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
// import Dialog from "@mui/material/Dialog";
// import DialogActions from "@mui/material/DialogActions";
// import DialogContent from "@mui/material/DialogContent";
// import DialogContentText from "@mui/material/DialogContentText";
// import DialogTitle from "@mui/material/DialogTitle";

// // import FormControl from "@mui/material/FormControl";
// // import UploadFile from "./UploadFile";
// //import Trabalhos from '../components/Trabalhos';

// export default function WorkDialog() {
//   const [open, setOpen] = React.useState(false);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <React.Fragment>
//       <Button
//         size="small"
//         className="bg-primary"
//         variant="contained"
//         onClick={handleClickOpen}
//       >
//         Importar Analítico
//       </Button>
//       <Dialog open={open} onClose={handleClose}>
//         <DialogTitle>26/09D - 543807 - BOMAR RESOLVE</DialogTitle>
//         <DialogContent>
//           <DialogContentText>
//             <span className="text-red-400 flex p-2 mt-2">
//               *** Dados cadastrados e importados divergentes.
//             </span>
//             Caso pagamento esteja errado clicar em "Solicitar ESTORNO" para
//             enviar email ao OGMO/RG.
//             <div className="bg-red-50 text-red-400 flex flex-col place-items-center p-2 mt-2">
//               <li>Bruto IMPORTADO: 459,31</li>
//               <strong>
//                 {" "}
//                 <MuitoMenor size={24} />
//               </strong>
//               <li>Bruto INSERIDO: 750,25</li>
//             </div>
//           </DialogContentText>
//           <div className="flex flex-row justify-between p-2 m-2">
//             <div className="flex justify-center">
//               <Button
//                 variant="contained"
//                 className="flex flex-col p-2"
//                 color="primary"
//               >
//                 <MailCheck size={36} />
//                 Solicitar Estorno
//               </Button>
//             </div>
//             <div className="flex flex-col place-content-end space-y-2">
//               <Button
//                 variant="contained"
//                 className="flex flex-col p-2"
//                 color="secondary"
//               >
//                 <DoubleCheck />
//                 Resolvido
//               </Button>
//               <Button
//                 variant="contained"
//                 className="flex flex-col p-2"
//                 color="success"
//               >
//                 <ThumbUp />
//                 OK assim
//               </Button>
//             </div>
//           </div>
//         </DialogContent>
//         <DialogActions>
//           <Button variant="contained" onClick={handleClose}>
//             Fechar
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </React.Fragment>
//   );
// }
