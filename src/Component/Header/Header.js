import React from "react";
import NavbarBlue from "../NavbarBlue/NavbarBlue";
import "./Header.css";
import Button from "../Button/Button";

export default function Header() {
    return (
        <div className="continer">
            <NavbarBlue />
            <section className="section">
                <div className="title-wrapper">
                    <h1 className="titleh1">امروز در پودایران</h1>
                    <h3 className="titleh3">کالکشنی زیبا از جدیدترین حوله ها</h3>
                    <h5 className="titleh5">استایلی جذاب برای همیشه</h5>
                    <Button nameBtn={"فروشگاه"} />
                </div>
                <div className="coursel-header"></div>
            </section>
        </div>
    );
}
