import React, { useState, useEffect, useRef } from "react";
import "./ProInput.css";
import cityOfIran from "../../CityData";
import villageOfIran from "../../VillageData";

export default function ProInput({
    type = "text",
    titleLabel,
    inputRef,
    nameInput,
    subMenu = false,
    selectCity = null,
    onSelectCity = null,
}) {
    const [clickInputMobile, setClickInputMobile] = useState(false);
    const [toggleEye, setToggleEye] = useState(false);

    const [citys, setCitys] = useState(cityOfIran);
    const [villages, setVillages] = useState(villageOfIran);

    const [isSubMenuCity, setIsSubMenuCity] = useState(false);
    const [isSubMenuVillage, setIsSubMenuVillage] = useState(false);

    const closeCityRef = useRef();

    useEffect(() => {
        const handleWindowClick = (e) => {
            if (inputRef.current && !inputRef.current.contains(e.target)) {
                setClickInputMobile(false);
                inputRef.current.value !== "" && setClickInputMobile(true);
            }
        };
        window.addEventListener("click", handleWindowClick);

        if (type === "password" && toggleEye) {
            inputRef.current.type = "text";
        }

        return () => {
            window.removeEventListener("click", handleWindowClick);
        };
    }, [type, toggleEye]);
    const eyeHandler = () => {
        setToggleEye((prev) => !prev);
    };

    // select city
    const selectCityHandler = (e) => {
        const selected = e.target.innerHTML.trim();
        inputRef.current.value = selected;
        onSelectCity && onSelectCity(selected); // اطلاع به والد
        if (onSelectCity && inputRef.current.name === "village") {
            inputRef.current.value = onSelectCity;
        }
        setIsSubMenuCity(false);
        setIsSubMenuVillage(false);
        setClickInputMobile(true);
    };
    // open submenu
    const subMenuHandler = () => {
        if (inputRef.current.name === "city") {
            setIsSubMenuCity(true);
            if (inputRef.current.value && isSubMenuCity) {
                setClickInputMobile(true);
            }
        }
        if (inputRef.current.name === "village") {
            setIsSubMenuVillage(true);
        }
    };
    //close sub menu
    const handleClickOutside = (event) => {
        if (closeCityRef.current && !closeCityRef.current.contains(event.target)) {
            setIsSubMenuCity(false);
            setIsSubMenuVillage(false);
        }
    };

    useEffect(() => {
        document.addEventListener("click", handleClickOutside);

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    useEffect(() => {
        if (inputRef.current.name === "village") {
            inputRef.current.value = "";
        }
    }, [selectCity]);

    return (
        <>
            <div className="wrapper-input" ref={closeCityRef}>
                <label htmlFor={nameInput} className={clickInputMobile ? "label-login click" : "label-login"}>
                    {titleLabel}
                </label>

                {type === "password" && (
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
                )}
                {type === "textarea" ? (
                    <textarea
                        ref={inputRef}
                        type={type}
                        id={nameInput}
                        className="input-login"
                        name={nameInput}
                        autocomplete="new-password"
                        onClick={() => setClickInputMobile(true)}
                        onFocus={() => setClickInputMobile(true)}
                        onBlur={() => inputRef.current.value === "" && setClickInputMobile(false)}
                    ></textarea>
                ) : (
                    <input
                        ref={inputRef}
                        type={type}
                        id={nameInput}
                        className="input-login"
                        autocomplete="new-password"
                        onClick={() => {
                            setClickInputMobile(true);
                            subMenuHandler();
                        }}
                        onFocus={() => setClickInputMobile(true)}
                        onBlur={() => inputRef.current.value === "" && setClickInputMobile(false)}
                        name={nameInput}
                        {...(type === "tel" && {
                            inputMode: "numeric",
                            maxLength: 11,
                            pattern: "[0-9]*",
                            onInput: (e) => {
                                e.target.value = e.target.value.replace(/[^0-9]/g, "");
                            },
                        })}
                    />
                )}
                {subMenu && isSubMenuCity && (
                    <div className={`list-city-submenu custom-scroll ${isSubMenuCity && "active"}`}>
                        <ul className="list-city">
                            {citys.map((item) => (
                                <li className="list-city-item" onClick={selectCityHandler}>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
                {subMenu &&
                    isSubMenuVillage &&
                    nameInput === "village" &&
                    (villages[selectCity] && selectCity !== null ? (
                        <div className={`list-Village-submenu custom-scroll ${isSubMenuVillage && "active"}`}>
                            <ul className="list-Village">
                                {villages[selectCity].map((item) => (
                                    <li className="list-Village-item" onClick={selectCityHandler}>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ) : (
                        <div className={`list-Village-submenu ${isSubMenuVillage && "empty"}`}>
                            <ul className="list-Village">
                                <li className="list-city-item-empty">
                                    ابتدا <span>استان</span> خود را مشخص کنید
                                </li>
                            </ul>
                        </div>
                    ))}
            </div>
        </>
    );
}
