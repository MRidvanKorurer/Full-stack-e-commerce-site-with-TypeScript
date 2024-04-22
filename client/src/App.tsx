import "./App.css";
import Footer from "./layouts/footer/Footer";
import Header from "./layouts/header/Header";
import AuthPage from "./pages/AuthPage";
import CartPage from "./pages/CartPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";

function App() {
  return (
    <>
      <Header />
      <HomePage />
      {/* <ShopPage /> */}
      {/* <ContactPage /> */}
      {/* <AuthPage /> */}
      {/* <CartPage /> */}
      <Footer />
    </>
  );
}

export default App;
