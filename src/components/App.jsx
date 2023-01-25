import PhoneBook from "./PhoneBook";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Box} from './Box/Box'
import { fetchContacts } from 'redux/operation';
import { getError, getIsLoading } from '../redux/selectors';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Box width='512px'>
      {isLoading && !error && <b>Request in progress...</b>}
    <PhoneBook/>
    </Box>
  );
};
