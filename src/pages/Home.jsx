import { useEffect, useState } from "react";
import { Card } from "../components/Card.jsx";
import { Link } from "react-router-dom";


export const Home = () => {
	const [contactList, setContactList] = useState([])
	const [usuario, setUsuario] = useState(localStorage.getItem("fromForm") === "true" ? (localStorage.getItem("usuario") != null ? localStorage.getItem("usuario") : "") : "")
	

	const [usuarioAnterior, setUsuarioAnterior] = useState("")
	const [render, setRender] = useState("")

	setTimeout(() => localStorage.removeItem("fromForm"), 1000) 

	
	//Cargar lista de contactos del usuario

	function getContactList() {
		fetch('https://playground.4geeks.com/contact/agendas/' + usuario + '/contacts', { method: "GET" })
			.then((response) => {
				if (response.status === 404) {
					if (confirm("El usuario " + usuario + " no extiste. ¿Quieres crearlo?")) { 	
						createUser()															
					} else {
						setUsuario(usuarioAnterior)												
					}
				}
				return response.json()

			})
			.then((data) => Array.isArray(data.contacts) ? setContactList(data.contacts) : console.log("No hay usuario"))
			.catch()
	}


	//Crear usuario si no existe
	function createUser() {
		fetch('https://playground.4geeks.com/contact/agendas/' + usuario, {
			method: "POST"
		})
			.then((response) => {
				if (response.status === 201) {
					getContactList()
				}
				return response.json()
			})
			.then()
			.catch()
	}


	//Cambiar usuario

	function changeUser(event) {
		if (event.key === "Enter") {
			setUsuarioAnterior(usuario)
			setUsuario(event.target.value === "" ? usuario : event.target.value.toLowerCase())
			event.target.value = ""
		}
	}


	//Borrar usuario

	function deleteUser(user) {
		if (confirm("¿Quieres borrar el usuario " + usuario + "?")) {
			fetch('https://playground.4geeks.com/contact/agendas/' + user, { method: "DELETE" })
				.then((response) => {

					if (response.status === 204) {
						setUsuario(usuarioAnterior)
					}
				}
				)
				.then()
				.catch()
		}
	}

	useEffect(() => {						
		if (usuario != "") {
			getContactList()
			localStorage.setItem("usuario", usuario)
		}
	}, [usuario])

	useEffect(() => {								
		if (contactList != []) {
			setRender(
				<div className="container text-end w-75">
					<Card usuario={usuario} contactList={contactList} getContactList={() => getContactList()} />
				</div>								
			)
		}
	}, [contactList])

	return (
		<div className="container text-center mt-5 w-75">
			<input type="text" className="shadow-lg rounded p-2 my-3 mx-auto" placeholder="Héctor" onKeyDown={changeUser} />
			<h1 className="mb-3">{usuario === "" ? "Escriba el usuario de la agenda" : "Lista de contactos de " + usuario + ":"}</h1>
			<Link to="/add-contact" className={usuario === "" ? "btn btn-info hide my-2" : "btn btn-info my-2"}>Añadir Contacto</Link>
			{render}

			<button className={usuario === "" ? "btn btn-danger hide my-2" : "btn btn-danger my-2"} onClick={() => deleteUser(usuario)}>Eliminar usuario</button>
		</div>
	);
};
