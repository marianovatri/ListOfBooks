import './App.css';
import {BrowserRouter as Router,  Switch,  Route,} from "react-router-dom";
import Text from './Texts';
import Books from './Books';



const App = () => {


   
     return (

    
      <Router>
        
    <div className="App">

      <header className="Lista">

        
        <Switch>


          <Route path="/texts">
            
            <Text/>

          </Route>
          


          <Route path="/books">
        
            <Books/>

         </Route>


       
        </Switch>
        </header>
        
    </div>
    </Router>
  );
 }

export default App;
