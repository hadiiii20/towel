import React from "react";
import NavbarBlue from "../NavbarBlue/NavbarBlue";
import "./Header.css";
import Button from "../Button/Button";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
import { Autoplay } from "swiper/modules";

export default function Header() {
    return (
        <div className="container">
            <NavbarBlue />
            <section className="section">
                <div className="title-wrapper">
                    <h1 className="titleh1">امروز در پودایران</h1>
                    <h3 className="titleh3">کالکشنی زیبا از جدیدترین حوله ها</h3>
                    <h5 className="titleh5">استایلی جذاب برای همیشه</h5>
                    <Button nameBtn={"فروشگاه"} />
                </div>
                <Swiper
                    effect={"cards"}
                    grabCursor={true}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay, EffectCards]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src="./images/younas.png" alt="" />{" "}
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="./images/malavan.png" alt="" />{" "}
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="./images/goli.png" alt="" />{" "}
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="./images/jagvar.png" alt="" />{" "}
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="./images/classic.png" alt="" />{" "}
                    </SwiperSlide>
                </Swiper>
                <div className="imgwoman">
                    <img src="./images/paradais1.png" alt="" />
                </div>
                {/* <div className="mens">
                    <img src="./images/mens.png" alt="" />
                </div> */}
            </section>
        </div>
    );
}
