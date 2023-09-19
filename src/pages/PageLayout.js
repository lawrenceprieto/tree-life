import { Outlet} from "react-router-dom";
import NavBar from "../components/NavBar";

function PageLayout() {
    return (
        <>
            <NavBar />
            {/* <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/signin">Sign in</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav> */}
            <Outlet />
        </>
    );
}

export default PageLayout;