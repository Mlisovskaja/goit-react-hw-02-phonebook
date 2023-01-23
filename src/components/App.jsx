import { Component } from 'react';
import { nanoid } from 'nanoid';

import Phonebook from './Phonebook/Phonebook';
import Contacts from './Contacts/Contacts';
import Filter from './Contacts/Filter';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  onSubmitHendler = data => {
    const contact = {
      id: nanoid(),
      name: data.name,
      number: data.number,
    };

    const contactName = [];

    for (const contact of this.state.contacts) {
      contactName.push(contact.name);
    }

    if (contactName.includes(contact.name)) {
      alert(`${contact.name} is already in contacts list`);
      return;
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  filterName = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  delete = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contactId !== contact.id),
    }));
  };

  render() {
    const filterNormilized = this.state.filter.toLowerCase().trim();
    const visibleContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterNormilized)
    );

    return (
      <>
        <h1>Phonebook</h1>
        <Phonebook onSubmit={this.onSubmitHendler} />
        <h2>Contacts</h2>
        <Filter value={this.state.filter} onChengeFilter={this.filterName} />
        <Contacts contacts={visibleContacts} deleteContact={this.delete} />
      </>
    );
  }
}
