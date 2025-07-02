import { NavLink } from "react-router-dom";
import { NuevoContacto } from "../pages/NuevoContacto";


export const Formulario = () => {


    return (
        <div className="text-center mt-5 container d-flex flex-column">
            <h1>Añadir nuevo contacto</h1>
            <form className="border rounded w-50 p-4 mx-auto d-flex flex-column text-start">
                <div className="mb-3 ">
                    <label htmlFor="fullName" className="form-label">Nombre Completo:</label>
                    <input type="text" className="form-control" id="fullName" placeholder="Nombre y apellido" />
                </div>
                <div className="mb-3">
                    <label htmlFor="address" className="form-label">Dirección:</label>
                    <input type="text" className="form-control" id="address" placeholder="Calle, número, piso, puerta y CP" />
                </div>
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Teléfono:</label>
                    <input type="text" className="form-control" id="phone" placeholder="Teléfono" />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Correo electrónico:</label>
                    <input type="email" className="form-control" id="email" placeholder="correo@example.com" />
                </div>
                <div className="d-flex justify-content-between">  
                <button type="submit" className="btn btn-primary align-self-center">Añadir</button> 
                
                <button type="button" className="btn btn-danger">
                    <NavLink to="/" className="text-decoration-none text-reset">Cancelar</NavLink>
                </button>
                </div>
            </form>
           
        </div>
    );
}; 