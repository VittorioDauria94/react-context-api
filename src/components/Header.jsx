import { NavLink } from "react-router-dom";
import navLink from "../assets/data/navLink";
import { useBudget } from "../context/BudgetContext";

export default function Header() {
  const { budget, setBudget } = useBudget();

  return (
    <header>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <NavLink className="navbar-brand fw-bold" to="/">
            Boolean Store
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              {navLink.map(({ id, name, path }) => (
                <li key={id} className="nav-item">
                  <NavLink className="nav-link" aria-current="page" to={path}>
                    {name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="d-flex">
            <input
              id="max-price"
              type="number"
              className="form-control"
              value={budget ?? ""}
              onChange={(e) =>
                setBudget(e.target.value === "" ? null : Number(e.target.value))
              }
              placeholder="Prezzo massimo"
            />
          </div>
        </div>
      </nav>
    </header>
  );
}
