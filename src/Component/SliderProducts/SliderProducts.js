import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import CardProduct from "../CardProduct/CardProduct";
import ModalSizeGuid from "../ModalSizeGuide/ModalSizeGuid";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "./SliderProducts.css";
import { FreeMode, Pagination, Navigation, Autoplay } from "swiper/modules";

export default function SliderProducts({ productsSample }) {
    const [isShowModal, setIsShowModal] = useState(false);
    const [type, setType] = useState();

    const handleShowModal = (typeCard) => {
        setIsShowModal(!isShowModal);
        setType(typeCard);
    };
    useEffect(() => {
        window.onclick = (e) => {
            if (e.target.classList.contains("modal-help-size")) {
                handleShowModal();
            }
        };
    });

    return (
        <>
            <Swiper
                loop={true}
                slidesPerView={1}
                spaceBetween={10}
                centeredSlides={false}
                navigation={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                freeMode={{
                    enabled: true,
                    sticky: true,
                    momentum: true,
                    momentumRatio: 0.3,
                }}
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
                modules={[FreeMode, Navigation, Pagination, Autoplay]}
                className=" swiper-sliderProducts"
            >
                {productsSample.map((item) => (
                    <SwiperSlide key={item.id} className="img-sliderProduct">
                        <CardProduct
                            nameCard={item.name}
                            srcCard={item.source}
                            typeCard={item.type}
                            detailsCard={item.details}
                            offCard={item.off}
                            idCard={item.id}
                            btnModalGuide={handleShowModal}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
            {isShowModal && (
                <div className={`modal-wrapper ${isShowModal ? "active" : ""}`}>
                    {type === "حوله تنپوش کودک" ? (
                        <ModalSizeGuid isActive={"active"} title="تنپوش بچگانه" imgSrc="/images/childSize.jpg" />
                    ) : (
                        <ModalSizeGuid isActive={"active"} title="تنپوش بزرگسال" imgSrc="/images/adultSize.jpg" />
                    )}
                </div>
            )}
        </>
    );
}
