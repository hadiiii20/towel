import React, { useState, useRef, useEffect } from "react";
import "./ButtonFilter.css";

export default function ButtonFilter({ nameButton, itemFilter, handlerSelect, nameDefult }) {
    const [isOpen, setIsOpen] = useState(false);
    const closeMenuFilter = useRef(null);

    const handleClickOutside = (event) => {
        if (closeMenuFilter.current && !closeMenuFilter.current.contains(event.target)) {
            setIsOpen(false);
        }
    };
    const funSelect = (item) => {
        handlerSelect(item);
        setIsOpen(false);
    };

    useEffect(() => {
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    return (
        <div className="button-filter-parent" ref={closeMenuFilter}>
            <div className="button-filter" onClick={() => setIsOpen((prev) => !prev)}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#000000"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="button-filter-icon"
                    style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0)" }}
                >
                    <path d="M6 9l6 6l6 -6" />
                </svg>
                <div>{nameButton}</div>
            </div>
            <div
                className="menu-filter-wrapper custom-scroll"
                style={{
                    visibility: isOpen ? "visible" : "hidden",
                    transform: isOpen ? "translateY(0.5rem)" : "translateY(0rem)",
                    opacity: isOpen ? "0.9" : "0",
                    backgroundColor: isOpen ? "var(--blue-glass)" : "var(--white)",
                }}
            >
                {nameButton === "رنگ" ? (
                    <ul className="menu-filter-list ">
                        {itemFilter.map((item) => (
                            <div className="menu-filter-link" key={item}>
                                <li
                                    className="menu-filter-item color"
                                    style={{
                                        backgroundColor: `${item}`,
                                    }}
                                    onClick={() => funSelect(item)}
                                ></li>
                            </div>
                        ))}
                    </ul>
                ) : (
                    <ul className="menu-filter-list ">
                        {itemFilter.map((item) => (
                            <div className="menu-filter-link" key={item}>
                                <li className="menu-filter-item" onClick={() => funSelect(item)}>
                                    {nameDefult}&nbsp;&nbsp;
                                    {item}
                                </li>
                            </div>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}
