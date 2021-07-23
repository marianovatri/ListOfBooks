import {
   Navbar, Nav,  
} from 'react-bootstrap'
import { Link } from 'react-router-dom'




function Navigation () {


    return (
        
        <>

       

  <Navbar className="mb-3" bg="dark" variant="ligth" expand="lg">
  <Navbar.Brand href="/">Clear All</Navbar.Brand>

  <Navbar.Collapse id="basic-navbar-nav">

    <Nav className="mr-auto">

      <Link className="nav-link" to="./texts">Texts</Link>
      
      
    </Nav>

    
    <Nav className="mr-auto">

      
     
      <Link className="nav-link" to="./companies">Companies</Link>
         
    </Nav>
    
     
    <Nav className="mr-auto">

      
      <Link className="nav-link" to="./books">Books</Link>
      
         
    </Nav>
      

  </Navbar.Collapse>
        </Navbar>
       

        </>
    )
}




export default (Navigation)
