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
        <Phonebook />
        <h2>Contacts</h2>
        <Filter value={this.state.filter} onChengeFilter={this.filterName} />
        <Contacts contacts={visibleContacts} deleteContact={this.delete} />
      </>
    );
  }
}
