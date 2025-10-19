import React from "react";
import Header from "../../Component/Header/Header";
import Divider from "../../Component/Divider/Divider";
import SectionCategory from "../../Component/SectionCategory/SectionCategory";
import SliderProducts from "../../Component/SliderProducts/SliderProducts";
import SectionWideImage from "../../Component/SectionWideImage/SectionWideImage";
import productsNew from "../../productsNew";
import productsBestSaller from "../../productsBestSaller";

export default function Home() {
    return (
        <>
            <Header />
            <Divider name={"دسته بندی ها"} />
            <SectionCategory />
            <Divider name={"جدیدترین ها"} />
            <SliderProducts productsSample={productsNew} />
            <SectionWideImage />
            <Divider name={"پر فروش ترین ها"} />
            <SliderProducts productsSample={productsBestSaller} />
            {/* <Footer /> */}
        </>
    );
}
