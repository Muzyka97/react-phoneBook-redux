import useForm from 'hooks/useForm';
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
const Form = ({ onSubmit })=> {

    const { state, handleInputChange, handleSubmitForm} = useForm({
        initialState,
        onSubmit,
    });

    const { name, number } = state;

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
};
export default Form;