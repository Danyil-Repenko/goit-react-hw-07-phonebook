import { useSelector } from 'react-redux';
import { getFilterState, getContacts } from 'components/redux/selectors';
import { ContactItem } from 'components/ContactsItem/ContactsItem';
import { List } from 'components/ContactList/ContactList.styled';

let visibleContacts = null;

export const ContactList = () => {
  const filterState = useSelector(getFilterState);
  const contacts = useSelector(getContacts);

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
