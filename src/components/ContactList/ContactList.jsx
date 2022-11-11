import { useSelector } from 'react-redux';
import {
  selectFilterState,
  selectContacts,
  selectLoadingState,
  selectError,
} from 'components/redux/selectors';
import { ContactItem } from 'components/ContactsItem/ContactsItem';
import { List } from 'components/ContactList/ContactList.styled';

let visibleContacts = null;

export const ContactList = () => {
  const filterState = useSelector(selectFilterState);
  const contacts = useSelector(selectContacts);
  const loadingState = useSelector(selectLoadingState);
  const error = useSelector(selectError);

  if (filterState === '') {
    visibleContacts = contacts;
  } else {
    visibleContacts = contacts.filter(({ name }) =>
      name.toLowerCase().includes(filterState)
    );
  }

  return (
    <List>
      {loadingState && !error && <p>Loading...</p>}
      {visibleContacts.map(contact => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </List>
  );
};
