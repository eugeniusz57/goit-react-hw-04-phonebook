import {  Label, Input,FormAddContact } from "components/ContactForm/ContactForm.styled";
import PropTypes from 'prop-types';

export const Filter = ({value, onChange}) => {
return (
    <FormAddContact >
    
    <Label htmlFor="idLabelSearch">Find contact by name</Label>
    <Input
    id="idLabelSearch"
      type="text"
      name="filter"
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      required
      value={value}
      onChange={onChange}
    />
     </FormAddContact>
)
}

Filter.protoTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}
