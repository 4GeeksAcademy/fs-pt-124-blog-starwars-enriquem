import { useEffect, useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Card } from "../components/Card.jsx";

export const Home = () => {

	const { store, favoriteList, dispatch } = useGlobalReducer()
	
	
	const getPeople = () => {
		fetch("https://www.swapi.tech/api/people/")
			.then((response) => response.json())
			.then((data) => {
				//console.log(data);

				dispatch({ type: 'get_people', payload: data.results })
			})
			.catch((error) => console.error(error));
	}

	const getPlanets = () => {
		fetch("https://www.swapi.tech/api/planets/")
			.then((response) => response.json())
			.then((data) => {
				//console.log(data);

				dispatch({ type: 'get_planets', payload: data.results })
			})
			.catch((error) => console.error(error));
	}

	const getVehicles = () => {
		fetch("https://www.swapi.tech/api/vehicles/")
			.then((response) => response.json())
			.then((data) => {
				//console.log(data);

				dispatch({ type: 'get_vehicles', payload: data.results })
			})
			.catch((error) => console.error(error));
	}


	useEffect(() => {
		getPeople()
		getPlanets()
		getVehicles()
	}, [])

	return (
		<div className="container mt-5">
			<div className="row">
				<p className="display-1 my-5">Characters</p>
				{
					store.people?.map((item, index) => (
						<Card key={index} item={item} type="characters" />
					))}
				<p className="display-1 my-5"> Planets</p>
				{
					store.planets?.map((item, index) => (
						<Card key={index} item={item} type="planets" />
					))
				}
				<p className="display-1 my-5"> Vehicles</p>
				{
					store.vehicles?.map((item, index) => (
						<Card key={index} item={item} type="vehicles" />
					))
				}

			</div>
		</div>
	);
}; 