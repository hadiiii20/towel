import Home from "./Pages/Home/Home";
import DetailsProduct from "./Pages/DetailsProduct/DetailsProduct";
import Products from "./Pages/Products/Products";
import Login from "./Pages/LoginSite/LoginSite";

let routes = [
    { path: "/", element: <Home /> },
    { path: "/products", element: <Products /> },
    { path: "/login", element: <Login /> },
    { path: "/products/:id", element: <DetailsProduct /> },
];

export default routes;
