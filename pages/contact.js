import React, { useEffect, useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";

// Dynamically import components from react-leaflet
const MapContainer = dynamic(() => import("react-leaflet").then((mod) => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import("react-leaflet").then((mod) => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import("react-leaflet").then((mod) => mod.Marker), { ssr: false });
const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), { ssr: false });

// Import leaflet styles
import "leaflet/dist/leaflet.css";

const ContactMe = () => {
  const position = [23.31332343150201, 85.34545710684826];
  const [L, setL] = useState(null);

  // Load Leaflet only on the client side
  useEffect(() => {
    if (typeof window !== "undefined") {
      import("leaflet").then((leafletModule) => {
        setL(leafletModule.default); // Save L globally
      });
    }
  }, []);

  if (!L) {
    return null; // Return null or a loading indicator while Leaflet is loading
  }

  const markerIcon = L.icon({
    iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
    shadowSize: [41, 41],
  });

  return (
    <div className="py-16 px-8">
      <div className="max-w-6xl mx-auto text-left">
        <div className="w-full">
          <h2 className="text-3xl font-semibold mb-4 relative inline-block pb-2 after:content-[''] after:w-[160px] after:h-1 after:bg-blue-500 after:absolute after:left-1/2 after:transform after:-translate-x-1/2 after:bottom-0">
            Contact Us
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
          {/* Contact Details */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Get in Touch</h3>
            <p className="text-lg">
              If you have any questions or want to connect, feel free to reach out to me via the contact details below.
            </p>

            {/* Address */}
            <div className="flex items-center space-x-3">
              <span className="text-xl">📍</span>
              <p className="text-lg">Near Birsa Munda Airport, Shiva Ji Nagar,<br /> B- Block Road No 3, Hethu, Ranchi, Jharkhand, 834002</p>
            </div>

            {/* Email */}
            <div className="flex items-center space-x-3">
              <span className="text-xl">📧</span>
              <p className="text-lg"><Link href="mailto:bdsinfinityinfo@gmail.com">bdsinfinityinfo@gmail.com</Link></p>
            </div>

            {/* Phone Number */}
            <div className="flex items-center space-x-3">
              <span className="text-xl">📞</span>
              <p className="text-lg">(123) 456-7890</p>
            </div>
          </div>

          {/* OpenStreetMap */}
          <div className="w-full h-[400px] z-0">
            <MapContainer center={position} zoom={15} scrollWheelZoom={true} className="h-full w-full">
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={position} icon={markerIcon}>
                <Popup>
                  <span>BDS Infinity Pvt Ltd</span>
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
