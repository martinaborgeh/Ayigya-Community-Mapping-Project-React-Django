import React, { useEffect, useState } from 'react';
import { getCenter } from 'ol/extent';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import { Style, Fill, Stroke } from 'ol/style';

const DetailsTableView = ({ tableData, tableColumnNames, map }) => {
  const [highlightLayer, setHighlightLayer] = useState(null);

  useEffect(() => {
    console.log("Attributes11", tableColumnNames);
    console.log("Table Data", tableData);

    // Create a highlight layer and add it to the map
    const layer = new VectorLayer({
      source: new VectorSource(),
      style: new Style({
        fill: new Fill({
          color: 'rgba(255, 0, 0, 0.3)',
        }),
        stroke: new Stroke({
          color: '#FF0000',
          width: 3,
        }),
      }),
      zIndex: 999, // Ensure the highlight layer is on top
    });

    if (map) {
      map.addLayer(layer);
      setHighlightLayer(layer);
    }

    // Clean up function to remove the layer when component unmounts
    return () => {
      if (map && layer) {
        map.removeLayer(layer);
      }
    };
  }, [map]);

  const handleRowClick = (feature) => {
    if (feature && feature.getGeometry()) {
      const extent = feature.getGeometry().getExtent();
      const center = getCenter(extent);
      
      // Zoom to feature
      map.getView().animate({
        center: center,
        zoom: 20, // Adjust this value as needed
        duration: 1000 // Animation duration in milliseconds
      });

      // Highlight feature
      if (highlightLayer) {
        const source = highlightLayer.getSource();
        source.clear(); // Remove any previous highlights
        
        // Clone the feature to avoid modifying the original
        const highlightFeature = feature.clone();
        
        // Set a custom style for the highlight feature
        highlightFeature.setStyle(new Style({
          fill: new Fill({
            color: 'rgba(255, 0, 0, 0.3)',
          }),
          stroke: new Stroke({
            color: '#FF0000',
            width: 3,
          }),
        }));
        
        source.addFeature(highlightFeature);
        
        // Force redraw of the layer
        highlightLayer.changed();
      }
    }
  };

  return (
    <div className="h-1/4 bg-gray-800 w-full overflow-hidden relative">
      <table className="text-white w-full border-collapse">
        <thead className="bg-gray-900 sticky top-0 z-10">
          <tr>
            {tableColumnNames.map((column, index) => (
              <th key={index} className="border border-white p-2">{column.name}</th>
            ))}
          </tr>
        </thead>
      </table>
      <div className="overflow-auto h-full">
        <table className="text-white w-full border-collapse">
          <tbody>
            {tableData.map((feature, rowIndex) => (
              <tr
                key={rowIndex}
                className={rowIndex % 2 === 0 ? 'bg-gray-100 hover:bg-gray-300' : 'bg-gray-200 hover:bg-gray-300'}
                onClick={() => handleRowClick(feature)}
                style={{ cursor: 'pointer' }}
              >
                {tableColumnNames.map((column, colIndex) => (
                  <td key={colIndex} className="border text-black border p-2">
                    {feature.values_[column.name] !== undefined ? feature.values_[column.name] : 'N/A'}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DetailsTableView;