import { Link } from "react-router-dom";

function NavBar() {
    return (
        <>
                <header class="d-flex justify-content-center py-3 bg-dark w-100">
                    <ul class="nav nav-pills">
                        <li class="nav-item"><Link to="/" class="nav-link">Home</Link></li>
                        <li class="nav-item"><a href="#about" class="nav-link">About</a></li>
                        <li class="nav-item"><a href="#about" class="nav-link">Gallery</a></li>
                        <li class="nav-item"><a href="#faq" class="nav-link">FAQs</a></li>
                        <li class="nav-item"><a href="#faq" class="nav-link">Contact Us</a></li>
                        <li class="nav-item"><Link to="/signin" class="nav-link">Signin</Link></li>
                    </ul>
                </header>
        </>
    );
}

export default NavBar;