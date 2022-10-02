import ContactForm from '../ContactForm';
import ContactsList from '../ContactsList';
import Filter from '../Filter';
import Wrapper from '../Wrapper';

export const App = () => {
  return (
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
      </Wrapper>
      <Wrapper>
        <ContactsList />
      </Wrapper>
    </div>
  );
};
