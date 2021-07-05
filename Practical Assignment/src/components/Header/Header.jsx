import { Container, Navbar, Button, Nav, NavDropdown } from "react-bootstrap";
import "./Header.css";
import "bootstrap/dist/css/bootstrap.css";

const Header = () => {
  return (
    <Navbar className="headerClass">
      <Container fluid>
        <Navbar.Brand href="#" className="navBrand pl-md-2 brand">
          LifeSum
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mr-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">Features</Nav.Link>
            <Nav.Link href="#action2">Articles</Nav.Link>
          </Nav>
          <div className="btnTestdiv mr-md-5">
            <NavDropdown title="EN" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">English</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Italian
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
                Spanish
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
                German
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
                Japanese
              </NavDropdown.Item>
            </NavDropdown>
          </div>
            <Nav.Link href="#" disabled>
              Login
            </Nav.Link>
            <Button className="btnTest px-5">
              <b>Sign Up</b>
            </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
