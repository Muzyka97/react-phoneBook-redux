import PropTypes from 'prop-types'; 
import styled from 'styled-components';


const List = styled.li`
    margin-top: ${p=>p.theme.space[3]}px;
`
const Btn = styled.button`
    margin-left: ${p=>p.theme.space[3]}px;
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

`
const ContactsList = ({contacts,deleteContacts}) =>{

    const contact = contacts.map(({id, name, number})=>(
        <List key={id}> {name}: {number} 
            <Btn onClick={()=>deleteContacts(id)}>Delete</Btn>
        </List>
    ));
    return (
        <ul>{contact}</ul>
    );
};
ContactsList.propTypes = {
    deleteContacts: PropTypes.func.isRequired,
    contacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    }))
};
export default ContactsList;