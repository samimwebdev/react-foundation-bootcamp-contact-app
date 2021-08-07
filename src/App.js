import React, { Component } from 'react'
import Contacts from './Contacts'
import Nav from './Nav'

export default class App extends Component {
  render() {
    return (
      <>
        <Nav />
        <Contacts />
      </>
    )
  }
}
