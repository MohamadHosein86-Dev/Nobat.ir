import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import L from 'leaflet';

import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

L.Icon.Default.mergeOptions({
    iconRetinaUrl: markerIcon2x,
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
});


const DoctorMap = ({ doctor }) => {
    return (
        <div className="mapContainer">
            <MapContainer center={stylis} zoom={12}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
              <Marker key={doctor.id} position={[doctor.coordinates.x, doctor.coordinates.y]} />
        </MapContainer>
        </div>
    );
};

export default DoctorMap;
