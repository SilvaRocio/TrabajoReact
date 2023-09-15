import React, { useContext, useEffect } from "react";
import { ContextGlobal } from "../Components/utils/global.context";
import { useParams } from "react-router-dom";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
    // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
    const { handleSetDentist, state, getDentist } = useContext(ContextGlobal);

    const params = useParams();
    console.log(params);

    useEffect(() => {
        getDentist(params.id).then((info) => {
            handleSetDentist(info);
        });
    }, []);

    return (
        <>
            {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
            {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
            <h1>Detail Dentist id </h1>
            <p>{state.dentist?.name}</p>
            <p>{state.dentist?.email}</p>
            <p>{state.dentist?.phone}</p>
            <p>{state.dentist?.website}</p>
        </>
    );
};

export default Detail;
