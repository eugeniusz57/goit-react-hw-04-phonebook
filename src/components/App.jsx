import { useState, useEffect } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Title, TitleSeccond } from './App.styled';

import { nanoid } from 'nanoid';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList ';

const LS_KEY = 'contacts';

export function App() {
  const [contacts, setContacts] = useState(
    () =>
      JSON.parse(window.localStorage.getItem(LS_KEY)) ?? [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ]
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem(LS_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const formSubmitHandler = data => {
    const { name, number } = data;
    if (
      contacts.find(
        contact =>
          contact.name.toLowerCase() === name.toLowerCase() ||
          contact.number === number
      )
    ) {
      return alert(`${name} or number: ${number} is alredy in contact`);
    }
    setContacts([...contacts, { id: nanoid(), name, number }]);
  };

  // const idLabelName = nanoid();
  // const idLabelNumber = nanoid();
  // const idLabelSearch = nanoid();

  const findContact = () => {
    const toLowerFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(toLowerFilter)
    );
  };

  const onChangeFilter = e => setFilter(e.target.value);

  const onDeleteElem = contactId =>
    setContacts(contacts.filter(contact => contact.id !== contactId));

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 18,
        color: '#010101',
      }}
    >
      <Title>Phonebook</Title>
      <ContactForm onSubmitDate={formSubmitHandler} />
      <TitleSeccond>Contacts</TitleSeccond>
      <Filter value={filter} onChange={onChangeFilter} />

      {contacts.length > 0 ? (
        <ContactList Array={findContact()} onDelete={onDeleteElem} />
      ) : (
        <p>You don't have any contact</p>
      )}
    </div>
  );
}
