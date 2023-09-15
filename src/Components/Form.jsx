import { useState } from "react";

const Form = () => {
    //Aqui deberan implementar el form completo con sus validaciones
    const [datos, setDatos] = useState({
        nombre: "",
        email: "",
    });
    const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (datos.nombre.length >= 5 && regexEmail.test(datos.email)) {
            alert("datos agregados correctamente");
        } else {
            alert("algunos de los datos estan mal ingresados");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="">Nombre</label>
            <input
                type="text"
                name="nombre"
                placeholder="ingrese su nombre"
                onChange={(e) => setDatos({ ...datos, nombre: e.target.value })}
            />
            <label htmlFor="">Emial</label>
            <input
                type="text"
                name="email"
                placeholder="ingrese su email"
                onChange={(e) => setDatos({ ...datos, email: e.target.value })}
            />
            <button>ENVIAR</button>
        </form>
    );
};

export default Form;
