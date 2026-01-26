import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Navbar = () => {

	const { favoriteList, setFavoriteList } = useGlobalReducer()
	//console.log(favoriteList)

	const handleDelete = (indextodelete) => {
		const newFavorite = favoriteList.filter((_, index) => index !== indextodelete);
		setFavoriteList(newFavorite);
	}
	return (
		<nav className="navbar navbar-light bg-black">
			<div className="container">
				<Link to="/">
					<img className="logo" src="https://res.cloudinary.com/dra2cr3uw/image/upload/v1769100140/star-wars-png-46074_fq5ugx.png" alt="" />
				</Link>
				<div className="ml-auto">
					<div className="dropdown">
						<button className="btn btn-warning dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
							Favorite List
						</button>
						<ul className="dropdown-menu">

							{
								favoriteList.map((favorite, index) => {
									return (
										<li key={index} className="d-flex justify-content-between">
											<a className="dropdown-item" href="#">{favorite}</a>
											<i
												onClick={() => handleDelete(index)}
												type="button"
												className="fa-regular fa-trash-can align-content-center pe-3 text-danger"></i>
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