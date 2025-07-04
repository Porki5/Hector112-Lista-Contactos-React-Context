import { Link } from "react-router-dom";
import { AContactoComp} from "../components/AContactoComp.jsx";

export const AddContact = () => {

    let user = localStorage.getItem("usuario"); //traemos el nombre del usuario desde localStorage

    return (
        <div className="container w-75 text-center mt-5">
            <h1>Añade un contacto a la agenda de {user}</h1>            

            <AContactoComp />
            <Link to="/" onClick={() => localStorage.setItem("fromForm", "true")}>Volver a inicio</Link>
        </div>                                                          
    );                                                                  
}; 
