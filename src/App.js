import './App.css'

//import components
import { Header } from './components/Header'
import { Balance } from './components/Balance'
import { Summary } from './components/Summary'
import { History } from './components/History'
import { AddTransaction } from './components/AddTransacrion'

function App() {
  return (
    <div>
      <Header/>
      <div className = "container" >
        <Balance/>
        <Summary/>
        <History/>
        <AddTransaction/>
      </div>
    </div>
  );
}

export default App;
