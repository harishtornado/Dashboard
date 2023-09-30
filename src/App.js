import "./styles/global.scss";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Users from "./pages/users/Users";
import Products from "./pages/products/Products";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Menu from "./components/menu/Menu";

function App() {
  const Layout = () => {
    return (
      <div className="main">
        <Navbar />
        <div style={{ color: "white" }}>
          <div className="menuContainer">
            <Menu />
          </div>
          <div className="contentContainer">
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    );
  };

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="users" element={<Users />} />
            <Route path="products" element={<Products />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
