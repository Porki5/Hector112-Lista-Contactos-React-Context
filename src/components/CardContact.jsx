import { useState } from "react";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";

export const CardContact = () => {

    const [contactList, setContactList] = useState([
        { nombre: "Pedro Picapiedra", direccion: "C/avnd 1", tlf: "333 222 111", correo: "pedro112@gmail.com" },
        { nombre: "Juan Rodriguez", direccion: "C/avnd 2", tlf: "111 222 333", correo: "juan112@gmail.com" },
        { nombre: "Luis Guilarte", direccion: "C/avnd 3", tlf: "222 111 333", correo: "luis112@email.com" }
    ])

    return (
        <div className="d-flex flex-column">
            {contactList.map((item, index) => (
                <div key={index} className="card my-2" >
                    < div className="row g-0" >
                        <div className="col-md-4">
                            <img style={{ maxHeight: "200px" }} src={rigoImageUrl} alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body text-start">
                                <h5 className="card-title">{item.nombre}</h5>
                                <p className="card-text"><i className="fa-solid fa-location-dot"></i>&nbsp;&nbsp;&nbsp;{item.direccion}</p>
                                <p className="card-text"><i className="fa-solid fa-phone"></i>&nbsp;&nbsp;&nbsp;{item.tlf}</p>
                                <p className="card-text"><i className="fa-solid fa-envelope"></i>&nbsp;&nbsp;&nbsp;{item.correo}</p>
                            </div>
                        </div>
                    </div >
                </div >
            ))}
        </div>
    );
};

