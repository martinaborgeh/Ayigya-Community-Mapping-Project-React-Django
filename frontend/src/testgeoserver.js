


// import React, { useEffect, useRef, useState } from 'react';
// import 'ol/ol.css';
// import Map from 'ol/Map';
// import View from 'ol/View';
// import TileLayer from 'ol/layer/Tile';
// import WMTS from 'ol/source/WMTS';
// import WMTSCapabilities from 'ol/format/WMTSCapabilities';
// import { optionsFromCapabilities } from 'ol/source/WMTS';
// import Geolocation from 'ol/Geolocation.js';
// import VectorLayer from 'ol/layer/Vector';
// import VectorSource from 'ol/source/Vector';
// import { Icon, Style } from 'ol/style';
// import Feature from 'ol/Feature';
// import Point from 'ol/geom/Point';
// import locateme from './1900048.png'






// const MapComponent = () => {
//   const mapRef = useRef();
   
//   const [map, setMap] = useState(null);
//   const [geolocation, setGeolocation] = useState(null);
//   const [marker, setMarker] = useState(null);

//   useEffect(() => {
//     let isMounted = true;
//     const fetchCapabilities = async () => {
//       if (map) return; // Prevent re-creating the map if it already exists

//       try {
//         const response = await fetch('http://localhost:8080/geoserver/gwc/service/wmts?REQUEST=GetCapabilities');
//         const text = await response.text();
//         const parser = new WMTSCapabilities();
//         const result = parser.read(text);
//         const options = optionsFromCapabilities(result, {
//           layer: 'ne:projected_mosaic',
//           matrixSet: 'EPSG:4326'
//         });

//         if (!options) {
//           console.error('Failed to parse WMTS options from capabilities');
//           return;
//         }

//         const wmtsSource = new WMTS(options);
//         const wmtsLayer = new TileLayer({
//           source: wmtsSource,
//           title: 'Drone Image',
//           visible: true
//         });


        

        

//         if (isMounted && !map) {
//           const initialMap = new Map({
//             target: mapRef.current,
//             layers: [wmtsLayer],
//             view: new View({
//               projection: 'EPSG:4326',
//               center: [-1.57465, 6.69145],
//               zoom: 17
//             })
//           });


//           const geo = new Geolocation({
//             tracking: true,
//             projection: 'EPSG:4326', // Set projection to match your map's projection
//           });
      
//           geo.on('change:position', function () {
//             const coordinates = geo.getPosition();
//             if (coordinates) {
//               if (marker) {
//                 marker.setGeometry(new Point(coordinates)); // Update marker position
//               } else {
//                 // Create a new marker if it doesn't exist
//                 const newMarker = new Feature(new Point(coordinates));
//                 newMarker.setStyle(new Style({
//                   image: new Icon({
//                     src: 'https://openlayers.org/en/latest/examples/data/icon.png', // Your marker icon URL
//                     scale: 1,
//                   }),
//                 }));
      
//                 // Create a vector source and layer for the marker
//                 const vectorSource = new VectorSource({
//                   features: [newMarker],
//                 });
//                 const vectorLayer = new VectorLayer({
//                   source: vectorSource,
//                 });
      
//                 initialMap.addLayer(vectorLayer); // Add the layer to the map
//                 setMarker(newMarker); // Store the marker reference
//               }
//             }
//           });
      
         
//           setGeolocation(geo);

//           setMap(initialMap);
//         }

        
//       } catch (error) {
//         console.error('Error fetching WMTS capabilities:', error);
//       }
//     };

//     fetchCapabilities();

//     return () => {
//       isMounted = false;
//       if (map) {
//         map.setTarget(undefined);
//         setMap(null);
//       }
//     };
//   }, [map]);

 
//   const handleZoomToLocation = () => {
//     if (geolocation) {
//       const coordinates = geolocation.getPosition();
//       if (coordinates) {
//         map.setView(new View({
//           center: coordinates,
//           zoom: 12,
//         }));
//       } else {
//         alert("Unable to retrieve location. Please check permissions.");
//       }
//     }
//   };

//   return (
//     <div>
//       <div style={{background:'lightgreen'}} ><h1 class=" font-bold text-6xl text-black">Ayigya Community WebMap View</h1></div>
//       <div style={{display:'flex',direction:'row'}}>
      
//             <div style={{width:'20%',height: '100vh'}}>
//               Side Bar Goes Here
//               </div>
//             <div >
                
//                 <div ref={mapRef} style={{ width: '80vw', height: '100vh' }} />
//                 <button onClick={handleZoomToLocation} style={{ position: 'absolute', top: '100px', right: '10px', zIndex: 1000 }}>
//                 <img src={locateme} alt="Locate Me" style={{width: '35px', height: '35px'}} />
//                 </button>
//             </div>

//       </div>
//     </div>
//   )
// };

// export default MapComponent;