import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import axios from 'axios'

import Contacts from './pages/Contacts'
import Nav from './components/Nav'
import ContactDetails from './pages/ContactDetails'
import Home from './pages/Home'
import About from './pages/About'
import AddContact from './pages/AddContact'
import EditContact from './pages/EditContact'

import './style.css'

const App = () => {
  const [state, setState] = React.useState({
    contacts: []
  })

  React.useEffect(() => {
    axios
      .get('http://localhost:4000/contacts')
      .then(({ data }) => {
        setState({
          contacts: data
        })
      })
      .catch(err => console.log(err))
  }, [])

  const { contacts } = state
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/add-contact'>
          <AddContact />
        </Route>
        <Route path='/contacts/:id'>
          <ContactDetails contacts={contacts} />
        </Route>
        <Route path='/edit/:id'>
          <EditContact />
        </Route>
        <Route path='/contacts'>
          <Contacts contacts={contacts} />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
