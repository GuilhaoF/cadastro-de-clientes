import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';


import CustomersList from './pages/Customers/List';
import Home from './pages/Home'
import CustomersRegister from './pages/customers/Register'

import TemplateDefault from './templates/Default'
import TemplatePage from './templates/Page'

export function App() {
  return (

    <Router>
      <TemplateDefault>
        <Switch>
        <Route path="/customers/add">
            <TemplatePage title="Cadastro de Clientes" Component={CustomersRegister} />
          </Route>
          <Route path="/customers">
            <TemplatePage title="Clientes" Component={CustomersList} />
          </Route>
          <Route path="/">
            <TemplatePage title="Pagina Inicial" Component={Home} />
          </Route>

        </Switch>
      </TemplateDefault>
    </Router>


  )
}