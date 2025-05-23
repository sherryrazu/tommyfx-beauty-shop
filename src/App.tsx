
import { Route, Routes } from 'react-router-dom';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Contact from '@/pages/Contact';
import NotFound from '@/pages/NotFound';
import ProductDetail from '@/pages/ProductDetail';
import Login from '@/pages/Login';
import Signup from '@/pages/Signup';
import ForgotPassword from '@/pages/ForgotPassword';
import Cart from '@/pages/Cart';
import Checkout from '@/pages/Checkout';
import Profile from '@/pages/Profile';
import Categories from '@/pages/Categories';
import CategoryProducts from '@/pages/CategoryProducts';
import Wishlist from '@/pages/Wishlist';
import Newsletter from '@/pages/admin/Newsletter';
// Add these routes to your App.tsx
// import FAQ from '@/pages/support/FAQ';
// import TrackOrder from '@/pages/support/TrackOrder';
// import PrivacyPolicy from '@/pages/support/PrivacyPolicy';
// import TermsConditions from '@/pages/support/TermsConditions';

// Admin Routes
import Dashboard from '@/pages/admin/Dashboard';
import Products from '@/pages/admin/Products';
import ProductForm from '@/pages/admin/ProductForm';
import Orders from '@/pages/admin/Orders';
import OrderDetail from '@/pages/admin/OrderDetail';
import Feedback from '@/pages/admin/Feedback';
import Customers from '@/pages/admin/Customers';
import Settings from '@/pages/admin/Settings';
import Layout from './components/layout/Layout';
import { WishlistProvider } from './components/wishlist/useWishlist';
import FAQ from './pages/support/FAQ';
import TrackOrder from './pages/support/TrackOrder';
import PrivacyPolicy from './pages/support/PrivacyPolicy';
import TermsConditions from './pages/support/TermsConditions';

function App() {
  return (
    <WishlistProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/categories/:categoryId" element={<CategoryProducts />} />
          <Route path="/category/:categoryId" element={<CategoryProducts />} />
          <Route path="/support/faq" element={<FAQ />} />
          <Route path="/support/track-order" element={<TrackOrder />} />
          <Route path="/support/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/support/terms-conditions" element={<TermsConditions />} />
          <Route path="/wishlist" element={<Wishlist />} />
          
          {/* Admin Routes */}
          <Route path="/admin" element={<Dashboard />} />
          <Route path="/admin/products" element={<Products />} />
          <Route path="/admin/products/new" element={<ProductForm />} />
          <Route path="/admin/products/edit/:id" element={<ProductForm />} />
          <Route path="/admin/orders" element={<Orders />} />
          <Route path="/admin/orders/:id" element={<OrderDetail />} />
          <Route path="/admin/feedback" element={<Feedback />} />
          <Route path="/admin/customers" element={<Customers />} />
          <Route path="/admin/newsletter" element={<Newsletter />} />

          <Route path="/admin/settings" element={<Settings />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </WishlistProvider>
  );
}

export default App;
