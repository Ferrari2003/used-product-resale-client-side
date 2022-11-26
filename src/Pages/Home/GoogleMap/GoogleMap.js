// import React, { Component } from 'react';
// import { GoogleMap, LoadScript } from '@react-google-maps/api';

// const containerStyle = {
//   width: '400px',
//   height: '400px'
// };

// const center = {
//   lat: -3.745,
//   lng: -38.523
// };

// class MyComponents extends Component {
//   render() {
//     return (
//       <LoadScript
//         googleMapsApiKey={process.env.REACT_APP_GOOGLE_API_KEY}
//       >
//         <GoogleMap
//           mapContainerStyle={containerStyle}
//           center={center}
//           zoom={0}
//         >
//           { /* Child components, such as markers, info windows, etc. */ }
//           <></>
//         </GoogleMap>
//       </LoadScript>
//     )
//   }
// }

// export default React.memo(MyComponents)







import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

const GoogleMap = () => {
    return (
        <div>
            <MapContainer
        center={[51.505, -0.09]}
        zoom={13}
        scrollWheelZoom={false}
        className="h-[600px] w-full mt-32 mb-0"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>Company Address.</Popup>
        </Marker>
      </MapContainer>
        </div>
    );
};

export default GoogleMap;