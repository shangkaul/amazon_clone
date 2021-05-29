// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './components/Home/Home';
import { Header } from './components/Header/Header';

function App() {
  return(
    <Router>
    <Route path="/">
            <Header />
            <Home />
    </Route>
    </Router>
  );
 
}

export default App;
