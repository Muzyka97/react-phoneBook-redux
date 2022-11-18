import React,{Component} from "react";
import { nanoid } from 'nanoid';

import Form from "./Form";
import ContactsList from "./ContactsList";
import Filter from "./Filter/Filter";
import Section from "components/Section";
import {Box} from '../Box/Box';

class PhoneBook extends Component{
    state = {
        contacts: [
            {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
            {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
            {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
            {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
        ],
        filter: '',
    };

    addContact = (data) => {
        const {contacts} = this.state;
        const dublicate = contacts.find(contact=> contact.name === data.name)
        if(dublicate){
            alert(`${data.name} is already in name list`);
        }else{
            this.setState(prevState => {
                const { contacts } = prevState;
                const { name, number } = data;
                const newContact = {
                    name,
                    number,
                    id: nanoid() 
                };

                return {
                    contacts: [...contacts, newContact],
                    name: "",
                    number: "",
                };
            });
        };
    };


    deleteContacts = (id) => {
        this.setState(prevState =>{
           const  {contacts} = prevState;
           return{
            contacts: contacts.filter(contact => contact.id !== id)
           }
        })
    };

    changeFilter = ({target}) =>{
        this.setState({
            filter: target.value
        });
    };

    getFilteredContacts() {
        const { filter, contacts } = this.state;
        if (!filter) {
            return contacts 
        }
        const filterText = filter.toLowerCase();
        const filterContacts = contacts.filter(({ name }) => {
            const result = name.toLowerCase().includes(filterText);
            return result
        })
        return filterContacts;
    };
    componentDidMount(){
        const contacts = localStorage.getItem("contacts");
        const parsedContacts = JSON.parse(contacts);
        // parsedContacts?.length like default value.
        if(parsedContacts?.length){
            this.setState({contacts: parsedContacts})
        };
    };

    componentDidUpdate(prevProps, prevState){
        if(this.state.contacts !== prevState.contacts){
            localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
        };
    };

    render(){
     const {filter} = this.state
    const { addContact, deleteContacts, changeFilter } = this
    const contacts = this.getFilteredContacts()
    return(
        <Box
        ml='20px'
        mt='20px'>
            <Section title="PhoneBook">
                <Box
                border={'normal'}
                paddingLeft='8px'
                paddingRight='40px'
                paddingTop='8px'
                paddingBottom="20px">
                    <Form onSubmit={addContact}/>
                </Box>
            </Section>
            <Section title='Contacts'>
                <Box
                    paddingLeft='8px'
                    paddingRight='40px'
                    paddingTop='8px'
                    paddingBottom="40px">
                    <Filter filter={filter} changeFilter={changeFilter}/>
                    <ContactsList contacts={contacts} deleteContacts={deleteContacts}/>
                </Box>
            </Section>
        </Box>
    )
    }
};

export default PhoneBook;