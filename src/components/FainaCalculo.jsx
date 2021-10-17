export default function FainaCalculo() {
    return (
        <div className="bg-white flex flex-row justify-around p-2">
            <div className="bg-yellow-600 flex justify-evenly">
                <div className="flex justify-evenly">
                    <span>Tonelagem</span>
                    <span>Valor Tonelada</span>
                </div>
                <div>
                    Valores    
                 </div>
                 <div>
                    Cálculo feito
                 </div>
            </div>

            <div className="bg-yellow-200">
                <div className="bg-red-400 flex justify-around">
                    <span>Cálculo Produção</span>
                    <span>Diária</span>
                    
                </div>
                <div>
                    <p>{`1.030,40 > 120,05`}</p>
                </div>
                <div>
                    Produção ultrapassou a diária
                 </div>
                 <div>
                     Adicional | Repouso
                 </div>


            </div>




        </div>
    )
}
