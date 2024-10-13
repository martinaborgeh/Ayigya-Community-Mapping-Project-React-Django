// // // Importing user defined modules
// // import {DraggableMarker,LocationMarker,UpdateDataComponent,LocateUserButton,LeafletControlGeocoder,LocateCenterMarkerComponent} from './react_leaflet_components'
// // import React, { useState, useEffect,useRef} from 'react';
// // import { Link, useNavigate } from 'react-router-dom';

// // import 'leaflet.wmts';

// // // import WMTSTileLayer from 'react-leaflet';


// // import {
// //      MapContainer, 
// //      TileLayer, 
// //      LayersControl,
// //      Marker,
// //      useMap
// //     } from 'react-leaflet'

// // import L from 'leaflet';

// // const { BaseLayer } = LayersControl;

// //     delete L.Icon.Default.prototype._getIconUrl;
// //     L.Icon.Default.mergeOptions({
// //       iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
// //       iconUrl: require('leaflet/dist/images/marker-icon.png'),
// //       shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
// //     });

  

// // // import { useAuthorization } from "../resusable_function"


// // const WMTSLayer = () => {
// //   const map = useMap();

// //   React.useEffect(() => {
// //     const wmtsLayer = new L.TileLayer.WMTS('http://localhost:8080/geoserver/gwc/service/wmts', {
// //       layer: 'ne:projected_mosaic',
// //       style: 'default',
// //       tilematrixSet: 'EPSG:4326',
// //       format: 'image/png',
// //       // Define the tile size and other parameters if needed
// //       // tileSize: 256,
// //       attribution: "&copy;Your Attribution"
// //     })

// //     // const wmtsLayer = new L.TileLayer.WMTS(wmtsUrl, wmtsOptions);
// //     map.addLayer(wmtsLayer); // Add WMTS layer as a base layer

// //     return () => {
// //       map.removeLayer(wmtsLayer); // Clean up on unmount
// //     };
// //   }, [map]);

// //   return null; // No need to render anything
// // };





// // export function MapView(){
// //   const [maxBounds, setMaxBounds] = useState(null);

// //   const [currentPosition, setCurrentPosition] = useState([6.69145, -1.57465]);

// //   const serverbaseurl = "https://genuine-calm-beagle.ngrok-free.app";
// //   const navigate = useNavigate()

// //   const wmtsUrl = 'http://localhost:8080/geoserver/gwc/service/wmts'; // Replace with your WMTS URL
// //   const layerName = 'ne:projected_mosaic'; // Replace with your layer name
// //   const style = ''; // Replace with your style name
// //   const format = 'image/png';
// //   const tileMatrixSet = "EPSG:4326"

// //   const url = `${wmtsUrl}?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=${layerName}&STYLE=${style}&TILEMATRIXSET=${tileMatrixSet}&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&FORMAT=${format}`;



// //   useEffect(() => {
// //     fetch(serverbaseurl + "/accounts/check-if-user-is-authenticated/", {
// //       method: 'GET',
// //       credentials: 'include',
// //       headers: {
// //         "Content-Type": "application/json",
// //       },
// //     })
// //       .then(response_data => {
// //         if (!response_data.ok) {
// //           if (response_data.status === 401) {
// //             console.log("Not Authorized, Enter V");
// //           } else if (response_data.status === 400) {
// //             console.log("Something Bad Happened, We would resolve it soon");
// //             navigate("/error-message");
// //           }
// //         } else {
// //           return response_data.json();
// //         }
// //       })
// //       .catch(error => {
// //         console.error('Authorization Error:', error.message);
// //       });
// //   }, [navigate]);

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     // setMapReady(true);
// //     // updateData();
// //   };

// //   const createWMTSLayer = () => {
// //     return L.TileLayer.WMTS('http://localhost:8080/geoserver/gwc/service/wmts', {
// //       layer: 'ne:projected_mosaic',
// //       style: 'default',
// //       tilematrixSet: 'EPSG:4326',
// //       format: 'image/png',
// //       // Define the tile size and other parameters if needed
// //       tileSize: 256,
// //       attribution: "&copy;"
// //     });
// //   };
  

// //   return (
// //     <div class ="bg-[#dfa674]">
// //       <h1 class="mb-8 font-bold text-7xl text-[#002D74]">Ayigya Community Map View</h1>


// //       <MapContainer  center={currentPosition} zoom={30}  style={{ height: "100vh", width: "100vw" }} scrollWheelZoom={true}>
// //         <LayersControl position="topright">
// //           <BaseLayer checked name="Google Satellite">
// //             <TileLayer
// //               url="https://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}"
// //               attribution='&copy; <a href="https://www.google.cn/copyright">Google Satellite</a> contributors'
// //             />
// //           </BaseLayer>
// //           <BaseLayer name="OpenStreetMap">
// //             <TileLayer
// //               url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
// //               attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
// //             />
// //           </BaseLayer>
// //           <BaseLayer name="Google Satellite Hybrid" >
// //             <TileLayer
// //               url="https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}"
// //               attribution='&copy; <a href="https://www.google.com/copyright">Google Satellite Hybrid</a> contributors'
// //             />
// //           </BaseLayer>

// //           <BaseLayer name="WMTS Layer">
// //           <TileLayer
// //             url={url}
// //           />
// //         </BaseLayer>
        

        
          
// //         </LayersControl>
// //         <LeafletControlGeocoder />
// //         <LocateUserButton setCurrentPosition={setCurrentPosition} />
// //         {/* <LocateCenterMarkerComponent setMaxBounds={setMaxBounds} setCurrentPosition={setCurrentPosition} /> */}

// //         {/* Render UpdateDataComponent */}
// //         {/* <UpdateDataComponent
// //           maxBounds={maxBounds}
// //           currentPosition={currentPosition}
   
          
// //         /> */}
      
// //       </MapContainer>
// //     </div>
// //   );
// // };





import React, { useEffect, useRef, useState } from 'react';
import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import WMTS from 'ol/source/WMTS';
import WMTSCapabilities from 'ol/format/WMTSCapabilities';
import { optionsFromCapabilities } from 'ol/source/WMTS';
import Geolocation from 'ol/Geolocation.js';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import { Icon, Style } from 'ol/style';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import LayerSwitcher from 'ol-layerswitcher';
import 'ol-layerswitcher/dist/ol-layerswitcher.css';
import locateme from './1900048.png'
import QueryPanel from './querypanel'
import SimpleQuery from './simplequery'
import DetailsTableView from './tableview'
import { Group as LayerGroup } from 'ol/layer';
import Legend from "./lengends"







const MapView = () => {
  const mapRef = useRef();
   
  const [map, setMap] = useState(null);
  const [geolocation, setGeolocation] = useState(null);
  const [marker, setMarker] = useState(null);
  const [isOpen, setIsOpen] = useState(false)
  const layerSwitcherRef = useRef();
  const [tableColumnNames,setTableColumnNames] = useState([])
  const [tableData,seTableData] = useState([])
  const [results, setResults] = useState('');
  const [isTableViewOpen,setIsTableViewOpen] = useState(false)
  const [legendOverlays, setLegendOverlays] = useState([])


  // const [maplayers, setMapLayers] = useState([])
  

  useEffect(() => {
    let isMounted = true;
    const fetchCapabilities = async () => {
      if (map) return; // Prevent re-creating the map if it already exists

      try {
        const response = await fetch('http://localhost:8080/geoserver/gwc/service/wmts?REQUEST=GetCapabilities');
        const text = await response.text();
        const parser = new WMTSCapabilities();
        const result = parser.read(text);
        const options = optionsFromCapabilities(result, {
          layer: 'ne:projected_mosaic',
          matrixSet: 'EPSG:4326'
        });

        if (!options) {
          console.error('Failed to parse WMTS options from capabilities');
          return;
        }

        
        


        

        const wmtsSource = new WMTS(options);
        const baseLayer1 = new TileLayer({
        source: wmtsSource,
        title: 'BaseLayer',
        visible: true
      });


        if (isMounted && !map) {
          const initialMap = new Map({
            target: mapRef.current,
            layers: [

              new LayerGroup({
                title: 'Base maps',
                layers: [baseLayer1]
              }),
              new LayerGroup({
                title: 'Overlays',
                layers: []
              })
            ],
            view: new View({
              projection: 'EPSG:4326',
              center: [-1.57465, 6.69145],
              zoom: 17
            })
          });

          const layerSwitcher = new LayerSwitcher({
            
            reverse: true,
            groupSelectStyle: 'group'
          });
          // initialMap.addLayer(baseLayer1)
          initialMap.addControl(layerSwitcher);
          layerSwitcherRef.current = layerSwitcher;
          

          

         
          // const baseLayer1 = new TileLayer({
          //   source: new WMTS({ /* Base Layer 1 Source */ }),
          //   title: 'Base Layer 1',
          //   visible: true,
          // });
          
          // layerSwitcher.addBaseLayer(baseLayer1);
          

         // Overlay Layer Group
        


          // const geo = new Geolocation({
          //   tracking: true,
          //   projection: 'EPSG:4326', // Set projection to match your map's projection
          // });
      
          // geo.on('change:position', function () {
          //   const coordinates = geo.getPosition();
          //   if (coordinates) {
          //     if (marker) {
          //       marker.setGeometry(new Point(coordinates)); // Update marker position
          //     } else {
          //       // Create a new marker if it doesn't exist
          //       const newMarker = new Feature(new Point(coordinates));
          //       newMarker.setStyle(new Style({
          //         image: new Icon({
          //           src: 'https://openlayers.org/en/latest/examples/data/icon.png', // Your marker icon URL
          //           scale: 1,
          //         }),
          //       }));
      
                // // Create a vector source and layer for the marker
                // const vectorSource = new VectorSource({
                //   features: [newMarker],
                // });
                // const vectorLayer = new VectorLayer({
                //   source: vectorSource,
                // });
      
                // initialMap.addLayer(vectorLayer); // Add the layer to the map
          //       setMarker(newMarker); // Store the marker reference
          //     }
          //   }
          // });
      
         
          // setGeolocation(geo);

          

          setMap(initialMap);
        }

        
      } catch (error) {
        console.error('Error fetching WMTS capabilities:', error);
      }
    };

    fetchCapabilities();

    

    return () => {
      isMounted = false; // Set the mounted state to false
  
      if (map) {
          map.setTarget(undefined); // Remove the map target
          setMap(null); // Clear the map state
  
          // Remove layer switcher if it exists
          if (layerSwitcherRef.current) {
              map.removeControl(layerSwitcherRef.current);
          }
      }
  };
  
    // console.log("maplayer",maplayers)
  }, [map]);

  // useEffect(async()=>{
  //   const fetchLegendLayers = async()=>{
  //     const overlayGroup = map.getLayers().getArray().find(l => l.get('title') === 'Overlays');
  //     if (overlayGroup && overlayGroup instanceof LayerGroup) {
  //       const getLayers=overlayGroup
  //       getLayers.length!==0?setLegendOverlays(getLayers):setLegendOverlays([])
  
  //     }
  
  //   }
  //   await fetchLegendLayers()

  // },[map])

 

 
  const handleZoomToLocation = () => {
    if (geolocation) {
      const coordinates = geolocation.getPosition();
      if (coordinates) {
        map.setView(new View({
          center: coordinates,
          zoom: 12,
        }));
      } else {
        alert("Unable to retrieve location. Please check permissions.");
      }
    }
  };

  const addLayerToMap = async(layer) => {
    if (map && layer) {
      const overlayGroup = map.getLayers().getArray().find(l => l.get('title') === 'Overlays');
      if (overlayGroup && overlayGroup instanceof LayerGroup) {
        overlayGroup.getLayers().push(layer);


      } else {
        map.addLayer(layer);
      }
      
      console.log(`Layer ${layer.get('title')} added to map`);
    }
  };

  const RerenderLayerSwitcherPanel = async(layer) => {
    if (layerSwitcherRef.current && layer) {
      // Ensure the layer is in the layer switcher's list
      layerSwitcherRef.current.renderPanel();
      console.log(`Layer ${layer.get('title')} added to layer switcher`);
    }
  };

  return (
    <div className="flex flex-col w-full h-screen">
      <div style={{ background: 'brown' }} className="mb-0 pb-0">
        <h1 className="font-bold text-6xl pb-0 mb-0 text-white">Ayigya Community WebMap View</h1>
      </div>
      <div className="flex flex-col flex-1 overflow-hidden">
        <div className="flex flex-1">
          {/* <div className="w-1/4"> */}
          
            <QueryPanel addLayerToMap = {addLayerToMap} RerenderLayerSwitcherPanel = {RerenderLayerSwitcherPanel} setIsTableViewOpen ={setIsTableViewOpen} results = {results} setResults = {setResults} tableData = {tableData} tableColumnNames={tableColumnNames} setTableColumnNames = {setTableColumnNames} seTableData = {seTableData} layerSwitcherRef={layerSwitcherRef} isOpen={isOpen} map={map} />
          {/* </div> */}
          <div className="flex-1 relative">
            <button
              style={{ zIndex: 4000 }}
              onClick={() => setIsOpen(!isOpen)}
              className="absolute top-2 left-20 p-1 rounded-md text-md text-white font-bold bg-[#CD4631]"
            >
              {isOpen ? "Hide Advanced Query" : "Open Advanced Query"}
            </button>
            <SimpleQuery addLayerToMap = {addLayerToMap} RerenderLayerSwitcherPanel = {RerenderLayerSwitcherPanel} setIsTableViewOpen = {setIsTableViewOpen} setResults = {setResults} setTableColumnNames = {setTableColumnNames} seTableData = {seTableData} map={map} />
            <div className="h-full bg-grey relative">
              <div
                ref={mapRef}
                className="w-full h-full bg-grey"
                style={{ zIndex: 2000 }}
              />
            </div>
            <button
              onClick={handleZoomToLocation}
              className="absolute top-20 right-5 z-[3050]"
            >
              <img src={locateme} alt="Locate Me" className="w-9 h-9" />
            </button>
            {/* <Legend isTableViewOpen= {isTableViewOpen} map={map} /> */}
          </div>
        </div>
        {isTableViewOpen?<DetailsTableView map = {map} tableColumnNames = {tableColumnNames} tableData= {tableData}/>:null}
      </div>
    </div>
  );
};

export default MapView;



{/* <button onClick={() => setIsOpen(false)} className="mb-2">Close</button> */}