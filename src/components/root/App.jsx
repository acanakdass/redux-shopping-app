import Dashboard from "./Dashboard.js";
import { Container } from 'reactstrap';
import { Route, Switch } from 'react-router-dom'
import NavigationBar from '../navbar/NavigationBar';
import cartSummary from "../cart/cartSummary.jsx";

function App() {
  return (
    <div>
      <NavigationBar />
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/products" exact component={Dashboard} />
        <Route path="/cart" exact component={cartSummary} />

      </Switch>

    </div>
  );
}

export default App;
