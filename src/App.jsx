import './App.css'
import Column from "./components/Column.jsx";

function App() {

   return (
       <div className="app">
          <div className="column_Container">
             <Column state="PLANNED"/>
             <Column state="ONGOING"/>
             <Column state="DONE"/>
          </div>
       </div>
   )
}

export default App
