import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import SignUp from "./Pages/SignupPage";
import ProfilePage from "./Pages/ProfilePage";
import HomePage from "./Pages/HomePage";
import IdeaBooksPage from "./Pages/IdeaBooksPage";
import CartPage from "./Pages/CartPage"
import ChangePassword from"./Pages/ChangePassword"
import ChangeUsername from"./Pages/ChangeUsername"
import ShopPage from "./Pages/ShopPage";
import SalesPage from "./Pages/SalesPage";
import ProsPage from "./Pages/ProsPage";
import ProsCategoryPage from "./Pages/ProsCategoryPage";
import ProDetailsPage from "./Pages/ProDetailsPage";
import ChatPage from "./Pages/ChatPage";
import ProductCategoryPage from "./Pages/ProductCategoryPage";
import ProductsPage from "./Pages/ProductsPage";
import ProductDetailPage from "./Pages/ProductDetailPage";
import CheckoutPage from "./Pages/CheckoutPage";
import PaymentSuccess from "./Pages/PaymentSuccess";
import PaymentCancelled from "./Pages/PaymentCancelled";
import OrderDetailsPage from "./Pages/OrderDetailsPage";
import ReviewOrderPage from "./Pages/ReviewOrderPage";
import ViewOrderPage from "./Pages/ViewOrderPage";
import SearchResultsPage from "./Pages/SaerchResultsPage";
import ContractPage from "./Pages/ContractPage";
import ViewContractPage from "./Pages/ViewContractPage";
import CreateContract from "./Pages/CreateContract";
import PaymentHistory from "./Pages/PaymentHistory";
import ReviewProService from "./Pages/ReviewProService";

import { ConditionalNavbar, ConditionalFooter } from './Components/ConditionalComponents';
import PrivateRoute from "./Components/PrivateRoute";
import { Toaster } from 'react-hot-toast';

function App() {
  
  return (
    <BrowserRouter>
      <ConditionalNavbar/>
      <Toaster/>
      <Routes>
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login" element={<LoginPage />} />
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/change-username" element={<ChangeUsername />} />
          <Route path="/change-password" element={<ChangePassword />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/ideabooks" element={<IdeaBooksPage />} />
          <Route path="/pros" element={<ProsPage />} />
          <Route path="pros/:category" element={<ProsCategoryPage />} />
          <Route path="pros/:category/:userId" element={<ProDetailsPage />} />
          <Route path="/sales" element={<SalesPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/shop/:category" element={<ProductCategoryPage />} />
          <Route path="/shop/:category/:subCategory" element={<ProductsPage />} />
          <Route path="/shop/:category/:subCategory/:id" element={<ProductDetailPage />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/payment-success" element={<PaymentSuccess />} />
          <Route path="/payment-cancelled" element={<PaymentCancelled />} />
          <Route path="/order" element={<OrderDetailsPage />} />
          <Route path="/order/:id" element={<ViewOrderPage />} />
          <Route path="/order-review/:id" element={<ReviewOrderPage />} />
          <Route path="/shop/search/:search" element={<SearchResultsPage />} />
          <Route path="/contract" element={<ContractPage />} />
          <Route path="/contract/create/:id" element={<CreateContract />} />
          <Route path="/contract/:id" element={<ViewContractPage />} />
          <Route path="/contracts/payment-history/" element={<PaymentHistory />} />
          <Route path="/pro-review/:id" element={<ReviewProService />} />
        </Route> 
      </Routes>
      <ConditionalFooter/>
    </BrowserRouter>
  );
}

export default App;
