import { Container } from "reactstrap";
import Dashboard from "./Dashboard";
import Navi from "../navi/Navi";
import { Route, Switch } from "react-router";
import CartDetail from "../cart/CartDetail";
import AddOrUpdateProduct from "../products/AddOrUpdateProduct";
import NotFound from "../common/NotFound";

function App() {
  return (
    <div>
      <Container>
        <Navi />
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/product" exact component={Dashboard} />
          <Route path="/saveproduct" exact component={AddOrUpdateProduct} />
          <Route path="/saveproduct/:productId" exact component={AddOrUpdateProduct} />
          <Route path="/cart" exact component={CartDetail} />
          <Route exact component={NotFound} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;
