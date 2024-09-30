import React, { useState, useEffect } from 'react';
import WMSLayers from './allwmslayers';


function QueryPanel({ isOpen, setIsOpen}) {
  const [selectedAttribute, setSelectedAttribute] = useState('None');
  const [selectedFeatureLayer, setSelectedFeatureLayer] = useState('All Feature Layers');
  const [selectedQueryType, setSelectedQueryType] = useState('None');
  const [value, setValue] = useState('');
  const [results, setResults] = useState('');
  const [isWMSLayersOpen,setIsWMSLayersOpen] = useState(false)

  const handleSelectedAttributeOnChange = (event) => {
    setSelectedAttribute(event.target.value);
  };

  const handleSelectedFeatureLayerOnChange = (event) => {
    setSelectedFeatureLayer(event.target.value);
  };

  const handleSelectedQueryTypeOnChange = (event) => {
    setSelectedQueryType(event.target.value);
  };

  const handleValueChange = (event) => {
    setValue(event.target.value);
  };

  const handleResultsChange = (event) => {
    setResults(event.target.value);
  };

  const handleQuery = () => {
    // console.log("Querying with:", {
    //   featureLayer: selectedFeatureLayer,
    //   attribute: selectedAttribute,
    //   queryType: selectedQueryType,
    //   value: value,
    //   results: results
    // });

    if(selectedFeatureLayer ==="All Feature Layers" & selectedAttribute ==="None" & selectedQueryType ==="None"){
        console.log("Clicked")
        setIsWMSLayersOpen(true)      
    }
    // Implement your query logic here
  };

  // Log selected values whenever they change
  useEffect(() => {
    console.log("Selected Feature Layer:", selectedFeatureLayer);
  }, [selectedFeatureLayer]);

  useEffect(() => {
    console.log("Selected Attribute:", selectedAttribute);
  }, [selectedAttribute]);

  useEffect(() => {
    console.log("Selected Query Type:", selectedQueryType);
  }, [selectedQueryType]);

  if (!isOpen) return null;

  return (
    <div className="flex flex-col mt-0 pt-0 h-full" style={{ width: '25vw', height: '100vh' }}>
      <div className="flex flex-col items-left bg-white p-2">
        <label htmlFor="feature-layer" className="mb-2">Select Feature Layer:</label>
        <select 
          id="feature-layer" 
          onChange={handleSelectedFeatureLayerOnChange} 
          value={selectedFeatureLayer} 
          className="border rounded p-2 mb-4"
        >
          <option value="All Feature Layers">All Feature Layers</option>
          {/* Add more options here */}
        </select>

        <label htmlFor="attribute" className="mb-2">Select Attribute:</label>
        <select 
          id="attribute" 
          onChange={handleSelectedAttributeOnChange} 
          value={selectedAttribute} 
          className="border rounded p-2 mb-4"
        >
          <option value="None">None</option>
          {/* Add more options here */}
        </select>

        <label htmlFor="query-type" className="mb-2">Select Query Type:</label>
        <select 
          id="query-type" 
          onChange={handleSelectedQueryTypeOnChange} 
          value={selectedQueryType} 
          className="border rounded p-2 mb-4"
        >
          <option value="None">None</option>
          {/* Add more options here */}
        </select>

        <label htmlFor="value" className="mb-2">Enter Value:</label>
        <input 
          id="value" 
          value={value}
          onChange={handleValueChange}
          className="border rounded p-2 mb-4"
        />

        <label htmlFor="results" className="mb-2">Number of Results Returned:</label>
        <input 
          id="results" 
          value={results}
          onChange={handleResultsChange}
          className="border rounded p-2 mb-4"
        />

<button onClick={handleQuery} className="mt-2" style={{ width: "60px", borderRadius: "2px", color: "white", background: "brown" }}>Query</button>
      </div>
    </div>
  );
}

export default QueryPanel;