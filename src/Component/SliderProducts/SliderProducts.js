import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import CardProduct from "../CardProduct/CardProduct";
import ModalSizeGuid from "../ModalSizeGuide/ModalSizeGuid";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "./SliderProducts.css";
import { FreeMode, Pagination, Navigation } from "swiper/modules";

export default function SliderProducts({ productsSample }) {
    const [products, setProducts] = useState(productsSample);
    const [isShowModal, setIsShowModal] = useState(false);

    const handleShowModal = () => {
        setIsShowModal(!isShowModal);
    };

    window.onclick = (e) => {
        if (e.target.classList.contains("modal-help-size")) {
            handleShowModal();
        }
    };

    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                centeredSlides={false}
                navigation={true}
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
                modules={[FreeMode, Navigation, Pagination]}
                className="mySwiper swiper-sliderProducts"
            >
                {products.map((item) => (
                    <SwiperSlide className="img-sliderProduct">
                        <CardProduct
                            nameCard={item.name}
                            srcCard={item.source}
                            typeCard={item.type}
                            detailsCard={item.details}
                            btnModalGuide={handleShowModal}
                            offCard={item.off}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
            {isShowModal && (
                <div className={`modal-wrapper ${isShowModal ? "active" : ""}`}>
                    <ModalSizeGuid isActive={"active"} />
                </div>
            )}
        </>
    );
}
