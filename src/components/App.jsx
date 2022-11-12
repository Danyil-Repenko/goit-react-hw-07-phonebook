import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Filter } from './Filter/Filter';
import { Wrapper, CenteredDiv, LoadingMessage } from './App.styled';
import { selectLoadingState, selectError } from 'components/redux/selectors';
import { fetchAll } from 'components/redux/operations';

export function App() {
  const loadingState = useSelector(selectLoadingState);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAll());
  }, [dispatch]);

  return (
    <Wrapper>
      <CenteredDiv>
        <h1>PHONEBOOK</h1>
        <ContactForm />
      </CenteredDiv>
      <CenteredDiv>
        <h2>Contacts</h2>
        <Filter />
      </CenteredDiv>
      {loadingState && !error && <LoadingMessage>Loading...</LoadingMessage>}
      <ContactList />
    </Wrapper>
  );
}
