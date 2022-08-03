import * as React from 'react';
import axios from "axios";
import { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';

export default function ReportesOrdenados() {
   
    const [persona, setPersona] = useState([])
    useEffect(() => {
      let heroku = "https://formulario-poesia.herokuapp.com"
      //let local = "http://localhost:3200"
      let funcion = "/api/VerFormularios"
      axios
        .get(heroku+funcion)
        .then((res) => {
          // console.log(res.data);
          setPersona(res.data)
        })
        .then()
        .catch((error) => {
          console.log(error.response.data); 
        });    
    }, [])

    const rows =persona.map((row,index) => (
      {id:index, carnet: row.carnet, nombre: row.nombre, carrera: row.carrera , edad: row.edad+ " años" , generoLiterario: row.generoLiterario, fechaDeclamacion: row.fechaDeclamacion}   
      )) ;  

    const columns = [
      { field: 'carnet', headerName: 'Carnet', width: 100 },
      { field: 'nombre', headerName: 'Nombre Completo', width: 250 },
      { field: 'carrera', headerName: 'Carrera', width: 150 },
      { field: 'edad', headerName: 'Edad', width: 100 },
      { field: 'generoLiterario', headerName: 'Genero Literario', width: 150 },
      { field: 'fechaDeclamacion', headerName: 'Fecha Declamacion',type: 'date', width: 200 },   
    ];

    // const columns = [
    //   { field: 'nombre', headerName: 'Nombre Completo', width: 150 },
    //   { field: 'carnet', headerName: 'Carnet', width: 100 },
    //   { field: 'direccion', headerName: 'Direccion', width: 300 },
    //   { field: 'genero', headerName: 'Genero', width: 130 },
    //   { field: 'telefono', headerName: 'Telefono', width: 130 },
    //   { field: 'generoLiterario', headerName: 'Genero Literario', width: 130 },
    //   { field: 'fechaInscripcion', headerName: 'Fecha Inscripcion',type: 'date', width: 130 },
    //   { field: 'edad', headerName: 'Edad', width: 130 },
    //   { field: 'fechaDeclamacion', headerName: 'Fecha Declamacion',type: 'date', width: 130 },   
    // ];

    // const rows =persona.map((row,index) => (
    //   {id:index, nombre: row.nombre , carnet: row.carnet, direccion: row.direccion, genero: row.genero,telefono: row.telefono , generoLiterario: row.generoLiterario, fechaInscripcion: row.fechaInscripcion, edad: row.edad+ " años" , fechaDeclamacion: row.fechaDeclamacion }   
    //   )) ;

  return (
     <><div style={{ height: 400, width: '100%', BgColor: 'red'}}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        sx={{ maxWidth: '100%',}}
      />
    </div></>
  );
}
