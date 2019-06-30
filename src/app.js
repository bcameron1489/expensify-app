// install -> import -> use
import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import 'normalize.css/normalize.css'
import './styles/style.scss'

const ExpenseDashboardPage = () => (
  <div>
    this is from my dashboard component
  </div>
)

const AddExpensePage = () => (
  <div>
    this is from my add expense component
  </div>
)

const EditExpensePage = () => (
  <div>
    this is from my edit expense component
  </div>
)

const HelpPage = () => (
  <div>
    this is from my help component
  </div>
)

const NotFoundPage = () => (
  <div>
    404 Not found!
  </div>
)


const routes = (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={ExpenseDashboardPage} exact={true} />
      <Route path="/create" component={AddExpensePage} />
      <Route path="/edit" component={EditExpensePage} />
      <Route path="/help" component={HelpPage} />
      <Route component={NotFoundPage}/>
    </Switch>
  </BrowserRouter>
)

ReactDOM.render(routes, document.getElementById('app'))
