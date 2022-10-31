import React from "react";
import { ContactForm } from "./ContactForm/ContactForm";
import {Title, TitleSeccond } from "./App.styled";

import { nanoid } from 'nanoid';
import { Filter } from "./Filter/Filter";
import { ContactList } from "./ContactList/ContactList ";

const LS_KEY = 'contacts'

export class App extends React.Component{

  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: ''
  }
  
  componentDidMount() {
    const LS = localStorage.getItem(LS_KEY);
    if(LS){
      this.setState({
        contacts: JSON.parse(LS)
      })
    }

  }

  componentDidUpdate(_, prevState) {
    if(prevState.contacts !== this.state.contacts){
      localStorage.setItem(LS_KEY, JSON.stringify(this.state.contacts))

    }
  }
  hendleNameChange = e => {
    const {name, value} = e.target;
    this.setState({[name]: value})
  }

formSubmitHandler = data => {

  const {name, number} = data;
  if(this.state.contacts.find(contact => contact.name === name || contact.number === number)) {
    return alert(`${name} or number: ${number} is alredy in contact`)
  }
    this.setState(prevState =>({ 
      contacts: [...prevState.contacts, {id:nanoid(), name, number}],
    }))
};

idLabelName = nanoid();
idLabelNumber = nanoid();
idLabelSearch = nanoid();

findContact = () =>{
    const {filter, contacts} = this.state;
    const toLowerFilter = filter.toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(toLowerFilter));
    }

onChangeFilter = (e) =>{
  this.setState({filter: e.target.value})
}
    
onDeleteElem = (contactId) =>{
  this.setState(prevState => ({
    contacts: prevState.contacts.filter(contact => contact.id !== contactId)
  }))
}

render(){
  return (<div 
    style={{
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: 18,
      color: '#010101'
          }}>
    <Title>Phonebook</Title>
    <ContactForm  onSubmitDate = {this.formSubmitHandler} />
    <TitleSeccond>Contacts</TitleSeccond>
    <Filter value={this.state.filter} onChange={this.onChangeFilter} />

   {this.state.contacts.length > 0 ? (
       <ContactList Array={this.findContact()} onDelete={this.onDeleteElem}/>
      ) : (
        <p>You don't have any contact</p>
      )}
  </div>);
  }
}
