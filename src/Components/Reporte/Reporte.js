import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from "axios";
import { useEffect, useState } from 'react';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#03a9f4',
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function ReporteGeneral() {
   
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

    
  return (
    <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Nombre completo</StyledTableCell>
            <StyledTableCell align="right">Carnet</StyledTableCell>
            <StyledTableCell align="right">direccion</StyledTableCell>
            <StyledTableCell align="right">genero</StyledTableCell>
            <StyledTableCell align="right">telefono</StyledTableCell>
            <StyledTableCell align="right">genero de poesia</StyledTableCell>
            <StyledTableCell align="right">Fecha de inscripcion</StyledTableCell>
            <StyledTableCell align="right">Edad</StyledTableCell>
            <StyledTableCell align="right">Fecha de declamacion</StyledTableCell>

          </TableRow>
        </TableHead>
         <TableBody>
          {persona.map((row, index) => (
            
            <StyledTableRow key={index}>
              <StyledTableCell component="th" scope="row"> {row.nombre}</StyledTableCell>
              <StyledTableCell align="right">{row.carnet}</StyledTableCell>
              <StyledTableCell align="right">{row.direccion}</StyledTableCell>
              <StyledTableCell align="right">{row.genero}</StyledTableCell>
              <StyledTableCell align="right">{row.telefono}</StyledTableCell>
              <StyledTableCell align="right">{row.generoLiterario}</StyledTableCell>
              <StyledTableCell align="right">{row.fechaInscripcion}</StyledTableCell>
              <StyledTableCell align="right">{row.edad}</StyledTableCell>
              <StyledTableCell align="right">{row.fechaDeclamacion}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody> 
      </Table>
    </TableContainer>
  

  );
}

