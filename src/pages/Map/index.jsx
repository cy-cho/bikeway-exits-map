import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function Map() {
  return (
    <MapContainer center={[25.023, 121.46]} zoom={17}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url={`${process.env.REACT_APP_MAPBOX_STYLE}tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
      />
      <Marker position={[51.505, -0.09]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default Map;
