import React from "react";
import "./CartCheckout.css";
import TotalCart from "../../Component/TotalCart/TotalCart";

export default function CartCheckout() {
    return (
        <>
            <div className="shoppingcart-page">
                <div className="shoppingcart-wrapper">
                    <h2 className="cartcheckout-title">ثبت آدرس</h2>
                </div>
                <TotalCart namebtn="پرداخت" routebtn="" />
            </div>
        </>
    );
}
