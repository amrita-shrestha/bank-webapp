import { Redirect, Route, Switch } from 'react-router';

import NavBar from './components/Navbar';
import Home from './Pages/Home';
import OpenAccount from './Pages/OpenAccount';
import LoanSection from './Pages/LoanSection';
import './App.css';


function App() {
  return (
    <>
    <NavBar/>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/openaccount' component={OpenAccount} />
      <Route exact path='/loansection' component={LoanSection} />
      <Redirect to='/' />
    </Switch>
    </>
  )
}

export default App;
