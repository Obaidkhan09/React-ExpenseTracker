import './App.css'

//import components
import { Header } from './components/Header'
import { Balance } from './components/Balance'
import { Summary } from './components/Summary'
import { History } from './components/History'
import { AddTransaction } from './components/AddTransacrion'
import { globalPovider } from './context/GlobalState'

function App() {
  return (
    <globalPovider>
      <Header/>
      <div className = "container" >
        <Balance/>
        <Summary/>
        <History/>
        <AddTransaction/>
      </div>
    </globalPovider>
  );
}

export default App;
