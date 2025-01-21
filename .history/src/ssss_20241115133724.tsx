import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

// اگر ایکون‌های پیش‌فرض Marker به درستی نمایش داده نمی‌شوند، از این بخش استفاده کنید
import 'leaflet/dist/leaflet.css';
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const DoctorMap = ({ doctors }) => {
    return (
        <MapContainer center={[35.6892, 51.3890]} zoom={12} style={{ height: '500px', width: '100%' }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {doctors.map((doctor, index) => (
                <Marker key={index} position={[doctor.x, doctor.y]}>
                    <Popup>
                        <div>
                            <h3>{doctor.name}</h3>
                            <p>{doctor.specialty}</p>
                        </div>
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
};

export default DoctorMap;