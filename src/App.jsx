import './App.css';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import SelectCar from './pages/SelectCar';
import TryGlass from './pages/TryGlass';
import Header from './components/Header';

function App() {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path="/car-select">
                    <SelectCar />
                </Route>
                <Route path="/glass-try">
                    <TryGlass />
                </Route>
            </Switch>
            <footer className="p-3 bg-secondary text-center text-white">© 2021 Copyright: MDBootstrap.com</footer>
        </Router>
    );
}

export default App;
