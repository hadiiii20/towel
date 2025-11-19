import React from "react";

import "./App.css";
import routes from "./routes";
import NavbarBlue from "./Component/NavbarBlue/NavbarBlue";
import Footer from "./Component/Footer/Footer";
import { useRoutes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import ProductsProvider from "./Context/ProductsContext";

function App() {
    let router = useRoutes(routes);

    return (
        <ProductsProvider>
            <div className="container">
                <NavbarBlue />
                {router}
                <Footer />
                <Toaster
                    position="bottom-left"
                    reverseOrder={false}
                    gutter={8}
                    containerClassName=""
                    containerStyle={{}}
                    toasterId="default"
                    toastOptions={{
                        // Define default options
                        className: "toast-basket",
                        duration: 1000,
                        removeDelay: 1000,
                        style: {
                            background: "var(--green-main)",
                            color: "var(--blue-dark)",
                        },

                        // Default options for specific types
                        success: {
                            duration: 3000,
                            iconTheme: {
                                primary: "green",
                                secondary: "white",
                            },
                        },
                    }}
                />
            </div>
        </ProductsProvider>
    );
}

export default App;
