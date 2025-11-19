import React, { useContext, useState } from "react";
import "./ShoppingCart.css";
import InputNumber from "../../Component/InputNumber/InputNumber";
import { Link } from "react-router-dom";
import { ProductsContext } from "../../Context/ProductsContext";
import TotalCart from "../../Component/TotalCart/TotalCart";

export default function ShoppingCart() {
    const prodcutsBasket = useContext(ProductsContext);

    const handleRemove = (id) => {
        const updatedProducts = prodcutsBasket.buyProducts.filter((item) => item.id !== id);
        prodcutsBasket.setBuyProducts(updatedProducts);
    };

    const calpriceProduct = (id, size, newNumber) => {
        const updatedProducts = prodcutsBasket.buyProducts.map((item) =>
            item.id === id && item.size === size ? { ...item, number: newNumber } : item
        );
        prodcutsBasket.setBuyProducts(updatedProducts);
    };

    const totalPrice = prodcutsBasket.buyProducts.reduce(
        (sum, item) => sum + Number(item.price.replace(/,/g, "")) * Number(item.number),
        0
    );

    return (
        <>
            {prodcutsBasket.buyProducts.length === 0 ? (
                <div className="shoppingcart-empty">
                    <img src="./images/empty-cart0.png" className="shoppingcart-empty-img" alt="" />
                    <h2 className="shoppingcart-empty-title">سبد خرید شما خالی است !!</h2>
                </div>
            ) : (
                <div className="shoppingcart-page">
                    <div className="shoppingcart-wrapper">
                        {prodcutsBasket.buyProducts.map((item) => (
                            <div className="shoppingcart-item" key={item.id}>
                                <div className="shoppingcart-item-image">
                                    <img src={item.src} alt="towel" />
                                </div>

                                <div className="shoppingcart-item-details">
                                    <h3 className="shoppingcart-item-title">
                                        {item.name}
                                        <br />
                                        <br />
                                        سایز:&nbsp;&nbsp;
                                        {item.size}
                                    </h3>
                                    <div className="shoppingcart-item-quantity">
                                        <InputNumber
                                            maxValue={item.maxnumber}
                                            value={item.number}
                                            numberChange={(newNumber) => calpriceProduct(item.id, item.size, newNumber)}
                                        />
                                    </div>
                                    <div className="shoppingcart-item-price">
                                        {(Number(item.price.replace(/,/g, "")) * Number(item.number)).toLocaleString()}
                                        <span className="shoppingcart-item-price-unit">تومان</span>
                                    </div>
                                    <div
                                        className="shoppingcart-item-remove-btn"
                                        onClick={() => {
                                            handleRemove(item.id);
                                        }}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="#000000"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M4 7l16 0" />
                                            <path d="M10 11l0 6" />
                                            <path d="M14 11l0 6" />
                                            <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                                            <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <TotalCart namebtn="ثبت آدرس" routebtn="/shoppingcart/checkout" />
                </div>
            )}
        </>
    );
}
