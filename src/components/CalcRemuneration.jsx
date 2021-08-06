import { Button } from '@material-ui/core';

export default function CalcRemuneration() {
    return (
        <>
        <div>
            Calculadora
        </div>
        <div>
            Turno
        </div> 
        <div>
            <span>D</span>
            <span>Digite turno, se for C ou D. Ex "c"</span>
        </div>

            <div className="flex justify-center">
                <span>
                  <Button color="primary" variant="contained" >
                    Inserir
                  </Button>
                </span>
                <span>
                  <Button color="secondary" variant="outlined">
                    Limpar
                  </Button>
                </span>
              </div>

</>
    )
}
