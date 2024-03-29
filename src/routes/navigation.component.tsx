import { Outlet, Link } from "react-router-dom";
// import { useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ReactComponent as CrwnLogo } from "../assets/crown.svg";
// import { UserContext } from "../contexts/user.context";
// import { CartContext } from "../contexts/cart.context";
import { selectIsCartOpen } from "../store/cart/cart.selector";
// import { signOutUser } from "../utils/firebase";
import CartIcon from "../components/cart-icon/cart-icon.component";
import CartDropdown from "../components/cart-dropdown/cart-dropdown.component";
import { selectCurrentUser } from "../store/user/user.selector";
import { signOutStart } from "../store/user/user.action";
import "./navigation.styles.scss";

const Navigation = () => {
  // const { currentUser } = useContext(UserContext);
  const currentUser = useSelector(selectCurrentUser);
  // const { isCartOpen } = useContext(CartContext);
  const isCartOpen = useSelector(selectIsCartOpen);
  const dispatch = useDispatch();
  const signOutUser = () => dispatch(signOutStart());

  return (
    <>
      <div className="navigation">
        <Link to="/" className="logo-container">
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link to="/shop" className="nav-link">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link to="/auth " className="nav-link">
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
