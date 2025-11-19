import React from "react";
import "./InputBlue.css";

export default function InputBlue({ type = "text", inputWidth = "100%", inputHeight = "3.5rem" }) {
    return <input type={type} className="total-off" style={{ width: { inputWidth }, height: { inputHeight } }} />;
}
