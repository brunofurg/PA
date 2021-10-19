import CheckboxInput from "./CheckboxInput";

export default function FainaSemRotator() {
    return (
        <div className="flex justify-around border border-gray-300 text-center p-2">
            <span className="bg-terciary hover:bg-primary text-white rounded-lg p-2">
                <CheckboxInput 
                    labelDescription="" 
                    value={`checkboxValue`}
                    readOnly
                    onCheckboxChange={`handleCheckboxChange`}/>
                Sem Rotator (x1,75)
            </span>
            <span className="bg-terciary hover:bg-primary text-white rounded-lg p-2">
            <CheckboxInput 
                    labelDescription="" 
                    value={`checkboxValue`}
                    readOnly
                    onCheckboxChange={`handleCheckboxChange`}/>
                Calcular Por Fardo
            </span>
            
        </div>
    )
}
