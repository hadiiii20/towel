import React, { useEffect, useState, useContext } from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import Breadcrumb from "../../Component/Breadcrumb/Breadcrumb";
import Rating from "@mui/material/Rating";
import productsDatabase from "../../productsDatabase";
import Button from "../../Component/Button/Button";
import Divider from "../../Component/Divider/Divider";
import SliderProducts from "../../Component/SliderProducts/SliderProducts";
import ModalSizeGuid from "../../Component/ModalSizeGuide/ModalSizeGuid";
import SizeTowel from "../../Component/SizeTowel/SizeTowel";
import InputNumber from "../../Component/InputNumber/InputNumber";
import toast from "react-hot-toast";
import { ProductsContext } from "../../Context/ProductsContext";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/zoom";
import "swiper/css/thumbs";

import "./DetailsProduct.css";
import { Zoom, FreeMode, Navigation, Thumbs } from "swiper/modules";

export default function DetailsProduct() {
    let params = useParams();
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [activeTab, setActiveTab] = useState("description");
    const [isShowModal, setIsShowModal] = useState(false);

    const [priceOff, setPriceOff] = useState();
    const [priceMain, setPriceMain] = useState();
    const [sizeDefault, setSizeDefault] = useState();
    const [priceDefaultOff, setPriceDefaultOff] = useState();
    const [priceDefaultOriginal, setPriceDefaultOriginal] = useState();
    const [newNumberBasket, setNewNumberBasket] = useState(1);

    const [numberInputNumber, setNumberInputNumber] = useState();

    const [resetValue, setResetValue] = useState(false);

    const prodcutsBasket = useContext(ProductsContext);

    const [valueStars, setValueStars] = useState(5);
    const [comment, setComment] = useState("");

    let hasPost = productsDatabase.some((item) => item.id === Number(params.id));
    let productSelect;
    let productSlider;

    useEffect(() => {
        if (!hasPost) return;
        const product = productsDatabase.find((item) => item.id === Number(params.id));
        const firstAvailable = product.details.find((pro) => pro.number > 0);
        if (firstAvailable) {
            let priceMain = Number(firstAvailable.price).toLocaleString();
            let convertNum = Number(firstAvailable.price);
            product.off > 0 && (convertNum = (1 - product.off) * convertNum);
            let PriceDefaultOff = convertNum.toLocaleString();

            setPriceDefaultOff(PriceDefaultOff);
            setPriceDefaultOriginal(priceMain);
            setSizeDefault(firstAvailable.size);
            setNumberInputNumber(firstAvailable.number);
            setResetValue(true);
        }
    }, [hasPost, params.id]);
    useEffect(() => {
        setResetValue(1);
    }, [priceMain, priceOff]);

    const btnModalGuide = () => {
        setIsShowModal(!isShowModal);
    };

    useEffect(() => {
        window.onclick = (e) => {
            if (e.target.classList.contains("modal-help-size")) {
                btnModalGuide();
            }
        };
    });

    if (!hasPost) {
        return <Navigate to={"/ErrorPage"} />;
    } else {
        productSelect = productsDatabase.find((item) => item.id === Number(params.id));
        productSlider = productsDatabase.filter((item) => item.type === productSelect.type);
    }

    const selectSize = (e) => {
        let size = e.target.innerText;
        productSelect.details.forEach((item) => {
            if (item.size === size) {
                let convertNum = Number(item.price);
                let priceMain = convertNum.toLocaleString();
                productSelect.off > 0 && (convertNum = (1 - productSelect.off) * convertNum);
                let priceCardOff = convertNum.toLocaleString();
                setPriceOff(priceCardOff);
                setPriceMain(priceMain);
                setSizeDefault(item.size);
                setNumberInputNumber(item.number);
                setResetValue(true);
            }
        });

        e.target.classList.add("selected__size");
    };

    // button Basket------------------------------
    const calNumberBasket = (newNumber) => {
        setNewNumberBasket(newNumber);
    };
    let isProductInProudct = prodcutsBasket.buyProducts.some(
        (item) => item.name === productSelect.name && item.size === sizeDefault
    );
    let addToBasket = () => {
        if (!isProductInProudct) {
            let newBuyProduct = {
                id: productSelect.id,
                name: productSelect.name,
                size: sizeDefault,
                price: priceOff ? priceOff : priceDefaultOff ? priceDefaultOff : priceDefaultOriginal,
                src: productSelect.source,
                number: newNumberBasket,
                maxnumber: numberInputNumber,
            };

            prodcutsBasket.setBuyProducts((prevBuyProducts) => [...prevBuyProducts, newBuyProduct]);
            notify();
        } else {
            let productCart = [...prodcutsBasket.buyProducts];

            productCart.some((pro) => {
                if (pro.name === productSelect.name && pro.size === sizeDefault) {
                    if (pro.number < pro.maxnumber) {
                        pro.number += 1;
                        notifyUpadateNumber();
                    } else {
                        notifyErrorMaxnumber();
                    }
                    return true;
                }
            });
            prodcutsBasket.setBuyProducts(productCart);
        }
    };

    //toast---------------------------------------
    const notify = () =>
        toast.success("محصول با موفقیت به سبد خرید اضافه شد !", {
            style: {
                backgroundColor: "var(--green-main)",
            },
        });
    const notifyErrorMaxnumber = () => toast.error("محدودیت موجودی!! ");
    const notifyUpadateNumber = () =>
        toast.success("تعداد محصول در  🛒 بروزرسانی شد !", {
            style: {
                border: "2px solid var(--blue-dark)",
                padding: "16px",
                color: "var(--blue-dark)",
                backgroundColor: "var(--blue-glass)",
            },
            iconTheme: {
                primary: "var(--blue-dark)",
                secondary: "var(--blue-glass)",
            },
        });
    const notifyErrorStar = () =>
        toast.error("امتیاز صحیح وارد نشد مجدد انتخاب کنید!!", {
            style: {
                backgroundColor: "var(--green-main)",
            },
            position: "top-center",
            duration: 3000,
        });

    return (
        <>
            <Breadcrumb nameGroup={productSelect.type} nameProduct={productSelect.name} />
            <div className="section-main-product-details">
                <div className="img-product-wrapper">
                    <Swiper
                        zoom={true}
                        panOnMouseMove="true"
                        spaceBetween={10}
                        navigation={true}
                        thumbs={{ swiper: thumbsSwiper }}
                        modules={[Zoom, FreeMode, Navigation, Thumbs]}
                        className="mySwiper2 swiper-details-product"
                    >
                        <SwiperSlide>
                            <div className="swiper-zoom-container">
                                <img alt="" src={productSelect.source} />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="swiper-zoom-container">
                                <img alt="" src="/images/product-details/mosh(6).jpg" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="swiper-zoom-container">
                                <img alt="" src="/images/product-details/mosh(7).jpg" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="swiper-zoom-container">
                                <img alt="" src="/images/product-details/mosh(8).jpg" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="swiper-zoom-container">
                                <img alt="" src="/images/product-details/mosh(9).jpg" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="swiper-zoom-container">
                                <img alt="" src="/images/product-details/mosh(10).jpg" />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                    <Swiper
                        onSwiper={setThumbsSwiper}
                        spaceBetween={10}
                        slidesPerView={4}
                        freeMode={true}
                        watchSlidesProgress={true}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="mySwiper swiper-details-product swiper-details-product-bottom"
                    >
                        <SwiperSlide>
                            <img alt="" src={productSelect.source} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img alt="" src="/images/product-details/mosh(6).jpg" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img alt="" src="/images/product-details/mosh(7).jpg" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img alt="" src="/images/product-details/mosh(8).jpg" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img alt="" src="/images/product-details/mosh(9).jpg" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img alt="" src="/images/product-details/mosh(10).jpg" />
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className="details-product-wrapper">
                    <h1 className="det-product-title">{productSelect.name}</h1>
                    <div className="det-product-size-wrapper">
                        <div className="det-product-size">
                            انتخاب سایز :
                            {(productSelect.type === "حوله تنپوش کودک" ||
                                productSelect.type === "حوله تنپوش زنانه" ||
                                productSelect.type === "حوله تنپوش مردانه") && (
                                <span className="det-help-size" onClick={btnModalGuide}>
                                    (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        className="bi bi-question-circle help-size"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                                        <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286m1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94" />
                                    </svg>
                                    راهنمای سایز حوله )
                                </span>
                            )}
                        </div>
                        <div className="det-product-size-label-wrapper">
                            <SizeTowel
                                detailProduct={productSelect.details}
                                name={productSelect.name}
                                sizeDefault={sizeDefault}
                                hadlerSize={selectSize}
                            />
                        </div>
                    </div>
                    <div className="det-price-wrapper">
                        <h3>
                            قیمت <span>براساس سایز </span>:
                        </h3>
                        <div className="det-price">
                            <span
                                className={`det-price-main ${
                                    productSelect.off > 0 && (priceDefaultOff || priceOff) && "off"
                                }`}
                            >
                                {priceMain ? priceMain : priceDefaultOriginal}
                            </span>
                            <span className="det-price-unit">تومان</span>
                            {productSelect.off > 0 && (priceOff || priceDefaultOff) && (
                                <>
                                    <span className="det-price-after-off">{priceOff ? priceOff : priceDefaultOff}</span>
                                    <span className="det-price-unit">تومان</span>
                                </>
                            )}
                        </div>
                    </div>
                    <div className="title-number">
                        <h3>تعداد :</h3>
                    </div>

                    <div class="input-number-wrapper">
                        <InputNumber
                            maxValue={numberInputNumber}
                            value={resetValue}
                            resetval={resetValue}
                            numberChange={(newNumber) => calNumberBasket(newNumber)}
                        />
                    </div>
                    <Link onClick={() => addToBasket()} className="btn-product-basket">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="currentColor"
                            className="bi bi-basket-fill"
                            viewBox="0 0 16 16"
                        >
                            <path d="M5.071 1.243a.5.5 0 0 1 .858.514L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 6h1.717zM3.5 10.5a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0z" />
                        </svg>
                        افزودن به سبد خرید
                    </Link>
                </div>
                <div className="option-product-wrapper">
                    <div className="option-product option-quality">
                        <div className="option-product-svg-parent">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="22"
                                height="22"
                                fill="currentColor"
                                class="bi bi-award"
                                viewBox="0 0 16 16"
                            >
                                <path d="M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702z" />
                                <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1z" />
                            </svg>
                        </div>

                        <span>1 سال ضمانت دوام رنگ</span>
                    </div>
                    <div className="option-product option-delivery">
                        <div className="option-product-svg-parent">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="22"
                                height="22"
                                fill="currentColor"
                                class="bi bi-truck"
                                viewBox="0 0 16 16"
                            >
                                <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5zm1.294 7.456A2 2 0 0 1 4.732 11h5.536a2 2 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456M12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2" />
                            </svg>
                        </div>
                        <span>ارسال به سراسر کشور</span>
                    </div>
                    <div className="option-product option-shop">
                        <div className="option-product-svg-parent">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="22"
                                height="22"
                                fill="currentColor"
                                class="bi bi-shop"
                                viewBox="0 0 16 16"
                            >
                                <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.37 2.37 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0M1.5 8.5A.5.5 0 0 1 2 9v6h1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5h6V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5M4 15h3v-5H4zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zm3 0h-2v3h2z" />
                            </svg>
                        </div>
                        <span>امکان خرید حضوری از نمایندگی ها</span>
                    </div>
                    <div className="option-product option-card">
                        <div className="option-product-svg-parent">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="22"
                                height="22"
                                fill="currentColor"
                                class="bi bi-credit-card"
                                viewBox="0 0 16 16"
                            >
                                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z" />
                                <path d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
                            </svg>
                        </div>
                        <span>خرید و پرداخت امن</span>
                    </div>
                </div>
            </div>
            <div className="tab-wrapper">
                <div className="tab-title-wrapper">
                    <div className="tab-title">
                        <input
                            type="radio"
                            id="tabTitle-description"
                            name="tabTitle"
                            className="tab-title-input"
                            hidden
                            checked={activeTab === "description"}
                        />
                        <label
                            htmlFor="tabTitle-description"
                            className="tab-title-label"
                            onClick={() => setActiveTab("description")}
                        >
                            توضیحات
                        </label>
                    </div>
                    <div className="tab-title">
                        <input
                            type="radio"
                            id="tabTitle-specification"
                            name="tabTitle"
                            className="tab-title-input"
                            hidden
                            checked={activeTab === "specification"}
                        />
                        <label
                            htmlFor="tabTitle-specification"
                            className="tab-title-label"
                            onClick={() => setActiveTab("specification")}
                        >
                            مشخصات
                        </label>
                    </div>
                    <div className="tab-title">
                        <input
                            type="radio"
                            id="tabTitle-comment"
                            name="tabTitle"
                            className="tab-title-input"
                            hidden
                            checked={activeTab === "comment"}
                        />
                        <label
                            htmlFor="tabTitle-comment"
                            className="tab-title-label"
                            onClick={() => setActiveTab("comment")}
                        >
                            نظرات
                        </label>
                    </div>
                </div>
                <div className="tab-body-wrapper">
                    <div
                        className="tab-body-feature"
                        style={{
                            opacity: activeTab === "description" ? 1 : 0,
                            height: activeTab === "description" ? "auto" : "0",
                        }}
                    >
                        <span>نوع دوخت </span>
                        <br />
                        حوله تن پوش با الگوی پالتویی به یک انتخاب هوشمندانه و زیبا برای افرادی تبدیل شده است که به دنبال
                        ترکیبی از سادگی در استفاده و ظرافت در ظاهر هستند.
                        <br /> این حوله‌ها با الهام از طراحی لباس‌های کلاسیک، مدرن ساخته شده‌اند تا راحتی و زیبایی را به
                        طور همزمان به ارمغان بیاورند. یقه آرشال کلاهدار این حوله‌ها نه تنها به آن‌ها پوششی شیک می‌بخشد،
                        بلکه کمک می‌کند تا بعد از شنا یا دوش گرفتن، کاربر احساس گرما و نرمی بیشتری داشته باشد. <br />
                        به ویژه کلاه متصل، امکان خشک کردن موها و بدن را به صورت همزمان فراهم می‌آورد، که این یک ویژگی
                        بسیار عملی برای روزهای سرد و یا برای جلوگیری از سرماخوردگی پس از بیرون آمدن از آب است. <br />
                        جیب‌های بزرگ و طراحی‌شده که بر روی این حوله‌ها قرار دارند نه تنها جنبه کاربردی داشته و مکان
                        مناسبی برای نگهداری وسایل شخصی مانند صابون، شامپو یا حتی تلفن همراه هستند، بلکه با طرح‌‌های خود
                        به زیبایی کلی حوله می‌افزایند. <br />
                        کمربند قابل تنظیم با طرح‌های گل رنگی نیز ویژگی ظاهری زیبایی است که علاوه بر افزودن به جذابیت
                        حوله، امکان انطباق آن با اندازه‌های مختلف دور کمر را فراهم می‌آورد و ثبات و امنیت بیشتری را به
                        کاربر می‌دهد. در مجموع، این حوله تن پوش با الگوی دوخت دقیق و ظرافت‌های طراحی، تجربه‌ای متفاوت از
                        حوله‌های معمولی را ارائه می‌دهد که در آن استفاده و عملکرد همراه با زیبایی و ظاهری مدرن ارائه شده
                        است.
                        <br />
                        <br />
                        <span> کیفیت حوله </span> <br />
                        هنگام خرید حوله تن پوش از فروشگاه‌های اینترنتی، چندین فاکتور مرتبط با کیفیت وجود دارد که به
                        عنوان خریدار باید آنها را در نظر گرفت: جنس نخ پنبه‌ای: جنس نخ این حوله که 100% پنبه است، یکی از
                        بهترین انتخاب‌ها از نظر راحتی و قابلیت جذب رطوبت است. پنبه با لطافت بالا به پوست حس نرمی و آرامش
                        می‌دهد و مناسب استفاده حتی برای افراد با پوست حساس است. این محصول حوله تن پوش می باشد در صورتی
                        که حوله سر یا دمپایی محصول را می خواهید با پشتیبان تماس بگیرید. عمر مصرف بالا: عمر مصرف بالای
                        حوله نشانه‌ای از دوام و استحکام آن در برابر شستشوها و استفاده‌های مکرر است. حوله‌هایی که طول عمر
                        بیشتری دارند، با وجود هزینه اولیه بیشتر، در درازمدت مقرون به صرفه‌تر هستند.
                    </div>
                    <div
                        className="tab-body-specification"
                        style={{
                            opacity: activeTab === "specification" ? 1 : 0,
                            height: activeTab === "specification" ? "auto" : "0",
                            position: activeTab === "specification" ? "relative" : "relative",
                            zIndex: activeTab === "specification" ? "1" : "-20",
                        }}
                    >
                        <table className="product-table">
                            <tbody className="product-table-body">
                                <tr className="product-table-tr">
                                    <td className="product-table-td">قد حوله</td>
                                    {productSelect.type === "حوله تنپوش زنانه" ||
                                    productSelect.type === "حوله تنپوش مردانه" ? (
                                        (sizeDefault === "S" && <td className="product-table-td">110 سانتی متر</td>) ||
                                        (sizeDefault === "M" && <td className="product-table-td">115 سانتی متر</td>) ||
                                        (sizeDefault === "L" && <td className="product-table-td">125 سانتی متر</td>) ||
                                        (sizeDefault === "XL" && <td className="product-table-td">135 سانتی متر</td>) ||
                                        (sizeDefault === "XXL" && <td className="product-table-td">145 سانتی متر</td>)
                                    ) : (
                                        <td className="product-table-td">
                                            {sizeDefault}
                                            سانتی متر
                                        </td>
                                    )}
                                </tr>
                                <tr className="product-table-tr">
                                    <td className="product-table-td">جنس</td>
                                    <td className="product-table-td">پنبه</td>
                                </tr>
                                <tr className="product-table-tr">
                                    <td className="product-table-td">رنگ</td>
                                    <td className="product-table-td">
                                        <div
                                            style={{
                                                backgroundColor: `${productSelect.color}`,
                                                width: "2rem",
                                                height: "2rem",
                                                borderRadius: "50%",
                                                paddingTop: "1rem",
                                            }}
                                        ></div>
                                    </td>
                                </tr>
                                <tr className="product-table-tr">
                                    <td className="product-table-td">مدل تولیدی</td>
                                    <td className="product-table-td">{productSelect.type}</td>
                                </tr>
                                <tr className="product-table-tr">
                                    <td className="product-table-td">سایر توضیحات</td>
                                    <td className="product-table-td">جذب آب سریع و بالا - ثبات رنگ عالی در شستشو</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div
                        className="tab-body-comment"
                        style={{
                            opacity: activeTab === "comment" ? 1 : 0,
                            height: activeTab === "comment" ? "auto" : "0",
                        }}
                    >
                        <div className="write-comment-wrapper">
                            <div className="write-comment">
                                <h4 className="rate-title">به این محصول امتیاز دهید :</h4>
                                <Rating
                                    name="controlled-rating"
                                    style={{ direction: "ltr" }}
                                    value={valueStars}
                                    precision={0.5}
                                    size="large"
                                    className="rate-stars"
                                    onChange={(event, newValue) => {
                                        setValueStars(newValue);
                                        if (newValue === null) {
                                            notifyErrorStar();
                                        } else {
                                            console.log(newValue);
                                        }
                                    }}
                                />
                                <label htmlFor="commentproduct" className="write-comment-label">
                                    نظر خود را در مورد این محصول ثبت کنید :
                                </label>
                                <textarea
                                    id="commentproduct"
                                    name="commentproduct"
                                    rows="4"
                                    cols="10"
                                    value={comment}
                                    onChange={(e) => {
                                        setComment(e.target.value);
                                        console.log(e.target.value);
                                    }}
                                ></textarea>
                                <Button nameBtn={"ثبت نظر"} />
                            </div>
                            <Divider name={"نظرات کاربران"} />
                            <div className="publish-comment-wrapper">
                                <div className="publish-comment">
                                    <h4 className="comment-user">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="22"
                                            height="22"
                                            fill="currentColor"
                                            class="bi bi-person-circle"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                                            <path
                                                fill-rule="evenodd"
                                                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                                            />
                                        </svg>
                                        <span className="name-user-comment">احمد احمدی</span>
                                    </h4>
                                    <Rating
                                        name="half-rating-read"
                                        style={{ direction: "ltr" }}
                                        defaultValue={4.5}
                                        precision={0.5}
                                        readOnly
                                    />
                                    <p className="date-commnet">1404/07/15</p>
                                    <p className="text-comment">
                                        جنس خوبی داشت فقط اشتباه کردم یه مقدار کوچیک انتخاب کردم
                                    </p>
                                </div>
                                <div className="publish-comment">
                                    <h4 className="comment-user">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="22"
                                            height="22"
                                            fill="currentColor"
                                            class="bi bi-person-circle"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                                            <path
                                                fill-rule="evenodd"
                                                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                                            />
                                        </svg>
                                        <span className="name-user-comment">رضا رضایی</span>
                                    </h4>
                                    <Rating
                                        name="half-rating-read"
                                        style={{ direction: "ltr" }}
                                        defaultValue={3}
                                        precision={0.5}
                                        readOnly
                                    />
                                    <p className="date-commnet">1404/07/22</p>
                                    <p className="text-comment">من پارسال خریدم، رنگش اصلا تغییر نکرده</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {productSlider.length > 0 && (
                <>
                    <Divider name={"محصولات مشابه"} />
                    <SliderProducts productsSample={productSlider} />
                </>
            )}
            {isShowModal && (
                <div className={`modal-wrapper ${isShowModal ? "active" : ""}`}>
                    {productSelect.type === "حوله تنپوش کودک" ? (
                        <ModalSizeGuid isActive={"active"} title="تنپوش بچگانه" imgSrc="/images/childSize.jpg" />
                    ) : (
                        <ModalSizeGuid isActive={"active"} title="تنپوش بزرگسال" imgSrc="/images/adultSize.jpg" />
                    )}
                </div>
            )}
        </>
    );
}
