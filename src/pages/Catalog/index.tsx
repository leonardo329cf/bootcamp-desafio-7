import './styles.css';
import SearchBar from '../../components/SearchBar';

const Catalog = () => {
  return (
    <>
      <div className="container-fluid catalog-container">
        <div className="catalog-flex-container">
          <div className="search-bar-container bg-secondary">
            <SearchBar />
          </div>
        </div>
      </div>
    </>
  );
};

export default Catalog;
