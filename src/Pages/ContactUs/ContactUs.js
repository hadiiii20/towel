import React, { useState } from "react";
import "./ContactUs.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import L from "leaflet";
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: markerIcon2x,
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
});

export default function ContactUs() {
    const [location, setLocation] = useState([35.631806, 51.383939]);

    return (
        <div className="contactus">
            <div className="contactus-wrapper">
                {/* بخش اطلاعات تماس */}
                <div className="contactus-detials-call">
                    <p>
                        <strong>آدرس:</strong> تهران، خانی آبادنو خیابان شهرداری، پلاک 75
                    </p>
                    <p>
                        <strong>تلفن:</strong> 55034296-021
                    </p>
                    <p>
                        <strong>ایمیل:</strong> info@poodishop.com
                    </p>
                </div>

                {/* بخش نقشه */}
                <div className="contactus-map">
                    <MapContainer center={location} zoom={15} style={{ height: "100%", width: "100%" }}>
                        <TileLayer url="https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png" />

                        <Marker position={location}>
                            <Popup>پودایران</Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
        </div>
    );
}
