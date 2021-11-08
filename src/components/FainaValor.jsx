export default function FainaValor() {
  return (
    <div className="border border-gray-300 p-4">
      <div className="bg-blue-300 rounded-lg shadow-lg text-center mb-2 p-2">
        Valor Estimado para Faina (R$)
      </div>
      <div className="flex flex-row justify-around place-items-center space-x-1">
        <div className="bg-blue-50 border border-gray-500  rounded-lg shadow-lg text-center p-2">
          <strong>Total Bruto: </strong>1.070,39
        </div>
        <div className="bg-blue-200 border border-gray-500 rounded-lg shadow-lg text-center p-2">
          +
        </div>
        <div className="bg-blue-50 border border-gray-500  rounded-lg shadow-lg text-center p-2">
          <strong>Férias: </strong>119,02
          {/* x0,1112 */}
        </div>
        <div className="bg-blue-50 border border-gray-500 rounded-lg shadow-lg text-center p-2">
          <strong>13°: </strong>89,25
          {/* x0.08339 */}
        </div>
        <div className="bg-blue-50 border border-gray-500 rounded-lg shadow-lg text-center p-2">
          <strong>FGTS: </strong>102,28
          {/* x0,9556 */}
        </div>
      </div>
      <div className="bg-blue-100 border border-gray-500 rounded-lg shadow-lg mt-2 text-center p-2">
        <strong>Total Liquidez: </strong>1.380,94
      </div>
    </div>
  );
}
