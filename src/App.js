import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePageCompound from './compounds/HomePageCompound'
import ProductPageCompound from './compounds/ProductPageCompound'
import PricingPlansPageCompound from './compounds/PricingPlansPageCompound'
import ContactPageCompound from './compounds/ContactPageCompound'
import DemoModePageCompound from './compounds/DemoModePageCompound'

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
        </Switch>
      </Router>
    </div>
  );
}

export default App;
