import React, { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./TotalCart.css";
import { ProductsContext } from "../../Context/ProductsContext";
import toast from "react-hot-toast";

export default function TotalCart({ namebtn, routebtn, sendcost = 0, offcost = false }) {
    const prodcutsBasket = useContext(ProductsContext);
    const totalPrice = prodcutsBasket.buyProducts.reduce(
        (sum, item) => sum + Number(item.price.replace(/,/g, "")) * Number(item.number),
        0
    );
    const offRef = useRef();
    const [percentOffer, setPercentOffer] = useState();
    const [useOffer, setUseOffer] = useState(false);
    const [offMassage, setOffMassage] = useState("");
    const [priceAfterOff, setPriceAfterOff] = useState(0);
    const handleOff = () => {
        if (offRef.current.value === "hadi") {
            setPercentOffer(0.1);
            setOffMassage("10 درصد روی جمع خریدتان اعمال شد ");
            setUseOffer(true);

            console.log(priceAfterOff);
        } else {
            setOffMassage("کد صحیح نمی باشد");
        }
        if (offRef.current.value === "") {
            setOffMassage("");
        }
    };
    console.log("isLogin:", prodcutsBasket.isLogin);

    useEffect(() => {
        let newPrice = Number(totalPrice - totalPrice * percentOffer);
        setPriceAfterOff(newPrice);
    }, [percentOffer, totalPrice]);

    const notifyForLogin = () =>
        toast.error("ابتدا بایستی ثبت نام کنید !", {
            style: {
                backgroundColor: "var(--green-main)",
            },
            position: "top-center",
            duration: 3500,
        });

    return (
        <>
            <div className="shoppingcart-total-wrapper">
                <div className="shoppingcart-total">
                    <p className="title-total">مجموع خرید</p>
                    <p className="price-total">
                        {useOffer ? priceAfterOff.toLocaleString() : totalPrice.toLocaleString()} {}
                        <span className="shoppingcart-item-price-unit">تومان</span>{" "}
                    </p>
                </div>
                <div className="shoppingcart-total">
                    <p className="title-total">هزینه ارسال</p>
                    {sendcost ? (
                        <>
                            <p className="price-total">
                                {sendcost.toLocaleString()} <span className="shoppingcart-item-price-unit">تومان</span>{" "}
                            </p>
                        </>
                    ) : (
                        <p className="cost-send">آدرس را مشخص کنید</p>
                    )}
                </div>
                {offcost && (
                    <div className="shoppingcart-total">
                        <p className="title-total">کد تخفیف</p>
                        <div className="input-total-off-wrapper">
                            <input
                                className={`input-total-off ${offMassage === "کد صحیح نمی باشد" && "isfalse"}`}
                                ref={offRef}
                                onChange={handleOff}
                            />
                            {offMassage && <span> {offMassage}</span>}
                        </div>
                    </div>
                )}

                <div className="shoppingcart-total shoppingcart-total-all ">
                    <p className="title-total">جمع کل</p>
                    <p className="price-total">
                        {sendcost
                            ? ((useOffer ? priceAfterOff : totalPrice) + sendcost).toLocaleString()
                            : (useOffer ? priceAfterOff : totalPrice).toLocaleString()}
                        <span className="shoppingcart-item-price-unit">تومان</span>{" "}
                    </p>
                </div>
                {prodcutsBasket.isLogin ? (
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
                ) : (
                    <Link
                        to={"/login"}
                        onClick={() => notifyForLogin()}
                        className="shoppingcart-total shoppingcart-total-btn"
                    >
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
                )}
            </div>
        </>
    );
}
