import React, { useEffect, useState } from "react";
import "./CardProduct.css";
import { Link } from "react-router-dom";
import { keys } from "@mui/system";
import SizeTowel from "../SizeTowel/SizeTowel";

export default function CardProduct({ srcCard, nameCard, detailsCard, typeCard, offCard, idCard, btnModalGuide }) {
    const [priceOff, setPriceOff] = useState();
    const [priceMain, setPriceMain] = useState();
    const [priceDefaultOff, setPriceDefaultOff] = useState();
    const [priceDefaultOriginal, setPriceDefaultOriginal] = useState();
    const [sizeDefault, setSizeDefault] = useState();
    let offPercent = offCard * 100;

    const selectSize = (e) => {
        let size = e.target.innerText;
        detailsCard.forEach((item) => {
            if (item.size === size) {
                let convertNum = Number(item.price);
                let priceMain = convertNum.toLocaleString();
                offCard > 0 && (convertNum = (1 - offCard) * convertNum);
                let priceCardOff = convertNum.toLocaleString();
                setPriceOff(priceCardOff);
                setPriceMain(priceMain);
                setSizeDefault(item.size);
            }
        });
        e.target.classList.add("selected__size");
    };
    useEffect(() => {
        const firstAvailable = detailsCard.find((pro) => pro.number > 0);
        if (firstAvailable) {
            let priceMain = Number(firstAvailable.price).toLocaleString();
            let convertNum = Number(firstAvailable.price);
            offCard > 0 && (convertNum = (1 - offCard) * convertNum);
            let PriceDefaultOff = convertNum.toLocaleString();

            setPriceDefaultOff(PriceDefaultOff);
            setPriceDefaultOriginal(priceMain);
            setSizeDefault(firstAvailable.size);
        }
    }, []);

    return (
        <>
            <div className="CardProduct">
                <div className="CardProduct-img-wrapper">
                    <img src={`${srcCard}`} alt="" className="CardProduct-img" />
                    <div className="CardProduct-img-cover"></div>
                    {offPercent > 0 && <div className="off-towel">{`%${offPercent}`}</div>}
                    <div className="CardProduct-btnImg-wrapper">
                        <div className="CardProduct-add-to-card">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
                                fill="currentColor"
                                className="bi bi-basket-fill"
                                viewBox="0 0 16 16"
                            >
                                <path d="M5.071 1.243a.5.5 0 0 1 .858.514L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 6h1.717zM3.5 10.5a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0z" />
                            </svg>
                            <span>سبد خرید</span>
                        </div>
                        <Link to={`./products/${idCard}`}>
                            <div className="CardProduct-view-more">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="18"
                                    height="18"
                                    fill="currentColor"
                                    className="bi bi-inbox-fill"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M4.98 4a.5.5 0 0 0-.39.188L1.54 8H6a.5.5 0 0 1 .5.5 1.5 1.5 0 1 0 3 0A.5.5 0 0 1 10 8h4.46l-3.05-3.812A.5.5 0 0 0 11.02 4zm-1.17-.437A1.5 1.5 0 0 1 4.98 3h6.04a1.5 1.5 0 0 1 1.17.563l3.7 4.625a.5.5 0 0 1 .106.374l-.39 3.124A1.5 1.5 0 0 1 14.117 13H1.883a1.5 1.5 0 0 1-1.489-1.314l-.39-3.124a.5.5 0 0 1 .106-.374z" />
                                </svg>
                                <span>جزئیات</span>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="CardProduct-info-wrapper">
                    <div className="CardProduct-title-wrapper">
                        <h3 className="CardProduct-title">{nameCard}</h3>
                    </div>
                    <div className="price-wrapper">
                        <p className="CardProduct-caption">
                            <strong>قیمت</strong> بر اساس سایز :
                            {(typeCard === "kids" || typeCard === "adult") && (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    className="bi bi-question-circle help-icon-size"
                                    viewBox="0 0 16 16"
                                    onClick={() => btnModalGuide(typeCard)}
                                >
                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                                    <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286m1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94" />
                                </svg>
                            )}
                        </p>
                        <div className="CardProduct-price-wrapper">
                            <span
                                className={`CardProduct-price ${offCard > 0 && (priceDefaultOff || priceOff) && "off"}`}
                            >
                                {priceMain ? priceMain : priceDefaultOriginal}
                            </span>
                            <span className="CardProduct-price-unit">تومان</span>
                            {offCard > 0 && (priceOff || priceDefaultOff) && (
                                <>
                                    <span className="CardProduct-price-off">
                                        {priceOff ? priceOff : priceDefaultOff}
                                    </span>
                                    <span className="CardProduct-price-unit">تومان</span>
                                </>
                            )}
                        </div>
                    </div>
                    <div className="sizeTowel-wrapper">
                        <SizeTowel
                            detailProduct={detailsCard}
                            name={nameCard}
                            sizeDefault={sizeDefault}
                            hadlerSize={selectSize}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
