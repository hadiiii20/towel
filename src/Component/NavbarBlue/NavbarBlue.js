import React, { useEffect, useState, useRef, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { ProductsContext } from "../../Context/ProductsContext";

import "./NavbarBlue.css";

export default function NavbarBlue() {
    const [logoDisplay, setLogoDisplay] = useState(1);
    const [logoWidth, setLogoWidth] = useState("10rem");
    const [logoTop, setLogoTop] = useState("4rem");
    const [openMenu, setOpenMenu] = useState();
    const [toggleStyle, setToggleStyle] = useState();
    const [isOpenLogin, setIsOpenLogin] = useState(false);
    const loginRef = useRef();

    const prodcutsBasket = useContext(ProductsContext);

    window.onscroll = () => {
        let maxScroll = window.pageYOffset;

        if (maxScroll > 30) {
            setLogoDisplay(0.7);
            setLogoWidth("6rem");
            setLogoTop("0.9rem");
        } else {
            setLogoDisplay(1);
            setLogoWidth("10rem");
            setLogoTop("4rem");
        }
    };
    useEffect(() => {
        window.onclick = (e) => {
            if (loginRef.current && !loginRef.current.contains(e.target)) {
                setIsOpenLogin(false);
            }
        };
    });
    window.onclick = (e) => {
        let myClass = e.target.classList;

        if (
            myClass[0] !== "btn-hamberger-menu-wrapper" &&
            myClass[0] !== "btn-hamberger-menu" &&
            myClass[0] !== "menu-hamberger" &&
            myClass[0] !== "wrapper-hamberger-menu"
        ) {
            if (openMenu === 0) {
                setOpenMenu("-30rem");
                setToggleStyle("");
            }
        }
    };
    const clickChangeStyle = () => {
        if (openMenu === 0) {
            setOpenMenu("-30rem");
            setToggleStyle("");
        } else {
            setOpenMenu(0);
            setToggleStyle("change-style");
        }
    };

    return (
        <>
            <nav className="nav">
                {/* -Desktop-menu--------- */}
                <ul className="menu">
                    <li className="menu-item ">
                        <NavLink to={"/"} className={`menu-link ${(link) => (link.isActive ? "active" : "")}`}>
                            صفحه اصلی
                        </NavLink>
                    </li>
                    <li className="menu-item">
                        <NavLink to={"/products"} className={`menu-link ${(link) => (link.isActive ? "active" : "")}`}>
                            فروشگاه
                        </NavLink>
                    </li>
                    <li className="menu-item"></li>
                    <li className="menu-item">
                        <NavLink to={"/contactus"} className={`menu-link ${(link) => (link.isActive ? "active" : "")}`}>
                            تماس باما
                        </NavLink>
                    </li>
                    <li className="menu-item">
                        <NavLink to={"/aboutme"} className={`menu-link ${(link) => (link.isActive ? "active" : "")}`}>
                            درباره ما
                        </NavLink>
                    </li>
                </ul>

                {/* -Hamberger-menu--------- */}
                <div className={`btn-hamberger-menu-wrapper ${toggleStyle}`} onClick={clickChangeStyle}>
                    <div className="btn-hamberger-menu  "></div>
                </div>
                <div className="wrapper-hamberger-menu" style={{ right: `${openMenu}` }}>
                    <ul className="menu-hamberger">
                        <li className="menu-hamberger-item ">
                            <Link to={"/"} className="menu-hamberger-item-link menu-hamberger-item__active">
                                صفحه اصلی
                            </Link>
                        </li>
                        <li className="menu-hamberger-item">
                            <Link to={"/products"} className="menu-hamberger-item-link">
                                فروشگاه
                            </Link>
                        </li>

                        <li className="menu-hamberger-item">
                            <Link to={"/contactus"} className="menu-hamberger-item-link">
                                تماس باما
                            </Link>
                        </li>
                        <li className="menu-hamberger-item">
                            <Link to={"/aboutme"} className="menu-hamberger-item-link">
                                درباره ما
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* -Icon Menu--------------------------------------- */}
                <div className="icon-menu">
                    <div className="login-wrapper" ref={loginRef}>
                        <Link to={"/login"} className="login-icon" onClick={() => setIsOpenLogin((prev) => !prev)}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="22"
                                height="22"
                                fill="currentColor"
                                className="bi bi-person-fill"
                                viewBox="0 0 16 16"
                            >
                                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                            </svg>
                        </Link>
                        {/* <div className={isOpenLogin ? "login-menu-blue open" : "login-menu-blue"}>
                            <Link to={"/login"} className="first-login" onClick={() => setIsOpenLogin(false)}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="#000000"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                >
                                    <path d="M15 6l-6 6l6 6" />
                                </svg>
                                ورود
                            </Link>
                            <Link to={"/login"} className="sign-up-menu" onClick={() => setIsOpenLogin(false)}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="#000000"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                >
                                    <path d="M15 6l-6 6l6 6" />
                                </svg>
                                ثبت نام
                            </Link>
                        </div> */}
                    </div>
                    <div className="basket-wrapper">
                        <Link to={"/shoppingcart"} className="buy-icon">
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
                            {prodcutsBasket.buyProducts.length > 0 && (
                                <div className="number-cart-prouduct">{prodcutsBasket.buyProducts.length}</div>
                            )}
                        </Link>
                    </div>
                </div>
            </nav>
            <Link to={"./"} className="nav-mylogo">
                <img
                    src="/images/logo.png"
                    alt=""
                    style={{ width: `${logoWidth}`, opacity: `${logoDisplay} `, top: `${logoTop}` }}
                />
            </Link>
        </>
    );
}
