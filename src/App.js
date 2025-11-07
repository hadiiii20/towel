import React from "react";

import "./App.css";
import routes from "./routes";
import NavbarBlue from "./Component/NavbarBlue/NavbarBlue";
import Footer from "./Component/Footer/Footer";
import { useRoutes } from "react-router-dom";

function App() {
    let router = useRoutes(routes);
    return (
        <div className="container custom-scroll-main">
            <NavbarBlue />
            {router}
            <Footer />
        </div>
    );
}

export default App;
