// import Products from './containers/products/Products'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import NotFound from './containers/not-found/NotFound';
import Menu from "./containers/menu/Menu";
import Login from './containers/login/Login';
import Home from './containers/home/Home';
import Create from './containers/create/Create';
import PrivateRoute from './components/privateRoute/PrivateRoute';
import Remove from './components/remove/Remove';
import Edit from './containers/edit/Edit';
import Detail from './components/detail/Detail';
import ProductContextManager from './contexts/ProductContextManager';
import LoginContextManager from './contexts/LoginContextManager';

//https://github.com/harove/desafioHooksAndContext
//https://github.com/harove/desafioHooksAndContext.git

// Name: Settings Sync
// Id: shan.code-settings-sync
// Description: Synchronize Settings, Snippets, Themes, File Icons, Launch, Keybindings, Workspaces and Extensions Across Multiple Machines Using GitHub Gist.
// Version: 3.4.3
// Publisher: Shan Khan
// VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=Shan.code-settings-sync


function App() {
  return (
    <div className="container">
      <LoginContextManager>
        <ProductContextManager>
          <Router>
            <Menu />
            <Switch>
              <Route path="/" exact>
                <Login />
              </Route>
              <Route path="/list" exact>
                <Home />
              </Route>
              <Route path="/create" exact>
                <PrivateRoute path="/create" exact component={Create} />
              </Route>
              <Route path="/remove/:id" exact>
                <PrivateRoute path="/remove/:id" exact component={Remove} />
              </Route>
              <Route path="/edit/:id" exact>
                <PrivateRoute path="/edit/:id" exact component={Edit} />
              </Route>
              <Route path="/detail/:id" exact>
                <Detail />
              </Route>
              <Route path="*" exact>
                <NotFound />
              </Route>
            </Switch>
          </Router>
        </ProductContextManager>
      </LoginContextManager>


    </div>

  );
}

export default App;
