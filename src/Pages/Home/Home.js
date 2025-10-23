import React, { useEffect, useState } from "react";
import Header from "../../Component/Header/Header";
import Divider from "../../Component/Divider/Divider";
import SectionCategory from "../../Component/SectionCategory/SectionCategory";
import SliderProducts from "../../Component/SliderProducts/SliderProducts";
import SectionWideImage from "../../Component/SectionWideImage/SectionWideImage";
import productsNew from "../../productsNew";

export default function Home() {
    const [bestSales, setBestSales] = useState([]);
    const [newPro, setNewPro] = useState([]);
    useEffect(() => {
        const productBest = productsNew.filter((product) => product.sale > 10);
        const productLast = productsNew.filter((item) => item.date === 1);
        if (productBest.length > 0) {
            setBestSales(productBest);
        }
        if (productLast.length > 0) {
            setNewPro(productLast);
        }
    }, []);

    return (
        <>
            <Header />
            <Divider name={"دسته بندی ها"} />
            <SectionCategory />
            {newPro.length > 0 && (
                <>
                    <Divider name={"جدیدترین ها"} />
                    <SliderProducts productsSample={newPro} />
                </>
            )}
            <SectionWideImage />
            {bestSales.length > 0 && (
                <>
                    <Divider name={"پر فروش ترین ها"} />
                    <SliderProducts productsSample={bestSales} />
                </>
            )}
        </>
    );
}
