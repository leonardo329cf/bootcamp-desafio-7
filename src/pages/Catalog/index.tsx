import './styles.css';
import SearchBar from '../../components/SearchBar';
import ProductCard from 'components/ProductCard';

const Catalog = () => {
  return (
    <>
      <div className="container-fluid catalog-container">
        <div className="catalog-flex-container">
          <div className="search-bar-container bg-secondary">
            <SearchBar />
          </div>
          <div className="container-fluid products-container">
            <div className="row">
              <div className="col-xs-12 col-sm-6 col-lg-4 product-column">
                <ProductCard />
              </div>
              <div className="col-xs-12 col-sm-6 col-lg-4 product-column">
                <ProductCard />
              </div>
              <div className="col-xs-12 col-sm-6 col-lg-4 product-column">
                <ProductCard />
              </div>
              <div className="col-xs-12 col-sm-6 col-lg-4 product-column">
                <ProductCard />
              </div>
              <div className="col-xs-12 col-sm-6 col-lg-4 product-column">
                <ProductCard />
              </div>
              <div className="col-xs-12 col-sm-6 col-lg-4 product-column">
                <ProductCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Catalog;
