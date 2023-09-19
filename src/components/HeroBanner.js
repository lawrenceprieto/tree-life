import image from "../assets/nature1.jpg";

function HeroBanner() {
    return (
        <>
            <div class="d-flex align-items-center text-center text-bg-dark" style={{ 
                height: "130vh", 
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "norepeat"
                }}>
                <main class="px-5 mx-auto w-50">
                    <h1>Cover your page.</h1>
                    <p class="lead">Welcome to TreeOfLife, your one-stop resource for everything related to the protection and conservation of trees and forests. We are passionate about preserving the natural beauty and essential role that trees play in our environment. Join us on this journey to make a positive impact on the planet.</p>
                    <p class="lead">
                        <a href="#anything" class="btn btn-lg btn-light fw-bold border-white bg-white">Learn more</a>
                    </p>
                </main>
            </div>
        </>
    );
}

export default HeroBanner;
