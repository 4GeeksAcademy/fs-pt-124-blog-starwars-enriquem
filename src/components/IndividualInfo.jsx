import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

const FIELDS_BY_TYPE = {
    people: [
        { label: "Name", key: "name" },
        { label: "Height", key: "height" },
        { label: "Weight", key: "mass" },
        { label: "Color hair", key: "hair_color" }
    ],
    planets: [
        { label: "Name", key: "name" },
        { label: "Weather", key: "climate" },
        { label: "Land", key: "terrain" },
        { label: "Population", key: "population" }
    ],
    vehicles: [
        { label: "Name", key: "name" },
        { label: "Model", key: "model" },
        { label: "Manufacturer", key: "manufacturer" },
        { label: "Crew", key: "crew" }
    ]
}

export const IndividualInfo = () => {

    const location = useLocation()
    console.log(location)
    const url = location.state.item.url
    //const urlHomeWorld = location.state.item.homeworld
    const imgUrl = location.state.imgUrl

    
    const [object, setObject] = useState(null)
    //const [homeWorld , setHomeWorld] = useState(null)

    const getItem = async () => {
        const response = await fetch(url)
        const data = await response.json()
        setObject(data.result.properties);
        console.log(data.result);
    }

    const getHomeWorld = async () => {
        const response = await fetch(urlHomeWorld)
        const data = await response.json()
        setHomeWorld(data.result.properties.name);
        console.log(data.result);
    }

    useEffect(() => {
        if (url) getItem()
    }, [url])

    const type = url.split("/api/")[1].split("/")[0]
    const fields = FIELDS_BY_TYPE[type] || []

    return (
        <div className="container">
            <div className="row card-row overflow-hidden">
                <div className="col overflow-hidden">
                    <img className="h-100 object-fit-cover" src={imgUrl} alt="item image" />
                </div>
                <div className="col">
                    {object && fields.map(field => (
                        <p key={field.key}>
                            <strong>{field.label}:</strong> {object[field.key]}
                        </p>
                    ))}
                </div>
            </div>


        </div>
    )
}