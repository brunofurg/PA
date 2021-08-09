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



const useStyles = makeStyles({ table: { minWidth: 50, }, });


export default function RelacaoEstivadores()  {
  const classes = useStyles();
  return (
    <>
      <h1>
        <strong>
          Porto do Rio Grande - Convenção Coletiva de Trabalho (Vigência 2020-2022)
        </strong>
      </h1>
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


    </>
  );
}



"001-9", "Geovani dos Santos Vaz"
"002-7		André Luiz Fernandes Amarilho (Corsan)
"003-5		Gabriel Beneri Claro
"004-3		Adalberto Ortiz de Aragão
"005-1		Jeferson Vasconcellos Gomes (Caibiga Filho)
"006-0		Jose Imar da Silveira
"007-8		Tiago da Silva Froes (Fonfon)
"008-6		Dalmiro Lucas da Costa
"009-4		Gustavo Ubal Hafele (Guanabara)
"010-8		Luiz André Cardoso Martins
"011-6		Maicon Gauterio Bengert (Ninja)
"012-4		Frank Iram Rocha dos Santos (Lula Molusco)
"013-2		Yan Rocha de Lima
"014-0		Paulo Cesar Rodrigues Leiria (Pá Furada)
"015-9		Luiz Francisco Mariano de Araujo (Lua)
"016-7		Jorge Alberto da Silva Soulue Filho
"017-5		Bruno Costa dos Santos (Banrisul)
"018-3		Luiz Alberto Chagas Camargo (Pico)
"019-1		Antonio Olavo Campos
'020-5		Cleide Alaor Piva Casartelli
021-3		Jader Cardoso Nunes (Varal)
022-1		Francisco de Assis da Rosa Florindo (Chico)
023-0		Gilmar Gondran Franco Nigro
024-8		Jean Ricardo Barbosa Maciel
025-6		João Fábio Padilha Nunes
026-4		Luiz Paulo Duarte Silveira (Sarará)
027-2		Cristiano Saraiva Siebre (Bolachinha)
028-0		Paulo Cesar Amaral
029-9		Daner Almeida de Mattos (DJ)
030-2		Adriano Urquia Paiva (Cazuza)
031-0		Jose Analio Cougo Morales
032-9		Valdinei Amaral Alves
033-7		Marco Antonio Pereira Xavier
034-5		Cristian Carvalho da Silva
035-3		Everton Rodrigues Rosa (Fome Zero)
036-1		Dyaimis dos Santos Lilja
037-0		Blair Moreira Saraiva (Boy)
038-8		Amadeu Rey Jesus
039-6		Alex Sandro Bazarelli Leal
040-0		Eder Oliveira da Costa
041-8		Geder dos Santos Cardoso (Fiscal)
042-6		Fábio de Melo Tarouco
043-4		Claudio de Almeida (Quietinho)
044-2		Alexsandro Martins Cunha (Xuxa)
045-0		Eliane Gomes Neris (Cinzinha)
046-9		João David de Ávila Oliveira
047-7		Ruy Camargo Gomes (Caibiga Pai)
048-5		Cleber Domingues Heidemann (Salsicha/Alemão)
049-3		Enildo de Oliveira Bastos
050-7		Dino Rodrigues Nunes
051-5		Roberson Nobrega Garcia (Robinho)
052-3		Alexandre Costa Dias (Prof Girafales)
053-1		Vanderlei Lemos da Conceição
054-0		Vinicius Chaves Simões (PM)
055-8		Pedro Roberto D'Avila Silveira (Bebeto)
056-6		Rafael Corrêa de Souza (Boneco)
057-4		Antonio Feliciano Pinto (Toninho)
058-2		Wilson Jorge Gomes
059-0		Alisson Correa Ballester
060-4		Jorge Alberto Pereira Machado
061-2		Toni Anderson Machado da Rocha
062-0		Marco Aurelio Medeiros Santos (Marquinhos)
063-9		Cláudio Adão Mackmillan Medeiros (Dinho)
064-7		Everton Luiz Mattos Dias (Vaqueiro)
065-5		Eduardo Suanes Dutra (Cassineiro)
066-3		Vany Clay Pires Costa (Caveira)
067-1		João Ferreira Ferraz
068-0		Vanderlei Batista da Silveira
069-8		Guilherme Santos Costa (Linguinha)
070-1		Marcelo Oliveira Farias (IGP)
071-0		Saimon Rijo Santos
072-8		Ademar Fernandes Salles (Indio Louco)
073-6		Edison Fernandes Fonseca (Bigode)
074-4		Cristiano Domingues dos Santos (Soneca)
075-2		Márcio Eli de Oliveira Campelo
076-0		Alex Sander Gonçalves Sayão (Sayão)
077-9		Francisco Carlos da Silva Amaral Junior (Chiquinho)
078-7		Sérgio Luiz Duarte
079-5		Rodrigo de Lima Garcia (Bombeiro)
080-9		Nuno Uander Simões Goulart
081-7		Paulo Renato Pires Nunes (Renatinho)
082-5		Shampark Zorzolli Assumpção
083-3		Sérgio Roberto Dias Costa (Dentista)
084-1		Thiago Soares Silveira (Corsan)
085-0		Leandro Silva de Freitas (Viola)
086-8		Paulo Augusto Borges Souza (É eu)
087-6		Jorge Leandro Chaubet de Souza
088-4		Luiz Alberto Moreira Saraiva
089-2		Paulo Mariano de Araujo
090-6		Diego Andrade Ferreira (Iluminati)
091-4		Jorge Marcelo Avila Gonçalves (Shrek)
092-2		Alexandre Sodre Escobar (Bitoca)
093-0		Jesus Chaves de Xavier
094-9		Gladimir de Vargas (Beterraba)
095-7		Iris Laco
096-5		Leôncio de Aguiar Pereira
097-3		Gilnei Lopes Freire
098-1		Sidnei Cardozo Lopes (Sid Careca)
099-0		Diego Nobrega Munhoz (SMCSU)
100-7		José Felicio Salazart da Conceição (Michael Jackson)
101-5		Paulo Roberto da Silva Rosa (Paulinho Mangueira/Assobio)
102-3		Charles dos Santos da Silva
103-1		Paulo Ronald Oliveira Bom Reis
104-0		Marlom Paulo Trindade Bom Reis
105-8		Claudio Fernando Frasco Lopes
106-6		Edison Bastos Camargo
107-4		José Carlos de Oliveira Silveira
108-2		Antonio Marcos da Silva Teixeira (Porquinho)
109-0		Vilson de Almeida (Vilssão)
110-4		Elsio João Louzada Miranda
111-2		Cristiano de Melo Oliveira (Polêmica/Touca do Chaves)
112-0		Luis Carlos Garcia dos Santos
113-9		Rodrigo Mendes Oleiro (Sapinho Novo)
114-7		Maciel Meyer Rodrigues
115-5		Henrique Jorge Weymer
116-3		Paulo Roberto Insaurriaga Cabral (Paulinho Ex-Presidente)
117-1		Adão Santos Silva
118-0		Armando Ismerio Nunes
119-8		Alex Sandro Machado de Vargas
120-1		
121-0		Cleiton Pires Briese (Fred)
122-8		Adão Luiz Diogo Monteiro (Ronaldinho)
123-6		Leonardo de Oliveira Peres (Beraba)
124-4		Max Dutra Franco
125-2		Wagner da Cunha Borba (Bozó)
126-0		Ademar Rodrigues Soares
127-9		Milton Cesar Anchieta Briese
128-7		Wilson Dias Barbosa Filho (Carioca)
129-5		Luiz Roberto Dias da Silva (Sapinho antigo)
130-9		Alessandro Peres Garcia (Click)
131-7		Márcio Roberto Goulart de Souza (VigilanteSanitário)
132-5		Alexander Pires Borges (4 Coxa)
133-3		Paulo Ricardo Rodrigues de Quadros
134-1		Cleber Cristiano Oliveira Urquia
135-0		José Pedro Lopes (Pastor Novo)
136-8		Jullian Velho Barbosa
137-6		Ederson Luis Santos Silveira (Edinho)
138-4		Zenir Silveira Lopez (Pastor)
139-2		Carlos Alberto Fortes Anastacio (Tininho)
140-6		Peterson da Silva Pinto (Corredor)
141-4		Elson Gondran Franco (Turco)
142-2		Antonio Carlos Rodrigues (Tuca)
143-0		Cristiano Souza Campos
144-9		Cristiano Sérgio de Souza (Cadum)
145-7		José Carlos dos Santos Batista (Zé Gordo)
146-5		Sérgio Luiz Góis de Souza (Simpático)
147-3		Francisco de Assis Feiteiro Florindo (Chicão)
148-1		Charles de Mello Costa
149-0		Mario Silva Domingues
150-3		Thiago dos Santos Sá (Dançarino)
151-1		Joel Araujo de Sá (Filho Pepeu)
152-0		Osmar da Rosa Gonçalves
153-8		Thomaz Souza Rodrigues (Perdigão)
154-6		Vanderlei Rodrigues dos Santos
155-4		Eduardo Nunes Nunes (Capincho)
156-2		Vicente Mendes da Silva
157-0		Wagner Algacaburo Freitas (Cinzinha)
158-9		Volmer Veleda Maciel (Irmão Flávio Vigilante)
159-7		Luiz Fernando Arruda Cardozo (Batatinha)
160-0		Jorge Dinarte Chaves de Xavier (Nati)
161-9		Michel Wachholz
162-7		Paulo Roberto de Oliveira Nunes
163-5		Neri Braga Soares
164-3		Valdic Amaral Pereira
165-1		Ubirajara Alves Lobo (Mancha)
166-0		Jorge Antonio Ferreira da Silva
167-8		José Carlos Marques de Souza
168-6		Marco Aurélio de Oliveira Mendes (Quinho)
169-4		Matheus Obiedo Garcia
170-8		Paulo Edson da Rosa Garcia
171-6		Miguel Fonseca Negreira
172-4		Atiliano Prates de Vargas Junior (Ninho)
173-2		Ronaldo Gutierrez Campello (Churrasquinho)
174-0		Leandro Valente de Aragão (Negativo)
175-9		Thiago Nunes Ramos (da Barra)
176-7		Diego da Conceição Dutra (Tomate Filho)
177-5		Jorge Dias Ferreira
178-3		Joel Pires da Silveira
179-1		Josias da Silva Porto (Bicudo)
180-5		Claudio Luiz Lafontainhe
181-3		Levi Ribeiro Vasconcellos
182-1		Wagner Machado Duarte
183-0		Claudiomiro Chaves
184-8		Renato Correa Mirapalheta (CPATP)
185-6		Otavio Carlos da Conceição
186-4		William da Silva Macedo
187-2		Gelson Leal de Carvalho (Marinheiro)
188-0		Marco Antonio Macedo Furtado (Marcão)
189-9		Nataniel Lemos Soares
190-2		Abengair Pimentel Santejano
191-0		Reginaldo Pinto Ferreira
192-9		Francisco Carlos Ferreira de Barros (Meia Tala)
193-7		Roberto Brião Paiva (Beto Gatão)
194-5		Adelar Dutra (Tomate Pai)
195-3		Cristiano Silva de Oliveira (Corsan)
196-1		Francisco Nilmar Almeida
197-0		Everton Luiz Rodrigues da Conceição (Ecovix)
198-8		Alessandro Correa Tavares (Marreta)
199-6		Rodrigo Olmedo Silveira (Roquinho)
200-3		Hector Mario Vasques de Almeida (Burusqueta)
201-1		Alex Sandro Furtado Madruga (Shee-ra)
202-0		José Carlos de Moura Domingues (Boludo)
203-8		Kátia Caroline Olsson Perinazzo
204-6		José Mario Govea Cavalheiro
205-4		Dilio Alberto Baldez
206-2		Diomar Antonio Baldez Pinho
207-0		Mário Menger da Silva Junior
208-9		Arany Garcia Vieira
209-7		Marcos Rogério dos Santos Lima
210-0		Rudnei Cardozo da Silva (Mais Velho)
211-9		Hélio Gautério de Sá Júnior (Helinho)
212-7		Diego Saggiomo Canez (Gnomo)
213-5		Edinelle Gautério Tavares (Cenourão Filho)
214-3		Roberto Dutra de Melo (Pirulito)
215-1		Márcio Messias Moreira (Moreira)
216-0		Dilvanir Silva Domingues (Castelhano)
217-8		Jorge Luiz da Silva Borda
218-6		João Carlos Bastos Leal (Bagé) 
219-4		Maicon Amaral do Amaral
220-8		Michael Nunes da Luz (CPATP)
221-6		Roner Luiz Duarte Domingues (Tigrilo)
222-4		Thiago Lima Torres (CPATP)
223-2		Emerson Vianna Pereira
224-0		Rudnei Toral Lima (Baixote)
225-9		Oildo Amaral
226-7		William Bastos Ferreira (Babão)
227-5		Arceni da Cunha Moreira
228-3		Sandro Gastuci Nunes
229-1		Gildoberto de Souza Martins (Betinho)
230-5		Edimar Hilario Jose de Mattos (Baiano)
231-3		João Carlos Leite de Oliveira (Televisão)
232-1		Luiz Oliveira Soulue
233-0		João Hilário Souza Lopes
234-8		Valcir Dias Almeida
235-6		Ibrahim Silveira Caetano
236-4		Admilson de Souza Santos (ADM)
237-2		Daniel dos Santos Moreira (DetonaRalph)
238-0		Mosart Amaro dos Santos
239-9		Gilierdi Moura de Moraes (Bombeiro)
240-2		Claudinei Marini Caramez Jr (Brutus)
241-0		Hugo Fortes Anastacio (Magrão)
242-9		Bruno Souza Duarte
243-7		Felipe Andres Blanco (Guarda Portuario)
244-5		Paulo Ricardo Serra dos Santos (Sargento PM)
245-3		Jair Francisco Soares (Carroça)
246-1		Getúlio Colvara de Vargas (Porra)
247-0		Suedi Mariano da Costa
248-8		Ronaldo Pinto Vieira
249-6		Antonio Carlos de Castro Assumpção (Tonico)
250-0		José Carlos Quevedo Tavares (Cenourão Pai)
251-8		Renan Lima Bock
252-6		Deivid Cardoso Oliveira
253-4		Luis Claudio Gonçalves Vaz (Claudinho)
254-2		João Batista Machado de Lima (Bacia)
255-0		Rodrigo dos Santos Batista (Bodão)
256-9		Adão Pinto de Oliveira (Para Pedro)
257-7		Carlos Fernando Garcia Bastos (Garrafinha)
258-5		Bairo Grevi Barcelos Soares
259-3		Rodrigo Bandeira da Silva (Xaropinho)
260-7		Luciano Oliveira Soulue (Lulu)
261-5		Faustino Agarralua do Prado (Agarra Lua)
262-3		Felipe Soares Nascimento (Arte Educador)
263-1		Fernando Rocha Farias (Nego Boy)
264-0		Márcio Simões Lopes Saraiva (Filho Boy)
265-8		Francisco de Assis Madrugra Pedra (Pastor Antigo)
266-6		Guilherme Wendlant (Dentista)
267-4		Solismar Vaz
268-2		Pedro Ricardo Zanini Fernandes
269-0		Jorge Luis Melo Rodrigues (Mourão)
270-4		Dione da Silva Domingues (Pânico)
271-2		Mario Luis Nascimento dos Santos (Tipiu)
272-0		Edmilson Xavier Pinheiro
273-9		José Roberto Sanches Gonçalves
274-7		André Dias dos Santos (Surdinho)
275-5		Júlio César de Oliveira Soares (Som Assembléia)
276-3		Valdir Rodrigues da Costa
277-1		Carlos Alberto Lopes da Costa (Tatu Peludo)
278-0		Leandro Custódio da Rosa
279-8		Anderson Machado Rodrigues (Maninho)
280-1		Daniel Oliveira Costa (Teta)
281-0		Alex Sandro Pires dos Santos (Xai Xang)
282-8		Silvio Roberto Munhoz de Menezes (CPATP)
283-6		Evaldo Borges Moreira (Carequinha)
284-4		Esequiel Kisner de Carvalho
285-2		Alcindo Solla
286-0		Alan de Almeida Leão (Nhonho)
287-9		Waldemar Aguiar Corpes
288-7		Pedro Fortes Anastacio (Pedrinho)
289-5		Dirceu Neri de Sá (Pepeu)
290-9		Jorge Carlos Costa Rodrigues
291-7		Ademar Antonio Barbosa
292-5		Anderson Claiton Soares Casartelli (Primata)
293-3		Tiago da Silva Machado (Ongaratto)
294-1		Xisto Costa Filho
295-0		José Luiz da Silva
296-8		Nelson Miranda (Tarouco)
297-6		Arnoldo Almeida Nunes
298-4		Adão Lopes Sayão (Adãozinho)
299-2		Ilceu Ferreira Machado
300-0		Vitor Bastos Leal (Vitinho)
301-8		Edison Lopes Dias
302-6		Anderson José Lopes Retzlaff
303-4		Diego da Costa Schuller
304-2		Lori Silveira Junior
305-0		Luiz Fernando Pinho Michaello (Sagres)
306-9		Richer da Silva Aguiar (Prefeitura)
307-7		Sergio Luis Goulart Miranda (Naval)
308-5		Vagner Ferreira Benitez
309-3		Weslley Wailla Veleda
310-7		Arnaldo Rosa da Silva
311-5		Patrick Alves Kruger (CPATP)
312-3		Vagner Carrir de Lemos (Corsan)
313-1		Alex Fonseca de Souza
314-0		Oswaldo da Conceição Pinheiro (Valdic)
315-8		Silto Heleno Vaz (Tocinha)
316-6		Altamir Gonçalves Freitas (Miro)
317-4		Carlos Silva Domingues Junior (Torê)
318-2		Luiz Eduardo Almeida da Costa (Duda)
319-0		Claudinei Pereira da Silva (Macau)
320-4		Oroci Ferreira
321-2		Marcelo Costa Salum (Policia Civil)
322-0		Pedro Otto Campelo (Balãozinho)
323-9		Marcelo Machado Moreira (Bandido)
324-7		Matheus Francisco Medeiros Petry
325-5		Ricardo Alves de Oliveira Junior (PM)
326-3		Beverlly Soria Alves Peres (Marinheiro)
327-1		Bruno dos Santos Martins (Dilminha)
328-0		André Luiz Ferreira Ferraz
329-8		Jorge Luis Sousa da Silva (Cojack)
330-1		Dennyan Cavalheiro dos Santos
331-0		Jover da Costa Furtado
332-8		Leandro da Silva de Castro
333-6		Adão Moraes Ferreira
334-4		Lyncoln Jesus da Costa Zorzolli
335-2		Adalberto Carvalho de Souza (Dançarino)
336-0		Bryan Timm Branco
337-9		Elton Tiago de Oliveira Vergara (Tetê)
338-7		Paulo Victor Crizel Gonçalves (Paulão Novo)
339-5		Rômulo Madruga Furtado (Guarda Portuário)
340-9		Frantiesco Porto Coelho (SexShop)
341-7		Vanderlei Bezerra Nunes
342-5		Valter Nelo Nobre Nunes
343-3		José Ildefonso Pereira da Silva
344-1		Andrew Mendes Schmitz (BandanaMan)
345-0		Eduardo Gonçalves Sousa (Bombeiro)
346-8		Fernando Farias da Rosa (Samu)
347-6		Régis Moreira Andrade
348-4		Edson Claro Rodrigues (Blanka)
349-2		John Michel Sanchez Dias (Ex Tecon)
350-6		Pablo Briese Martins (Surfista)
351-4		Henrique Vaz Lorea
352-2		Carlos Roberto Vianna de Vianna
353-0		Acelino Candido Xavier Rodrigues (Xaropinho Bloco)
354-9		Luiz Carlos Gallo
355-7		Luiz Carlos Nunes Arruda (Arruda)
356-6		Paulo Renato Silva Silveira
357-3		Paulo Roberto Silva Freitas (Paulão)
358-1		Julio Cesar Berchon Des Essarts (Vigilante Jt)
359-0		Claudio Reginaldo Saraiva da Rosa (Bolinho)
360-3		Helio Artur Silveira
361-1		Zelimar da Cunha Lopes (Marmitex)
362-0		Kauã Wailla de Almeida
363-8		Rudimar Mendes Silva
364-6		Luiz Antonio Silva Rocha
