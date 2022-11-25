import { useState } from 'react';
import {
  FormAddContact,
  Label,
  Input,
  ButtonSubmit,
} from './ContactForm.styled';
import PropTypes from 'prop-types';

export function ContactForm({ onSubmitDate }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const hendleNameChange = e => {
    const { name, value } = e.target;
    if (name === 'name') {
      setName(value);
      return;
    }
    if (name === 'number') {
      setNumber(value);
    }
  };

  const Clear = () => {
    setName('');
    setNumber('');
  };

  const hendlOnSubmit = e => {
    e.preventDefault();
    onSubmitDate({ name, number });
    Clear();
  };

  return (
    <FormAddContact onSubmit={hendlOnSubmit}>
      <Label htmlFor="idLabelName">Name</Label>
      <Input
        id="idLabelName"
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={name}
        onChange={hendleNameChange}
      />
      <Label htmlFor="idLabelNumber">Number</Label>
      <Input
        id="idLabelNumber"
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        value={number}
        onChange={hendleNameChange}
      />

      <ButtonSubmit type="submit"> Add contact </ButtonSubmit>
    </FormAddContact>
  );
}

ContactForm.propTypes = { onSubmit: PropTypes.func };
