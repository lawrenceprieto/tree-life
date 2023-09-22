import { Link } from "react-router-dom";

function NavBar() {
    return (
        <>
            <header class="d-flex justify-content-center py-3 bg-dark w-100">
                <ul class="nav nav-pills">
                    <li class="nav-item"><Link to="/" class="nav-link">Home</Link></li>
                    <li class="nav-item"><Link to="*" class="nav-link">About</Link></li>
                    <li class="nav-item"><Link to="*" class="nav-link">Gallery</Link></li>
                    <li class="nav-item"><Link to="*" class="nav-link">FAQs</Link></li>
                    <li class="nav-item"><Link to="*" class="nav-link">Contact Us</Link></li>
                </ul>
            </header>
        </>
    );
}

export default NavBar;