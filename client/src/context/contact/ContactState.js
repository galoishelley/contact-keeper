import React, { useReducer } from 'react';
import axios from 'axios';
import { uuid } from 'uuidv4';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
} from '../types';

const ContactState = props => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: "grace m",
        email: 'gracemiao2017@gmail.com',
        phone: '0490459204',
        address: 'Sydney Olmpic Park 2127',
        type: 'personal'
      },
      {
        id: 2,
        name: "grace m2",
        email: 'gracemiao20172@gmail.com',
        phone: '0490459202',
        address: 'Sydney Olmpic Park 2127',
        type: 'personal'
      },
      {
        id: 3,
        name: "grace m3",
        email: 'gracemiao20173@gmail.com',
        phone: '0490459202',
        address: 'Sydney Olmpic Park 2127',
        type: 'professional'
      }
    ],
    current: null,
    filtered: null
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  //add contact
  const addContact = contact => {
    contact.id = uuid();
    dispatch({ type: ADD_CONTACT, payload: contact });
  };

  // Delete Contact
  const deleteContact = id => {
    dispatch({ type: DELETE_CONTACT, payload: id });
  };

  //Set Current Contact
  const setCurrent = contact => {
    dispatch({ type: SET_CURRENT, payload: contact });
  };

  //Clear Current Contact
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  //update Contact
  const updateContact = contact => {
    dispatch({ type: UPDATE_CONTACT, payload: contact });
  };

  //Filter Contacts
  const filterContact = text => {
    dispatch({ type: FILTER_CONTACTS, payload: text });
  };

  //Clear Filter Contact
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };



  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        filtered: state.filtered,
        addContact,
        deleteContact,
        setCurrent,
        clearCurrent,
        updateContact,
        filterContact,
        clearFilter
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
