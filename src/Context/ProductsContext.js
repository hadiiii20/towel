import { createContext, useState } from "react";
export const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
    const [buyProducts, setBuyProducts] = useState([]);
    return <ProductsContext.Provider value={{ buyProducts, setBuyProducts }}>{children}</ProductsContext.Provider>;
};
export default ProductsProvider;
