import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: '',
    };
  }

  analizarImagen() {
    const url = this.state.url;
    // Aquí va el código para analizar la imagen
  }

  generarImagen() {
    // Aquí va el código para generar la imagen
  }

  render() {
    return (
      <div>
        <h1>GUI Simple</h1>
        <input
          type="text"
          id="url"
          placeholder="Introduce la URL de la imagen"
          value={this.state.url}
          onChange={(event) => this.setState({ url: event.target.value })}
        />
        <button onClick={() => this.analizarImagen()}>Analizar Imagen</button>
        <button onClick={() => this.generarImagen()}>Generar Imagen</button>
      </div>
    );
  }
}

export default App;
