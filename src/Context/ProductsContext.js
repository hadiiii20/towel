import { createContext, useState } from "react";
export const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
    const [buyProducts, setBuyProducts] = useState([]);
    const [isLogin, setIsLogin] = useState(false);
    const [usersLogin, setUsersLogin] = useState([]);
    const [userLoginOnline, setUserLoginOnline] = useState();
    return (
        <ProductsContext.Provider
            value={{
                buyProducts,
                setBuyProducts,
                isLogin,
                setIsLogin,
                usersLogin,
                setUsersLogin,
                userLoginOnline,
                setUserLoginOnline,
            }}
        >
            {children}
        </ProductsContext.Provider>
    );
};
export default ProductsProvider;
