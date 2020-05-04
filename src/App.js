import React from 'react';
import './App.css';
import QuoteCard from './components/QuoteCard';
import axios from 'axios';

const sampleSimpson = {
  character: "Homer Simpson",
  quote: "Shoplifting is a victimless crime, like punching someone in the dark.",
  image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185",
};

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      simpson: sampleSimpson
    };
    this.getSimpson = this.getSimpson.bind(this);
  }

  getSimpson(){
    axios.get('https://thesimpsonsquoteapi.glitch.me/quotes')
    .then(response => response.data)
    .then(data => {
      console.log(data);//Pour examiner les données recus
      this.setState({
        simpson: data[0],
      });
    });
  }


  render(){
    return (
      <div className="App">
        <QuoteCard simpson={this.state.simpson}/>
        <button type="button" onClick={this.getSimpson}>Appel API</button>
      </div>
    );
  };
}

export default App;
