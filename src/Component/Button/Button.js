import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";

export default function Button({ nameBtn }) {
    return <Link className="mybtn">{nameBtn}</Link>;
}
