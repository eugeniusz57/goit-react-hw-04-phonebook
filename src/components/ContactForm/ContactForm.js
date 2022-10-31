
import React from "react";
import {FormAddContact, Label, Input, ButtonSubmit } from "./ContactForm.styled";

export class ContactForm extends React.Component{
    state = {
        name: '',
        number: ''
      }
      hendleNameChange = e =>{
        const {name, value} = e.target;
        this.setState({[name]: value})
      }
    
      Clear = () =>{
        this.setState({
          name: '',
          number: ''
        })
      }

      hendlOnSubmit = (e) =>{
        e.preventDefault();
this.props.onSubmitDate(this.state)
        this.Clear();
      }



render(){
    return (
<FormAddContact onSubmit={this.hendlOnSubmit} >
<Label htmlFor="idLabelName">Name</Label>
    <Input
    id="idLabelName"
      type="text"
      name="name"
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      required
      value={this.state.name}
      onChange={this.hendleNameChange}
    />
<Label htmlFor="idLabelNumber">Number</Label>
    <Input
    id="idLabelNumber"
      type="tel"
      name="number"
      pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
      title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
      required
      value={this.state.number}
      onChange={this.hendleNameChange}
    />
   
    <ButtonSubmit type="submit"> Add contact </ButtonSubmit>
   </FormAddContact>
    )
}

}