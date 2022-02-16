import React, {Component} from "react";
import logo from './logo.svg';
import './App.css';
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080/api/v1/student/"
})




class App extends Component{

  state = {

    personen: []
  }

  constructor() {
    super();
    this.setState({personen : null})
  }

  render() {
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <button onClick={() => {api.get('/').then( res => {
                console.log(res.data)
                this.setState({personen : res.data})
              })
            }}> Klik hier </button>
            <h2>
              {this.state.personen.map(persoon => <h3 key={persoon.id}> {persoon.id} {persoon.name} {persoon.email } </h3>)}
            </h2>
          </header>
        </div>
    );
  }


}

export default App;
