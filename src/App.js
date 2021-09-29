import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Contacts from './pages/Contacts'
import Nav from './components/Nav'
import ContactDetails from './pages/ContactDetails'
import Home from './pages/Home'
import About from './pages/About'
import AddContact from './pages/AddContact'
import EditContact from './pages/EditContact'
import NotFound from './pages/NotFound'

import './style.css'

const App = () => {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/add-contact' component={AddContact} />
        <Route path='/contacts/:id' component={ContactDetails} />
        />
        <Route path='/edit/:id' component={EditContact} />
        <Route path='/contacts' component={Contacts} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  )
}

export default App
