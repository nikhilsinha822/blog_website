import { Link } from "react-router-dom";
const Navbar = ({ search, setSearch }) => {
  return (
    <nav className="Nav">
      <form className="searchForm" onSubmit={(evt) => evt.preventDefault()}>
        <label htmlFor="search">Search Post</label>
        <input
          type="text"
          placeholder="search posts"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li><Link to="/post">Post</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
