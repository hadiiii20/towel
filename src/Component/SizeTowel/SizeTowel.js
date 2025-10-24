import React from "react";
import "./SizeTowel.css";
export default function SizeTowel({ detailProduct, name, sizeDefault, hadlerSize }) {
    const filteredItems = detailProduct.filter((item) => item.number > 0);

    return (
        <>
            {filteredItems.map((item) => (
                <React.Fragment key={item.id}>
                    <input
                        type="radio"
                        className="sizeTowel-input"
                        name={`size${name}`}
                        id={`size${item.size}${name}`}
                        hidden
                        checked={item.size === sizeDefault}
                    />
                    <label htmlFor={`size${item.size}${name}`} className="sizeTowel" onClick={(e) => hadlerSize(e)}>
                        {item.size}
                    </label>
                </React.Fragment>
            ))}
        </>
    );
}
