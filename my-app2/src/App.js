import React from "react";
import './App.css';
import {Button} from 'react-bootstrap'
class App extends React.Component {
  person = {
    name:"Haythem Tayech",
    bio:"etudiant en gomycode",
    profession:"develloper web",
    image:<img src="/Images/dev.jpg" alt="logo"style={{width:200,height:200}}/>,
    show:true
  };
  
  render() {
    return <div>
        <h2> {this.person.name}</h2>
        <h2> {this.person.bio}</h2>
        <h2> {this.person.profession}</h2>
        <h2 > {this.person.image}</h2>
      <Button variant="primary" >clickMe</Button>{' '}
           </div>
    
  }
 }
 export default App;
