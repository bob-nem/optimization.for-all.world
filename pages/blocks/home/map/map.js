import GoogleMapReact from 'google-map-react';

const GoogleMaps = ({ latitude, longitude }) => {
  const renderMarkers = (map, maps) => {
   let marker = new maps.Marker({
   position: { lat: 23.746497, lng: 90.392484 },
   map,
   title: 'optimization for all world'
   });
   return marker;
  };
 
  return (
    <div style={{ height: '100%', width: '100%' }}>
     <GoogleMapReact
       bootstrapURLKeys={{ key: 'AIzaSyCn-sNut3kKEg5BES9ywDjwiyece9wX6sE' }}
       defaultCenter={{ lat: 23.746497, lng: 90.392484 }}
       defaultZoom={15}
       yesIWantToUseGoogleMapApiInternals
       onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
     >
     </GoogleMapReact>
    </div>
  );
 };
 
 export default GoogleMaps;