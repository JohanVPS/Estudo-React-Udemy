//components
import FirsComponent from './components/FirstComponent'
import TemplateExpressions from './components/TemplateExpressions'
import MyComponent from './components/MyComponent'
import Events from './components/Events'

//styles / CSS
import './App.css'

function App() {

  return (
    <div className="App">
      <h1>Fundamentos React</h1>
      <FirsComponent/>
      <TemplateExpressions/>
      <MyComponent/>
      <Events/>
    </div>
  )
}

export default App
