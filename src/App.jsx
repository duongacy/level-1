import './App.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import CarSelect from './pages/CarSelect';
import GlassTry from './pages/GlassTry';

function App() {
	return (
		<Router>
			<Navbar bg="dark" variant="dark">
				<Container>
					<Navbar.Brand href="#home" className="fw-bold text-warning"><small style={{fontSize:"9px"}}>Anti</small> <span className="text-danger">Cybersoft</span> </Navbar.Brand>
					<Nav className="me-auto">
						<NavLink
							to="/car-select"
							className="nav-link"
							activeClassName="text-white fw-bold"
						>
							Car select
						</NavLink>
						<NavLink
							to="/glass-try"
							className="nav-link"
							activeClassName="text-white fw-bold"
						>
							Glass try
						</NavLink>
					</Nav>
				</Container>
			</Navbar>

			<div className="container">
				<Switch>
					<Route path="/car-select">
						<CarSelect />
					</Route>
					<Route path="/glass-try">
						<GlassTry />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
