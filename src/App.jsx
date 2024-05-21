import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
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

import PrivateRoute from "./Components/PrivateRoute";
import { Toaster } from 'react-hot-toast';
import { useSelector } from "react-redux";

function App() {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <BrowserRouter>
      {currentUser && <Navbar />}
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
          <Route path="/chat" element={<ChatPage />} />
        </Route> 
      </Routes>
      {/* {currentUser && <Footer />} */}
    </BrowserRouter>
  );
}

export default App;
