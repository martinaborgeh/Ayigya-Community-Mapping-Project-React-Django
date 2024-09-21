

//import third party modules
import { Route, Routes } from "react-router-dom";

//import react modules
import React from 'react'; 

// import custom defined component modules

import {AdminUserLogin}  from "./adminlogin"
import {MapView} from "./mapview"

// const test = require('dotenv').config()



function App() {
  return (
    
    <div className="App">
       
      <Routes >
            <Route path="/admin-user-login" element={<AdminUserLogin/>} />
            <Route path="/map-view" element={<MapView/>} />
            

            
        </Routes>
    </div>
  );
}

export default App;
