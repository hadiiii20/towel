import React from "react";
import "./Divider.css";

export default function Divider({ name }) {
    return (
        <div className="divider-wrapper">
            <div className="line-right-divider"></div>
            <div className="title-divider-wrapper">
                <h3 className="title-divider">{name}</h3>
            </div>
            <div className="line-left-divider"></div>
        </div>
    );
}
