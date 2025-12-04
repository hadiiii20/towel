import React, { useRef, useState } from "react";
import "./CartCheckout.css";
import TotalCart from "../../Component/TotalCart/TotalCart";
import ProInput from "../../Component/ProInput/ProInput";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

export default function CartCheckout() {
    const inputFirstNameRef = useRef();
    const inputLastNameRef = useRef();
    const inputMobileRef = useRef();
    const inputCityRef = useRef();
    const inputvillageRef = useRef();
    const inputAddressRef = useRef();
    const inputNumberPlateRef = useRef();
    const inputNumberUnitRef = useRef();
    const inputPostalCodeRef = useRef();
    const inputDescriptionRef = useRef();

    const [value, setValue] = useState();
    const [peyValue, setPeyValue] = useState();

    const [selectedCity, setSelectedCity] = useState("");

    const handleChange = (event) => {
        setValue(event.target.value);
    };
    const handleChangePay = (event) => {
        setPeyValue(event.target.value);
    };

    return (
        <>
            <div className="shoppingcart-page">
                <div className="shoppingcart-wrapper">
                    <div className="address-user">
                        <h2 className="cartcheckout-title-main">
                            <span> 1 </span>
                            اطلاعات گیرنده و آدرس
                        </h2>
                        <h2 className="cartcheckout-title">اطلاعات هویتی گیرنده را وارد کنید : </h2>
                        <div className="address-inputs">
                            <ProInput titleLabel={"نام"} nameInput={"firstname"} inputRef={inputFirstNameRef} />
                            <ProInput titleLabel={"نام خانوادگی"} nameInput={"lastname"} inputRef={inputLastNameRef} />
                            <ProInput
                                titleLabel={"شماره موبایل"}
                                nameInput={"mobile"}
                                inputRef={inputMobileRef}
                                type="tel"
                            />
                        </div>
                        <h2 className="cartcheckout-title">آدرس گیرنده را وارد کنید : </h2>
                        <div className="address-inputs">
                            <ProInput
                                titleLabel={"استان"}
                                nameInput={"city"}
                                inputRef={inputCityRef}
                                subMenu={true}
                                onSelectCity={setSelectedCity}
                            />

                            <ProInput
                                titleLabel={"شهرستان"}
                                nameInput={"village"}
                                inputRef={inputvillageRef}
                                subMenu={true}
                                selectCity={selectedCity}
                            />

                            <ProInput
                                titleLabel={"آدرس کامل"}
                                nameInput={"address"}
                                inputRef={inputAddressRef}
                                type="textarea"
                            />
                            <ProInput titleLabel={"پلاک"} nameInput={"numberPlate"} inputRef={inputNumberPlateRef} />
                            <ProInput titleLabel={"واحد"} nameInput={"numberUnit"} inputRef={inputNumberUnitRef} />
                            <ProInput titleLabel={"کدپستی"} nameInput={"postalCode"} inputRef={inputPostalCodeRef} />
                            <ProInput
                                titleLabel={"توضیحات"}
                                nameInput={"description"}
                                inputRef={inputDescriptionRef}
                                type="textarea"
                            />
                        </div>
                    </div>
                    <div className="sending-method">
                        <h2 className="sending-method-title">
                            <span> 2 </span>
                            روش ارسال
                        </h2>
                        <FormControl className="sending-method-item-wrapper">
                            <RadioGroup
                                aria-labelledby="demo-controlled-radio-buttons-group"
                                name="controlled-radio-buttons-group"
                                value={value}
                                onChange={handleChange}
                            >
                                <FormControlLabel
                                    value="55000"
                                    control={<Radio />}
                                    className="sending-method-item"
                                    label="پست پیشتاز"
                                />
                                <span className="sending-method-item-caption">زمان تحویل بین 2 تا 7 روز کاری</span>
                                <FormControlLabel
                                    value="180000"
                                    control={<Radio />}
                                    className="sending-method-item"
                                    label="پیک موتوری"
                                />
                                <span className="sending-method-item-caption">زمان تحویل بین 2 تا 6 ساعت</span>
                            </RadioGroup>
                        </FormControl>
                    </div>
                    <div className="payment-method">
                        <h2 className="payment-method-title">
                            <span> 3 </span>
                            روش پرداخت
                        </h2>
                        <FormControl className="payment-method-item-wrapper">
                            <RadioGroup
                                aria-labelledby="demo-controlled-radio-buttons-group"
                                name="controlled-radio-buttons-group"
                                value={peyValue}
                                onChange={handleChangePay}
                            >
                                <FormControlLabel
                                    value="snapppey"
                                    control={<Radio />}
                                    className="payment-method-item"
                                    label="پرداخت اقساطی اسنپ پی"
                                />
                                <span className="payment-method-item-caption"> 4 قسط ماهانه</span>
                                <FormControlLabel
                                    value="online"
                                    control={<Radio />}
                                    className="payment-method-item"
                                    label="پرداخت آنلاین"
                                />
                                <span className="payment-method-item-caption"> از طریق کارت های عضو شتاب</span>
                            </RadioGroup>
                        </FormControl>
                    </div>
                </div>
                <TotalCart namebtn="پرداخت" routebtn="" sendcost={Number(value)} offcost={true} />
            </div>
        </>
    );
}
