
import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';
import { Customers } from './pages/Customers';

import { Home } from './pages/Home'
import TemplateDefault from './templates/Default'
import TemplatePage from './templates/Page'

export function App() {
  return (

    <Router>
      <TemplateDefault>
        <Switch>
          <Route path="/customers">
            <TemplatePage title="Clientes" Component={Customers} />
          </Route>
          <Route path="/">
            <TemplatePage title="Pagina Inicial" Component={Home} />
          </Route>
        </Switch>
      </TemplateDefault>
    </Router>


  )
}