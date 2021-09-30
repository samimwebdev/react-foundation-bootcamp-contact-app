import React from 'react'
import axios from 'axios'

const initialState = {
  contacts: []
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'GET_CONTACTS':
      return {
        contacts: action.payload
      }
    case 'ADD_CONTACT':
      return {
        contacts: [...state.contacts, action.payload]
      }
    case 'UPDATE_CONTACT':
      const contactsWithUpdates = state.contacts.map(contact => {
        if (contact.id === +action.payload.id) {
          return {
            ...contact,
            ...action.payload
          }
        } else {
          return contact
        }
      })

      return {
        contacts: contactsWithUpdates
      }
    case 'DELETE_CONTACT':
      const contactsAfterDelete = state.contacts.filter(
        contact => contact.id !== +action.payload
      )
      return {
        contacts: contactsAfterDelete
      }

    default:
      return state
  }
}

export const ContactsContext = React.createContext()

export const ContactsProvider = props => {
  const [state, dispatch] = React.useReducer(reducer, initialState)

  React.useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URI}/contacts`)
      .then(({ data }) => {
        dispatch({ type: 'GET_CONTACTS', payload: data })
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <ContactsContext.Provider value={{ state, dispatch }}>
      {props.children}
    </ContactsContext.Provider>
  )
}
