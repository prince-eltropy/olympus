import 'antd/dist/antd.css';
import './assets/css/App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { MainRoutes } from './utils/routes/Routes';

function App() {
  return (
    <>
      <div id="App ">
        <Router>
          <Switch>
            {MainRoutes.map((route, key) => (
              <Route
                key={key}
                path={route.path}
                component={route.component}
                exact={route.exact}
              />
            ))}
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
