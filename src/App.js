import { Component } from 'react';
import Particles from 'react-tsparticles';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import './App.css';



class App extends Component {
  constructor(props) {
    super(props);

    this.particlesInit = this.particlesInit.bind(this);
    this.particlesLoaded = this.particlesLoaded.bind(this);
  }

  particlesInit(main) {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  }

  particlesLoaded(container) {
    console.log(container);
  }

  render() {
    return (
      <div className="App">
        <Particles  className='particles'
            id="tsparticles"
            init={this.particlesInit}
            loaded={this.particlesLoaded}
            options={{
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
                  value: 30,
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
            }}
          />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm />
          {/*<FaceRecognition />*/}
      </div>
      );
    }
}

export default App;
