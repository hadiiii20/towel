import React, { useState, useEffect } from "react";
import "./SizeTowel.css";

export default function SizeTowel({ detailProduct, name, sizeDefault, hadlerSize }) {
    const [selectedSize, setSelectedSize] = useState(null);

    useEffect(() => {
        if (sizeDefault !== undefined && sizeDefault !== null) {
            setSelectedSize(String(sizeDefault));
        }
    }, [sizeDefault]);

    const filteredItems = detailProduct.filter((item) => item.number > 0);

    const handleClick = (size) => {
        setSelectedSize(size);
    };

    return (
        <>
            {filteredItems.map((item) => {
                const size = String(item.size);
                const isChecked = size === selectedSize;

                return (
                    <React.Fragment key={item.id}>
                        <input
                            type="radio"
                            className="sizeTowel-input"
                            name={`size${name}`}
                            id={`size${size}${name}`}
                            hidden
                            checked={isChecked}
                            onChange={() => handleClick(size)}
                        />
                        <label
                            htmlFor={`size${size}${name}`}
                            className={`sizeTowel ${isChecked ? "sizeTowel-active" : ""}`}
                            onClick={(e) => hadlerSize(e)}
                        >
                            {item.size}
                        </label>
                    </React.Fragment>
                );
            })}
        </>
    );
}
