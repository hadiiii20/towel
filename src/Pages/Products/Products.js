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
    const [nameAfterFilterSort, setNameAfterFilterSort] = useState("");
    const [nameAfterFilterType, setNameAfterFilterType] = useState("");
    const [nameAfterFilterSize, setNameAfterFilterSize] = useState("");
    const [nameAfterFilterColor, setNameAfterFilterColor] = useState("");

    const productTypeGet = new Set(productFilterDatabase.map((item) => item.type));
    const productType = [...productTypeGet];

    const productColorGet = new Set(productFilterDatabase.map((item) => item.color));
    const productColor = [...productColorGet];

    const productSizeGet = new Set(productFilterDatabase.flatMap((item) => item.details.map((data) => data.size)));
    const productSize = [...productSizeGet];

    const productSort = ["تخفیف دار ها", "جدیدترین", "پرفروش ترین", "پربازدیدترین", "ارزان ترین", "گران ترین"];

    const handleSelect = (e) => {
        if (productType.includes(e)) {
            setProductFilterDatabase(productFilterDatabase.filter((item) => item.type === e));
            setNameAfterFilterType(e);
        } else if (productColor.includes(e)) {
            setProductFilterDatabase(productFilterDatabase.filter((item) => item.color === e));
            setNameAfterFilterColor(e);
        } else if (productSize.includes(e)) {
            setProductFilterDatabase(
                productFilterDatabase.filter((item) =>
                    item.details.some((data) => data.size === e && Number(data.number) > 0)
                )
            );
            setNameAfterFilterSize(e);
        } else if (e === "تخفیف دار ها") {
            setProductFilterDatabase(productFilterDatabase.filter((item) => item.off !== 0));
            setNameAfterFilterSort("تخفیف دار ها");
        }
    };
    const handlerFiler = () => {
        setProductFilterDatabase(productsDatabase);
        setNameAfterFilterSort("");
        setNameAfterFilterType("");
        setNameAfterFilterSize("");
        setNameAfterFilterColor("");
    };

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
    useEffect(() => {
        console.log("productFilterDatabase", productFilterDatabase);
    }, [productFilterDatabase]);

    return (
        <>
            <Breadcrumb nameGroup={"تمامی محصولات"} />

            <div className="img-productpage-wrapper">
                <img src="/images/towelPageProduct.jpg" alt="" />
            </div>
            <div className="table-product-wrapper">
                <div className="filter-product-wrapper">
                    <div className="button-filter-wrapper">
                        <ButtonFilter
                            nameButton={"مرتب سازی بر اساس"}
                            itemFilter={productSort}
                            handlerSelect={handleSelect}
                        />
                        <ButtonFilter nameButton={"نوع حوله"} itemFilter={productType} handlerSelect={handleSelect} />
                        <ButtonFilter
                            nameButton={"سایز حوله"}
                            itemFilter={productSize}
                            handlerSelect={handleSelect}
                            nameDefult={"سایز"}
                        />
                        <ButtonFilter nameButton={"رنگ"} itemFilter={productColor} handlerSelect={handleSelect} />
                    </div>
                    <div className="after-filter-wrapper">
                        <div className={nameAfterFilterSort.length ? "after-filter-item" : "after-filter-item-hidden"}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#000000"
                                stroke-width="1.75"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            >
                                <path d="M9 11l3 3l8 -8" />
                                <path d="M20 12v6a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h9" />
                            </svg>
                            {nameAfterFilterSort}
                        </div>

                        <div className={nameAfterFilterType.length ? "after-filter-item" : "after-filter-item-hidden"}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#000000"
                                stroke-width="1.75"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            >
                                <path d="M9 11l3 3l8 -8" />
                                <path d="M20 12v6a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h9" />
                            </svg>
                            {nameAfterFilterType}
                        </div>

                        <div className={nameAfterFilterSize.length ? "after-filter-item" : "after-filter-item-hidden"}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#000000"
                                stroke-width="1.75"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            >
                                <path d="M9 11l3 3l8 -8" />
                                <path d="M20 12v6a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h9" />
                            </svg>
                            سایزهای&nbsp;&nbsp; {nameAfterFilterSize}
                        </div>

                        <div className={nameAfterFilterColor.length ? "after-filter-item" : "after-filter-item-hidden"}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#000000"
                                stroke-width="1.75"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            >
                                <path d="M9 11l3 3l8 -8" />
                                <path d="M20 12v6a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h9" />
                            </svg>
                            رنگ های &nbsp;&nbsp;
                            <div
                                className="after-filter-item-color"
                                style={{ backgroundColor: `${nameAfterFilterColor}` }}
                            ></div>
                        </div>

                        <div
                            className={
                                nameAfterFilterSort.length ||
                                nameAfterFilterType.length ||
                                nameAfterFilterSize.length ||
                                nameAfterFilterColor.length
                                    ? "after-filter-item-btn"
                                    : "after-filter-item-btn-hidden"
                            }
                            onClick={handlerFiler}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                fill="currentColor"
                                class="bi bi-x"
                                viewBox="0 0 16 16"
                            >
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                            </svg>
                            حذف فیلتر
                        </div>
                    </div>
                </div>
                <div className="all-product-wrapper">
                    {productFilterDatabase.length ? (
                        productFilterDatabase.map((product) => (
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
                        ))
                    ) : (
                        <div className="emptyProduct">
                            <img src="/images/empty.png" alt="" style={{ width: "25rem" }} />
                            <h3>
                                هیچ محصولی یافت نشد
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="35"
                                    height="35"
                                    fill="currentColor"
                                    class="bi bi-emoji-frown"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                                    <path d="M4.285 12.433a.5.5 0 0 0 .683-.183A3.5 3.5 0 0 1 8 10.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.5 4.5 0 0 0 8 9.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5m4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5" />
                                </svg>
                            </h3>
                        </div>
                    )}
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
