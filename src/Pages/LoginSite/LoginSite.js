import React, { useEffect, useRef, useState } from "react";
import "./LoginSite.css";
import { Link } from "react-router-dom";

export default function LoginSite() {
    const [clickInputMobile, setClickInputMobile] = useState(false);
    const [clickPassword, setClickPassword] = useState(false);
    const [clickInpuName, setClickInputName] = useState(false);
    const [toggleEye, setToggleEye] = useState(false);
    const [toggleBtn, setToggleBtn] = useState("btn-toggle");
    const inputRef = useRef();
    const passRef = useRef();
    const nameRef = useRef();

    useEffect(() => {
        window.onclick = (e) => {
            if (inputRef.current && !inputRef.current.contains(e.target)) {
                setClickInputMobile(false);
            }
            if (passRef.current && !passRef.current.contains(e.target)) {
                setClickPassword(false);
            }
            if (nameRef.current && !nameRef.current.contains(e.target)) {
                setClickInputName(false);
            }
            inputRef.current && inputRef.current.value !== "" && setClickInputMobile(true);
            passRef.current && passRef.current.value !== "" && setClickPassword(true);
            nameRef.current && nameRef.current.value !== "" && setClickInputName(true);
        };
    });
    const eyeHandler = () => {
        setToggleEye((prev) => !prev);
    };
    // const toggleBtnHandler = () => {
    //     setToggleBtn((prev) => !prev);
    // };
    return (
        <div>
            <div className="form-wrapper">
                <div className="form-title">
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
                            <div className="wrapper-input">
                                <label
                                    for="phoneNumber"
                                    className={clickInputMobile ? "label-login click" : "label-login"}
                                >
                                    شماره موبایل
                                </label>
                                <input
                                    ref={inputRef}
                                    type="tel"
                                    id="phoneNumber"
                                    class="input-login"
                                    autocomplete="off"
                                    onClick={() => setClickInputMobile(true)}
                                    onFocus={() => setClickInputMobile(true)}
                                    onBlur={() => inputRef.current.value === "" && setClickInputMobile(false)}
                                    inputMode="numeric"
                                />
                            </div>
                            <div class="wrapper-input">
                                <label for="password" className={clickPassword ? "label-login click" : "label-login"}>
                                    رمز عبور
                                </label>
                                <span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        class={toggleEye ? "eyepassword-none" : "bi bi-eye-fill eyepassword"}
                                        viewBox="0 0 16 16"
                                        onClick={eyeHandler}
                                    >
                                        <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" />
                                        <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7" />
                                    </svg>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        class={toggleEye ? "bi bi-eye-slash-fill eyepassword" : "eyepassword-none"}
                                        viewBox="0 0 16 16"
                                        onClick={eyeHandler}
                                    >
                                        <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7 7 0 0 0 2.79-.588M5.21 3.088A7 7 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474z" />
                                        <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12z" />
                                    </svg>
                                </span>
                                <input
                                    ref={passRef}
                                    type={toggleEye ? "text" : "password"}
                                    id="password"
                                    className="input-login input-login-pass"
                                    autocomplete="off"
                                    onClick={() => setClickPassword(true)}
                                    onFocus={() => setClickPassword(true)}
                                    onBlur={() => passRef.current.value === "" && setClickPassword(false)}
                                />
                            </div>
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
                            <div className="wrapper-input">
                                <label
                                    for="phoneNumber"
                                    className={clickInputMobile ? "label-login click" : "label-login"}
                                >
                                    شماره موبایل
                                </label>
                                <input
                                    ref={inputRef}
                                    type="tel"
                                    id="phoneNumber"
                                    class="input-login"
                                    autocomplete="off"
                                    onClick={() => setClickInputMobile(true)}
                                    onFocus={() => setClickInputMobile(true)}
                                    onBlur={() => inputRef.current.value === "" && setClickInputMobile(false)}
                                    inputMode="numeric"
                                />
                            </div>
                            <div className="wrapper-input">
                                <label for="name" className={clickInpuName ? "label-login click" : "label-login"}>
                                    نام ونام خانوادگی
                                </label>
                                <input
                                    ref={nameRef}
                                    type="rext"
                                    id="name"
                                    class="input-login"
                                    autocomplete="off"
                                    onClick={() => setClickInputName(true)}
                                    onFocus={() => setClickInputName(true)}
                                    onBlur={() => nameRef.current.value === "" && setClickInputName(false)}
                                    inputMode="numeric"
                                />
                            </div>
                            <div class="wrapper-input">
                                <label for="password" className={clickPassword ? "label-login click" : "label-login"}>
                                    رمز عبور
                                </label>
                                <span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        class={toggleEye ? "eyepassword-none" : "bi bi-eye-fill eyepassword"}
                                        viewBox="0 0 16 16"
                                        onClick={eyeHandler}
                                    >
                                        <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" />
                                        <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7" />
                                    </svg>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        class={toggleEye ? "bi bi-eye-slash-fill eyepassword" : "eyepassword-none"}
                                        viewBox="0 0 16 16"
                                        onClick={eyeHandler}
                                    >
                                        <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7 7 0 0 0 2.79-.588M5.21 3.088A7 7 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474z" />
                                        <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12z" />
                                    </svg>
                                </span>
                                <input
                                    ref={passRef}
                                    type={toggleEye ? "text" : "password"}
                                    id="password"
                                    className="input-login input-login-pass"
                                    autocomplete="off"
                                    onClick={() => setClickPassword(true)}
                                    onFocus={() => setClickPassword(true)}
                                    onBlur={() => passRef.current.value === "" && setClickPassword(false)}
                                />
                            </div>
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
