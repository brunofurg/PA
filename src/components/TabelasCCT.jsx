import { Fragment } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import NumberInput from "./NumberInput";
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

function createData3(base, aliquota, deduzir) {
  return { base, aliquota, deduzir };
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
    10.0,
    <NumberInput labelDescription="" size="w-3/4" />,
    100.68,
    105.96,
    200.0,
    <NumberInput labelDescription="" size="w-3/4" />
  ),
  createData("A1T", "Tabela de Valores TECON", "", "Tabela A1T", ""),
  createData(
    "A2",
    "Contêineres cheios/vazios, com engate automático manual",
    6.3368,
    6.6703,
    10.0,
    <NumberInput labelDescription="" size="w-3/4" />,
    100.68,
    105.96,
    200.0,
    <NumberInput labelDescription="" size="w-3/4" />
  ),
  createData(
    "B1",
    "Carga Avulsas",
    6.3368,
    6.6703,
    10.0,
    <NumberInput labelDescription="" size="w-3/4" />,
    100.68,
    105.96,
    200.0,
    <NumberInput labelDescription="" size="w-3/4" />
  ),
  createData(
    "B2",
    "Cargas Unitizadas (Incluindo Madeiras Serrada Cintada e Big Bags)",
    0.7378,
    0.7766,
    10.0,
    <NumberInput labelDescription="" size="w-3/4" />,
    100.68,
    105.96,
    200.0,
    <NumberInput labelDescription="" size="w-3/4" />
  ),
  createData(
    "B3",
    "Cargas Unitizadas com Dimensões Padronizadas, em Navio Especializado",
    0.2712,
    0.2855,
    10.0,
    <NumberInput labelDescription="" size="w-3/4" />,
    111.86,
    117.97,
    200.0,
    <NumberInput labelDescription="" size="w-3/4" />
  ),
  createData(
    "B4",
    "Toras de Madeira Cintadas e/ou Bobinas de Aço",
    0.6094,
    0.6416,
    10.0,
    <NumberInput labelDescription="" size="w-3/4" />,
    100.68,
    105.96,
    200.0,
    <NumberInput labelDescription="" size="w-3/4" />
  ),
  createData(
    "B5",
    "Volume Indivisiveis Acima de 1000 Kg - Navio Convencional ",
    1.0133,
    1.0666,
    10.0,
    <NumberInput labelDescription="" size="w-3/4" />,
    111.86,
    117.97,
    200.0,
    <NumberInput labelDescription="" size="w-3/4" />
  ),
  createData(
    "B6",
    "cargas Avulsas em Navio com Rampa",
    1.3054,
    1.3741,
    10.0,
    <NumberInput labelDescription="" size="w-3/4" />,
    100.68,
    105.96,
    200.0,
    <NumberInput labelDescription="" size="w-3/4" />
  ),
  createData(
    "B7",
    "Cargas Unitizadas em Navio com Rampa",
    0.7378,
    0.7766,
    10.0,
    <NumberInput labelDescription="" size="w-3/4" />,
    100.68,
    105.96,
    200.0,
    <NumberInput labelDescription="" size="w-3/4" />
  ),
  createData(
    "B8",
    "Veículos em Geral, em Navio com Rampa",
    3.2915,
    3.4652,
    10.0,
    <NumberInput labelDescription="" size="w-3/4" />,
    136.71,
    143.9,
    200.0,
    <NumberInput labelDescription="" size="w-3/4" />
  ),
  createData(
    "B9",
    "Veículos de Passeio E Utilitários, em Navio com Rampa",
    1.876,
    1.9636,
    10.0,
    <NumberInput labelDescription="" size="w-3/4" />,
    108.24,
    113.92,
    200.0,
    <NumberInput labelDescription="" size="w-3/4" />
  ),
  createData(
    "B10",
    "Cargas Frigoríficas - Unitizadas",
    1.1228,
    1.1815,
    10.0,
    <NumberInput labelDescription="" size="w-3/4" />,
    100.68,
    105.96,
    200.0,
    <NumberInput labelDescription="" size="w-3/4" />
  ),
  createData(
    "B11",
    "Cargas Vivas",
    0.2327,
    0.2447,
    10.0,
    <NumberInput labelDescription="" size="w-3/4" />,
    100.68,
    105.96,
    200.0,
    <NumberInput labelDescription="" size="w-3/4" />
  ),
  createData(
    "B12",
    "Toras de Madeira Longa com Spreader Manual",
    0.617,
    0.6548,
    10.0,
    <NumberInput labelDescription="" size="w-3/4" />,
    167.79,
    177.47,
    200.0,
    <NumberInput labelDescription="" size="w-3/4" />
  ),
  createData(
    "B13",
    "Toras de Madeira Longa com Spreader Automático",
    0.8051,
    0.8452,
    10.0,
    <NumberInput labelDescription="" size="w-3/4" />,
    167.79,
    177.47,
    200.0,
    <NumberInput labelDescription="" size="w-3/4" />
  ),
  createData(
    "B14",
    "Mercadorias Diversas em Estaleiro - Break Bulk",
    0.2094,
    0.7957,
    10.0,
    <NumberInput labelDescription="" size="w-3/4" />,
    111.86,
    117.97,
    200.0,
    <NumberInput labelDescription="" size="w-3/4" />
  ),
  createData(
    "B15",
    "Mercadorias Diversas em Estaleiro - Projetos",
    0.2852,
    0.3005,
    10.0,
    <NumberInput labelDescription="" size="w-3/4" />,
    111.86,
    117.97,
    200.0,
    <NumberInput labelDescription="" size="w-3/4" />
  ),
  createData(
    "B90",
    "Conexo",
    "",
    "",
    10.0,
    <NumberInput labelDescription="" size="w-3/4" />,
    136.71,
    143.9,
    200.0,
    <NumberInput labelDescription="" size="w-3/4" />
  ),
  createData(
    "C1",
    "Produtos Agrícolas e Derivados, em Equipamento Manual",
    0.4744,
    0.4993,
    10.0,
    <NumberInput labelDescription="" size="w-3/4" />,
    100.68,
    105.96,
    200.0,
    <NumberInput labelDescription="" size="w-3/4" />
  ),
  createData(
    "C2",
    "Produtos Agrícolas e Derivados, em Equipamento Mecânico",
    0.7579,
    0.114,
    10.0,
    <NumberInput labelDescription="" size="w-3/4" />,
    100.68,
    105.96,
    200.0,
    <NumberInput labelDescription="" size="w-3/4" />
  ),
  createData(
    "C3",
    "Produtos Agrícolas e Derivados, em Equipamento Automático",
    0.0839,
    0.0883,
    10.0,
    <NumberInput labelDescription="" size="w-3/4" />,
    100.68,
    105.96,
    200.0,
    <NumberInput labelDescription="" size="w-3/4" />
  ),
  createData(
    "C4",
    "Produtos Minerais/Químicos, em Equipamento Manual",
    0.4648,
    0.4886,
    10.0,
    <NumberInput labelDescription="" size="w-3/4" />,
    100.68,
    105.96,
    200.0,
    <NumberInput labelDescription="" size="w-3/4" />
  ),
  createData(
    "C5",
    "Produtos Minerais/Químicos, em Equipamento Semi-Automático",
    0.21,
    0.221,
    10.0,
    <NumberInput labelDescription="" size="w-3/4" />,
    100.68,
    105.96,
    200.0,
    <NumberInput labelDescription="" size="w-3/4" />
  ),
  createData(
    "C6",
    "Produtos Minerais/Químicos, em Equipamento Automático e/ou Grab",
    0.2094,
    0.2206,
    10.0,
    <NumberInput labelDescription="" size="w-3/4" />,
    100.68,
    105.96,
    200.0,
    <NumberInput labelDescription="" size="w-3/4" />
  ),
  createData(
    "C7",
    "Cavaco Madeira",
    0.0611,
    0.0641,
    10.0,
    <NumberInput labelDescription="" size="w-3/4" />,
    100.68,
    105.96,
    200.0,
    <NumberInput labelDescription="" size="w-3/4" />
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
  createData3("Até R$1.100", 7.5, "-"),
  createData3("De R$1.100 a R$2.203,48", 9, 16.5),
  createData3("De R$2.203,49 a R$3.305,22", 12, 82.6),
  createData3("De R$3.305,22 até R$6.433,57", 14, 148.7),
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
        Estiva - Tabelas de Tarifas e Alíquotas
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
            *OBS: Nesta tabela os valores estão com RSR incluso (18,18%)
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
                <StyledTableCell align="center">
                  <strong>Parcela a deduzir (R$)</strong>
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
                  <StyledTableCell align="center">
                    {row.deduzir}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
          <p className="text-xs">
            Valor limite de contribuição "Teto" (R$ 751,97)
          </p>
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
          <p className="text-xs">Parcela por dependente (R$ 189,59)</p>
        </TableContainer>
      </div>
    </Fragment>
  );
}

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// 074-4	CRISTIANO DOMINGUES DOS SANTOS	HABILITADO
// 075-2	MARCIO ELI DE OLIVEIRA CAMPELO	HABILITADO
// 076-0	ALEX SANDER GONÇALVES SAYÃO	HABILITADO
// 077-9	FRANCISCO CARLOS DA SILVA AMARAL JUNIOR	HABILITADO
// 078-7	SERGIO LUIZ DUARTE	HABILITADO
// 079-5	RODRIGO DE LIMA GARCIA	HABILITADO
// 080-9	NUNO UANDER SIMÕES GOULART	HABILITADO
// 081-7	PAULO RENATO PIRES NUNES	HABILITADO
// 082-5	SHAMPARK ZORZOLLI ASSUMPÇÃO	HABILITADO
// 083-3	SÉRGIO ROBERTO DIAS COSTA	HABILITADO
// 084-1	THIAGO SOARES SILVEIRA	HABILITADO
// 085-0	LEANDRO SILVA DE FREITAS	HABILITADO
// 086-8	PAULO AUGUSTO BORGES SOUZA	HABILITADO
// 087-6	JORGE LEANDRO CHAUBET DE SOUZA	HABILITADO
// 088-4	LUIZ ALBERTO MOREIRA SARAIVA	HABILITADO
// 089-2	PAULO MARIANO DE ARAUJO	HABILITADO
// 090-6	DIEGO ANDRADE FERREIRA	HABILITADO
// 091-4	JORGE MARCELO AVILA GONÇALVES	HABILITADO
// 092-2	ALEXANDRE SODRE ESCOBAR	HABILITADO
// 093-0	JESUS CHAVES DE XAVIER	-
// 094-9	GLADIMIR DE VARGAS	HABILITADO
// 095-7	IRIS LACO	-
// 096-5	LEÔNCIO DE AGUIAR PEREIRA	HABILITADO
// 097-3	GILNEI LOPES FREIRE	HABILITADO
// 098-1	SIDNEI CARDOZO LOPES	HABILITADO
// 099-0	DIEGO NOBREGA MUNHOZ	HABILITADO
// 100-7	JOSE FELICIO SALAZART DA CONCEICAO	HABILITADO
// 101-5	PAULO ROBERTO DA SILVA ROSA	HABILITADO
// 102-3	CHARLES DOS SANTOS DA SILVA	HABILITADO
// 103-1	PAULO RONALDO OLIVEIRA BOM REIS	HABILITADO
// 104-0	MARLOM PAULO TRINDADE BOM REIS	HABILITADO
// 105-8	CLAUDIO FERNANDO FRASCO LOPES	HABILITADO
// 106-6	EDISON BASTOS CAMARGO	HABILITADO
// 107-4	JOSE CARLOS DE OLIVEIRA SILVEIRA	HABILITADO
// 108-2	ANTONIO MARCOS DA SILVA TEIXEIRA	HABILITADO
// 109-0	VILSON DE ALMEIDA	HABILITADO
// 110-4	ELSIO JOÃO LOUZADA MIRANDA	HABILITADO
// 111-2	CRISTIANO DE MELO OLIVEIRA	HABILITADO
// 112-0	LUIS CARLOS GARCIA DOS SANTOS	HABILITADO
// 113-9	RODRIGO MENDES OLEIRO	HABILITADO
// 114-7	MACIEL MEYER RODRIGUES	HABILITADO
// 115-5	HENRIQUE JORGE WEYMER	HABILITADO
// 116-3	PAULO ROBERTO INSAURRIAGA CABRAL	HABILITADO
// 117-1	ADAO SANTOS SILVA	HABILITADO
// 118-0	ARMANDO ISMERIO NUNES	HABILITADO
// 119-8	ALEX SANDRO MACHADO DE VARGAS	HABILITADO
// 120-1	ANTONIO UBIRATAN MENDES PERES	HABILITADO
// 121-0	CLEITON PIRES BRIESE	HABILITADO
// 122-8	ADÃO LUIZ DIOGO MONTEIRO	HABILITADO
// 123-6	LEONARDO DE OLIVEIRA PERES	HABILITADO
// 124-4	MAX DUTRA FRANCO	HABILITADO
// 125-2	WAGNER DA CUNHA BORBA	HABILITADO
// 126-0	ADEMAR RODRIGUES SOARES	HABILITADO
// 127-9	MILTON CESAR ANCHIETA BRIESE	HABILITADO
// 128-7	WILSON DIAS BARBOSA FILHO	HABILITADO
// 129-5	LUIZ ROBERTO DIAS DA SILVA	HABILITADO
// 130-9	ALESSANDRO PERES GARCIA	HABILITADO
// 131-7	MÁRCIO ROBERTO GOULART DE SOUZA	HABILITADO
// 132-5	ALEXANDER PIRES BORGES	HABILITADO
// 133-3	PAULO RICARDO RODRIGUES DE QUADROS	HABILITADO
// 134-1	CLEBER CRISTIANO OLIVEIRA URQUIA	-
// 135-0	JOSÉ PEDRO LOPES	HABILITADO
// 136-8	JULLIAN VELHO BARBOSA	HABILITADO
// 137-6	EDERSON LUIS SANTOS SILVEIRA	HABILITADO
// 138-4	ZENIR SILVEIRA LOPEZ	HABILITADO
// 139-2	CARLOS ALBERTO FORTES ANASTACIO	HABILITADO
// 140-6	PETERSON DA SILVA PINTO	HABILITADO
// 141-4	ELSON GONDRAN FRANCO	HABILITADO
// 142-2	ANTONIO CARLOS RODRIGUES	-
// 143-0	CRISTIANO SOUZA CAMPOS	HABILITADO
// 144-9	CRISTIANO SERGIO DE SOUZA	HABILITADO
// 145-7	JOSE CARLOS DOS SANTOS BATISTA	HABILITADO
// 146-5	SERGIO LUIS GOIS DE SOUZA	HABILITADO
// 147-3	FRANCISCO DE ASSIS FEITEIRO FLORINDO	HABILITADO
// 148-1	CHARLES DE MELLO COSTA	HABILITADO
// 149-0	MARIO SILVA DOMINGUES	HABILITADO
// 150-3	THIAGO DOS SANTOS SÁ	HABILITADO
// 151-1	JOEL ARAUJO DE SÁ	HABILITADO
// 152-0	OSMAR DA ROSA GONCALVES	HABILITADO
// 153-8	THOMAZ SOUZA RODRIGUES	HABILITADO
// 154-6	VANDERLEI RODRIGUES DOS SANTOS	-
// 155-4	EDUARDO NUNES NUNES	HABILITADO
// 156-2	VICENTE MENDES DA SILVA	HABILITADO
// 157-0	WAGNER ALGACABURO FREITAS	HABILITADO
// 158-9	VOLMER VELEDA MACIEL	HABILITADO
// 159-7	LUIZ FERNANDO ARRUDA CARDOZO	HABILITADO
// 160-0	JORGE DINARTE CHAVES DE XAVIER	HABILITADO
// 161-9	MICHEL WACHHOLZ	HABILITADO
// 162-7	PAULO ROBERTO DE OLIVEIRA NUNES	HABILITADO
// 163-5	NERI BRAGA SOARES	HABILITADO
// 164-3	VALDIC AMARAL PEREIRA	HABILITADO
// 165-1	UBIRAJARA ALVES LOBO	HABILITADO
// 166-0	JORGE ANTONIO FERREIRA DA SILVA	HABILITADO
// 167-8	JOSE CARLOS MARQUES DE SOUZA	HABILITADO
// 168-6	MARCO AURÉLIO DE OLIVEIRA MENDES	-
// 169-4	MATHEUS OBIEDO GARCIA	HABILITADO
// 170-8	PAULO EDSON DA ROSA GARCIA	-
// 171-6	MIGUEL FONSECA NEGREIRA	HABILITADO
// 172-4	ATILIANO PRATES DE VARGAS JUNIOR	HABILITADO
// 173-2	RONALDO GUTIERREZ CAMPELLO	-
// 174-0	LEANDRO VALENTE DE ARAGÃO	HABILITADO
// 175-9	THIAGO NUNES RAMOS	HABILITADO
// 176-7	DIEGO DA CONCEIÇÃO DUTRA	HABILITADO
// 177-5	JORGE DIAS FERREIRA	HABILITADO
// 178-3	JOEL PIRES DA SILVEIRA	HABILITADO
// 179-1	JOSIAS DA SILVA PORTO	-
// 180-5	CLAUDIO LUIZ LAFONTAINHE	HABILITADO
// 181-3	LEVI RIBEIRO VASCONCELLOS	HABILITADO
// 182-1	WAGNER MACHADO DUARTE	HABILITADO
// 183-0	CLAUDIOMIRO CHAVES	-
// 184-8	RENATO CORREA MIRAPALHETA	-
// 185-6	OTAVIO CARLOS DA CONCEIÇÃO	HABILITADO
// 186-4	WILLIAM DA SILVA MACEDO	-
// 187-2	GELSON LEAL DE CARVALHO	HABILITADO
// 188-0	MARCO ANTONIO MACEDO FURTADO	HABILITADO
// 189-9	NATANIEL LEMOS SOARES	HABILITADO
// 190-2	ABENGAIR PIMENTEL SANTEJANO	HABILITADO
// 191-0	REGINALDO PINTO FERREIRA	HABILITADO
// 192-9	FRANCISCO CARLOS FERREIRA DE BARROS	HABILITADO
// 193-7	ROBERTO BRIAO PAIVA	HABILITADO
// 194-5	ADELAR DUTRA	-
// 195-3	CRISTIANO SILVA DE OLIVEIRA	HABILITADO
// 196-1	FRANCISCO NILMAR ALMEIDA	HABILITADO
// 197-0	EVERTON LUIZ RODRIGUES DA CONCEIÇÃO	HABILITADO
// 198-8	ALESSANDRO CORREA TAVARES	HABILITADO
// 199-6	RODRIGO OLMEDO SILVEIRA	HABILITADO
// 200-3	HECTOR MARIO VASQUES DE ALMEIDA	HABILITADO
// 201-1	ALEX SANDRO FURTADO MADRUGA	HABILITADO
// 202-0	JOSE CARLOS DE MOURA DOMINGUES	HABILITADO
// 203-8	KÁTIA CAROLINE OLSSON PERINAZZO	HABILITADO
// 204-6	JOSE MARIO GOVEA CAVALHEIRO	HABILITADO
// 205-4	CARLOS FERREIRA ROLDÃO	HABILITADO
// 206-2	DIOMAR ANTONIO BALDEZ PINHO	HABILITADO
// 207-0	MÁRIO MENGER DA SILVA JUNIOR	HABILITADO
// 208-9	ARANY GARCIA VIEIRA	HABILITADO
// 209-7	MARCOS ROGERIO DOS SANTOS LIMA	HABILITADO
// 210-0	RUDNEI CARDOZO DA SILVA	HABILITADO
// 211-9	HÉLIO GAUTÉRIO DE SÁ JUNIOR	HABILITADO
// 212-7	DIEGO SAGGIOMO CANEZ	HABILITADO
// 213-5	EDINELLE GAUTERIO TAVARES	HABILITADO
// 214-3	ROBERTO DUTRA DE MELO	HABILITADO
// 215-1	MÁRCIO MESSIAS MOREIRA	-
// 216-0	DILVANIR SILVA DOMINGUES	HABILITADO
// 217-8	JORGE LUIZ DA SILVA BORDA	-
// 218-6	JOÃO CARLOS BASTOS LEAL	-
// 219-4	MAICON AMARAL DO AMARAL	-
// 220-8	MICHAEL NUNES DA LUZ	-
// 221-6	RONER LUIZ DUARTE DOMINGUES	HABILITADO
// 222-4	THIAGO LIMA TORRES	HABILITADO
// 223-2	EMERSON VIANNA PEREIRA	HABILITADO
// 224-0	RUDNEI TORAL LIMA	HABILITADO
// 225-9	OILDO AMARAL	-
// 226-7	WILLIAM BASTOS FERREIRA	HABILITADO
// 227-5	ARCENI DA CUNHA MOREIRA	HABILITADO
// 228-3	SANDRO GUASTUCI NUNES	HABILITADO
// 229-1	GILDOBERTO DE SOUZA MARTINS	HABILITADO
// 230-5	EDIMAR HILARIO JOSE DE MATTOS	HABILITADO
// 231-3	JOAO CARLOS LEITE DE OLIVEIRA	HABILITADO
// 232-1	LUIZ OLIVEIRA SOULUE	HABILITADO
// 233-0	JOAO HILARIO SOUZA LOPES	HABILITADO
// 234-8	VALCIR DIAS ALMEIDA	HABILITADO
// 235-6	IBRAHIM SILVEIRA CAETANO	HABILITADO
// 236-4	ADMILSON DE SOUZA SANTOS	HABILITADO
// 237-2	DANIEL DOS SANTOS MOREIRA	HABILITADO
// 238-0	PAULO 	-
// 239-9	GILIERDI MOURA DE MORAES	HABILITADO
// 240-2	CLAUDINEI MARINI CARAMEZ JUNIOR	HABILITADO
// 241-0	HUGO FORTES ANASTACIO	HABILITADO
// 242-9	BRUNO SOUZA DUARTE	HABILITADO
// 243-7	FELIPE ANDRES BLANCO	HABILITADO
// 244-5	PAULO RICARDO SERRA DOS SANTOS	HABILITADO
// 245-3	JAIR FRANCISCO SOARES	HABILITADO
// 246-1	GETULIO COLVARA DE VARGAS	HABILITADO
// 247-0	SUEDI MARIANO DA COSTA	HABILITADO
// 248-8	RONALDO PINTO VIEIRA	HABILITADO
// 249-6	ANTONIO CARLOS DE CASTRO ASSUMPÇÃO	HABILITADO
// 250-0	JOSE CARLOS QUEVEDO TAVARES	HABILITADO
// 251-8	RENAN LIMA BOCK	HABILITADO
// 252-6	DEIVID CARDOSO OLIVEIRA	HABILITADO
// 253-4	LUIS CLAUDIO GONCALVES VAZ	HABILITADO
// 254-2	JOAO BATISTA MACHADO DE LIMA	HABILITADO
// 255-0	RODRIGO DOS SANTOS BATISTA	HABILITADO
// 256-9	ADAO PINTO DE OLIVEIRA	HABILITADO
// 257-7	CARLOS FERNANDO GARCIA BASTOS	HABILITADO
// 258-5	BAIRO GREVI BARCELOS SOARES	HABILITADO
// 259-3	RODRIGO BANDEIRA DA SILVA	-
// 260-7	LUCIANO OLIVEIRA SOULUE	HABILITADO
// 261-5	FAUSTINO AGARRALUA DO PRADO	HABILITADO
// 262-3	FELIPE SOARES NASCIMENTO	HABILITADO
// 263-1	FERNANDO ROCHA FARIAS	HABILITADO
// 264-0	MARCIO SIMÕES LOPES SARAIVA	HABILITADO
// 265-8	FRANCISCO DE ASSIS MADRUGA PEDRA	HABILITADO
// 266-6	GUILHERME WENDLANT	HABILITADO
// 267-4	SOLISMAR VAZ	HABILITADO
// 268-2	PEDRO RICARDO ZANINI FERNANDES	HABILITADO
// 269-0	JORGE LUIS MELO RODRIGUES	HABILITADO
// 270-4	DIONE DA SILVA DOMINGUES	HABILITADO
// 271-2	MARIO LUIS NASCIMENTO DOS SANTOS	HABILITADO
// 272-0	EDMILSON XAVIER PINHEIRO	-
// 273-9	JOSÉ ROBERTO SANCHES GONÇALVES	-
// 274-7	ANDRE DIAS DOS SANTOS	HABILITADO
// 275-5	JULIO CESAR DE OLIVEIRA SOARES	HABILITADO
// 276-3	VALDIR RODRIGUES DA COSTA	-
// 277-1	CARLOS ALBERTO LOPES DA COSTA	HABILITADO
// 278-0	LEANDRO CUSTÓDIO DA ROSA	HABILITADO
// 279-8	ANDERSON MACHADO RODRIGUES	HABILITADO
// 280-1	DANIEL OLIVEIRA COSTA	HABILITADO
// 281-0	ALEX SANDRO PIRES DOS SANTOS	-
// 282-8	SILVIO ROBERTO MUNHÓS DE MENEZES	HABILITADO
// 283-6	EVALDO BORGES MOREIRA	HABILITADO
// 284-4	ESEQUIEL KISNER DE CARVALHO	-
// 285-2	ALCINDO SOLLA	HABILITADO
// 286-0	ALAN DE ALMEIDA LEÃO	-
// 287-9	WALDEMAR AGUIAR CORPES	HABILITADO
// 288-7	PEDRO FORTES ANASTACIO	HABILITADO
// 289-5	DIRCEU NERI DE SA	HABILITADO
// 290-9	JORGE CARLOS COSTA RODRIGUES	HABILITADO
// 291-7	ADEMAR ANTONIO BARBOSA	HABILITADO
// 292-5	ANDERSON CLAITON SOARES CASARTELLI	HABILITADO
// 293-3	TIAGO DA SILVA MACHADO	HABILITADO
// 294-1	XISTO COSTA FILHO	HABILITADO
// 295-0	JOSE LUIZ DA SILVA	HABILITADO
// 296-8	NELSON MIRANDA	HABILITADO
// 297-6	ARNOLDO ALMEIDA NUNES	HABILITADO
// 298-4	ADAO LOPES SAYAO	HABILITADO
// 299-2	ILCEU FERREIRA MACHADO	HABILITADO
// 300-0	VITOR BASTOS LEAL	HABILITADO
// 301-8	EDISON LOPES DIAS	HABILITADO
// 302-6	ANDERSON JOSE LOPES RETZLAFF	HABILITADO
// 303-4	DIEGO DA COSTA SCHÜLLER	HABILITADO
// 304-2	LORI SILVEIRA JUNIOR	HABILITADO
// 305-0	LUIZ FERNANDO PINHO MICHAELLO	HABILITADO
// 306-9	RICHER DA SILVA AGUIAR	HABILITADO
// 307-7	SERGIO LUIS GOULART MIRANDA	HABILITADO
// 308-5	VAGNER FERREIRA BENITEZ	HABILITADO
// 309-3	WESLLEY WAILLA VELEDA	HABILITADO
// 310-7	ARNALDO ROSA DA SILVA	HABILITADO
// 311-5	PATRICK ALVES KRUGER	HABILITADO
// 312-3	VAGNER CARRIR DE LEMOS	HABILITADO
// 313-1	ALEX FONSECA DE SOUZA	HABILITADO
// 314-0	OSWALDO DA CONCEICAO PINHEIRO	HABILITADO
// 315-8	SILTO HELENO VAZ	HABILITADO
// 316-6	ALTAMIR GONÇALVES FREITAS	HABILITADO
// 317-4	CARLOS SILVA DOMINGUES JUNIOR	HABILITADO
// 318-2	LUIZ EDUARDO ALMEIDA DA COSTA	HABILITADO
// 319-0	CLAUDINEI PEREIRA DA SILVA	HABILITADO
// 320-4	OROCI FERREIRA	HABILITADO
// 321-2	MARCELO COSTA SALUM	HABILITADO
// 322-0	PEDRO OTTO CAMPELO	HABILITADO
// 323-9	MARCELO MACHADO MOREIRA	HABILITADO
// 324-7	MATEUS FRANCISCO MEDEIROS PETRY	HABILITADO
// 325-5	RICARDO ALVES DE OLIVEIRA JUNIOR	HABILITADO
// 326-3	BEVERLLY SORIA ALVES PERES	HABILITADO
// 327-1	BRUNO DOS SANTOS MARTINS	HABILITADO
// 328-0	ANDRE LUIZ FERREIRA FERRAZ	HABILITADO
// 329-8	JORGE LUIS SOUSA DA SILVA	HABILITADO
// 330-1	DENNYAN CAVALHEIRO DOS SANTOS	HABILITADO
// 331-0	JOVER DA COSTA FURTADO	HABILITADO
// 332-8	LEANDRO DA SILVA DE CASTRO	HABILITADO
// 333-6	ADÃO MORAES MOREIRA	-
// 334-4	LYNCOL JESUS DA COSTA ZORZOLLI	HABILITADO
// 335-2	ADALBERTO CARVALHO DE SOUZA	HABILITADO
// 336-0	BRYAN TIMM BRANCO	HABILITADO
// 337-9	ELTON TIAGO DE OLIVEIRA VERGARA	HABILITADO
// 338-7	PAULO VICTOR CRIZEL GONÇALVES	HABILITADO
// 339-5	ROMULO MADRUGA FURTADO	HABILITADO
// 340-9	FRANTIESCO PORTO COELHO	HABILITADO
// 341-7	VANDERLEI BEZERRA NUNES	HABILITADO
// 342-5	VALTER NELO NOBRE NUNES	-
// 343-3	JOSE ILDEFONSO PEREIRA DA SILVA	HABILITADO
// 344-1	ANDREW MENDES SCHMITZ	HABILITADO
// 345-0	EDUARDO GONÇALVES SOUSA	HABILITADO
// 346-8	FERNANDO FARIAS DA ROSA	HABILITADO
// 347-6	RÉGIS MOREIRA ANDRADE	HABILITADO
// 348-4	EDSON CLARO RODRIGUES	HABILITADO
// 349-2	JOHN MICHEL SANCHEZ DIAS	HABILITADO
// 350-6	PABLO BRIESE MARTINS	HABILITADO
// 351-4	HENRIQUE VAZ LOREA	-
// 352-2	CARLOS ROBERTO VIANNA DE VIANNA	-
// 353-0	ACELINO CANDIDO XAVIER RODRIGUES	HABILITADO
// 354-9	LUIZ CARLOS GALLO	-
// 355-7	LUIZ CARLOS NUNES ARRUDA	HABILITADO
// 356-6	PAULO RENATO SILVA SILVEIRA	-
// 357-3	PAULO ROBERTO SILVA FREITAS	-
// 358-1	JULIO CESAR SOUZA BERCHON DES ESSARTS	HABILITADO
// 359-0	CLAUDIO REGINALDO SARAIVA DA ROSA	HABILITADO
// 360-3	HELIO ARTUR SILVEIRA	HABILITADO
// 361-1	ZELIMAR DA CUNHA LOPES	HABILITADO
// 362-0	KAUA WAILLA DE ALMEIDA	HABILITADO
// 363-8	RUDIMAR MENDES SILVA	-
// 364-6	LUIUZ ANTONIO SILVA ROCHA	-
// 365-4	AIRTON DE OLIVEIRA MENDES	HABILITADO
// 366-2	LUIZ CARLOS QUEIROZ	HABILITADO
// 367-0	ADILAR ALCANTARA PARADEDA	HABILITADO
// 368-9	ADAO MENDES NUNES	HABILITADO
