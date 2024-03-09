import {useState} from "react";
import Turno from "../components/Turno/Turno";
import misTurnos from "../helpers/myTurns";

const MisTurnos = () => {
    const [turnos, setTurnos] = useState(misTurnos);
    return (
        <>
            <h1>Mis Turnos</h1>
            
            <div>
                {turnos.map((turno) => {
                        return <Turno key={turno.id} turno={turno}/>;
                })}
            </div>
        </>        
    );
}

export default MisTurnos;
