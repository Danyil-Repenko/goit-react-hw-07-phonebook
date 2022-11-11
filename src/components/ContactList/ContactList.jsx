import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'components/redux/selectors';
import { ContactItem } from 'components/ContactsItem/ContactsItem';
import { List } from 'components/ContactList/ContactList.styled';

export const ContactList = () => {
  const visibleContacts = useSelector(selectVisibleContacts);

  return (
    <List>
      {visibleContacts.map(contact => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </List>
  );
};
