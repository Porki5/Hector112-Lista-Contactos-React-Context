import { useState } from 'react';
// import Modal from 'react-bootstrap/Modal';
// import { EditarContacto} from './EditarContacto';


export const Card = ({ usuario, contactList, getContactList }) => {

    const [currentContact, setCurrentContact] = useState("")            //nos servirá para guardar y mostrar el contacto en el fromulario de edición

    const [show, setShow] = useState(false);                            //
    const handleClose = () => setShow(false);                           //variable y funciones que manejan el formulario modal
    const handleShow = () => setShow(true);                             //

    
    //-------------------BORRAR CONTACTO--------------------

    function deleteContact(id) {
        fetch('https://playground.4geeks.com/contact/agendas/' + usuario + '/contacts/' + id, { method: "DELETE" })
            .then((response) => {
                if (response.status === 204) {
                    getContactList()
                }
            })
            .then()
            .catch()

    }

    return (
        <div className="d-flex flex-column text-center">
            {contactList.map((item, index) => (                         //renderizamos cada contacto en una card diferente
                <div key={index} className="card my-2" >
                    < div className="d-flex" >
                        <img style={{ maxHeight: "200px" }} src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" className="img-fluid rounded-circle m-2 " alt="..." />
                        <div className="card-body text-start">
                            <h5 className="card-title">{item.name}</h5>
                            <p className="card-text"><i className="fa-solid fa-location-dot"></i>   {item.address}</p>
                            <p className="card-text"><i className="fa-solid fa-phone"></i>  {item.phone}</p>
                            <p className="card-text"><i className="fa-solid fa-envelope"></i>   {item.email}</p>
                        </div>
                        <div className="card-body text-end">
                            <p><i className="crossButton btn fa-solid fa-pencil" onClick={() => { setCurrentContact(item); handleShow() }}></i></p>
                            <p><i className="crossButton btn fa-solid fa-trash" onClick={() => deleteContact(item.id)}></i></p>
                        </div>

                    </div >
                </div >
            ))
            }
            {/* <Modal show={show} onHide={handleClose}>                    
                <Modal.Header closeButton>
                    <Modal.Title>Editar contacto</Modal.Title>
                </Modal.Header>
                <Modal.Body>                                            
                    <EditarContacto user={usuario} contact={currentContact} getContactList={() => getContactList()} handleClose={() => handleClose()} />
                </Modal.Body>
            </Modal> */}
        </div >
    );
};