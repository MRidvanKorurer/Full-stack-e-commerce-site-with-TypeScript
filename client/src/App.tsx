import "./App.css";
import Blogs from "./components/blog/Blogs";
import MainLayout from "./layouts/MainLayout";
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
      <MainLayout>
        <HomePage />
        {/* <ShopPage /> */}
        {/* <ContactPage /> */}
        {/* <AuthPage /> */}
        {/* <CartPage /> */}
        {/* <Blogs /> */}
        {/* <BlogDetailsPage /> */}
        {/* <ProductDetailsPage /> */}
      </MainLayout>
    </>
  );
}

export default App;
