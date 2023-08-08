import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductListPage from './pages/ProductListPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import CartPage from './pages/CartPage';

// Components
import ProtectedRoutesComponent from './components/ProtectedRoutesComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';

// User Components
import RouteswithChatComponent from './components/user/RouteswithChatComponent';

// Protected User Pages
import UserProfilePage from './pages/user/UserProfilePage';
import UserOrdersPage from './pages/user/UserOrdersPage';
import UserCartDetailsPage from './pages/user/UserCartDetailsPage';
import UserOrderDetailsPage from './pages/user/UserOrderDetailsPage';

// Protected Admin Pages
import AdminAnalyticsPage from './pages/admin/AdminAnalyticsPage';
import AdminChatsPage from './pages/admin/AdminChatsPage';
import AdminCreateProductPage from './pages/admin/AdminCreateProductPage';
import AdminEditProductPage from './pages/admin/AdminEditProductPage';
import AdminEditUserPage from './pages/admin/AdminEditUserPage';
import AdminOrderDetailsPage from './pages/admin/AdminOrderDetailsPage';
import AdminOrdersPage from './pages/admin/AdminOrdersPage';
import AdminProductsPage from './pages/admin/AdminProductsPage';
import AdminUsersPage from './pages/admin/AdminUsersPage';

function App() {
  return (
    <BrowserRouter>
      <HeaderComponent />
      <Routes>
        <Route element={<RouteswithChatComponent />}>
          {/* Public Routes */}
          <Route path='/' element={<HomePage />} />
          <Route path='/product-list' element={<ProductListPage />} />
          <Route path='/product-detail/:id' element={<ProductDetailsPage />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />

          <Route path='*' element='Page not exist 404' />

          {/* User Protected Routes */}
          <Route element={<ProtectedRoutesComponent admin={false} />}>
            <Route path='/user' element={<UserProfilePage />} />
            <Route path='/user/my-order' element={<UserOrdersPage />} />
            <Route
              path='/user/cart-details'
              element={<UserCartDetailsPage />}
            />
            <Route
              path='/user/order-details'
              element={<UserOrderDetailsPage />}
            />
          </Route>
        </Route>

        {/* Admin Protected Routes */}
        <Route element={<ProtectedRoutesComponent admin={true} />}>
          <Route path='/admin/analytis' element={<AdminAnalyticsPage />} />
          <Route path='/admin/chats' element={<AdminChatsPage />} />
          <Route
            path='/admin/create-new-product'
            element={<AdminCreateProductPage />}
          />
          <Route
            path='/admin/edit-product'
            element={<AdminEditProductPage />}
          />
          <Route path='/admin/edit-user' element={<AdminEditUserPage />} />
          <Route
            path='/admin/order-details'
            element={<AdminOrderDetailsPage />}
          />
          <Route path='/admin/orders' element={<AdminOrdersPage />} />
          <Route path='/admin/products' element={<AdminProductsPage />} />
          <Route path='/admin/users' element={<AdminUsersPage />} />
        </Route>
      </Routes>
      <FooterComponent />
    </BrowserRouter>
  );
}

export default App;
