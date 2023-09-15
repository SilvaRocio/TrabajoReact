import { Route, Routes } from "react-router-dom";
import Home from "./Routes/Home";
import Layout from "./Routes/Layout";
import Contact from "./Routes/Contact";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";
import { useContext } from "react";
import { ContextGlobal } from "./Components/utils/global.context";

function App() {
    const { state } = useContext(ContextGlobal);
    return (
        <div className={state.theme && "dark"}>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/dentist/:id" element={<Detail />} />
                    <Route path="/Favs" element={<Favs />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
