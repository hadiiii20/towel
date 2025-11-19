import React from "react";
import { Link } from "react-router-dom";
import "./ErrorPage.css";
export default function ErrorPage() {
    return (
        <div className="error-wrapper">
            <img src="/images/empty.png" alt="" />
            <h3>صفحه مورد نظر یافت نشد!</h3>
            <Link to={"/"}>برو به صفحه اصلی </Link>
        </div>
    );
}
