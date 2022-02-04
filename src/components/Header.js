import { Link } from "react-router-dom";

function Header(props) {
  return (
    <nav className="header">
      <div className="mernu">
        <Link to="/">
          <div>MERNu</div>
        </Link>
      </div>
      <div className="links">
        <Link to="/menu">
          <div>Food</div>
        </Link>
        <Link to="/drinks">
          <div>Drinks</div>
        </Link>
        <Link to="/about">
          <div>About</div> 
        </Link>
        <Link to="/new">
          <div>New</div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;