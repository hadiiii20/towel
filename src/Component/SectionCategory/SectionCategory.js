import React, { useState } from "react";
import Button from "../Button/Button";
import "./SectionCategory.css";
import { Link } from "react-router-dom";
import ImageCategory from "../ImageCategory/ImageCategory";
import Divider from "../Divider/Divider";

export default function SectionCategory() {
    const [detailsImg, setDetialsImg] = useState([
        { id: 1, title: "حوله تنپوش زنانه", source: "./images/women.jpg" },
        { id: 2, title: "حوله تنپوش مردانه", source: "./images/men.jpg" },
        { id: 3, title: "حوله تنپوش کودک", source: "./images/kids.jpg" },
        { id: 4, title: "حوله استخری", source: "./images/gym.jpg" },
        { id: 5, title: "حوله حمامی", source: "./images/bath.jpg" },
        { id: 6, title: "حوله دستی", source: "./images/hand.jpg" },
    ]);
    return (
        <div className="container">
            <Divider name={"دسته بندی"} />
            <div className="category-wrapper">
                {detailsImg.map((item) => (
                    <ImageCategory title={item.title} src={item.source} />
                ))}
            </div>
            <Divider name={"جدیدترین ها"} />
        </div>
    );
}
