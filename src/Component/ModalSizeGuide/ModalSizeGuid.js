import React from "react";
import ReactDOM from "react-dom";
import "./ModalSizeGuid.css";
export default function ModalSizeGuid({ isActive, title, imgSrc }) {
    return ReactDOM.createPortal(
        <div className={`modal-help-size ${isActive} `}>
            <div className="modal-help-size-content">
                <h3> راهنمای انتخاب سایز حوله </h3>
                <h5> {title} </h5>
                <img src={imgSrc} alt="" />
            </div>
        </div>,
        document.getElementById("modal-root")
    );
}
