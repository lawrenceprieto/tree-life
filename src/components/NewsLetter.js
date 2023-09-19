function NewsLetter() {
    return (
        <>
            <div class="container p-5 w-50 mx-auto">
                <form>
                    <h5>Subscribe to our newsletter</h5>
                    <p>Subscribe to our newsletter to receive regular updates on tree-related news, conservation projects, and upcoming events in your area. Together, we can create a greener, more sustainable future for generations to come.</p>
                    <div class="d-flex flex-column flex-sm-row w-100 gap-2">
                        <label for="newsletter1" class="visually-hidden">Email address</label>
                        <input type="text" class="form-control" placeholder="Email address" />
                        <button class="btn btn-primary" type="button">Subscribe</button>
                    </div>
                </form>
            </div>
        </>
    ); 
}

export default NewsLetter;