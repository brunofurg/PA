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
//  backgroundColor: theme.palette.common.black,
    backgroundColor:  '#0060a4',
    color: '#FFFFFF',
  },
  body: {
    fontSize: 10,
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
function createData2(type, ab0, c25, d50, ab100, c125, d150) {
  return { type, ab0, c25, d50, ab100, c125, d150 };
}

const rows = [
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

const rows2 = [
  createData2("Longo Curso - Contêiner CHEIO", 4.2, 5.25, 6.3, 8.4, 10.5, 12.6),
  createData2("Longo Curso - Contêiner VAZIO", 2.67, 3.33, 4, 5.34, 6.67, 8),
  createData2("Cabotagem - Contêiner CHEIO", 3.15, 3.94, 4.73, 6.31, 7.88, 9.46),
  createData2("Cabotagem - Contêiner VAZIO", 2, 2.5, 3.01, 4.01, 5.01, 6.01),
  createData2("Tranship - Contêiner CHEIO", 2.09, 2.62, 3.14, 4.19, 5.23, 6.28),
  createData2("Tranship - Contêiner VAZIO", 1.34, 1.68, 2.01, 2.68, 3.35, 4.02),
  createData2("Diária Produção", 43.02, 53.77, 64.52, 86.03, 107.53, 129.05),
  createData2("Diária Conexo", 104.75, 130.93, 157.11, 209.47, 261.85, 314,22),
  
  
];

const useStyles = makeStyles({ table: { minWidth: 400, }, });


export default function TabelaCCT() {
  const classes = useStyles();
  return (
    <>
      Porto do Rio Grande - Convenção Coletiva de Trabalho (Vigência 2020-2022)
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="right"><strong>Tipo</strong></StyledTableCell>
              <StyledTableCell align="center"><strong>Descrição Faina</strong></StyledTableCell>
              <StyledTableCell align="center"><strong>Diária&nbsp;(R$)</strong></StyledTableCell>
              <StyledTableCell align="center"><strong>Valor CCT&nbsp;(R$)</strong></StyledTableCell>
              <StyledTableCell align="center"><strong>Valor Pago&nbsp;(R$)</strong></StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.type}>
                <StyledTableCell align="right" component="th" scope="row"><strong>{row.type}</strong></StyledTableCell>
                <StyledTableCell align="left">{row.description}</StyledTableCell>
                <StyledTableCell align="center">{row.minimum}</StyledTableCell>
                <StyledTableCell align="center">{row.valuecct}</StyledTableCell>
                <StyledTableCell align="center">{row.valuepayed}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

<h2>TECON Rio Grande - Convenção Coletiva de Trabalho (Vigência 2020-2022)</h2>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>                      
            <TableRow>
              <StyledTableCell align="center"><strong>A1T - Tabela TECON</strong></StyledTableCell>
              <StyledTableCell align="center"><strong>A/B</strong></StyledTableCell>
              <StyledTableCell align="center"><strong>C+25%</strong></StyledTableCell>
              <StyledTableCell align="center"><strong>D+50%</strong></StyledTableCell>
              <StyledTableCell align="center"><strong>A/B+100%</strong></StyledTableCell>
              <StyledTableCell align="center"><strong>C+125%</strong></StyledTableCell>
              <StyledTableCell align="center"><strong>D+150%</strong></StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows2.map((row) => (
              <StyledTableRow key={row.type}>
                <StyledTableCell align="right" component="th" scope="row">{row.type}</StyledTableCell>
                <StyledTableCell align="center">{row.ab0}</StyledTableCell>
                <StyledTableCell align="center">{row.c25}</StyledTableCell>
                <StyledTableCell align="center">{row.d50}</StyledTableCell>
                <StyledTableCell align="center">{row.ab100}</StyledTableCell>
                <StyledTableCell align="center">{row.c125}</StyledTableCell>
                <StyledTableCell align="center">{row.d150}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <h6>*OBS: Nesta Tabela TODOS os Valores são FINAIS, já incluso Repouso (1,1818%)</h6>
    </>
  );
}
