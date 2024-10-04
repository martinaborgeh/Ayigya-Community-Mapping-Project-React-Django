import React, { useState, useEffect} from 'react';
import ImageLayer from 'ol/layer/Image';
import ImageWMS  from 'ol/source/ImageWMS';
import { WMSCapabilities } from 'ol/format';



function QueryPanel({ isOpen,map}) {
  const [selectedAttribute, setSelectedAttribute] = useState('None');
  const [selectedFeatureLayer, setSelectedFeatureLayer] = useState('All Feature Layers');
  const [selectedQueryType, setSelectedQueryType] = useState('None');
  const [value, setValue] = useState('');
  const [results, setResults] = useState('');
  const [layers, setLayers] = useState([]);
  const [attributes,setAttributes] = useState(null)
  const [operators,setOperations]= useState([])
  const [error, setError] = useState(null);


 

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

  const extractBaseType = (type) => {
    if (type.startsWith('xsd:')) {
        return type; // Simple types
    } else {
        // Handle complex types or namespaces
        return type.split(':').pop(); // Just take the name part
    }
};

  async function getAttributeNames(layer) {
    try {
        const response = await fetch(
            `http://localhost:8080/geoserver/wfs?service=WFS&request=DescribeFeatureType&version=1.1.0&typeName=${layer}`
        );

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const text = await response.text(); // Get the response as text
        console.log(response)
        const xml = new window.DOMParser().parseFromString(text, 'text/xml');
        const attrs = [];
        

        const elements = xml.getElementsByTagName('xsd:element');
        
        for (let i = 0; i < elements.length; i++) {
            const value = elements[i].getAttribute('name');
            const type = elements[i].getAttribute('type');
           
            if (value !== 'geom' && value !== 'the_geom') {
                attrs.push({ name: value, type})
                
            }
        }

        

        setAttributes(attrs); // Ensure setAttributes is defined in the appropriate scope
    } catch (error) {
        console.error('Error fetching attributes:', error);
        alert('Error retrieving attributes from the server.');
    }
}


  async function getWmsLayerExtent(layerName) {
    const baseUrl = 'http://localhost:8080/geoserver/wms?';

    try {
        const response = await fetch(baseUrl + 'SERVICE=WMS&VERSION=1.3.0&REQUEST=GetCapabilities');
        const text = await response.text();
        const parser = new WMSCapabilities();
        const result = parser.read(text);

        // Retrieve the geographic bounding box for the specified layer
        const layer = result.Capability.Layer.Layer.find(l => l.Name === layerName);
        if (layer && layer.EX_GeographicBoundingBox) {
            const extent = layer.EX_GeographicBoundingBox;
            return extent; // Return the extent in EPSG:4326
        } else {
            console.error('Layer not found or no bounding box available.');
            return null; // Return null if the layer is not found
        }
    } catch (error) {
        console.error('Error fetching WMS capabilities:', error);
        return null; // Return null in case of an error
    }
}

async function layerExists(layerName) {
  return map.getLayers().getArray().some(layer => 
      layer.getSource() instanceof ImageWMS &&
      layer.getSource().getParams().LAYERS === layerName
  );
}




 async function  createWMSLayer(layerName){
   if(!await layerExists(selectedFeatureLayer)){
          const wmslayer = new ImageLayer({
                source: new ImageWMS({
                  url: 'http://localhost:8080/geoserver/wms',
                  params: {
                    'LAYERS': layerName,
                     'TILED': true,
                  },
                  serverType: 'geoserver',
                  crossOrigin: 'anonymous',
                }),
              })
            return wmslayer
        }else{
          return null
        }
   }


  const  handleQuery = async() => {
   
    if(selectedFeatureLayer ==="All Feature Layers" & selectedAttribute ==="None" & selectedQueryType ==="None"){
        console.log("Clicked")
        // setIsWMSLayersOpen(true)      
    }else if (selectedFeatureLayer !=="All Feature Layers" & selectedAttribute ==="None" & selectedQueryType ==="None"){
      // map.addLayer(await createWMSLayer(selectedFeatureLayer));
      var newLayer = await createWMSLayer(selectedFeatureLayer)
      
      if (newLayer!==null) map.addLayer(newLayer)
      

        // Zoom to the extent of the new WMS layer
        const extent = await  getWmsLayerExtent("ne:"+selectedFeatureLayer);
      
        if (extent) {
            map.getView().fit(extent, {
                duration: 1000, // Animation duration
                Zoom: 20, // Optional: Set a maximum zoom level
            });
          }
      }else if (selectedFeatureLayer ==="All Feature Layers" & selectedAttribute !=="None" & selectedQueryType !=="None"){
      console.log("to be handled later")
      }else if (selectedFeatureLayer ==="All Feature Layers" & selectedAttribute !=="None" & selectedQueryType ==="None"){
       console.log("please select an operator")
      }else if (selectedFeatureLayer ==="All Feature Layers" & selectedAttribute ==="None" & selectedQueryType !=="None"){
        console.log("please select an Attribute")
       }else if (selectedFeatureLayer !=="All Feature Layers" & selectedAttribute ==="None" & selectedQueryType ==="None"){
        console.log("Selecting None for both attribute and operators requires to select , All features Layers in the feature layer")
       }else {
        console.log("unknown logic fix")
       }        
}

async function SetOperations(attribute){
  console.log("att",attribute)
  if (attribute !== null && attribute !== "None" && attribute !== undefined){
    const attr = attributes.find(attr => attr.name === attribute)
    const datatype = attr.type
    console.log(datatype)
    if (datatype ==="xsd:decimal" | datatype ==="xsd:double"){
      var operat = [{text:'Greater than',sign:'>'},{text:'Less than',sign:'<'},{text:'Equal to',sign:'='},{text:'Between',sign:'BETWEEN'}] 
       setOperations(operat)

    }else if (datatype ==="xsd:string"){
      setOperations([{text:"Equals",sign:"ILike"}])
  
    }else if (datatype ==="xsd:date"){
      console.log("to be handled later")
    }

  }
}



  // Log selected values whenever they change
  useEffect(() => {
    getAttributeNames("ne:"+selectedFeatureLayer)
    console.log("Selected Feature Layer:", selectedFeatureLayer);
    
  }, [selectedFeatureLayer]);

  useEffect(() => {
    
    SetOperations(selectedAttribute)
    
  }, [selectedAttribute]);

  useEffect(() => {
    console.log("Selected Query Type:", selectedQueryType);
  }, [selectedQueryType]);

  useEffect(() => {
    const fetchWmsLayers = async () => {
      try {
        const response = await fetch('http://localhost:8080/geoserver/ne/wms?request=getCapabilities');
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
    }
      fetchWmsLayers()
    
    
  }, []);

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
           if {layers.map((layer, index) => (<option key ={index} value={layer.name}>{layer.name}</option>))}
          {/* <option value="All Feature Layers">All Feature Layers</option> */}
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
          {attributes.map((attribute, index) => (<option key ={index} value={attribute.name}>{attribute.name}</option>))}
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
          {operators.map((operator, index) => (<option key ={index} value={operator.sign}>{operator.text}</option>))}
        
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