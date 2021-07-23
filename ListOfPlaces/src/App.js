import './App.css';
import {BrowserRouter as Router,  Switch,  Route,} from "react-router-dom";
import Text from './Pages/Texts';
import Books from './Pages/Books';
import Navigation from './Pages/Navigation';
import Companies from './Pages/Companies';



const App = () => {


   
     return (

    
      <Router>

        <Navigation/>
        
    <div className="App">

      <header className="Lista">

        
        <Switch>




          <Route path="/texts">
            
            <Text/>

          </Route>
          


          <Route path="/books">
        
            <Books/>

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
