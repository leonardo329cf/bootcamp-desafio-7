import './styles.css';
import { NavLink } from 'react-router-dom';

const SearchBar = () => {
  return (
    <div className="input-group search-bar">
      <input type="text" className="form-control" placeholder="Digite sua busca" aria-label="search" />
      <button type="button" className="btn btn-primary">
        <text>
          BUSCAR
        </text>
      </button>
    </div>
  );
};

export default SearchBar;
