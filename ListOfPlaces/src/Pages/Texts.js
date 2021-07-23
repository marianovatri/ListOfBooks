import { useEffect, useState } from 'react';



const Text = () => {

  const [text, setText] = useState([]);

  useEffect(() => {
    fetch('https://fakerapi.it/api/v1/texts')
    .then(res => res.json())
      .then(res => {
      setText(res.data)
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
                <th>Content</th>
                <th>Genre</th>
                <th>Title</th>
                
              </tr>
            </thead> 
            <tbody>
              
            
  
   {text.map(({author, content, genre, title}, index) => {

return (
  <tr>
    <td>{author}</td>
    <td>{content}</td>
    <td>{genre}</td>
    <td>{title}</td>
   
                           
  </tr>
) } ) } 
 
              
            </tbody>
          </table>
         
           
  
  
         
          
          </header>
          
      </div>
     
    );
   }


export default Text;

