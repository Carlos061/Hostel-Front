import { Link } from "react-router-dom";

function Header() {
  return (
    <div className='Header'>
      <div></div>
      <Link to={'/'}>Home</Link>
      <Link to={'/hostels'}>Hostels</Link>
      <Link to={'/ratings'}>Contact Us</Link>
      <Link to={'/services'}>Sign In</Link>
      <Link to={'/services'}>Sign Up</Link>
     {/* <hr className ='line'/> */}
    </div>
  );
}

export default Header;
