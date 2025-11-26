import React from "react";
import "./SectionCategory.css";
import ImageCategory from "../ImageCategory/ImageCategory";
import SectionCategroy from "../../categoryDatebase";

export default function SectionCategory() {
    return (
        <div className="category-wrapper">
            {SectionCategroy.map((item) => (
                <ImageCategory title={item.title} src={item.source} catID={item.id} key={item.id} />
            ))}
        </div>
    );
}
