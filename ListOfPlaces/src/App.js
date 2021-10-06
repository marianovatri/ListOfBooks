import './App.css';
import {BrowserRouter as Router,  Switch,  Route,} from "react-router-dom";
import Text from './Pages/Texts';
import Books from './Pages/Books';
import Navigation from './Pages/Navigation';
import Companies from './Pages/Companies';
import CreditCards from './Pages/CreditCards';
import Addresses from './Pages/Addresses';



const App = () => {


   
     return (

    
      <Router>

        <Navigation/>
        
    <div className="App">

      <header className="Lista">

        
        <Switch>


        <Route path="/addresses">
            
            <Addresses/>

        </Route>


        <Route path="/texts">
            
            <Text/>

        </Route>
          


        <Route path="/books">
        
            <Books/>

        </Route>

        <Route path="/creditCards">
        
         <CreditCards/>

        </Route>

        <Route path="/companies">
            
            <Companies/>

        </Route>


       
        </Switch>
        </header>
        
    </div>
    </Router>
  );
 }

export default App;
