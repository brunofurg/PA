export default function FainaValor() {
    return (
        <div className="border border-gray-300 p-4">
            <div className="bg-blue-300 rounded-lg shadow-lg text-center mb-2 p-2">
                Valor Estimado para Faina
            </div>
            <div className="flex flex-row justify-around place-items-center space-x-1">
                <div className="bg-blue-50 border border-gray-500  rounded-lg shadow-lg text-center p-2">
                    <strong>Total Bruto: </strong>1.320,43
                </div>
                <div className="bg-blue-200 border border-gray-500 rounded-lg shadow-lg text-center p-2">
                    +
                </div>
                <div className="bg-blue-50 border border-gray-500  rounded-lg shadow-lg text-center p-2">
                    <strong>Férias: </strong>1.320,43
                </div>
                <div className="bg-blue-50 border border-gray-500 rounded-lg shadow-lg text-center p-2">
                    <strong>13°: </strong>1.320,43
                </div>   
                <div className="bg-blue-50 border border-gray-500 rounded-lg shadow-lg text-center p-2">
                     <strong>FGTS: </strong>1.320,43
                </div>                               
            </div>
            <div className="bg-blue-100 border border-gray-500 rounded-lg shadow-lg mt-2 text-center p-2">
                <strong>Total Liquidez: </strong>1.320,43
            </div>  
        </div>
    )
}
