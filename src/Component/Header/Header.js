import React from "react";
import NavbarBlue from "../NavbarBlue/NavbarBlue";
import "./Header.css";
import { Link } from "react-router-dom";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { EffectCards } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/effect-cards";
// import { Autoplay } from "swiper/modules";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay } from "swiper/modules";
import { EffectFlip, Pagination, Navigation } from "swiper/modules";

export default function Header() {
    return (
        <div className="container">
            <NavbarBlue />
            <section className="section">
                <Swiper
                    effect={"flip"}
                    grabCursor={true}
                    pagination={true}
                    navigation={true}
                    autoplay={{
                        delay: 3800,
                        disableOnInteraction: false,
                    }}
                    modules={[EffectFlip, Pagination, Navigation, Autoplay]}
                    className="mySwiper swiper-men"
                >
                    <SwiperSlide className="img-men">
                        <img src="./images/younas2.png" alt="" />
                    </SwiperSlide>
                    <SwiperSlide className="img-men">
                        <img src="./images/jagvar1.png" alt="" />
                    </SwiperSlide>
                    <SwiperSlide className="img-men">
                        <img src="./images/classic1.png" alt="" />
                    </SwiperSlide>
                </Swiper>
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
                            className="bi bi-chevron-double-left mybtn-svg"
                            viewBox="0 0 16 16"
                        >
                            <path
                                fillRule="evenodd"
                                d="M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"
                            />
                            <path
                                fillRule="evenodd"
                                d="M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"
                            />
                        </svg>
                    </Link>
                </div>
                <Swiper
                    effect={"flip"}
                    grabCursor={true}
                    pagination={true}
                    navigation={true}
                    autoplay={{
                        delay: 3500,
                        disableOnInteraction: false,
                    }}
                    modules={[EffectFlip, Pagination, Navigation, Autoplay]}
                    className="mySwiper swiper-woman"
                >
                    <SwiperSlide className="img-woman">
                        <img src="./images/abrangi.png" alt="" />
                    </SwiperSlide>
                    <SwiperSlide className="img-woman">
                        <img src="./images/palangi2.png" alt="" />
                    </SwiperSlide>
                    <SwiperSlide className="img-woman">
                        <img src="./images/brash.png" alt="" />
                    </SwiperSlide>
                </Swiper>
            </section>
            <div>
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
            </div>
        </div>
    );
}
