import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Navbar = () => {

	const { favoriteList } = useGlobalReducer()
	//console.log(favoriteList)
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">StarWars</span>
				</Link>
				<div className="ml-auto">
					<div className="dropdown">
						<button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
							Favorite List
						</button>
						<ul className="dropdown-menu">

							{
								favoriteList.map((favorite, index) => {
									return (
										<li key={index} className="d-flex justify-content-between">
											<a className="dropdown-item" href="#">{favorite}</a>
											<i type="button" className="fa-regular fa-trash-can align-content-center pe-3"></i>
										</li>
									)
								})
							}
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};