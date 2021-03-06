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

function createData(number, name, actitve) {
  return {
    number,
    name,
    actitve,
  };
}

const rows = [
  createData("001-9 GEOVANI DOS SANTOS VAZ -"),
  createData("002-7 ANDRÉ LUIZ FERNANDES AMARILHO HABILITADO"),
  createData("003-5	GABRIEL BENERI CLARO	HABILITADO"),
  createData("004-3	ADALBERTO ORTIZ DE ARAGÃO	HABILITADO"),
  createData("005-1	JEFERSON VASCONCELLOS GOMES	-"),
  createData("006-0	JOSE IMAR DA SILVEIRA	HABILITADO"),
  createData("007-8	TIAGO DA SILVA FROES	HABILITADO"),
  createData("008-6	DALMIRO DA COSTA LUCAS	-"),
  createData("009-4	GUSTAVO UBAL HAFELE	HABILITADO"),
  createData("010-8	LUIZ ANDRÉ CARDOSO MARTINS	HABILITADO"),
  createData("011-6	MAICON GAUTÉRIO BENGERT	HABILITADO"),
  createData("012-4	FRANK IRAM ROCHA DOS SANTOS	HABILITADO"),
  createData("013-2	YAN ROCHA DE LIMA	HABILITADO"),
  createData("014-0	PAULO CESAR RODRIGUES LEIRIA	-"),
  createData("015-9	LUIZ FRANCISCO MARIANO DE ARAUJO	HABILITADO"),
  createData("016-7	JORGE ALBERTO DA SILVA SOULUE FILHO	HABILITADO"),
  createData("017-5	BRUNO COSTA DOS SANTOS	HABILITADO"),
  createData("018-3	LUIZ ALBERTO CHAGAS CAMARGO	HABILITADO"),
  createData("019-1	ANTONIO OLAVO CAMPOS	-"),
  createData("020-5	CLEIDE ALAOR PIVA CASARTELLI	HABILITADO"),
  createData("021-3	JADER CARDOSO NUNES	-"),
  createData("022-1	FRANCISCO DE ASSIS DA ROSA FLORINDO	HABILITADO"),
  createData("023-0	GILMAR GONDRAN FRANCO NIGRO	HABILITADO"),
  createData("024-8	JEAN RICARDO BARBOSA MACIEL	HABILITADO"),
  createData("025-6	JOÃO FÁBIO PADILHA NUNES	HABILITADO"),
  createData("026-4	LUIZ PAULO DUARTE SILVEIRA	HABILITADO"),
  createData("027-2	CRISTIANO SARAIVA SIEBRE	HABILITADO"),
  createData("028-0	PAULO CESAR AMARAL	HABILITADO"),
  createData("029-9	DANER ALMEIDA DE MATTOS	-"),
  createData("030-2	ADRIANO URQUIA PAIVA	-"),
  createData("031-0	JOSE ANALIO COUGO MORALES	HABILITADO"),
  createData("032-9	VALDINEI AMARAL ALVES	HABILITADO"),
  createData("033-7	MARCO ANTONIO PEREIRA XAVIER	HABILITADO"),
  createData("034-5	CRISTIAN CARVALHO DA SILVA	HABILITADO"),
  createData("035-3	EVERTON RODRIGUES ROSA	HABILITADO"),
  createData("036-1	DYAIMIS DOS SANTOS LILJA	HABILITADO"),
  createData("037-0	BLAIR MOREIRA SARAIVA	HABILITADO"),
  createData("038-8	AMADEU REY JESUS	HABILITADO"),
  createData("039-6	ALEX SANDRO BAZARELLI LEAL	-"),
  createData("040-0	EDER OLIVEIRA DA COSTA	HABILITADO"),
  createData("041-8	GEDER DOS SANTOS CARDOSO	-"),
  createData("042-6	FÁBIO DE MELO TAROUCO	HABILITADO"),
  createData("043-4	CLAUDIO DE ALMEIDA	HABILITADO"),
  createData("044-2	ALEXSANDRO MARTINS CUNHA	HABILITADO"),
  createData("045-0	ELIANE GOMES NERIS	HABILITADO"),
  createData("046-9	JOÃO DAVID DE ÁVILA OLIVEIRA	HABILITADO"),
  createData("047-7	RUY CAMARGO GOMES	HABILITADO"),
  createData("048-5	CLEBER DOMINGUES HEIDEMANN	HABILITADO"),
  createData("049-3	ENILDO DE OLIVEIRA BASTOS	HABILITADO"),
  createData("050-7	DINO RODRIGUES NUNES	-"),
  createData("051-5	ROBERSON NOBREGA GARCIA	HABILITADO"),
  createData("052-3	ALEXANDRE COSTA DIAS	HABILITADO"),
  createData("053-1	VANDERLEI LEMOS DA CONCEIÇÃO	HABILITADO"),
  createData("054-0	VINICIUS CHAVES SIMÕES	HABILITADO"),
  createData("055-8	PEDRO ROBERTO D AVILA SILVEIRA	HABILITADO"),
  createData("056-6	RAFAEL CORRÊA DE SOUZA	HABILITADO"),
  createData("057-4	ANTONIO FELICIANO PINTO	HABILITADO"),
  createData("058-2	WILSON JORGE GOMES	-"),
  createData("059-0	ALISSON CORREA BALLESTER	HABILITADO"),
  createData("060-4	JORGE ALBERTO PEREIRA MACHADO	HABILITADO"),
  createData("061-2	TONI ANDERSON MACHADO DA ROCHA	HABILITADO"),
  createData("062-0	MARCO AURELIO MEDEIROS SANTOS	HABILITADO"),
  createData("063-9	CLÁUDIO ADÃO MACKMILLAN MEDEIROS	HABILITADO"),
  createData("064-7	EVERTON LUIZ MATTOS DIAS	HABILITADO"),
  createData("065-5	EDUARDO SUANES DUTRA	HABILITADO"),
  createData("066-3	VANY CLAY PIRES COSTA	HABILITADO"),
  createData("067-1	JOAO FERREIRA FERRAZ	HABILITADO"),
  createData("068-0	VANDERLEI BATISTA DA SILVEIRA	HABILITADO"),
  createData("069-8	GUILHERME SANTOS COSTA	-"),
  createData("070-1	MARCELO OLIVEIRA FARIAS	HABILITADO"),
  createData("071-0	SAIMON RIJO SANTOS	HABILITADO"),
  createData("072-8	ADEMAR FERNANDES SALLES	HABILITADO"),
  createData("073-6	EDISON FERNANDES FONSECA	HABILITADO"),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
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
      </div>
    </Fragment>
  );
}

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
