import React from "react";
import "./CardProduct.css";

export default function CardProduct({ srcCard, nameCard, priceCard }) {
    const convertNum = Number(priceCard);
    const price = convertNum.toLocaleString();

    return (
        <>
            <div class="CardProduct">
                <div class="CardProduct-img-wrapper">
                    <img src={`${srcCard}`} alt="" class="CardProduct-img" />
                    <div class="CardProduct-img-cover"></div>
                    <div class="CardProduct-btnImg-wrapper">
                        <div class="CardProduct-add-to-card">
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
                        <div class="CardProduct-view-more">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
                                fill="currentColor"
                                class="bi bi-inbox-fill"
                                viewBox="0 0 16 16"
                            >
                                <path d="M4.98 4a.5.5 0 0 0-.39.188L1.54 8H6a.5.5 0 0 1 .5.5 1.5 1.5 0 1 0 3 0A.5.5 0 0 1 10 8h4.46l-3.05-3.812A.5.5 0 0 0 11.02 4zm-1.17-.437A1.5 1.5 0 0 1 4.98 3h6.04a1.5 1.5 0 0 1 1.17.563l3.7 4.625a.5.5 0 0 1 .106.374l-.39 3.124A1.5 1.5 0 0 1 14.117 13H1.883a1.5 1.5 0 0 1-1.489-1.314l-.39-3.124a.5.5 0 0 1 .106-.374z" />
                            </svg>
                            <span>جزئیات</span>
                        </div>
                    </div>
                </div>
                <div class="CardProduct-info-wrapper">
                    <div className="CardProduct-title-wrapper">
                        <h3 class="CardProduct-title">{nameCard}</h3>
                    </div>
                    <div className="price-wrapper">
                        <p class="CardProduct-caption">
                            <strong>قیمت</strong> بر اساس سایز :
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-question-circle help-size"
                                viewBox="0 0 16 16"
                            >
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                                <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286m1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94" />
                            </svg>
                        </p>
                        <p class="CardProduct-price">
                            {price} <span class="CardProduct-price-unit">تومان</span>
                        </p>
                    </div>
                    <div className="sizeTowel-wrapper">
                        <div className="sizeTowel ">60</div>
                        <div className="sizeTowel">70</div>
                        <div className="sizeTowel selected__size">80</div>
                        <div className="sizeTowel">90</div>
                        <div className="sizeTowel">100</div>

                        {/* <div className="sizeTowel ">S</div>
                    <div className="sizeTowel">M</div>
                    <div className="sizeTowel selected__size">L</div>
                    <div className="sizeTowel">XL</div>
                    <div className="sizeTowel">XXL</div> */}
                        {/* 
                    <div className="sizeTowel ">30x30</div>
                    <div className="sizeTowel">30x60</div>
                    <div className="sizeTowel selected__size">40x80</div> */}
                    </div>
                </div>
            </div>
        </>
    );
}
