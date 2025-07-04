import { useState } from "react";
import { Link, Navigate } from "react-router-dom";

export const EditarContacto = ({ user, contact, getContactList, handleClose }) => {

    const [name, setName] = useState(contact?.name || "");                      
    const [phone, setPhone] = useState(contact?.phone || "");              
    const [email, setEmail] = useState(contact?.email || "");            
    const [address, setAddress] = useState(contact?.address || "");           

    const [respuesta, setRespuesta] = useState("")      

    //Editar contacto
    async function editContactList(event) {
        event.preventDefault();
        try {
            let response = await fetch('https://playground.4geeks.com/contact/agendas/' + user + '/contacts/' + contact.id, {
                method: "PUT",
                body: JSON.stringify({
                    "name": name,
                    "phone": phone,
                    "email": email,
                    "address": address
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            if (response.ok) {
                setRespuesta(
                        <p>Contacto editado</p>   // mensaje de confirmación
                    )
            }

            return response.json()

        } catch { }
    }

    return (     
        <div className="text-center m-0 container-flex d-flex flex-column">
            <form className="w-100 p-4 mx-auto d-flex flex-column text-start" onSubmit={editContactList}>
                <div className="mb-3 ">
                    <label htmlFor="fullName" className="form-label">Nombre Completo</label>
                    <input type="text" className="form-control" id="fullName" placeholder="Nombre y apellidos" value={name} onChange={(event) => setName(event.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="address" className="form-label">Dirección postal</label>
                    <input type="text" className="form-control" id="address" placeholder="Calle, número, piso, puerta y CP" value={address} onChange={(event) => setAddress(event.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Teléfono</label>
                    <input type="text" className="form-control" id="phone" placeholder="Fijo o Móvil" value={phone} onChange={(event) => setPhone(event.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Correo electrónico</label>
                    <input type="email" className="form-control" id="email" placeholder="correo@example.com" value={email} onChange={(event) => setEmail(event.target.value)} />
                </div>
                <div className="d-flex">
                    <button type="submit" className="btn btn-info align-self-center mx-auto">Editar</button>
                    <Link  onClick={() => localStorage.setItem("fromForm", "true") } to="/"><button className="btn btn-danger align-self-center mx-auto" onClick={handleClose}>Atras</button></Link>
                </div>
            </form>
            {respuesta}
        </div>
    );
}; 