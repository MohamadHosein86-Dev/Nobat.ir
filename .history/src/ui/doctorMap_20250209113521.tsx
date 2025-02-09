import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

export interface DoctorType {
    id: string;
    name: string;
    coordinates: {
        x: number;
        y: number;
    };
}

interface TypeDoctor {
    doctor: DoctorType | null; // بررسی می‌کنیم که مقدار ممکن است null باشد
}

const DoctorMap: React.FC<TypeDoctor> = ({ doctor }) => {
    if (!doctor || !doctor.coordinates) return null; // جلوگیری از ارور در صورت نبود داده

    return (
        <div className="lg:max-w-[600px] h-[17rem] lg:h-[13rem] m-auto relative">
            <MapContainer 
                style={{ width: "100%", height: "100%" }} 
                center={[doctor.coordinates.x, doctor.coordinates.y]} 
                zoom={12} 
                scrollWheelZoom={true}
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker key={doctor.id} position={[doctor.coordinates.x, doctor.coordinates.y]} />
            </MapContainer>
        </div>
    );
};

export default DoctorMap;
