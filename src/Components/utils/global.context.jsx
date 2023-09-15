import { createContext, useReducer, useState } from "react";

// export const initialState = { theme: "", data: [] };

export const ContextGlobal = createContext();
const initialState = {
    data: [],
    dentist: {},
    theme: false,
    favs: [],
};
export const ContextProvider = ({ children }) => {
    //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

    // const [data, setData] = useState([]);
    // const [dentist, setDentist] = useState();
    // const [theme, setTheme] = useState(false);
    // const [favs, setFavs] = useState([]);

    const reducer = (state, action) => {
        switch (action.type) {
            case "setData":
                return {
                    ...state,
                    data: action.payload,
                };
            case "setDentist":
                return {
                    ...state,
                    dentist: action.payload,
                };
            case "setTheme":
                return {
                    ...state,
                    theme: !state.theme,
                };
            case "setFavs":
                return {
                    ...state,
                    favs: action.payload,
                };
            default:
                return state;
        }
    };
    const [state, dispatch] = useReducer(reducer, initialState);
    const handleSetData = (datos) => {
        dispatch({ type: "setData", payload: datos });
    };
    const handleSetDentist = (datos) => {
        dispatch({ type: "setDentist", payload: datos });
    };
    const handleTheme = () => {
        dispatch({ type: "setTheme" });
    };
    const handleFavs = (datos) => {
        dispatch({ type: "setFavs", payload: datos });
    };
    const fetchData = async () => {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();
        return data;
    };
    const getDentist = async (id) => {
        const res = await fetch(
            `https://jsonplaceholder.typicode.com/users/${id}`
        );
        const data = res.json();
        return data;
    };

    return (
        <ContextGlobal.Provider
            value={{
                // data,
                // setData,
                state,
                handleSetData,
                handleSetDentist,
                fetchData,
                // dentist,
                // setDentist,
                getDentist,
                handleTheme,
                handleFavs,
                // theme,
                // setTheme,
            }}
        >
            {children}
        </ContextGlobal.Provider>
    );
};
