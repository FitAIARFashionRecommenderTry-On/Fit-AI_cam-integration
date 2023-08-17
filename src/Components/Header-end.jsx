import React from 'react';
import apparel from './images/apparel-g0b5d68f3c_1920.jpg'
import shopping from './images/shopping-gba85911ef_1920.jpg'
import grocery from './images/grocery-g830b6f3fb_1920.jpg'
import beverages from '././images/beverages-g174ec0caa_1920.jpg'
import footwear from './images/footwear-gae60f1c74_1920.jpg'
import hangers from './images/hangers-g916f133de_1920.jpg'
export const Headerend = () => {
  return (
    <div className="margsizeaa">
      <section>
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={beverages} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={grocery} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={shopping} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={apparel} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={footwear} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={hangers} className="d-block w-100" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>
      <br />
    </div>
  );
};
