import '../App.css';
import {Component} from 'react';
import logo from '../logo.png'

class Topo extends Component{
  
  render(){
  return (
    
  <div className="App">
    <header>
    <div class="logo">
        <img src={logo} alt="Logo do Site" />
    </div>
    <h1>PORTAL NOTÍCIAS</h1>
    </header>
  
  </div>
  );
  }
 } 
 
export default Topo; 
