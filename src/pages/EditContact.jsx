import { useLocation, useNavigate } from "react-router-dom";
import {EditarContacto} from "../components/EditarContacto";

export const EditContact = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Recuperar datos enviados desde Card.jsx
  const currentContact = location.state?.contact;
  const usuario = location.state?.user;

  return (
    <div className="container w-75 text-center mt-5">
      <h1>Editar contacto</h1>
      <EditarContacto user={usuario} contact={currentContact} getContactList={() => {}} handleClose={() => navigate("/")}/>
    </div>
  );
};
