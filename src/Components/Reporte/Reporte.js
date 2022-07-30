import * as React from 'react';
import axios from 'axios';

export default class PersonList extends React.Component {
    state = {
      forms: []
    }
  
    componentDidMount() {
      axios.get(`https://formulario-poesia.herokuapp.com/api/VerFormularios`)
        .then(res => {
          const forms = res.data;
          this.setState({ forms });
        })
    }
  
    render() {
      return (
        <ul>
          { this.state.persons.map(forms => <li>{forms.nombre}</li>)}
        </ul>
      )
    }
  }