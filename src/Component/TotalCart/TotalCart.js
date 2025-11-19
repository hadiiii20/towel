import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./TotalCart.css";
import { ProductsContext } from "../../Context/ProductsContext";
import InputBlue from "../InputBlue/InputBlue";

export default function TotalCart({ namebtn, routebtn, sendcost = 0 }) {
    const prodcutsBasket = useContext(ProductsContext);
    const totalPrice = prodcutsBasket.buyProducts.reduce(
        (sum, item) => sum + Number(item.price.replace(/,/g, "")) * Number(item.number),
        0
    );
    return (
        <>
            <div className="shoppingcart-total-wrapper">
                <div className="shoppingcart-total">
                    <p className="title-total">مجموع خرید</p>
                    <p className="price-total">
                        {totalPrice.toLocaleString()}
                        <span className="shoppingcart-item-price-unit">تومان</span>{" "}
                    </p>
                </div>
                <div className="shoppingcart-total">
                    <p className="title-total">هزینه ارسال</p>
                    {sendcost ? (
                        <>
                            <p className="price-total">
                                {sendcost} <span className="shoppingcart-item-price-unit">تومان</span>{" "}
                            </p>
                        </>
                    ) : (
                        <p className="cost-send">آدرس را مشخص کنید</p>
                    )}
                </div>
                <div className="shoppingcart-total">
                    <p className="title-total">کد تخفیف</p>
                    <InputBlue width={"55%"} height={"2.5rem"} />
                </div>
                <div className="shoppingcart-total shoppingcart-total-all ">
                    <p className="title-total">جمع کل</p>
                    <p className="price-total">
                        1260000 <span className="shoppingcart-item-price-unit">تومان</span>{" "}
                    </p>
                </div>
                <Link to={routebtn} className="shoppingcart-total shoppingcart-total-btn">
                    {namebtn}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="var(--blue-main)"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    >
                        <path d="M11 7l-5 5l5 5" />
                        <path d="M17 7l-5 5l5 5" />
                    </svg>
                </Link>
            </div>
        </>
    );
}
