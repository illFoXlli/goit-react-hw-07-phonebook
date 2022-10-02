import { InputFilter, Box } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { getFilterContacts } from '../../redux/filter/filterSlicer';

const Filter = () => {
  const dispatch = useDispatch();

  const setFilters = e => {
    const { value } = e.target;
    dispatch(getFilterContacts(value));
  };

  return (
    <Box>
      <InputFilter
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={setFilters}
      />
    </Box>
  );
};

export default Filter;
