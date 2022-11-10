import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {
  selectFilterState,
  selectContacts,
  selectLoadingState,
  selectError,
} from 'components/redux/selectors';
import { ContactItem } from 'components/ContactsItem/ContactsItem';
import { List } from 'components/ContactList/ContactList.styled';
import { fetchAll } from 'components/redux/operations';

let visibleContacts = null;

export const ContactList = () => {
  const filterState = useSelector(selectFilterState);
  const contacts = useSelector(selectContacts);
  const loadingState = useSelector(selectLoadingState);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAll);
  }, [contacts, dispatch]);

  if (filterState === '') {
    visibleContacts = contacts;
  } else {
    visibleContacts = contacts.filter(({ name }) =>
      name.toLowerCase().includes(filterState)
    );
  }

  return (
    <List>
      {visibleContacts.map(contact => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </List>
  );
};
