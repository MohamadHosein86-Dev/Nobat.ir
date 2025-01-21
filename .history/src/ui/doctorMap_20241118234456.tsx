import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import L from 'leaflet';

import 'leaflet/dist/leaflet.css';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// تنظیمات آیکون پیش‌فرض
L.Icon.Default.mergeOptions({
    iconRetinaUrl: markerIcon2x,
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
});

const DoctorMap = ({ doctor }: any) => {
    // بررسی مختصات پیش‌فرض
    const defaultCoordinates = doctor?.coordinates
        ? [doctor.coordinates.x, doctor.coordinates.y]
        : [35.6892, 51.3890]; // مختصات پیش‌فرض (تهران)

    return (
        <div className="lg:max-w-[600px] h-[17rem] lg:h-[13rem] m-[0 auto] relative">
            <MapContainer
                style={{ width: '100%', height: '100%' }}
                center={defaultCoordinates} // مرکز نقشه
                scrollWheelZoom={true}
                zoom={12}
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                {doctor?.coordinates && (
                    <Marker position={[doctor.coordinates.x, doctor.coordinates.y]} />
                )}
            </MapContainer>
        </div>
    );
};

export default DoctorMap;