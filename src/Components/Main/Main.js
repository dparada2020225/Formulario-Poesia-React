import React from 'react'
import Formulario from "../Formulario/Formulario"
import Reporte from "../Reporte/Reporte"
import Reportes from "../ReporteOrdenados/ReporteOrdenados"
import AppNav from "../Nav/Nav"

import {
    Routes,
    Route,
    Navigate
} from "react-router-dom";

function Main(){
  return (
        <>
         <AppNav/>
            <Routes>
                <Route path="/formulario" element={<Formulario /> } />
                <Route path="/reporte%20general" element={<Reporte /> } />
                <Route path="/reportes" element={<Reportes /> } />
                <Route path="/" element={<Navigate to="/formulario" replace />} />
            </Routes>
        </>
    );
}
export default Main;
