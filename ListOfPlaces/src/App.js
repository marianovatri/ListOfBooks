import './App.css';
import datos from "./datos.json"




function App() {
  return (
    <div className="App">
      <header className="Lista">

        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Genre</th>
              <th>Published</th>
              <th>Publisher</th>
            </tr>
          </thead>
          <tbody>
          {datos.map(({title, author, genre, published, publisher}) => (
                            
              <tr>
                <td>{title}</td>
                <td>{author}</td>
                <td>{genre}</td>
                <td>{published}</td>
                <td>{publisher}</td>
                                                 
              </tr>
                                  
            
              )
          )
        }

          </tbody>
        </table>
       
      )
     
        </header>
    </div>
  );
}

export default App;
