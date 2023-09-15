import React, { useState } from "react";
import { Link } from "react-router-dom";
import doctorImg from "../images/fotoDoctor.jpg";

const Card = ({ name, username, id, favs, setFavs }) => {
    const addFav = () => {
        if (!favs.some((fav) => fav.id === id)) {
            const fav = {
                name,
                username,
                id,
            };
            const arr = [...favs, fav];
            setFavs(arr);
        }
    };

    // Aqui iria la logica para agregar la Card en el localStorage
    // localStorage.setItem(
    //     "favs",
    //     JSON.stringify([...prevFavorites, newFav])
    // );

    return (
        <div className="card">
            {/* En cada card deberan mostrar en name - username y el id */}
            <Link to={`/dentist/${id}`}>
                <div className="divDoctor">
                    <img
                        className="imgDoctor"
                        src={doctorImg}
                        alt=" imagen del doctor"
                    />
                </div>
                {/* <p>{id}</p> */}
                <p>{username}</p>
                <p>{name}</p>
            </Link>
            {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

            {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
            <button onClick={addFav} className="favButton">
                Add fav
            </button>
        </div>
    );
};

export default Card;
