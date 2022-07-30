import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './Formulario.css'

const Formulario = () =>  {
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      carnet: data.get('carnet'),
      nombre: data.get('nombre'),
      direccion: data.get('direccion'),
      Genero: data.get('genero'),
      tel : data.get('telefono'),
      FechaNacimiento: data.get('techaNacimiento'),
      carrera : data.get('carrera'),
      generoLiterario: data.get('generoLiterario'), 
    }, data);
  };
  
  const [age, setAge] = React.useState('');
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const [genero, setgenero] = React.useState('');

  const handleChange2 = (event) => {
    setgenero(event.target.value);
  };

  return (
    //<Container component="main" maxWidth="xs" sx={{ backgroundColor: "#def7ff"}}>
    <Container component="main"   sx={{ backgroundColor: "#c3e3fd", webkitBoxShadow:" 5px 5px 15px 5px #000000", 
    boxShadow:" 5px 5px 15px 5px #000000"}}>
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
         
        }}
      >

        

        <Typography component="h1" variant="h2" sx={{ color: "#17365E ", textAlign: "center", fontSize: "25px", fontFamily: "Verdana", fontWeight: "bold" }}>
          Evento de poesía
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="carnet"
            label="Carnet"
            name="carnet"
            autoComplete="carnet"
            autoFocus
            variant="standard"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="nombre"
            label="Nombre"
            type="text"
            id="nombre"
            autoComplete="nombre"
            variant="standard"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="direccion"
            label="Direccion"
            type="text"
            id="direccion"
            autoComplete="direccion"
            variant="standard"
          />
          <FormControl 
          margin="normal"
          required
          fullWidth
          name="genero"
          label="Genero"
          id="genero"
          autoComplete="genero"
          variant="standard"
          >
          <InputLabel id="genero-label">Genero</InputLabel>
          <Select
          labelId="generolabel"
          id="genero"
          value={age}
          onChange={handleChange}
          label="genero"
          name="genero"
          >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="Masculino">Masculino</MenuItem>
          <MenuItem value="Femenino">Femenino</MenuItem>
          </Select>
          </FormControl>
          <TextField
            margin="normal"
            required
            fullWidth
            name="telefono"
            label="Telefono"
            type="text"
            id="telefono"
            autoComplete="telefono"
            variant="standard"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="techaNacimiento"
            label="ㅤㅤㅤㅤㅤㅤㅤㅤFecha de nacimiento"
            type="Date"
            id="techaNacimiento"
            autoComplete="techaNacimiento"
            variant="standard"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="carrera"
            label="Carrera"
            type="Text"
            id="carrera"
            autoComplete="carrera"
            variant="standard"
          />
          <FormControl 
          margin="normal"
          required
          fullWidth
          name="generoLiterario"
          label="generoLiterario"
          id="generoLiterario"
          autoComplete="generoLiterario"
          variant="standard"
          >
          <InputLabel id="generoLiterario-label2">Genero Literario</InputLabel>
          <Select
          labelId="generoLiterariolabel2"
          id="generoLiterario"
          value={genero}
          onChange={handleChange2}
          label="generoLiterario"
          name="generoLiterario"
          >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="epica">epica</MenuItem>
          <MenuItem value="lirica">lirica</MenuItem>
          <MenuItem value="dramatico">dramatico</MenuItem>
          </Select>
          </FormControl>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Enviar
          </Button>
        </Box>
      </Box>
      
      
    </Container>
  );
}

export default Formulario;




