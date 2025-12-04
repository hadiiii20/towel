import React, { useEffect, useState, useRef } from "react";
import "./InputNumber.css";
export default function InputNumber({ numberChange = () => {}, maxValue, value, resetval = false }) {
    const [productValue, setProductValue] = useState(value);

    useEffect(() => {
        resetval && setProductValue(1);
    }, [resetval]);

    const handelMaxNumber = () => {
        if (productValue < Number(maxValue)) {
            setProductValue((prev) => prev + 1);
            numberChange(productValue + 1);
        }
    };
    const handelMinNumber = () => {
        if (productValue > 1) {
            setProductValue((prev) => prev - 1);
            numberChange(productValue - 1);
        }
    };

    return (
        <div className="number-wrapper">
            <div className="plus-parent">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#000000"
                    strokeWidth="2.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon-up"
                    onClick={() => {
                        handelMaxNumber();
                    }}
                >
                    <path d="M12 5l0 14" />
                    <path d="M5 12l14 0" />
                </svg>
            </div>

            <div className="input-number-parent">
                <input
                    className="input-number"
                    value={productValue}
                    type="number"
                    name="numver-product"
                    id="number-prouduct"
                />
            </div>
            <div className="minus-parent">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#000000"
                    strokeWidth="2.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon-down"
                    onClick={() => {
                        handelMinNumber();
                    }}
                >
                    <path d="M5 12l14 0" />
                </svg>
            </div>
        </div>
    );
}
