import './styles.css';
import ProductImage from '../../assets/images/product-image.png'

const ProductCard = () => {
  return (
    <div className="product-card-container bg-secondary">
      <div className="image-card">
        <img src={ProductImage} alt="Product" />
      </div>
      <div className="content-card">
        <h1>Audi Supra TT</h1>
        <h2 className="text-secondary-font">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, nisi</h2>
      </div>
      <div className="button-card">
        <a href='/products'>
          <button className="btn btn-primary btn-icon">COMPRAR</button>
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
