import { AiOutlineSearch } from 'react-icons/ai';
import { useSearchParams } from 'react-router-dom';

const Searchbar = ({ onSubmit }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('search') ?? '';

  const handleChange = ({ target: { value } }) => {
    value
      ? setSearchParams({ search: value })
      : setSearchParams({});
    
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    onSubmit(query);
  };

  return (
    <form className="SearchForm" onSubmit={handleSubmit}>
      <input
        className="SearchForm-input"
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search films"
        onChange={handleChange}
        value={query}
      />
      <button type="submit" className="SearchForm-button">
        <AiOutlineSearch className="SearchForm-icon" />
      </button>
    </form>
  );
};

export default Searchbar;