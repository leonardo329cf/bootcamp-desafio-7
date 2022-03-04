import './styles.css';
import HomeMainImage from 'assets/images/home-main-image.png';

const Home = () => {
  return (
    <>
      <div className="home-container">
        <div className="home-flex-container">
          <div className="home-main-card bg-primary">
            <div className="home-content-container">
              <h1>O carro perfeito para você</h1>
              <h2>
                Conheça nossos carros e dê mais um passo na realização do seu
                sonho
              </h2>
            </div>
            <div className="home-image-container">
              <img src={HomeMainImage} alt="Car" />
            </div>
          </div>
          <div className="home-catalog-card">
              <a href='/products'>
                <button className="btn btn-primary btn-icon">VER CATÁLOGO</button>
              </a>
            <h2>Comece agora a navegar</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
