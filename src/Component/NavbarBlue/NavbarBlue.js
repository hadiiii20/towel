import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavbarBlue.css";

export default function NavbarBlue() {
    const [logoDisplay, setLogoDisplay] = useState(1);
    const [logoWidth, setLogoWidth] = useState("10rem");
    const [logoTop, setLogoTop] = useState("4rem");
    const [openMenu, setOpenMenu] = useState();
    const [toggleStyle, setToggleStyle] = useState();

    window.onscroll = () => {
        let maxScroll = window.pageYOffset;
        if (maxScroll > 30) {
            setLogoDisplay(0.7);
            setLogoWidth("6.7rem");
            setLogoTop("0.6rem");
        } else {
            setLogoDisplay(1);
            setLogoWidth("10rem");
            setLogoTop("4rem");
        }
    };
    window.onclick = (e) => {
        let myClass = e.target.classList;
        if (myClass[0] !== "btn-hamberger-menu-wrapper" && myClass[0] !== "btn-hamberger-menu") {
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
                        <Link className="menu-item__active">صفحه اصلی</Link>
                    </li>
                    <li className="menu-item">
                        <Link>فروشگاه</Link>
                    </li>
                    <li className="menu-item"></li>
                    <li className="menu-item">
                        <Link>تماس باما</Link>
                    </li>
                    <li className="menu-item">
                        <Link>درباره ما</Link>
                    </li>
                </ul>

                {/* -Hamberger-menu--------- */}
                <div class={`btn-hamberger-menu-wrapper ${toggleStyle}`} onClick={clickChangeStyle}>
                    <div class="btn-hamberger-menu  "></div>
                </div>
                <div className="wrapper-hamberger-menu" style={{ right: `${openMenu}` }}>
                    <ul className="menu-hamberger">
                        <li className="menu-hamberger-item ">
                            <Link className="menu-hamberger-item-link menu-hamberger-item__active">صفحه اصلی</Link>
                        </li>
                        <li className="menu-hamberger-item">
                            <Link className="menu-hamberger-item-link">فروشگاه</Link>
                        </li>

                        <li className="menu-hamberger-item">
                            <Link className="menu-hamberger-item-link">تماس باما</Link>
                        </li>
                        <li className="menu-hamberger-item">
                            <Link className="menu-hamberger-item-link">درباره ما</Link>
                        </li>
                    </ul>
                </div>

                <div className="icon-menu">
                    <Link className="login-icon">
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
                    <Link className="buy-icon">
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
                    </Link>
                </div>
            </nav>
            <Link className="nav-logo">
                <img
                    src="./images/logo.png"
                    alt=""
                    style={{ width: `${logoWidth}`, opacity: `${logoDisplay} `, top: `${logoTop}` }}
                />
            </Link>
        </>
    );
}
