import { Link, useParams } from "react-router-dom";
import { AContactoComp} from "../components/AContactoComp.jsx";

export const AddContact = () => {

    let user = localStorage.getItem("usuario"); //traemos el nombre del usuario desde localStorage
    const { id } = useParams(); // Para saber si es edición o creación

    return (
        <div className="container w-75 text-center mt-5">
            <h1>{id ? "Editar" : "Crear"} nuevo contacto en la agenda de {user}</h1>            

            <AContactoComp />
            <Link to="/" onClick={() => localStorage.setItem("fromForm", "true")}>Volver a inicio</Link>
        </div>                                                          
    );                                                                  
}; 
