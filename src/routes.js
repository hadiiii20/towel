import Home from "./Pages/Home/Home";
import DetailsProduct from "./Pages/DetailsProduct/DetailsProduct";
import Products from "./Pages/Products/Products";

let routes = [
    { path: "/", element: <Home /> },
    { path: "/products", element: <Products /> },
    { path: "/products/:id", element: <DetailsProduct /> },
];

export default routes;
