import React, { useContext } from 'react'
import ContactContext from '../../context/contact/contactContext';

const ContactItem = ({ contact }) => {

    const contactContext = useContext(ContactContext);
    const { deleteContact, setCurrent, clearCurrent } = contactContext;

    const { id, name, email, phone, address, type } = contact;

    const onDelete = () => {
        deleteContact(id);
        clearCurrent();
    }

    return (
        <div className='card bg-light'>
            <h3 className="text-dark text-left">
                {name}{' '}
                <span style={{ float: 'right' }}>
                    <span className={'badge ' + (type === 'professional' ? 'badge-success' : 'badge-dark')}>
                        {type.charAt(0).toUpperCase() + type.slice(1)}</span>
                </span>
            </h3>
            <ul className="list">
                {email && (
                    <li>
                        <i className="fa fa-envelope-open">
                            {' '}{email}
                        </i>
                    </li>
                )}
                {phone && (
                    <li>
                        <i className="fa fa-phone">
                            {' '}{phone}
                        </i>
                    </li>
                )}
                {address && (
                    <li>
                        <i className="fas fa-map-pin">
                            {' '}{address}
                        </i>
                    </li>
                )}
                <p>
                    <button className="btn btn-dark btn sm" onClick={() => setCurrent(contact)}>Edit</button>
                    <button className="btn btn-danger btn sm" onClick={onDelete}>Delete</button>
                </p>
            </ul>
        </div>
    )
}

// ContactItem.propTypes = {
//     contact: PropTypes.object.isRequired,
// }

export default ContactItem;
