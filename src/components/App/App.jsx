import ContactForm from '../ContactForm';
import ContactsList from '../ContactsList';
import Filter from '../Filter';
import Wrapper from '../Wrapper';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from '../../redux/feach/feach';

export const App = () => {
  const dispatch = useDispatch();
  // const { status, error } = useSelector(state => state.contacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <div
        style={{
          display: 'flex',
          gap: '10px',
          justifyContent: 'center',
        }}
      >
        <Wrapper>
          <h2>Phonebook</h2>
          <ContactForm />
          <h2>Filter Contacts</h2>
          <Filter />
          {/* {status === 'loading' && <h2>Loading...</h2>}
          {error && <h2>An error occured: {error}</h2>} */}
        </Wrapper>
        <Wrapper>
          <ContactsList />
        </Wrapper>
      </div>
    </>
  );
};
