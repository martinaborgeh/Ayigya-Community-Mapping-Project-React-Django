// // Legend.js
// import React, { useEffect, useState } from 'react';

// const Legend = ({isTableViewOpen, map }) => {
//     const [legendLayers, setLegendLayers] = useState([]);

//     useEffect(async() => {
//         const fetchLegendLayers = async() => {
//             if(map){
//             const layers =map.getLayers().getArray().find(l => l.get('title') === 'Overlays').getLayers();
//             if(layers.length>0){
            
//             const legendData = layers.map(layer => {
//                 const layerTitle = layer.get('title');
//                 const legendUrl = `http://localhost:8080/geoserver/wms?REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=${layerTitle}`;
                
//                 return {
//                     title: layerTitle,
//                     legendUrl,
//                 };
//             });
//             console.log("legendata",layers)
//             setLegendLayers(legendData);
//         };
//     }
// }
//         await fetchLegendLayers();
//         console.log("map effected")
//     }, [map]);

//     return (
//         <div id="legend" className="absolute bottom-4 left-4 bg-white border border-gray-400 p-4 rounded shadow-lg z-10">
//             <h4 className="font-bold mb-2">Legend</h4>
//             {legendLayers.map((layer, index) => (
//                 <div key={index} className="flex items-center mb-2">
//                     <img src={layer.legendUrl} alt={layer.title} className="w-4 h-4 mr-2" />
//                     <span className="text-sm">{layer.title}</span>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default Legend;
