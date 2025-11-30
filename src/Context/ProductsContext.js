import { createContext, useState } from "react";
export const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
    const [buyProducts, setBuyProducts] = useState([]);
    const [isLogin, setIsLogin] = useState([false]);
    return (
        <ProductsContext.Provider value={{ buyProducts, setBuyProducts, isLogin, setIsLogin }}>
            {children}
        </ProductsContext.Provider>
    );
};
export default ProductsProvider;
