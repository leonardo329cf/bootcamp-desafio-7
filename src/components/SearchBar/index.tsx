import './styles.css';

const SearchBar = () => {
  return (
    <div className="input-group search-bar">
      <input type="text" className="form-control" placeholder="Digite sua busca" aria-label="search" />
      <button type="button" className="btn btn-primary">
        <h2>
          BUSCAR
        </h2>
      </button>
    </div>
  );
};

export default SearchBar;
