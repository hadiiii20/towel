import React, { useState, useEffect } from "react";
import Breadcrumb from "../../Component/Breadcrumb/Breadcrumb";
import productsNew from "../../productsNew";

import "./Products.css";
import CardProduct from "../../Component/CardProduct/CardProduct";

export default function Products() {
    const [isShowModal, setIsShowModal] = useState(false);
    const [type, setType] = useState();
    const handleShowModal = (typeCard) => {
        setIsShowModal(!isShowModal);
        setType(typeCard);
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
            <div className="all-product-wrapper">
                <div className="filter-proudct-wrapper"></div>
                <div className="table-product-wrapper">
                    {productsNew.map((product) => (
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
        </>
    );
}
