import {Container, Nav, Navbar} from "react-bootstrap";
import {Link, useNavigate} from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand onClick={() => navigate("/")}>Home</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link onClick={() => navigate(-1)}>뒤로가기</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="/test">테스트</Nav.Link>
          <Link to="/test">테스트2</Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
