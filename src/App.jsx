import { BrowserRouter, Route, Routes } from "react-router-dom";
import DefaultPage from "./layout/DefaultPage";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import NotFound from "./pages/NotFound";
import { BudgetProvider } from "./context/BudgetContext";

function App() {
  return (
    <>
      <BudgetProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultPage />}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/products">
                <Route path="" element={<Products />} />
                <Route path=":id" element={<ProductDetails />} />
              </Route>
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </BudgetProvider>
    </>
  );
}

export default App;
