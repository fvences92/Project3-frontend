import { Link } from "react-router-dom";

function Header(props) {
  return (
    <nav className="nav">
      <Link to="/">
        <div>MERNu</div>
      </Link>
      <Link to="/menu">
        <div>Food</div>
      </Link>
      <Link to="/drinks">
        <div>Drinks</div>
      </Link>
      <Link to="/about">
        <div>About</div>
      </Link>
    </nav>
  );
}

export default Header;