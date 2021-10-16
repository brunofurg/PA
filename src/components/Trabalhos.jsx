export default function Trabalhos() {
  return (
    <div>
      
      <div>
                              <div className="flex place-content-center mb-2">                            
                                 <MonthDisplay />
                              </div>            
                              <div className="bg-gray-100 p-2">
                                <div className="flex flex-row justify-around items-center p-2">
                                  <span>
                                    <CheckboxInput inputValue="true" labelDescription="Tudo"/>
                                  </span>
                                  <span className="text-center">
                                      <p className="font-bold text-center p-2">Setembro 2021</p>
                                  </span>
                                  <span className="button-small">
                                      <WorkDialog />
                                  </span> 
                                </div>
                                <div className="">
                             
                               {allCards.map(flashCard => {
                                return (
                                  <div className="border border-gray-300 bg-yellow-400 shadow-lg hover:bg-gray-200 hover:border-gray-600 rounded-lg flex flex-row justify-items-stretch m-3 p-2">
                                      <div className="bg-red-400 flex flex-col space-y-10">
                                          <div>
                                              1
                                          </div>
                                          <div>
                                              <CheckboxInput
                                                id={id} 
                                                inputValue="false"
                                                labelDescription=""
                                              />
                                          </div>
                                       </div>
                                       <div className="bg-blue-300">
                                           <FlashCardItem
                                              key={flashCard.id}
                                              onDelete={handleDeleteFlashCard}
                                              onEdit={handleEditFlashCard}
                                              //onClick={handleClickFlashCard}
                                           >{flashCard}</FlashCardItem>
                                        </div>
                                      </div>
                                    );
                                })}
                                </div>
                                <div className="bg-gray-200 flex flex-row items-center justify-between align-middle rounded-lg p-2">
                                  Totais Seleção
                                  <div className="border bg-gray-100 hover:bg-white shadow-lg p-2 m-1 rounded-md">
                                    <strong>Bruto:</strong> 7087,09
                                  </div>
                                  <div className="border bg-gray-100 hover:bg-white  shadow-lg p-2 m-1 rounded-md">
                                    <strong>Líquido:</strong> 5067,89
                                  </div>
                                  <div className="border bg-gray-100 hover:bg-white  shadow-lg p-2 m-1 rounded-md">
                                    <strong>Férias:</strong> 67,89
                                  </div>
                                  <div className="border bg-gray-100 hover:bg-white  shadow-lg p-2 m-1 rounded-md">
                                    <strong>13°:</strong> 76,87
                                  </div>
                                  <div className="border bg-gray-100 hover:bg-white  shadow-lg p-2 m-1 rounded-md">
                                    <strong>FGTS:</strong> 42,22
                                  </div>
                                </div>

                             </div>
                             </div>



    </div>
  )
}





// https://app.pdf.co/dashboard

// https://app.docparser.com/field/get/dsxzegohjfvp/2201638/

// https://www.youtube.com/watch?v=jkfuCy9YvIc

// https://apidocs.pdf.co/13-pdf-to-json-javascript-convert-pdf-to-json-from-file-node-js-async-api

// https://www.npmjs.com/package/pdf-to-text