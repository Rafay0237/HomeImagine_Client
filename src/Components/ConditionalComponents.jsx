import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

export const ConditionalNavbar = () => {
  const location = useLocation();

  const showNavbar = location.pathname !== "/checkout" ;

  return  showNavbar ? <Navbar /> : null;
};

export const ConditionalFooter = () => {
  const location = useLocation();

  const showFooter = location.pathname !== "/chat"&& location.pathname !== "/login" && location.pathname !== "/sign-up";

  return showFooter ? <Footer /> : null;
};
