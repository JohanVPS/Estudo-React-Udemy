
import './App.css'
import React from './assets/react.svg'
import ConditionalRender from './components/ConditionalRender'
import ListRender from './components/ListRender'
import ManageData from './components/ManageData'

function App() {

  return (
    <div className="App">
      <h1>Avançando em React</h1>
      {/*Imagem em public*/}
      <div>
        <img src="/vite.svg" alt="Vite" />
      </div>
      {/* Imagem em Assets */}
      <div>
        <img src={React} alt="React" />
      </div>
      <ManageData/>
      <ListRender/>
      <ConditionalRender/>
    </div>
  )
}

export default App
