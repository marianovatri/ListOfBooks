import { useEffect, useState } from 'react';
import './App.css';
//import datos from "./datos.json"



const App = () => {

  const [name, setName] = useState(null);

useEffect(() => {
  fetch('https://fakerapi.it/api/v1/books')
  .then(res => res.json())
  
  .then(res => {
    setName(res.data.name)
    console.log(res.data)});
  },
   []);
  
    return (
    <div className="App">
      <header className="Lista">

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
         
                            
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                                                 
              </tr>
                                                     

          </tbody>
        </table>
       
      )
     
        </header>
    </div>
  );
 }

export default App;
