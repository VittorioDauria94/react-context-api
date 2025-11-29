import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Stars from "../components/Stars";
import Loader from "../components/Loader";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((resp) => setProducts(resp.data));
  }, []);

  return (
    <div className="container py-4">
      {products.length === 0 ? (
        <Loader />
      ) : (
        <>
          {" "}
          <div className="text-center mb-4">
            <h2 className="section-title">I nostri prodotti</h2>
            <p className="section-subtitle">
              Scopri le nostre offerte più popolari
            </p>
          </div>
          <div className="row g-4 py-3">
            {products.map(({ id, title, price, image, rating }) => {
              return (
                <div key={id} className="col-6 col-md-4 col-lg-3 col-xl-2">
                  <Link
                    className="product-card d-block text-decoration-none"
                    to={`/products/${id}`}
                  >
                    <div className="product-img-wrapper">
                      <img
                        src={image}
                        alt={title}
                        className="img-fluid product-img"
                      />
                    </div>

                    <div className="product-body">
                      <h5 className="product-title">
                        {title.length > 30 ? title.slice(0, 30) + "..." : title}
                      </h5>
                      <p className="product-price">€ {price}</p>
                      <Stars rating={rating.rate} />
                      <span className="rating-count ms-2">
                        ({rating.count})
                      </span>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}
