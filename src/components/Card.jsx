import { useNavigate } from 'react-router-dom';

export const Card = ({ usuario, contactList, getContactList }) => {
  const navigate = useNavigate(); // Hook para navegación programática

  // Función para borrar contacto
  function deleteContact(id) {
    fetch(`https://playground.4geeks.com/contact/agendas/${usuario}/contacts/${id}`, {
      method: "DELETE"
    })
      .then((response) => {
        if (response.status === 204) {
          getContactList();
        }
      })
      .catch((error) => console.error("Error al borrar:", error));
  }

  return (
    <div className="d-flex flex-column text-center">
      {Array.isArray(contactList) &&
        contactList.map((item, index) => (
          <div key={index} className="card my-2">
            <div className="d-flex">
              <img
                style={{ maxHeight: "200px" }}
                src= ".\src\assets\img\rigo-baby.jpg"
                className="img-fluid rounded-circle m-2"
                alt="Perfil"
              />
              <div className="card-body text-start">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">
                  <i className="fa-solid fa-location-dot"></i> {item.address}
                </p>
                <p className="card-text">
                  <i className="fa-solid fa-phone"></i> {item.phone}
                </p>
                <p className="card-text">
                  <i className="fa-solid fa-envelope"></i> {item.email}
                </p>
              </div>
              <div className="card-body text-end">
                <p>
                  <i className="crossButton btn fa-solid fa-pencil"
                    onClick={() =>
                      navigate("/edit-contact", {
                        state: {
                          contact: item,
                          user: usuario
                        }
                      })
                    }></i>
                </p>
                <p>
                  <i className="crossButton btn fa-solid fa-trash" onClick={() => deleteContact(item.id)} ></i>
                </p>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};
