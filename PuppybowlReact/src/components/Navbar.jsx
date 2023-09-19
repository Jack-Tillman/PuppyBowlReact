/*use .filter and .include for the search bar */
import { Link } from 'react-router-dom';



export const Navbar = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/newplayerform">Add New Player</Link>
            <Link to="/singleplayerview/:id">Single player view</Link>
        </nav>
    )
}