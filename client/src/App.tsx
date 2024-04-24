import "./App.css";
import Blogs from "./components/blog/Blogs";
import Footer from "./layouts/footer/Footer";
import Header from "./layouts/header/Header";
import AuthPage from "./pages/AuthPage";
import BlogDetailsPage from "./pages/BlogDetailsPage";
import CartPage from "./pages/CartPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
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
      {/* <Blogs /> */}
      {/* <BlogDetailsPage /> */}
      {/* <ProductDetailsPage /> */}
      <Footer />
    </>
  );
}

export default App;
