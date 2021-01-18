import './App.css';
import Dashboard from './Componets/Dashboard/Dashboard'
import {team} from './Data.js'
function App() {
  return (
    <div className="App">
      <Dashboard team={team} /> 
    </div>
  );
}

export default App;
