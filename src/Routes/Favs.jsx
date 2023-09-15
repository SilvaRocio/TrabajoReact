import React from "react";
import Card from "../Components/Card";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
    const favoritos = JSON.parse(localStorage.getItem("favs"));

    // console.log(favoritos);
    return (
        <>
            <h1>Dentists Favs</h1>
            <div className="card-grid">
                {/* este componente debe consumir los destacados del localStorage */}
                {/* Deberan renderizar una Card por cada uno de ellos */}
                {favoritos.map((item) => (
                    <Card
                        key={item.id}
                        name={item.name}
                        username={item.username}
                        id={item.id}
                    ></Card>
                ))}
            </div>
        </>
    );
};

export default Favs;
