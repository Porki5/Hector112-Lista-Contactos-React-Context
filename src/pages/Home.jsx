
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { NavLink } from "react-router-dom";
import { CardContact }  from "../components/CardContact.jsx";


export const Home = () => {

 
	return (
		<div className="container text-end mt-5 w-50">
			<NavLink to="/add-contact"><button className="btn btn-primary">Añadir Contacto</button></NavLink>
			<CardContact />
		</div>


	);
}; 



/* https://playground.4geeks.com/ */