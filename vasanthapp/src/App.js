import logo from './logo.svg';
import './App.css';
import Home from './Home';
import { useState } from 'react';

function App() {
  let firstname = "sanjay";
  //let email ="sanjay@gmail.com"
  const[email,setEmail] = useState('');
  const[phone,setPhone] = useState("")
  const validate = ()=>{
    if (email == ""){
      alert("empty");
    }else if (phone ==""){
      alert("mobile is empty")
    }else {
      alert("everything is fine")
    }

    }
  

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
       <h1>Name: {firstname}</h1> 
        <h1>Email: {email}</h1>
        <h1>mobile no: {phone}</h1>
        <div>
          <input type="text" onChange={(e) =>setEmail(e.target.value)}></input> <br></br>
          <input type="text" onChange={(p) =>setPhone(p.target.value)}></input> <br></br>
          <button onClick={() =>validate()}>click here</button>
          </div>
      
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        <div><Home/>
          </div>  
          Learn React

        </a>
      </header>
    </div>
  );
}

export default App;
