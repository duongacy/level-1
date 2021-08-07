import './App.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import SelectCar from './pages/SelectCar';
import TryGlass from './pages/TryGlass';

function App() {
    return (
        <Router>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home" className="fw-bold text-warning">
                        <small style={{ fontSize: '9px' }}>Anti</small>{' '}
                        <span className="text-danger">Cybersoft</span>{' '}
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <NavLink
                            to="/car-select"
                            className="nav-link"
                            activeClassName="text-white fw-bold"
                        >
                            Select car
                        </NavLink>
                        <NavLink
                            to="/glass-try"
                            className="nav-link"
                            activeClassName="text-white fw-bold"
                        >
                            Try glass
                        </NavLink>
                    </Nav>
                </Container>
            </Navbar>

            <Switch>
                <Route path="/car-select">
                    <SelectCar />
                </Route>
                <Route path="/glass-try">
                    <TryGlass />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
