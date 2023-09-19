import image1 from "../assets/nature3.jpg";
import image2 from "../assets/nature4.jpg";

function Featurette() {
    return (
        <>
            <div class="" style={{ marginTop: "100px"}}>
            <div class="row featurette">
                <div class="col-md-1"></div>
                <div class="col-md-5 my-auto">
                    <h2 class="featurette-heading fw-normal lh-1">Educate <span class="text-body-secondary">It’ll blow your mind.</span></h2>
                    <p class="lead">Explore our informative articles, guides, and resources to learn more about the significance of trees and how you can help.</p>
                </div>
                <div class="col-md-1"></div>
                <div class="col-md-4">
                    <img src={image1} width="400px" height="350px" alt="image1" style={{ objectFit: "contain"}} />
                </div>
                <div class="col-md-1"></div>
            </div>

            <div class="row featurette">
                <div class="col-md-1"></div>
                <div class="col-md-4">
                    <img src={image2} width="400px" height="350px" alt="image1" style={{ objectFit: "contain"}} />
                </div>
                <div class="col-md-1"></div>
                <div class="col-md-5 my-auto">
                    <h2 class="featurette-heading fw-normal lh-1">Inspire: <span class="text-body-secondary">It’ll blow your mind.</span></h2>
                    <p class="lead">Discover inspiring stories and success stories from around the world, showcasing the positive impact of tree conservation efforts.</p>
                </div>
            </div>

            <div class="row featurette">
                <div class="col-md-1"></div>
                <div class="col-md-5 my-auto">
                    <h2 class="featurette-heading fw-normal lh-1">Get Involved:  <span class="text-body-secondary">It’ll blow your mind.</span></h2>
                    <p class="lead">Find opportunities to get actively involved in tree planting, conservation initiatives, and community projects.</p>
                </div>
                <div class="col-md-1"></div>
                <div class="col-md-4">
                    <img src={image1} width="400px" height="350px" alt="image1" style={{ objectFit: "contain"}} />
                </div>
                <div class="col-md-1"></div>
            </div>

            </div>
        </>
    );
}

export default Featurette;