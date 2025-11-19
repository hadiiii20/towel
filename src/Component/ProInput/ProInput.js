import React, { useState, useRef, useEffect } from "react";
import "./ProInput.css";

export default function ProInput({ type = "text", titleLabel, inputRef, nameInput }) {
    const [clickInputMobile, setClickInputMobile] = useState(false);

    useEffect(() => {
        window.onclick = (e) => {
            if (inputRef.current && !inputRef.current.contains(e.target)) {
                setClickInputMobile(false);

                inputRef.current && inputRef.current.value !== "" && setClickInputMobile(true);
            }
        };
        return () => {
            window.removeEventListener("click", onclick);
        };
    });

    return (
        <div className="wrapper-input">
            <label htmlFor={nameInput} className={clickInputMobile ? "label-login click" : "label-login"}>
                {titleLabel}
            </label>
            <input
                ref={inputRef}
                type={type}
                id={nameInput}
                className="input-login"
                autocomplete="off"
                onClick={() => setClickInputMobile(true)}
                onFocus={() => setClickInputMobile(true)}
                onBlur={() => inputRef.current.value === "" && setClickInputMobile(false)}
                inputMode="numeric"
            />
        </div>
    );
}
