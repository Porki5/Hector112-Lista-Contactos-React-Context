import { useState } from "react";
import { Link } from "react-router-dom";

export const AContactoComp = () => {

    const [name, setName] = useState("")                                
    const [phone, setPhone] = useState("")                              
    const [email, setEmail] = useState("")                              
    const [address, setAddress] = useState("")                          

    const [respuesta, setRespuesta] = useState("")                      


    //Añadir contacto 
    function aContactoLista(event) {
        event.preventDefault();
        let user = localStorage.getItem("usuario");

        fetch('https://playground.4geeks.com/contact/agendas/' + user + '/contacts', {
            method: "POST",
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
            .then((response) => {
                if (response.status === 201) {
                    setRespuesta(
                        <p>Contacto añadido</p>   // mensaje de confirmación
                    )
                    setName("")                                         
                    setAddress("")                                      
                    setPhone("")                                        
                    setEmail("")                                        
                }

                return response.json()
            })
            .then()
            .catch()
    }

    return (                                                    
        <div className="text-center m-0 container-flex d-flex flex-column">
            <form className="w-100 p-4 mx-auto d-flex flex-column text-start" onSubmit={aContactoLista}>
                <div className="mb-3 ">
                    <label htmlFor="fullName" className="form-label">Nombre Completo</label>
                    <input type="text" className="form-control" id="fullName" placeholder="Nombre y apellidos" value={name} onChange={(event) => setName(event.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="address" className="form-label">Dirección</label>
                    <input type="text" className="form-control" id="address" placeholder="Calle, número, piso, puerta y CP" value={address} onChange={(event) => setAddress(event.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Nº Teléfono</label>
                    <input type="text" className="form-control" id="phone" placeholder="Nº Teléfono" value={phone} onChange={(event) => setPhone(event.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Correo electrónico</label>
                    <input type="email" className="form-control" id="email" placeholder="correo@gmail.com" value={email} onChange={(event) => setEmail(event.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary align-self-center mx-auto"> Añadir </button>
            </form>
            {respuesta}
        </div>
    );
}; 