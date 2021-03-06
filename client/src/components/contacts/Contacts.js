import React, { Fragment, useContext } from 'react';
import {
    CSSTransition,
    TransitionGroup,
} from 'react-transition-group';
import ContactItem from './ContactItem';
import ContactContext from '../../context/contact/contactContext';


const Contacts = () => {
    const contactContext = useContext(ContactContext);

    const { contacts, filtered } = contactContext;

    if (contacts.length === 0) {
        return <h4>Please add a contact</h4>
    }
    console.log("000000000000000begin");
    console.log(contacts);
    console.log("000000000000000end");
    return (
        <div>
            <Fragment>
                <TransitionGroup>
                    {filtered !== null
                        ? filtered.map(contact => (
                            <CSSTransition key={contact.id} timeout={1000} classNames="item">
                                <ContactItem contact={contact} />
                            </CSSTransition>
                        ))
                        : contacts.map(contact => (
                            <CSSTransition key={contact.id} timeout={1000} classNames="item">
                                <ContactItem contact={contact} />
                            </CSSTransition>
                        ))}
                </TransitionGroup>
            </Fragment>
        </div>
    )
}

export default Contacts;
