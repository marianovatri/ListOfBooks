import { useEffect, useState } from 'react';




const Books = () => {

    const [name, setName] = useState([]);
   
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
               
             {name.map(({image,author, description, genre, isbn,
              published, publisher,title}, index) => {
   
   return (
     <tr>
       <td>
         <div> {author} </div>
        <div>  <img alt='author image'  className="Image" src={image}/> </div> 
       </td>

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
          
           
   
   
          
           
           </header>
           
       </div>
     
     );
    }
   
   export default Books;
   