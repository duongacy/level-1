import './App.css';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import SelectCar from './pages/SelectCar';
import TryGlass from './pages/TryGlass';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/Home';
import BookTicket from './pages/BookTicket';
import OTTPage from './pages/OTT';
import TodoListPage from './pages/TodoList';

function App() {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path="/" exact>
                    <HomePage />
                </Route>
                <Route path="/select-car">
                    <SelectCar />
                </Route>
                <Route path="/try-glass">
                    <TryGlass />
                </Route>
                <Route path="/book-ticket">
                    <BookTicket />
                </Route>
                <Route path="/ott">
                    <OTTPage />
                </Route>
                <Route path="/todo-list">
                    <TodoListPage />
                </Route>
            </Switch>
            <Footer />
        </Router>
    );
}

export default App;
