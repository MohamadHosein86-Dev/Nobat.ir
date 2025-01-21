import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';


const DoctorMap = ({ doctor }:any) => {
    return (
        <div className=' lg:max-w-[600px] h-[17rem] lg:h-[13rem] m-[0 auto] relative'>
            <MapContainer style={{width:"100%" , height:"100%"}} center={[40 , 0]} scrollWheelZoom={true} zoom={12} >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                
            />
              
        <Marker key={doctor.id} position={[doctor.coordinates.x , doctor.coordinates.y]}/>
        </MapContainer>
        </div>
    );
};

export default DoctorMap;
