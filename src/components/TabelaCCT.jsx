import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(type, description, minimum, valuecct, valuepayed) {
  return { type, description, minimum, valuecct, valuepayed };
}

const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),

  createData("A1", "Contêineres Cheios/Vazios, com Engate AUTOMÁTICO e/ou Rampa", 90.00, 5.665, 5.665),
  createData("A2", "Contêineres Cheios/Vazios, com Engate MANUAL", 90.00, 5.665, 5.665),
  createData("A1T", "Tabela de Valores TECON", "Tabela A1T"),
  createData("B1", "Cargas Avulsas", 90.00, 1.1669, 1.1737419),
  createData("B2", "Cargas Unitizadas (Incluindo Madeira Serrada Cintada e Big Bags", 90.00, 0.6595, 0.66338295),
  createData("B3", "Cargas Unitizadas com Dimensões Padronizadas", 100.00, 0.2551, 0.2424),
  createData("B4/B13", "Toras de Madeira Cintadas e/ou Bobinas de Aço", 100.00, 0.5448, 0.7197),
  createData("B5", "Volumes Indivisíveis Acima de 1000Kg", 100.00, 0.9059, 0.9059),
  createData("B6", "Cargas Avulsas em Navio com Rampa", 90.00, 1.1669, 0.849296401),
  createData("B7", "Cargas Unitizadas em Navio com Rampa", 90.00, 0.6595, 0.66338295),
  createData("B8", "Veículos em Geral, em Navio com Rampa", 90.00, 2.9427, 2.960058),
  createData("B9", "Veículos de Passeio e Utilitários, em Navio com Rampa", 128.64, 1.6771, 1.6868505),
  createData("B10", "Cargas Frigoríficas", 101.84, 1.0036, 1.0562),
  createData("B11", "Cargas Vivas", 90.00, 0.208, 0.2092125),
  createData("B90", "Conexo", 122.22),			
  createData("C1", "Produtos Agrícolas e Derivados, em Equipamento Manual", 90.00, 0.4241, 0.4265544),
  createData("C2", "Produtos Agrícolas e Derivados, em Equipamento Mecânico ou Semi-automático", 90.00, 0.0978, 0.9838965),
  createData("C3", "Produtos Agrícolas e Derivados, em Equipamento Automático", 90.00, 0.075, 0.849296401),
  createData("C4", "Produtos Minerais/Químicos, em Equipamento Manual", 96.76, 0.4155, 0.4179468),
  createData("C5", "Produtos Minerais/Químicos, em Equipamento Semi-automático", 96.76, 0.1877, 0.18876945),
  createData("C6", "Produtos Minerais/Químicos, em Equipamento Automático e/ou Grab", 96.76, 0.1872, 0.262626593),
  createData("C7", "Cavaco de Madeira", 96.76, 0.1872, 0.0573000989),
  
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});



export default function TabelaCCT() {
    const classes = useStyles();

    return (
   <>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Tipo</StyledTableCell>
              <StyledTableCell align="center">Descrição Faina</StyledTableCell>
              <StyledTableCell align="center">Diária&nbsp;(R$)</StyledTableCell>
              <StyledTableCell align="center">Valor CCT&nbsp;(R$)</StyledTableCell>
              <StyledTableCell align="center">Valor Pago&nbsp;(R$)</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.type}>
                <StyledTableCell align="right" component="th" scope="row">{row.type}</StyledTableCell>
                <StyledTableCell align="left">{row.description}</StyledTableCell>
                <StyledTableCell align="center">{row.minimum}</StyledTableCell>
                <StyledTableCell align="center">{row.valuecct}</StyledTableCell>
                <StyledTableCell align="center">{row.valuepayed}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
   </>
    );

  }
