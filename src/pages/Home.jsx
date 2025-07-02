
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { NavLink } from "react-router-dom";
import { Card }  from "../components/Card.jsx";


export const Home = () => {

 
	return (
		<div className="container text-end mt-5 w-50">
			<NavLink to="/nuevo-contacto"><button className="btn btn-primary">Añadir Contacto</button></NavLink>
			<Card />
		</div>


	);
}; 



/* https://playground.4geeks.com/ */