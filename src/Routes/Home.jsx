//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

import { useContext, useEffect, useState } from "react";
import { ContextGlobal } from "../Components/utils/global.context";
import Card from "../Components/Card";

const Home = () => {
    const { fetchData, state, handleSetData, handleFavs } =
        useContext(ContextGlobal);
    // const [favs, setFavs] = useState([]);
    useEffect(() => {
        fetchData().then((datos) => {
            handleSetData(datos);
        });
    }, []);
    useEffect(() => {
        localStorage.setItem("favs", JSON.stringify(state.favs));
    }, [state.favs]);

    return (
        <main className="">
            <h1>Home</h1>
            <div className="card-grid">
                {/* Aqui deberias renderizar las cards */}
                {state.data.map((item) => (
                    <Card
                        key={item.id}
                        name={item.name}
                        username={item.username}
                        id={item.id}
                        favs={state.favs}
                        setFavs={handleFavs}
                    ></Card>
                ))}
            </div>
        </main>
    );
};

export default Home;
