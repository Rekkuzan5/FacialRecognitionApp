import { Component } from 'react';
import Particles from 'react-tsparticles';
import Clarifai from 'clarifai';
import Navigation from './components/Navigation/Navigation';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import './App.css';

const app = new Clarifai.App({
  apiKey: "my-api-key",
 });

const particleOptions = {
  //id="tsparticles",
  //options: {
    background: {
      color: {
        value: "#202020",
      },
    },
    fpsLimit: 60,
    interactivity: {
      detectsOn: "canvas",
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
        onHover: {
          enable: true,
          mode: "grab",
        },
        resize: true,
      },
      modes: {
        bubble: {
          distance: 400,
          duration: 2,
          opacity: 0.8,
          size: 40,
        },
        push: {
          quantity: 0,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: "#FF0000",
      },
      links: {
        color: "#FF0000",
        distance: 250,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      collisions: {
        //enable: true,
      },
      move: {
        direction: "none",
        enable: true,
        outMode: "bounce",
        random: false,
        speed: 3,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          value_area: 800,
        },
        value: 40,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: "circle",
      },
      size: {
        random: true,
        value: 2,
      },
    },
    detectRetina: true,
  //}
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageURL: '',
    }
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onButtonSubmit = () => {
    this.setState({ imageURL: this.state.input })
    app.models
    .predict(
    Clarifai.FACE_DETECT_MODEL,
     // THE JPG
    this.state.input)
    .then((response) => {
      console.log(response.outputs[0].data.regions[0].region_info.bounding_box);
    })
    .catch((err) => {
      console.log(err);
    });
  }

  render() {
    return (
      <div className="App">
        <Particles  className='particles'
            params={particleOptions}
          />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
        <FaceRecognition imageURL={this.state.imageURL}/>
      </div>
      );
    }
}

export default App;
