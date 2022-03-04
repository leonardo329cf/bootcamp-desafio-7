import Navbar from 'components/Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from 'pages/Home';
import Catalog from 'pages/Catalog';


const Routes = () => {
  return (
    <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/products" exact>
            <Catalog />
          </Route>
        </Switch>
    </BrowserRouter>
  );
};

export default Routes;
