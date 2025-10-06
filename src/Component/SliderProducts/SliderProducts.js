import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "./SliderProducts.css";
// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import CardProduct from "../CardProduct/CardProduct";

export default function SliderProducts() {
    const [products, setProducts] = useState([
        { id: 1, name: "حوله لبوبو صورتی", source: "./images/Card-img/kuromi-sorati.jpg", price: "1350000" },
        { id: 2, name: "حوله لبوبو بنفش", source: "./images/Card-img/kuromi-banafsh.jpg", price: "1350000" },
        { id: 3, name: "حوله باب اسفنجی", source: "./images/Card-img/bob-abi.jpg", price: "1350000" },
        { id: 4, name: "حوله ورساچه سفید ", source: "./images/Card-img/versach-sefid.jpg", price: "1350000" },
        { id: 5, name: "حوله ورساچه مشکی", source: "./images/Card-img/versach-meshki.jpg", price: "3560000" },
        { id: 6, name: "حوله لیلیوم صورتی", source: "./images/Card-img/lilium-sorati.jpg", price: "1350000" },
        { id: 7, name: "حوله لیلیوم شیری", source: "./images/Card-img/lilium-shiri.jpg", price: "1350000" },
        { id: 8, name: "حوله کیتی", source: "./images/Card-img/kiti-sorati.jpg", price: "1350000" },
        { id: 9, name: "حوله کرومی صورتی", source: "./images/Card-img/kuromi-sorati.jpg", price: "1350000" },
        { id: 10, name: "حوله کرومی بنفش", source: "./images/Card-img/kuromi-banafsh.jpg", price: "1350000" },
    ]);

    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                }}
                modules={[Pagination]}
                className="mySwiper swiper-sliderProducts"
            >
                {products.map((item) => (
                    <SwiperSlide className="img-sliderProduct">
                        <CardProduct nameCard={item.name} priceCard={item.price} srcCard={item.source} key={item.id} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}
