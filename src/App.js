import './App.css'

//import components
import Starter from './components/Starter'
import {GlobalProvider} from "./context/GlobalState"

// import { Balance } from './components/Balance'
// import { Summary } from './components/Summary'
// import { History } from './components/History'
// import { AddTransaction } from './components/AddTransacrion'

function App() {
  return (
    <GlobalProvider>
      
      <Starter/>

    </GlobalProvider>
  );
}

export default App;
