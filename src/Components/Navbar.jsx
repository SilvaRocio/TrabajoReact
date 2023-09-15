import React from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from "../Components/utils/global.context";
import { useContext } from "react";
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
    const { handleTheme } = useContext(ContextGlobal);
    // const handleClick = () => {
    //     handleTheme();
    // };

    return (
        <div>
            <nav>
                {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
                <ul className="divNavegador">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/Favs">Favs</Link>
                    </li>
                </ul>
                {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
                <button className="buton" onClick={handleTheme}>
                    Change theme
                </button>
            </nav>
        </div>
    );
};

export default Navbar;
