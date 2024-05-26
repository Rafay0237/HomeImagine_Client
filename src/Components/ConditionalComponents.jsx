import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Navbar from './Navbar';
import Footer from './Footer';

export const ConditionalNavbar = () => {
  const location = useLocation();
  const { currentUser } = useSelector((state) => state.user);

  const showNavbar = location.pathname !== "/checkout";

  return currentUser && showNavbar ? <Navbar /> : null;
};

export const ConditionalFooter = () => {
  const location = useLocation();
  const { currentUser } = useSelector((state) => state.user);

  const showFooter = location.pathname !== "/chat";

  return currentUser && showFooter ? <Footer /> : null;
};
