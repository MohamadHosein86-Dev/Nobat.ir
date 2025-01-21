import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';


const DoctorMap = ({ doctor }:any) => {
    return (
        <div className=' lg:max-w-[600px] h-[17rem] lg:h-[13rem] m-[0 auto] relative'>
            <MapContainer style={{width:"100%" , height:"100%"}} center={[40 , 0]} scrollWheelZoom={true} zoom={12} >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
              
   <Marker key={doctor.id} position={[doctor.coordinates.x , doctor.coordinates.y]}>
    <Popup>
      A pretty CSS3 popup.  Easily customizable.
    </Popup>
  </Marker> 
        </MapContainer>
        </div>
    );
};

export default DoctorMap;
