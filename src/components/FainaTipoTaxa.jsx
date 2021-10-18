export default function FainaTipoTaxa() {
    return (
        <div className="flex flex-col text-center justify-around p-2">
            <div className="bg-blue-300 rounded-lg shadow-lg p-2 mb-2">
                Valor de Taxa
            </div>
            <div className="flex flew-row text-white justify-around">
                 <div className="bg-terciary hover:bg-primary rounded-lg p-2">
                    Sindop
                </div>
                <div className="bg-terciary hover:bg-primary rounded-lg p-2">
                    Sintermar         
                </div>
                <div className="bg-terciary hover:bg-primary rounded-lg p-2">
                    Não-Sócio    
                </div>
                <div className="bg-terciary hover:bg-primary rounded-lg p-2">
                    Personalizada    
                </div>           
            </div>
             
        </div>
    )
}
