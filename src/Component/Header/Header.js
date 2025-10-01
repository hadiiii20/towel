import React from "react";
import NavbarBlue from "../NavbarBlue/NavbarBlue";
import "./Header.css";
import { Link } from "react-router-dom";
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
                <div className="img-men">
                    <img src="./images/younas1.png" alt="" />
                </div>
                <div className="title-wrapper">
                    <h1 className="titleh1">امروز در پودایران</h1>
                    <h3 className="titleh3">کالکشنی زیبا از جدیدترین حوله ها</h3>
                    <h5 className="titleh5">استایلی جذاب برای همیشه</h5>
                    <Link className="mybtn">
                        مشاهده محصولات
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-chevron-left mybtn-svg"
                            viewBox="0 0 16 16"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"
                            />
                        </svg>
                    </Link>
                </div>
                <div className="img-woman">
                    <img src="./images/paradais.png" alt="" />
                </div>
                {/* <Swiper
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
                </Swiper> */}
                {/* <div className="mens">
                    <img src="./images/mens.png" alt="" />
                </div> */}
            </section>
        </div>
    );
}
