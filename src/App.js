import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import axios from 'axios'

import Contacts from './pages/Contacts'
import Nav from './components/Nav'
import ContactDetails from './pages/ContactDetails'
import Home from './pages/Home'
import About from './pages/About'
import AddContact from './pages/AddContact'

import './style.css'

export default class App extends Component {
  state = {
    contacts: []
  }

  componentDidMount() {
    axios
      .get('http://localhost:4000/contacts')
      .then(({ data }) => {
        this.setState({
          contacts: data
        })
      })
      .catch(err => console.log(err))
  }

  render() {
    const { contacts } = this.state
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
          <Route path='/contacts'>
            <Contacts contacts={contacts} />
          </Route>
        </Switch>
      </Router>
    )
  }
}
