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

  const showFooter = !["/chat", "/login", "/sign-up"].includes(location.pathname);

  return showFooter ? <Footer /> : null;
};
