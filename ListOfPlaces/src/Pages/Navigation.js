import {
   Navbar, Nav, Button,
} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';




function Navigation () {


    return (
        
        <>


<Navbar bg="dark" variant="dark">
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
