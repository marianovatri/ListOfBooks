import {
   Navbar, Nav, Button,
} from 'react-bootstrap'
import { Link } from 'react-router-dom'




function Navigation () {


    return (
        
        <>

       

  <Navbar className="mb-3" bg="dark" variant="ligth" expand="lg">
  <Navbar.Brand href="/">Clear All</Navbar.Brand>

  <Navbar.Collapse id="basic-navbar-nav">

  <Button>
    <Nav className="mr-auto">

      <Link className="nav-link" to="./addresses">Addresses</Link>
      
      
    </Nav>
  </Button>

  <Button>
    <Nav className="mr-auto">

      
      <Link className="nav-link" to="./books">Books</Link>
      
         
    </Nav>
    </Button>

    <Button>
    <Nav className="mr-auto">

      
     
      <Link className="nav-link" to="./companies">Companies</Link>
         
    </Nav>
    </Button>

    <Button>
    <Nav className="mr-auto">

      <Link className="nav-link" to="./creditcards">Credit Cards</Link>
      
      
    </Nav>
  </Button>


  <Button>
    <Nav className="mr-auto">

      <Link className="nav-link" to="./texts">Texts</Link>
      
      
    </Nav>
  </Button>

   

   
    
    
      

  </Navbar.Collapse>
        </Navbar>
       

        </>
    )
}




export default (Navigation)
