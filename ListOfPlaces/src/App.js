import { useEffect, useState } from 'react';
import './App.css';


const App = () => {

 const [name, setName] = useState(null);

useEffect(() => {
  fetch('https://fakerapi.it/api/v1/books')
  .then(res => res.json())
    .then(res => {
    setName(res.data)
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
          {name.map(({author, description, genre, isbn, published, publisher,title}, index) => {

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
       
      )
     
        </header>
    </div>
  );
 }

export default App;
