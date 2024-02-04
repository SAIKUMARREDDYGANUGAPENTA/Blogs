import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav  className="navbar navbar-expand-lg navbar-light bg-light">
            <h1>A WebDev Blog</h1>
            <div className="links">
            <Link to='/'>Home</Link>
            <Link to='/create'>Create Blog</Link>
            </div>
        </nav>
    );
}

export default NavBar;