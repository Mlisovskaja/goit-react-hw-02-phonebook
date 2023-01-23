import PropTypes from 'prop-types';

import styles from './contacts.module.css';

const Contacts = ({ contacts, deleteContact }) => {
  const elements = contacts.map(contact => (
    <li key={contact.id}>
      {contact.name}: {contact.number}
      <button
        className={styles.btn}
        onClick={() => {
          deleteContact(contact.id);
        }}
      >
        Delete
      </button>
    </li>
  ));
  return <ul className={styles.list}>{elements}</ul>;
};

export default Contacts;

Contacts.propType = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      number: PropTypes.number,
      id: PropTypes.string,
    })
  ),
};
