import { useState } from "react"
import useGlobalReducer from "../hooks/useGlobalReducer"
import { Link } from "react-router-dom"

export const Card = ({item, type}) => {
    const { favoriteList, setFavoriteList } = useGlobalReducer()
    const [ imgUrl, setImgUrl ] = useState("https://github.com/tbone849/star-wars-guide/blob/master/build/assets/img/" + type + "/" + item.uid + ".jpg?raw=true")
    const isFavorite = favoriteList.includes(item.name)
    //console.log(isFavorite);

    
    const resultadoUseGlobal = useGlobalReducer()
    const handleClick = ()=> console.log(resultadoUseGlobal)

    return (
        <div className="col-lg-3" key={item.uid}>
            {/* <button onClick={handleClick}>global reducer</button> */}
            <div className="card my-2 border-0 rounded-4 overflow-hidden" style={{ width: "18rem" }}>
                <div className="ratio ratio-1x1">
                <img src={imgUrl} className="object-fit-cover" alt="..." 
                onError={() => {setImgUrl("https://res.cloudinary.com/dra2cr3uw/image/upload/v1765366742/IMAGEN_MUY_MUY_LEJANA_NO_DISPONIBLE_TEMPORALMENTE_pj0r6g.png") }} 
                />
                </div>
                <div className="card-body text-center">
                    <h5 className="card-title">{item.name}</h5>
                    <div className="d-flex justify-content-between">
                        
                        <Link to={"/individualinfo"} state={{item, imgUrl}}>
                        <span className="btn btn-warning">More info</span>
                        </Link>

                        {/* <i type="button" className="fa-regular fa-heart align-content-center fs-2"></i> */}
                        <i onClick={() => {
                            if(!isFavorite){
                                setFavoriteList(prev=>[...prev, item.name])
                            } else {
                                setFavoriteList(prev=>prev.filter(fav=>fav !== item.name))
                            }
                        }} 
                        type="button" className={`fa-${isFavorite ? "solid text-danger" : "regular text-black"} fa-heart align-content-center fs-2`}></i>
                        {/* <i onClick={() => handleColor("black")} type="button" className={"fa-solid fa-heart align-content-center fs-2" + (color === "black" ? "red" : "") }></i> */}

                    </div>
                </div>
            </div>
        </div>

    )
}