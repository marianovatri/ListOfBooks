

import { useEffect, useState } from 'react';




const Addresses = () => {

    const [name, setName] = useState([]);
   
   useEffect(() => {
     fetch('https://fakerapi.it/api/v1/addresses')
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
                 <th>Street</th>
                 <th>Street Name</th>
                 <th>Building Number</th>
                 <th>City</th>
                 <th>Zip Code</th>
                 <th>Country</th>
                 <th>County Code</th>
                 <th>Latitude</th>
                 <th>Longitude</th>
                 
               </tr>
             </thead> 
             <tbody>
               
             {name.map(({street, streetName, buildingNumber, city, zipcode,
              country, county_code, latitude , longitude}, index) => {
   
   return (
     <tr>
       <td>{street}</td>
       <td>{streetName}</td>
       <td>{buildingNumber}</td>
       <td>{city}</td>
       <td>{zipcode}</td>
       <td>{country}</td>
       <td>{county_code}</td>
       <td>{latitude}</td>
       <td>{longitude}</td>

      
       
                              
     </tr>
   ) } ) } 
               
             </tbody>
           </table>
          
           
   
   
          
           
           </header>
           
       </div>
     
     );
    }
   
   export default Addresses;
   