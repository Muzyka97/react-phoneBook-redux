import {useState} from 'react';

const useForm = ({initialState, onSubmit})=>{
    const [state, setState] = useState({...initialState});

    const handleInputChange = ({target}) =>{
        const {name, value} = target;
        setState({
            ...state,
            [name]: value});
    };

    const handleSubmitForm = event =>{
        event.preventDefault()
        onSubmit({...state});
        setState({...initialState}); 
        // reset();
    };
        // reset=()=>{
          // setState({name: '', number:''})
         // };

    return{ state, setState, handleInputChange, handleSubmitForm}
};
export default useForm;