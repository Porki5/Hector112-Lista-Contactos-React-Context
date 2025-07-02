import { useState } from "react";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import { NavLink } from "react-router-dom"; 




export const Card = () => {

    const [contact, setContact] = useState("");
    const [username, setUsername] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");

    return (
        <div className="d-flex flex-column">
            <img src={rigoImageUrl} className="img-fluid rounded-circle w-25 mx-auto" alt="Rigo Baby" />
            <div className="card mt-3">
                <h2>{contact.name}</h2>
                <p className="text-muted">{contact.email}</p>
                <p className="text-muted">{contact.phone}</p>
                <p className="text-muted">{contact.address}</p>
                <div className="justify-content-rigth mt-3">
                    <button className="btn btn-primary"><NavLink to="/editar-contacto"  className="text-white">Editar</NavLink></button>
                    
                    <button className="btn btn-danger">Eliminar</button>
                </div>

            </div>
           
        </div>
    );
};

