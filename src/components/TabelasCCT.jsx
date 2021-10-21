import { Fragment } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
//import NumberInput from "./NumberInput";

const StyledTableCell = withStyles((theme) => ({
  head: {
    //  backgroundColor: theme.palette.common.black,
    backgroundColor: "#0060a4",
    color: "#FFFFFF",
  },
  body: {
    fontSize: 10,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(
  type,
  description,
  valueSindop,
  valueSintermar,
  valueNaoSocio,
  valuePersonalizado,
  minSindop,
  minSintermar,
  minNaoSocio,
  minPersonalizado
) {
  return {
    type,
    description,
    valueSindop,
    valueSintermar,
    valueNaoSocio,
    valuePersonalizado,
    minSindop,
    minSintermar,
    minNaoSocio,
    minPersonalizado,
  };
}
function createData2(type, ab0, c25, d50, ab100, c125, d150) {
  return { type, ab0, c25, d50, ab100, c125, d150 };
}

function createData3(base, aliquota) {
  return { base, aliquota };
}

function createData4(base, aliquota, deduzir) {
  return { base, aliquota, deduzir };
}

const rows = [
  createData(
    "A1",
    "Contêineres cheios/vazios, com engate automático e/ou rampa",
    6.3368,
    6.6703,
    7.0,
    `NumberInput`,
    100.68,
    105.96,
    120.0,
    `NumberInput`
  ),
  createData("A1T", "Tabela de Valores TECON", "", "Tabela A1T", ""),
  createData(
    "A2",
    "Contêineres cheios/vazios, com engate automático manual",
    6.3368,
    6.6703,
    7.0,
    `NumberInput`,
    100.68,
    105.96,
    120,
    0,
    `NumberInput`
  ),
  createData(
    "B1",
    "Carga Avulsas",
    6.3368,
    6.6703,
    7.0,
    `NumberInput`,
    100.68,
    105.96,
    120.0,
    `NumberInput`
  ),
  createData(
    "B2",
    "Cargas Unitizadas (Incluindo Madeiras Serrada Cintada e Big Bags)",
    0.7378,
    0.7766,
    1.0,
    `NumberInput`,
    100.68,
    105.96,
    120.0,
    `NumberInput`
  ),
  createData(
    "B3",
    "Cargas Unitizadas com Dimensões Padronizadas, em Navio Especializado",
    0.2712,
    0.2855,
    1.0,
    `NumberInput`,
    111.86,
    117.97,
    120.0,
    `NumberInput`
  ),
  createData(
    "B4",
    "Toras de Madeira Cintadas e/ou Bobinas de Aço",
    0.6094,
    0.6416,
    1.0,
    `NumberInput`,
    100.68,
    105.96,
    120.0,
    `NumberInput`
  ),
  createData(
    "B5",
    "Volume Indivisiveis Acima de 1000 Kg - Navio Convencional ",
    1.0133,
    1.0666,
    2.0,
    `NumberInput`,
    111.86,
    117.97,
    120.0,
    `NumberInput`
  ),
  createData(
    "B6",
    "cargas Avulsas em Navio com Rampa",
    100.68,
    105.96,
    120.0,
    `NumberInput`,
    1.3054,
    1.3741,
    2.0,
    `NumberInput`
  ),
  createData(
    "B7",
    "Cargas Unitizadas em Navio com Rampa",
    100.68,
    105.96,
    120.0,
    `NumberInput`,
    0.7378,
    0.7766,
    1.0,
    `NumberInput`
  ),
  createData(
    "B8",
    "Veículos em Geral, em Navio com Rampa",
    136.71,
    143.9,
    200.0,
    `NumberInput`,
    3.2915,
    3.4652,
    5.0,
    `NumberInput`
  ),
  createData(
    "B9",
    "Veículos de Passeio E Utilitários, em Navio com Rampa",
    108.24,
    113.92,
    120.0,
    `NumberInput`,
    1.876,
    1.9636,
    2.0,
    `NumberInput`
  ),
  createData(
    "B10",
    "Cargas Frigoríficas - Unitizadas",
    100.68,
    105.96,
    120.0,
    `NumberInput`,
    1.1228,
    1.1815,
    2.0,
    `NumberInput`
  ),
  createData(
    "B11",
    "Cargas Vivas",
    100.68,
    105.96,
    120.0,
    `NumberInput`,
    0.2327,
    0.2447,
    1.0,
    `NumberInput`
  ),
  createData(
    "B12",
    "Toras de Madeira Longa com Spreader Manual",
    167.79,
    177.47,
    200.0,
    `NumberInput`,
    0.617,
    0.6548,
    1.0,
    `NumberInput`
  ),
  createData(
    "B13",
    "Toras de Madeira Longa com Spreader Automático",
    167.79,
    177.47,
    200.0,
    `NumberInput`,
    0.8051,
    0.8452,
    1.0,
    `NumberInput`
  ),
  createData(
    "B14",
    "Mercadorias Diversas em Estaleiro - Break Bulk",
    111.86,
    117.97,
    120.0,
    `NumberInput`,
    0.2094,
    0.7957,
    1.0,
    `NumberInput`
  ),
  createData(
    "B15",
    "Mercadorias Diversas em Estaleiro - Projetos",
    111.86,
    117.97,
    120.0,
    `NumberInput`,
    0.2852,
    0.3005,
    1.0,
    `NumberInput`
  ),
  createData(
    "B90",
    "Conexo",
    136.71,
    143.9,
    200.9,
    `NumberInput`,
    "",
    "",
    "",
    ""
  ),
  createData(
    "C1",
    "Produtos Agrícolas e Derivados, em Equipamento Manual",
    100.68,
    105.96,
    120.0,
    `NumberInput`,
    0.4744,
    0.4993,
    1.0,
    `NumberInput`
  ),
  createData(
    "C2",
    "Produtos Agrícolas e Derivados, em Equipamento Mecânico",
    100.68,
    105.96,
    120.0,
    `NumberInput`,
    0.7579,
    0.114,
    1.0,
    `NumberInput`
  ),
  createData(
    "C3",
    "Produtos Agrícolas e Derivados, em Equipamento Automático",
    100.68,
    105,
    9,
    120.0,
    `NumberInput`,
    0.0839,
    0.0883,
    1.0,
    `NumberInput`
  ),
  createData(
    "C4",
    "Produtos Minerais/Químicos, em Equipamento Manual",
    100.68,
    105.96,
    120.0,
    `NumberInput`,
    0.4648,
    0.4886,
    1.0,
    `NumberInput`
  ),
  createData(
    "C5",
    "Produtos Minerais/Químicos, em Equipamento Semi-Automático",
    100.68,
    105,
    96,
    120.0,
    `NumberInput`,
    0.21,
    0.221,
    1.0,
    `NumberInput`
  ),
  createData(
    "C6",
    "Produtos Minerais/Químicos, em Equipamento Automático e/ou Grab",
    100.68,
    105.96,
    120.0,
    `NumberInput`,
    0.2094,
    0.2206,
    1.0,
    `NumberInput`
  ),
  createData(
    "C7",
    "Cavaco Madeira",
    100.68,
    105.96,
    120.0,
    `NumberInput`,
    0.0611,
    0.0641,
    1.0,
    `NumberInput`
  ),
];

const rows2 = [
  createData2("Longo Curso CHEIO", 4.2, 5.25, 6.3, 8.4, 10.5, 12.6),
  createData2("Longo Curso VAZIO", 2.67, 3.33, 4, 5.34, 6.67, 8),
  createData2("Cabotagem CHEIO", 3.15, 3.94, 4.73, 6.31, 7.88, 9.46),
  createData2("Cabotagem VAZIO", 2, 2.5, 3.01, 4.01, 5.01, 6.01),
  createData2("Tranship CHEIO", 2.09, 2.62, 3.14, 4.19, 5.23, 6.28),
  createData2("Tranship VAZIO", 1.34, 1.68, 2.01, 2.68, 3.35, 4.02),
  createData2("Diária Produção", 43.02, 53.77, 64.52, 86.03, 107.53, 129.05),
  createData2("Diária Conexo", 104.75, 130.93, 157.11, 209.47, 261.85, 314, 22),
];
const rows3 = [
  createData3("Até R$1.100", 7.5),
  createData3("De R$1.100 a R$2.203,48", 9),
  createData3("De R$2.203,49 a R$3.305,22", 12),
  createData3("De R$3.305,22 até R$6.433,57", 14),
];
const rows4 = [
  createData4("Até R$1.903,98", "-", "-"),
  createData4("De R$1.903,99 a R$2.826,65", 7.5, 142.8),
  createData4("De R$2.826,66 a R$3.751,05", 15, 354.8),
  createData4("De R$3.751,06 a R$4.664,68", 22.5, 636.13),
  createData4("Acima de R$4.664,68", 27.5, 869.36),
];

const useStyles = makeStyles({ table: { minWidth: 50 } });

export default function TabelaCCT() {
  const classes = useStyles();
  return (
    <Fragment>
      <div className="bg-blue-400 border border-blue-500 text-center text-white justify-center rounded-lg shadow-lg p-2 mb-4 m-4">
        Tabelas de Taxas e Tarifas
      </div>
      <div>
        <TableContainer component={Paper}>
          <div className="bg-gray-300 align-middle justify-items-center font-bold">
            Convenção Coletiva de Trabalho SINDOP (Vigência 2020-2022)
          </div>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">
                  <strong>Tipo</strong>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <strong>Descrição Faina</strong>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <strong>Tarifa Sindop (R$)</strong>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <strong>Tarifa Sintermar (R$)</strong>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <strong>Tarifa Não-Sócio (R$)</strong>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <strong>Tarifa Personalizado (R$)</strong>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <strong>Diária Sindop (R$)</strong>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <strong>Diária Sintermar (R$)</strong>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <strong>Diária Não-Sócio (R$)</strong>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <strong>Diária Personalizado (R$)</strong>
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.type}>
                  <StyledTableCell align="center" component="th" scope="row">
                    <strong>{row.type}</strong>
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    {row.description}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.valueSindop}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.valueSintermar}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.valueNaoSocio}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.valuePersonalizado}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.minSindop}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.minSintermar}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.minNaoSocio}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.minPersonalizado}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <br />
        <TableContainer component={Paper}>
          <div className="bg-gray-300 align-middle justify-items-center font-bold">
            Acordo Coletivo de Trabalho TECON Rio Grande (Vigência 2020-2022)
          </div>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">
                  <strong>A1T - Tabela TECON</strong>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <strong>A/B</strong>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <strong>C+25%</strong>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <strong>D+50%</strong>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <strong>A/B+100%</strong>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <strong>C+125%</strong>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <strong>D+150%</strong>
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows2.map((row) => (
                <StyledTableRow key={row.type}>
                  <StyledTableCell align="right" component="th" scope="row">
                    {row.type}
                  </StyledTableCell>
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
          <p className="text-xs">
            *OBS: Nesta tabela os Valores estão com RSR incluso (18,18%)
          </p>
        </TableContainer>

        <br />
        <TableContainer component={Paper}>
          <div className="bg-gray-300 align-middle justify-center font-bold">
            Tabela INSS (Vigência desde 01/01/2021)
          </div>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">
                  <strong>Base de Cálculo (R$)</strong>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <strong>Alíquota (%)</strong>
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows3.map((row) => (
                <StyledTableRow key={row.base}>
                  <StyledTableCell align="center" component="th" scope="row">
                    {row.base}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.aliquota}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <br />

        <TableContainer component={Paper}>
          <div className="bg-gray-300 align-middle justify-center font-bold">
            Tabela Imposto de Renda (Vigência desde 2015 - Lei 13.149/2015)
          </div>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">
                  <strong>Base de Cálculo (R$)</strong>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <strong>Alíquota (%)</strong>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <strong>Parcela a deduzir do IR (R$)</strong>
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows4.map((row) => (
                <StyledTableRow key={row.base}>
                  <StyledTableCell align="center" component="th" scope="row">
                    {row.base}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.aliquota}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.deduzir}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </Fragment>
  );
}
