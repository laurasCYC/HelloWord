import React from 'react';
import ReactDOM from 'react-dom';
import './foundation.min.css';
import { Button } from 'react-foundation-components/lib/global/button'
import App from './App.js'
class Ejemplo extends React.Component {
constructor(){
super();
this.state = {resta: 0, x: 0, y: 0};
this.botonPulsado = this.botonPulsado.bind(this);
this.handleChange = this.handleChange.bind(this);
this.handleChange2 = this.handleChange2.bind(this);
}
handleChange(e) {
this.setState({x: parseInt(e.target.value)})
}
handleChange2(e) {
this.setState({y: parseInt(e.target.value)})
}
botonPulsado(e){
this.setState({resta: this.state.x - this.state.y})
}
render() {
return (
<div>
<input type="text" onChange={ this.handleChange } value={this.state.x}/>
<input type="text" onChange={ this.handleChange2 } value={this.state.y}/>
<Button color="success" onClick={this.botonPulsado}>Restar</Button> <br/>
<input type="text" value={this.state.resta}></input>
</div>
);
}
}
ReactDOM.render(
<div><Ejemplo /> </div>,
document.getElementById('root')
);