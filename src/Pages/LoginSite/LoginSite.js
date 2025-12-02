import React, { useEffect, useRef, useState, useContext } from "react";
import "./LoginSite.css";
import { Link, useNavigate, replace } from "react-router-dom";
import ProInput from "../../Component/ProInput/ProInput";
import { ProductsContext } from "../../Context/ProductsContext";
import toast from "react-hot-toast";

export default function LoginSite() {
    const [toggleBtn, setToggleBtn] = useState("btn-toggle");
    const inputNameRef = useRef();
    const inputMobileRef = useRef();
    const inputpassRef = useRef();
    const usersContext = useContext(ProductsContext);
    let navigate = useNavigate();

    // Manage-Value-Input///////////////////////////
    const [formData, setFormData] = useState({
        name: "",
        mobile: "",
        password: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const saveUserRegister = (e) => {
        e.preventDefault();
        if (formData.name === "") {
            notifyEmptyInput("نام و نام خانوادگی را وارد کنید");
        } else if (formData.mobile === "") {
            notifyEmptyInput("شماره موبایل خود را وارد کنید");
        } else if (formData.password === "") {
            notifyEmptyInput("رمز خود را وارد کنید");
        } else {
            let isUserExist = usersContext.usersLogin.some((item) => item.mobile === formData.mobile);
            if (isUserExist) {
                notifyUserExist();
            } else {
                usersContext.setUsersLogin((prevUsers) => [...prevUsers, formData]);
                setFormData({
                    name: "",
                    mobile: "",
                    password: "",
                });
                usersContext.setIsLogin(true);
                navigate(-1, { replace: true });
            }
        }
    };
    const onLoginuser = (e) => {
        e.preventDefault();
        if (formData.mobile === "") {
            notifyEmptyInput("شماره موبایل خود را وارد کنید");
        } else if (formData.password === "") {
            notifyEmptyInput("رمز خود را وارد کنید");
        } else {
            let isUserExist = usersContext.usersLogin.some((item) => item.mobile === formData.mobile);
            if (isUserExist) {
                notifyLogin("به پیج پودایران خوش آمدید 🥰");
                navigate("/", { replace: true });
                usersContext.setIsLogin(true);
            } else {
                usersContext.setUsersLogin((prevUsers) => [...prevUsers, formData]);
                notifyLoginError("شماره شما ثبت نشده است ابتدا ثبت نام کنید");
                setFormData({
                    name: "",
                    mobile: "",
                    password: "",
                });
            }
        }
    };

    //////////////////////////////////////////////

    const notifyUserExist = () =>
        toast.error("این شماره موبایل قبلا ثبت شده است !", {
            style: {
                backgroundColor: "var(--green-main)",
            },
            position: "top-center",
            duration: 3000,
        });
    const notifyEmptyInput = (massage) =>
        toast.error(massage, {
            style: {
                backgroundColor: "var(--green-main)",
            },
            position: "top-center",
            duration: 3000,
        });
    const notifyLogin = (massage) =>
        toast.success(massage, {
            style: {
                backgroundColor: "var(--green-main)",
            },
        });
    const notifyLoginError = (massage) =>
        toast.error(massage, {
            style: {
                backgroundColor: "var(--green-main)",
            },
            position: "top-center",
            duration: 3000,
        });
    return (
        <div>
            <div className="form-wrapper">
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
                        // Login--------------------------------------------
                        <div className="form-login">
                            <ProInput
                                titleLabel={"شماره موبایل"}
                                nameInput={"mobile"}
                                inputRef={inputMobileRef}
                                type="tel"
                                value={formData.mobile}
                                handleChangeValue={handleChange}
                            />
                            <ProInput
                                titleLabel={"رمز عبور"}
                                nameInput={"password"}
                                inputRef={inputpassRef}
                                type="password"
                                value={formData.password}
                                handleChangeValue={handleChange}
                            />

                            <p className="qustion-login">
                                کاربر جدید هستید؟
                                <span onClick={() => setToggleBtn("btn-toggle register")}>ثبت نام کنید</span>
                            </p>

                            <Link className="btn-submit-login" onClick={(e) => onLoginuser(e)}>
                                ورود به سایت
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="22"
                                    height="22"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="var(--green-main)"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M11 7l-5 5l5 5" />
                                    <path d="M17 7l-5 5l5 5" />
                                </svg>
                            </Link>
                        </div>
                    ) : (
                        //register------------------------------------------
                        <div className="form-login register">
                            <ProInput
                                titleLabel={"نام و نام خانوادگی"}
                                nameInput={"name"}
                                inputRef={inputNameRef}
                                value={formData.name}
                                handleChangeValue={handleChange}
                            />
                            <ProInput
                                titleLabel={"شماره موبایل"}
                                nameInput={"mobile"}
                                inputRef={inputMobileRef}
                                value={formData.mobile}
                                handleChangeValue={handleChange}
                                type="tel"
                            />
                            <ProInput
                                titleLabel={"رمز عبور"}
                                nameInput={"password"}
                                inputRef={inputpassRef}
                                type="password"
                                value={formData.password}
                                handleChangeValue={handleChange}
                            />

                            <p className="qustion-login">
                                قبلا ثبت نام کردید؟
                                <span onClick={() => setToggleBtn("btn-toggle")}>وارد شوید</span>
                            </p>

                            <Link className="btn-submit-login" onClick={(e) => saveUserRegister(e)}>
                                ثبت نام
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="22"
                                    height="22"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="var(--blue-main)"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
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
