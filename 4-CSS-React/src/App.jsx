import './App.css'
import MyComponent from './components/MyComponent'
import {useState} from "react";
import Title from './components/Title.jsx';

function App() {

  const n = 15;
  const [name] = useState("Johan");
  const redTitle = true;

  return (
    <div className="App">
      {/* CSS Global */}
      <h1>React com CSS</h1>
      {/* CSS de componente */}
      <MyComponent />
      <p>Paragrafo do App.js</p>
      {/* Inline CSS */}
      <p style={{ 
          color: "blue", 
          padding: "25px", 
          borderTop: "2px solid red" 
        }}
      >Este elemento foi utilizado de forma inline</p>

      <p style={{ 
          color: "blue", 
          padding: "25px", 
          borderTop: "2px solid red" 
        }}
      >Este elemento foi utilizado de forma inline</p>
      {/* CSS Inline dinamico */}
      <h2 style={n < 10 ? {color: "purple"} : {color:"gold"}}>CSS dinamico</h2>
      <h2 style={n > 10 ? {color: "purple"} : {color:"gold"}}>CSS dinamico</h2>
      <h2 style={name === "Johan" ? {color: "green", backgroundColor: "#000"} : null}>Teste nome</h2>
      {/* Classe dinamica */}
      <h2 className={redTitle ? "red-title" : "title"}>Este titulo vai ter classe dinamica</h2>
      {/* CSS Modules */}
      <Title />
      <h2 className="my_title">Testando</h2>
    </div>
  )
}

export default App
