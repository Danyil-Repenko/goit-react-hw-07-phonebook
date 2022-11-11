import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'components/redux/selectors';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { addContact } from 'components/redux/operations';
import {
  Form,
  InputWrapper,
  Label,
  Input,
  SubmitBtn,
} from './ContactForm.styled';

export const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const addNewContact = e => {
    e.preventDefault();

    const name = e.target.elements.name.value;
    const number = e.target.elements.number.value;
    const nameSameness = contacts.find(contact => contact.name === name);

    if (nameSameness) {
      Notify.info(`${name} is already in contacts`);
      return;
    } else {
      dispatch(addContact({ name, number }));
    }

    e.target.reset();
  };

  return (
    <Form onSubmit={addNewContact}>
      <InputWrapper>
        <Label>Name</Label>
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </InputWrapper>
      <InputWrapper>
        <Label>Number</Label>
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </InputWrapper>
      <SubmitBtn type="submit">Add contact</SubmitBtn>
    </Form>
  );
};
