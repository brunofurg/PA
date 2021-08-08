import { Button } from '@material-ui/core';

export default function Fainas() {
    return (
      <>
        <div>
            Fainas Realizadas
            <div className="flex justify-center">
                <span>
                  <Button color="primary" variant="contained" >
                    Inserir
                  </Button>
                </span>
                <span>
                  <Button color="default" variant="contained">
                    Apagar
                  </Button>
                </span>
              </div>

        </div>
      </>
    )
}
