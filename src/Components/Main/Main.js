import React from 'react'
import Formulario from "../Formulario/Formulario"
import Reporte from "../Reporte/Reporte"
import AppNav from "../Nav/Nav"



import {
    Routes,
    Route,
    Navigate
} from "react-router-dom";

function Main(){
  return (
    //<React.StrictMode>  </React.StrictMode> 
        <>
         <AppNav/>

            <Routes>
                <Route path="/formulario" element={<Formulario /> } />
                <Route path="/reporte" element={<Reporte /> } />
                <Route path="/" element={<Navigate to="/formulario" replace />} />
            </Routes>
        </>
    );
}
export default Main;
