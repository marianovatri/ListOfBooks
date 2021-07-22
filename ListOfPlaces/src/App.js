import { useEffect, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,} from "react-router-dom";


const App = () => {

 const [name, setName] = useState();

useEffect(() => {
  fetch('https://fakerapi.it/api/v1/books')
  .then(res => res.json())
    .then(res => {
    setName(res.data)
    console.log(res.data)});
  },
   []);
   
     return (
      <Router>
    <div className="App">
      <header className="Lista">
        <Switch>
          <Route path="/books">
          <table>
          <thead>
             <tr>
              <th>Author</th>
              <th>Description</th>
              <th>Genre</th>
              <th>isbn</th>
              <th>Published</th>
              <th>Publisher</th>
              <th>Title</th>
            </tr>
          </thead> 
          <tbody>
            
          {name.map(({author, description, genre, isbn,
           published, publisher,title}, index) => {

return (
  <tr>
    <td>{author}</td>
    <td>{description}</td>
    <td>{genre}</td>
    <td>{isbn}</td>
    <td>{published}</td>
    <td>{publisher}</td>
    <td>{title}</td>
                           
  </tr>
) } ) } 
            
          </tbody>
        </table>
       
         </Route>


         <Route path="/">
        <h3> Pagina de inicio</h3>
        
         </Route>
        </Switch>
        </header>
        
    </div>
    </Router>
  );
 }

export default App;
