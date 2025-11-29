import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Stars from "../components/Stars";
import Loader from "../components/Loader";
import InnerImageZoom from "react-inner-image-zoom";

export default function ProductDetails() {
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // axios
    //   .get(`https://fakestoreapi.com/products/${id}`)
    //   .then((resp) =>
    //     Object.keys(resp.data).length === 0
    //       ? navigate("/products")
    //       : setProduct(resp.data)
    //   );
    axios.get(`https://fakestoreapi.com/products/${id}`).then((resp) => {
      if (Object.keys(resp.data).length > 0) {
        setProduct(resp.data);
      } else {
        navigate("/products");
      }
    });
  }, [id]);

  

  return (
    <div className="container py-5 product-page">
      {product ? (
        <>
          <button
            className="btn btn-outline-secondary mb-4"
            onClick={() => navigate(-1)}
          >
            ← Indietro
          </button>

          <div className="row g-5">
            <div className="col-md-6 d-flex justify-content-center">
              <div className="product-detail-image-wrapper position-relative">
                <span className="product-category-badge">
                  {product.category}
                </span>
                <InnerImageZoom
                  src={product.image}
                  zoomSrc={product.image}
                  zoomScale={1.5}
                  alt={`Immagine di ${product.title}`}
                  className="product-detail-image"
                />
                <div className="d-flex justify-content-around mt-5">
                  <Link
                    className="btn btn-primary"
                    to={`/products/${parseInt(id) - 1}`}
                  >
                    Precedente
                  </Link>
                  <Link
                    className="btn btn-primary"
                    to={`/products/${parseInt(id) + 1}`}
                  >
                    Successivo
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <h1 className="product-detail-title">{product.title}</h1>
              <div className="d-flex align-items-center mb-2">
                <Stars rating={product.rating.rate} />
                <span className="ms-2 text-muted">
                  ({product.rating.count} reviews)
                </span>
              </div>
              <h2 className="product-detail-price">${product.price}</h2>
              <p className="product-description mt-4">{product.description}</p>
              <button className="btn btn-primary btn-lg px-4 mt-3">
                Aggiungi al carrello
              </button>
            </div>
          </div>
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
}
