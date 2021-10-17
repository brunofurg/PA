export default function FainaInput() {
    return (
       
        <div className="bg-yellow-300">
            <div className="bg-red-200 p-2">
                <TextInput
                    labelDescription="Navio:"
                    inputValue={title}
                    onInputChange={handleTitleChange}
                />
                <TextInput
                    labelDescription="Observações:"
                    inputValue={description}
                    onTextAreaChange={handleDescriptionChange}
                />
            </div>
            <div className="flex flex-row justify-evenly items-center">
                <span>
                    <div className="flex flex-col"> 
                        <p>Período:</p>
                        <RadioButton buttonChecked={shiftWork} onButtonClick={handleSetShift} name="shiftChoose">A</RadioButton>
                        <RadioButton buttonChecked={shiftWork} onButtonClick={handleSetShift} name="shiftChoose">B</RadioButton>
                        <RadioButton buttonChecked={shiftWork} onButtonClick={handleSetShift} name="shiftChoose">C</RadioButton>
                        <RadioButton buttonChecked={shiftWork} onButtonClick={handleSetShift} name="shiftChoose">D</RadioButton>
                    </div> 
                </span>
            <div>
                <span>   
                    <DateInput
                        labelDescription='Selecione o dia:' 
                        inputValue={dayWork} 
                        onInputChange={handleDayWork}
                    />
                </span>
                <span>
                    <SelectFaina
                        labelDescription='Selecione o tipo de faina:' 
                        selectValue={typeFaina} 
                        onSelectChange={handleTypeFaina}
                    />  
                </span>
            </div>
        </div>
     
    )
}
