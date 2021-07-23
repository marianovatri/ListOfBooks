import { useEffect, useState } from 'react';




const Companies = () => {

    const [data, setData] = useState([]);
   
   useEffect(() => {
     fetch('https://fakerapi.it/api/v1/companies')
     .then(res => res.json())
       .then(res => {
       setData(res.data)
       console.log(res.data)});
     },
      []);
      
        return (
   
       
         
           
       <div className="App">
         <header className="Lista">
                   
                            
             <table>
             <thead>
                <tr>
                 <th>Name</th>
                 <th>Email</th>
                 <th>Vat</th>
                 <th>Phone</th>
                 <th>Country</th>
                 
               </tr>
             </thead> 
             <tbody>
               
             {data.map(({name, email, vat, phone,
              country}, index) => {
   
   return (
     <tr>
       <td>{name}</td>
       <td>{email}</td>
       <td>{vat}</td>
       <td>{phone}</td>
       <td>{country}</td>
       
                              
     </tr>
   ) } ) } 
             
               
             </tbody>
           </table>
                   
              
           </header>
           
       </div>
     
     );
    }
   
   export default Companies;