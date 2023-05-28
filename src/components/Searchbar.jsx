import PropTypes from 'prop-types';

const Searchbar = ({ onChange, onSubmit, query }) => {
  return (
    <form onSubmit={onSubmit}>
      <input
        onChange={e => onChange(e.target.value)}
        type="text"
        name="query"
        value={query}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default Searchbar;

Searchbar.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  query: PropTypes.string,
};
