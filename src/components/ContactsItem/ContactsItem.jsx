import { useDispatch } from 'react-redux';
import { DeleteBtn } from './ContactsItem.styled';
import { deleteContact } from 'components/redux/operations';

export const ContactItem = ({ contact: { name, number, id } }) => {
  const dispatch = useDispatch();
  const removeContact = () => dispatch(deleteContact(id));

  return (
    <li style={{ marginBottom: 10 }}>
      {name}: {number}
      <DeleteBtn type="button" onClick={removeContact}>
        Delete
      </DeleteBtn>
    </li>
  );
};
