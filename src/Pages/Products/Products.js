import React, { useState, useEffect } from "react";
import Breadcrumb from "../../Component/Breadcrumb/Breadcrumb";
import productsDatabase from "../../productsDatabase";
import ModalSizeGuid from "../../Component/ModalSizeGuide/ModalSizeGuid";

import "./Products.css";
import CardProduct from "../../Component/CardProduct/CardProduct";
import ButtonFilter from "../../Component/ButtonFilter/ButtonFilter";

export default function Products() {
    const [isShowModal, setIsShowModal] = useState(false);
    const [productFilterDatabase, setProductFilterDatabase] = useState(productsDatabase);
    const [type, setType] = useState();

    const productTypeGet = new Set(productsDatabase.map((item) => item.type));
    const productType = [...productTypeGet];
    const productColorGet = new Set(productsDatabase.map((item) => item.color));
    const productColor = [...productColorGet];

    const productSort = ["جدیدترین", "پرفروش ترین", "پربازدیدترین", "ارزان ترین", "گران ترین"];
    const productSize = [
        "60",
        "70",
        "80",
        "90",
        "100",
        "S",
        "M",
        "L",
        "XL",
        "XXL",
        "30x30",
        "30x60",
        "40x80",
        "75x135",
        "90x150",
    ];

    const handleShowModal = (typeCard) => {
        setIsShowModal(!isShowModal);
        setType(typeCard);
    };

    const handleSelect = (e) => {
        if (productType.includes(e)) {
            setProductFilterDatabase(productFilterDatabase.filter((item) => item.type === e));
        } else if (productColor.includes(e)) {
            setProductFilterDatabase(productFilterDatabase.filter((item) => item.color === e));
        } else if (productSize.includes(e)) {
            setProductFilterDatabase(
                productFilterDatabase.filter((item) => item.details.some((data) => data.size === e && data.number > 0))
            );
        }
    };

    useEffect(() => {
        window.onclick = (e) => {
            if (e.target.classList.contains("modal-help-size")) {
                handleShowModal();
            }
        };
    });

    return (
        <>
            <Breadcrumb nameGroup={"تمامی محصولات"} />
            {}
            <div className="img-productpage-wrapper">
                <img src="/images/towelPageProduct.jpg" alt="" />
            </div>
            <div className="table-product-wrapper">
                <div className="filter-proudct-wrapper">
                    <ButtonFilter
                        nameButton={"مرتب سازی بر اساس"}
                        itemFilter={productSort}
                        handlerSelect={handleSelect}
                    />
                    <ButtonFilter nameButton={"نوع حوله"} itemFilter={productType} handlerSelect={handleSelect} />
                    <ButtonFilter nameButton={"سایز حوله"} itemFilter={productSize} handlerSelect={handleSelect} />
                    <ButtonFilter nameButton={"رنگ"} itemFilter={productColor} handlerSelect={handleSelect} />
                </div>
                <div className="all-product-wrapper">
                    {productFilterDatabase.map((product) => (
                        <div className="product-item">
                            <CardProduct
                                srcCard={product.source}
                                nameCard={product.name}
                                detailsCard={product.details}
                                typeCard={product.type}
                                offCard={product.off}
                                idCard={product.id}
                                btnModalGuide={handleShowModal}
                            />
                        </div>
                    ))}
                </div>
            </div>
            {isShowModal && (
                <div className={`modal-wrapper ${isShowModal ? "active" : ""}`}>
                    {type === "حوله تنپوش کودک" ? (
                        <ModalSizeGuid isActive={"active"} title="تنپوش بچگانه" imgSrc="/images/childSize.jpg" />
                    ) : (
                        <ModalSizeGuid isActive={"active"} title="تنپوش بزرگسال" imgSrc="/images/adultSize.jpg" />
                    )}
                </div>
            )}
        </>
    );
}
