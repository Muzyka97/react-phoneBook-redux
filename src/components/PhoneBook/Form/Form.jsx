import {Component} from "react";
import {initialState} from './initialState';
import styled from 'styled-components';

const FormItem = styled.form`
    padding: 0px;
`;
const InputSpaceForm = styled.input`
    margin-top: ${p=>p.theme.space[3]}px;
    margin-bottom: ${p=>p.theme.space[3]}px;
`;
const Btn = styled.button`
    background-color: ${p=>p.theme.colors.btn};
    border: ${p=>p.theme.borders.normal};
    border-color:${p=>p.theme.colors.btn};
    border-radius: ${p=>p.theme.radii.normal};
    text-decoration: none;
    color: ${p=>p.theme.colors.bg};
    :hover {
        background-color: ${p=>p.theme.colors.bg};
        color: ${p=>p.theme.colors.btn}
      };

`;
class Form extends Component{
    state = {...initialState}


    handleInputChange = event =>{
        const {name, value} = event.currentTarget;
        this.setState({[name]: value});
    };

    handleSubmitForm = event =>{
        event.preventDefault()
        this.props.onSubmit(this.state);
        this.setState({...initialState}); 
        // this.reset();
    };

    // reset=()=>{
    //     this.setState({name: '', number:''})
    // };
    render(){
        const {name,number} = this.state;
        const {handleInputChange, handleSubmitForm} = this;

    return(
        <>
        <FormItem onSubmit={handleSubmitForm}>
            <label>
                Name <br />
                <InputSpaceForm
                    type="text"
                    name='name'
                    onChange={handleInputChange}
                    value={name}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    />
            </label> <br />
            <label>
                Number <br />
                <InputSpaceForm
                    type="tel"
                    name="number"
                    onChange={handleInputChange}
                    value={number}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    />
            </label> <br />
            <Btn type="submit">Add contact</Btn>
        </FormItem>
        </>
    )
    }
        
};
export default Form;