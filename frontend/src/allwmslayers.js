// // Import statements
// import $ from 'jquery';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import 'jquery-ui/ui/widgets/draggable';


//     const showModal = () => {
//         const modal = document.getElementById('wms_layers_window');
//         const modalInstance = new bootstrap.Modal(modal, {
//             backdrop: false
//         });
//         modalInstance.show();
        
//         // Make the modal draggable using jQuery UI
//         $(modal).draggable();
//     };

//     const fetchWmsLayers = async () => {
//         try {
//             const response = await fetch('http://localhost:8080/geoserver/wms?request=getCapabilities');
//             const text = await response.text();
//             const parser = new DOMParser();
//             const xml = parser.parseFromString(text, 'text/xml');
//             return xml;
//         } catch (error) {
//             console.error('Error fetching WMS layers:', error);
//             return null;
//         }
//     };

//     const populateTable = (xml) => {
//         const table = $('#table_wms_layers');
//         table.empty();
//         table.append('<tr><th>Name</th><th>Title</th><th>Abstract</th></tr>');

//         $(xml).find('Layer > Layer').each(function() {
//             const name = $(this).children('Name').text();
//             const title = $(this).children('Title').text();
//             const abstract = $(this).children('Abstract').text();

//             $('<tr></tr>').html(`<td>${name}</td><td>${title}</td><td>${abstract}</td>`).appendTo(table);
//         });
//     };

//     const addRowHandlers = () => {
//         const table = $('#table_wms_layers');
//         const nameColumnIndex = table.find('th').filter(function() {
//             return $(this).text() === 'Name';
//         }).index();

//         table.on('click', 'tr', function() {
//             table.find('tr').css('background-color', 'white');
//             $(this).css('background-color', 'grey');

//             const layerName = $(this).find('td').eq(nameColumnIndex).text();
//             console.log('Selected layer:', layerName);
//             // You can perform additional actions with the selected layer name here
//         });
//     };

//     const init = async () => {
//         showModal();
//         const xml = await fetchWmsLayers();
//         if (xml) {
//             populateTable(xml);
//             addRowHandlers();
//         }
//     };

//     init();


import React, { useState, useEffect, useCallback } from 'react';

const WMSLayers = ({isWMSLayersOpen,setIsWMSLayersOpen}) => {
//   const [isWMSLayersOpen, setIsWMSLayersOpen] = useState(false);
  const [layers, setLayers] = useState([]);
  const [selectedLayer, setSelectedLayer] = useState(null);
  const [error, setError] = useState(null);

  const fetchWmsLayers = useCallback(async () => {
    try {
      const response = await fetch('http://localhost:8080/geoserver/wms?request=getCapabilities');
      const text = await response.text();
      const parser = new DOMParser();
      const xml = parser.parseFromString(text, 'text/xml');
      
      const layersData = Array.from(xml.querySelectorAll('Layer > Layer')).map(layer => ({
        name: layer.querySelector('Name')?.textContent || '',
        title: layer.querySelector('Title')?.textContent || '',
        abstract: layer.querySelector('Abstract')?.textContent || ''
      }));

      setLayers(layersData);
      setError(null);
    } catch (err) {
      console.error('Error fetching WMS layers:', err);
      setError('Failed to fetch WMS layers. Please try again.');
    }
  }, []);

  useEffect(() => {
    if (isWMSLayersOpen) {
      fetchWmsLayers();
    }
  }, [isWMSLayersOpen, fetchWmsLayers]);

  const handleRowClick = (layer) => {
    setSelectedLayer(layer);
    console.log('Selected layer:', layer.name);
    // You can perform additional actions with the selected layer here
  };

  if (!isWMSLayersOpen) {
    return <button onClick={() =>setIsWMSLayersOpen(true)}>Open WMS Layers</button>;
  }

  return (
    <div className="modal" style={{display: 'block', backgroundColor: 'rgba(0,0,0,0.5)'}}>
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">WMS Layers</h5>
            <button type="button" className="close" onClick={() => setIsWMSLayersOpen(false)}>
              <span>&times;</span>
            </button>
          </div>
          <div className="modal-body">
            {error && (
              <div className="alert alert-danger" role="alert">
                {error}
              </div>
            )}
            <table className="table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Title</th>
                  <th>Abstract</th>
                </tr>
              </thead>
              <tbody>
                {layers.map((layer, index) => (
                  <tr 
                    key={index} 
                    onClick={() => handleRowClick(layer)}
                    style={{cursor: 'pointer', backgroundColor: selectedLayer === layer ? '#f8f9fa' : ''}}
                  >
                    <td>{layer.name}</td>
                    <td>{layer.title}</td>
                    <td>{layer.abstract}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={() => setIsWMSLayersOpen(false)}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WMSLayers;