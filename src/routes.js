import Home from "./Pages/Home/Home";
import DetailsProduct from "./Pages/DetailsProduct/DetailsProduct";
import Products from "./Pages/Products/Products";
import Login from "./Pages/LoginSite/LoginSite";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import AboutMe from "./Pages/AboutMe/AboutMe";
import ContactUs from "./Pages/ContactUs/ContactUs";
import ShoppingCart from "./Pages/ShoppingCart/ShoppingCart";
import CartCheckout from "./Pages/CartCheckout/CartCheckout";
import ProductsCategory from "./Pages/ProductsCategory/ProductsCategory";
import UserPanel from "./Pages/UserPanel/UserPanel";

let routes = [
    { path: "/", element: <Home /> },
    { path: "/aboutme", element: <AboutMe /> },
    { path: "/contactus", element: <ContactUs /> },
    { path: "/products", element: <Products /> },
    { path: "/products/:categoryproduct/", element: <ProductsCategory /> },
    { path: "/login", element: <Login /> },
    { path: "/shoppingcart", element: <ShoppingCart /> },
    { path: "/shoppingcart/checkout", element: <CartCheckout /> },
    { path: "/products/:categoryproduct/:id", element: <DetailsProduct /> },
    { path: "/ErrorPage", element: <ErrorPage /> },
    { path: "/paneluser", element: <UserPanel /> },
    { path: "*", element: <ErrorPage /> },
];

export default routes;
