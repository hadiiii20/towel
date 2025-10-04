import React from "react";
import { Link } from "react-router-dom";
import "./ImageCategory.css";

export default function ImageCategory({ src, title }) {
    return (
        <div className="div-img">
            <Link>
                <img src={`${src}`} alt="" className="categroy-img" />
                <div className="img-hov">
                    <h3 className="title-img-category">{title}</h3>
                </div>
            </Link>
        </div>
    );
}
