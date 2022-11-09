import { useDispatch } from 'react-redux';
import { filterContacts } from 'components/redux/filterSlice';
import { InputWrapper, Label, Input } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleInput = e => {
    const input = e.target.value.trim().toLowerCase();
    dispatch(filterContacts(input));
  };

  return (
    <InputWrapper>
      <Label>
        Find contacts by name
        <Input type="text" name="filter" onChange={handleInput} />
      </Label>
    </InputWrapper>
  );
};
