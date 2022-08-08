import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePageCompound from './compounds/HomePageCompound'
import ProductPageCompound from './compounds/ProductPageCompound'
import PricingPlansPageCompound from './compounds/PricingPlansPageCompound'
import ContactPageCompound from './compounds/ContactPageCompound'
import DemoModePageCompound from './compounds/DemoModePageCompound'
import CheckoutFreePageCompound from './compounds/CheckoutFreePageCompound'
import CheckoutStandardPageCompound from './compounds/CheckoutStandardPageCompound'
import CheckoutPremiumPageCompound from './compounds/CheckoutPremiumPageCompound'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePageCompound />
          </Route>

          <Route path="/ProductPageCompound">
            <ProductPageCompound />
          </Route>

          <Route path="/PricingPlansPageCompound">
            <PricingPlansPageCompound />
          </Route>

          <Route path="/ContactPageCompound">
            <ContactPageCompound />
          </Route>

          <Route path="/DemoModePageCompound">
            <DemoModePageCompound />
          </Route>

          <Route path="/CheckoutFreePageCompound">
            <CheckoutFreePageCompound />
          </Route>

          <Route path="/CheckoutStandardPageCompound">
            <CheckoutStandardPageCompound />
          </Route>

          <Route path="/CheckoutPremiumPageCompound">
            <CheckoutPremiumPageCompound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
