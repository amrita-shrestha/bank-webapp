import { Redirect, Route, Switch } from 'react-router';

import Home from '../Pages/Home';
import OpenAccount from '../Pages/OpenAccount';
import LoanSection from '../Pages/LoanSection';
import EmiCalculator from '../components/EmiCalculator';

const Webpages = () =>{
    return(
      <>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/openaccount' component={OpenAccount} />
          <Route exact path='/loansection' component={LoanSection} />
          <Route exact path='/emicalculator' component={EmiCalculator} />
          <Redirect to='/' />
        </Switch>
      </>
    )
}

export default Webpages;