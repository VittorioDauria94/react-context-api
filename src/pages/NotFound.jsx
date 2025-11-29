import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="container py-5 text-center">
      <h1 className="display-5 fw-bold mb-3">404</h1>
      <p className="lead mb-4">La pagina che stai cercando non esiste.</p>

      <Link to="/" className="btn btn-primary">
        Torna alla home
      </Link>
    </div>
  );
}
