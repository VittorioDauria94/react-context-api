import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero-section d-flex align-items-center text-center">
        <div className="container">
          <h1 className="hero-title">Boolean Store</h1>
          <p className="hero-subtitle">
            Shop smarter, code harder. I migliori prodotti selezionati per te.
          </p>
          <Link to="/products" className="btn btn-primary btn-lg mt-3">
            Esplora Prodotti
          </Link>
        </div>
      </section>

      {/* FEATURES */}
      <section className="container py-5">
        <h2 className="text-center mb-4 fw-bold">Perché scegliere noi?</h2>

        <div className="row g-4">
          <div className="col-md-4">
            <div className="card feature-card text-center p-3">
              <span className="emoji">👕</span>
              <h5 className="mt-2">Fashion & Apparel</h5>
              <p>Stile, comfort e qualità in ogni prodotto.</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card feature-card text-center p-3">
              <span className="emoji">🎒</span>
              <h5 className="mt-2">Accessories</h5>
              <p>Zaini, borse e oggetti essenziali per ogni giorno.</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card feature-card text-center p-3">
              <span className="emoji">⚙️</span>
              <h5 className="mt-2">Tech Essentials</h5>
              <p>Gadget indispensabili per il tuo setup.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
