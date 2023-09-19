import Footer from "../components/Footer";
import HeroBanner from "../components/HeroBanner";
import NewsLetter from "../components/NewsLetter";
import TreeLife from "../assets/TreeLife.png";
import plant1 from "../assets/planting1.jpg";
import plant2 from "../assets/planting2.jpg";
import plant3 from "../assets/planting3.jpg";
import Featurette from "../components/Featurette";


function HomePage() {

    return(
        <>
            <HeroBanner />
            <Featurette />
            
            <div class="container my-5">
                <div class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
                    <div class="col-lg-4 p-3 p-lg-5 pt-lg-3">
                        <h1 class="display-4 fw-bold lh-1 text-body-emphasis">Our Story</h1>
                        <p class="lead">At TreeLife, our journey began with a profound love and respect for trees and the invaluable role they play in our lives and the environment. It all started with a simple idea: to create a platform dedicated to the protection and preservation of these majestic beings that sustain our planet.</p>
                        <div class="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                            <button type="button" class="btn btn-primary btn-lg px-4 me-md-2 fw-bold">Primary</button>
                            <button type="button" class="btn btn-outline-secondary btn-lg px-4">Default</button>
                        </div>
                    </div>
                    <div class="col-lg-7 offset-lg-1 p-0 overflow-hidden shadow-lg">
                        <img class="rounded-lg-3" src={TreeLife} alt="treelife" height="500" width="700" />
                    </div>
                </div>
            </div>

            <div class="row container mx-auto"> 
                <div class="col-4">
                    <img src={plant1} class="w-100" alt="..."/>
                </div>
                <div class="col-4">
                    <img src={plant2} class="w-100" alt="..."/>            
                </div>
                <div class="col-4">
                    <img src={plant3} class="w-100" alt="..."/>
                </div>
            </div>

            <NewsLetter />
            <Footer />
        </>
    );
}

export default HomePage;