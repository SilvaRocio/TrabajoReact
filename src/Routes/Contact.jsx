import React from "react";
import Form from "../Components/Form";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
    return (
        <div>
            <h2>Want to know more?</h2>
            <p>Send us your questions and we will contact you</p>
            <h2>Formulario</h2>
            <Form />
        </div>
    );
};

export default Contact;
