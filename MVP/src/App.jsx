import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "@aws-amplify/ui-react/styles.css";
import { ThemeProvider } from "@aws-amplify/ui-react";
import { Category, Recommended, Header, Footer, Product } from "./components";

function App() {

  return (
    <ThemeProvider>
        <Router>
            <Header />
            <Routes>
              <Route path="/" element={<Recommended />} />
              <Route
                path="/category/:name"
                element={<Category />}
              />
              <Route
                path="/product/:id"
                element={<Product />}
              />
            </Routes>
            <Footer></Footer>
        </Router>
    </ThemeProvider>
  );
}

export default App;