import PropTypes from 'prop-types'; 
import styled from 'styled-components';

const InputSpaceFilter = styled.input`
    margin-top: ${p=>p.theme.space[3]}px;
`

const Filter = ({filter,changeFilter}) =>{
    return(
        <>
            <label htmlFor="">
                Find contact by name
            </label > <br/>
            <InputSpaceFilter
                onChange={changeFilter}
                value={filter}
                type="text"
                name="filter" />
        </>
    )
};
Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    changeFilter: PropTypes.func.isRequired,
};
export default Filter;