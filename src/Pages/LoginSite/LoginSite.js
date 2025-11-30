import React, { useEffect, useRef, useState } from "react";
import "./LoginSite.css";
import { Link } from "react-router-dom";
import ProInput from "../../Component/ProInput/ProInput";

export default function LoginSite() {
    const [toggleBtn, setToggleBtn] = useState("btn-toggle register");
    const inputNameRef = useRef();
    const inputMobileRef = useRef();
    const inputpassRef = useRef();

    return (
        <div>
            <div className="form-wrapper">
                {toggleBtn === "btn-toggle" ? (
                    <p className="qustion-login">
                        کاربر جدید هستید؟
                        <span onClick={() => setToggleBtn("btn-toggle register")}>ثبت نام کنید</span>
                    </p>
                ) : (
                    <p className="qustion-login">
                        قبلا ثبت نام کردید؟
                        <span onClick={() => setToggleBtn("btn-toggle")}>وارد شوید</span>
                    </p>
                )}

                <div className="form-mytitle">
                    <div className={toggleBtn}></div>
                    <div className="btn-login-wrapper" onClick={() => setToggleBtn("btn-toggle")}>
                        ورود
                    </div>
                    <div className="btn-register-wrapper" onClick={() => setToggleBtn("btn-toggle register")}>
                        ثبت نام
                    </div>
                </div>
                <div className="myform">
                    <div className={toggleBtn === "btn-toggle" ? "circle-one" : "circle-one register"}></div>
                    <div className={toggleBtn === "btn-toggle" ? "circle-two" : "circle-two register"}></div>
                    <div className={toggleBtn === "btn-toggle" ? "circle-three" : "circle-three register"}></div>
                    {toggleBtn === "btn-toggle" ? (
                        <div className="form-login">
                            <ProInput
                                titleLabel={"شماره موبایل"}
                                nameInput={"mobile"}
                                inputRef={inputMobileRef}
                                type="tel"
                            />
                            <ProInput
                                titleLabel={"رمز عبور"}
                                nameInput={"password"}
                                inputRef={inputpassRef}
                                type="password"
                            />
                            <Link className="btn-submit-login">
                                ورود به سایت
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="22"
                                    height="22"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="var(--green-main)"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                >
                                    <path d="M11 7l-5 5l5 5" />
                                    <path d="M17 7l-5 5l5 5" />
                                </svg>
                            </Link>
                        </div>
                    ) : (
                        <div className="form-login register">
                            <ProInput titleLabel={"نام و نام خانوادگی"} nameInput={"name"} inputRef={inputNameRef} />
                            <ProInput
                                titleLabel={"شماره موبایل"}
                                nameInput={"mobile"}
                                inputRef={inputMobileRef}
                                type="tel"
                            />
                            <ProInput
                                titleLabel={"رمز عبور"}
                                nameInput={"password"}
                                inputRef={inputpassRef}
                                type="password"
                            />
                            <Link className="btn-submit-login">
                                ورود به سایت
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="22"
                                    height="22"
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
                    )}
                </div>
            </div>
        </div>
    );
}
