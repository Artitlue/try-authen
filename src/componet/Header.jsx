import { Link } from "react-router-dom";
import "./Header.css";
export default function Header() {
  return (
    <div className="Header">
      <Link to="/">
        <h1>monitor</h1>
      </Link>
      
      <ul className="Header_list">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/about-us">
          <li>About Us</li>
        </Link>
        <Link to="/sign-in">
          <li>Sign In </li>
        </Link>
      </ul>
    </div>
  );
}
