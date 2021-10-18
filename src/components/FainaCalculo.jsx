export default function FainaCalculo() {
    return (
        <div className="border rounde-lg flex flex-row justify-around p-2">
            <div className="flex-col justify-around">
                <div className="bg-blue-300 flex flex-row space-x-2 justify-around rounded-lg shadow-md mb-2 p-2">
                    <span>Peso Total</span>
                    <span>Valor Tonelada</span>
                </div>
                <div className="bg-green-300 flex rounded-lg justify-around mb-2 p-1">
                    <span>1280</span>
                    <span>x</span>
                    <span>0,2554</span>   
                 </div>
                 <div className="flex flex-col flex-wrap">
                    <p>1 x Contra-mestre(x1.5)</p>
                    <p>2 x Produção(x1)</p>
                    <p>B3 - Cargas unitizadas Dimensões Padronizadas</p>
                 </div>
            </div>

            <div className="">
                <div className="bg-blue-300 flex justify-around p-2 mb-1">
                    <span>Cálculo Produção</span>
                    <span>Diária</span>
                </div>
                <div>
                    <div className="bg-green-200 flex flex-row flex-wrap rounded-lg justify-around p-2">
                        <span>
                            1.030,40
                        </span>
                        <span>
                            <p>{`>`}</p>
                        </span>
                        <span>
                            809,90  
                        </span>
                    </div>
                    <div className="text-xs p-1">
                        Produção ultrapassou a diária
                    </div>
                </div> 
                <div className="flex flex-row justify-around text-center">
                   <div className="flex flex-col p-2">
                        <span className="font-bold">Adicional</span>
                        <span>+150%</span>
                        <span>281,06</span>
                   </div>
                   <div className="flex flex-col p-2">
                        <span className="font-bold">Repouso (RSR)</span>
                        <span>+18,18%</span>
                        <span>85,46</span>
                   </div>

                </div>
            </div>




        </div>
    )
}
