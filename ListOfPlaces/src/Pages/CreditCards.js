

import { useEffect, useState } from 'react';




const CreditCards = () => {

    const [name, setName] = useState([]);
   
   useEffect(() => {
     fetch('https://fakerapi.it/api/v1/credit_cards')
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
                 <th>Type</th>
                 <th>Number</th>
                 <th>Expiration</th>
                 <th>Owner</th>
                 
               </tr>
             </thead> 
             <tbody>
               
             {name.map(({type, number, expiration, owner,
              }, index) => {
   
   return (
     <tr>
       <td>{type}</td>
       <td>{number}</td>
       <td>{expiration}</td>
       <td>{owner}</td>
      
       
                              
     </tr>
   ) } ) } 
               
             </tbody>
           </table>
          
           
   
   
          
           
           </header>
           
       </div>
     
     );
    }
   
   export default CreditCards;
   