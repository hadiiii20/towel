import React from "react";
import ReactDOM from "react-dom";
import "./ModalSizeGuid.css";
export default function ModalSizeGuid({ isActive }) {
    return ReactDOM.createPortal(
        <div className={`modal-help-size ${isActive} `}>
            <div className="modal-help-size-content">
                <h3> راهنمای انتخاب سایز حوله تنپوش بزرگسال</h3>
                <img src="./images/adultSize.jpg" alt="" />
            </div>
        </div>,
        document.getElementById("modal-root")
    );
}
