import {Container} from 'react-bootstrap';
import {Navbar} from 'react-bootstrap';
import {Nav} from 'react-bootstrap';

export const Header = () => {

    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">Pendu</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">Nouveau jeu</Nav.Link>
                        {/*<Nav.Link href="#pricing">Pricing</Nav.Link>*/}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}