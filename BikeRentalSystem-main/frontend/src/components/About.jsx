function About(){
    return (
        <>
        <div className="page-heading about-heading header-text" style={{backgroundImage: 'url(images/heading-1-1920x500.jpg)'}}>
        <div className="container">
            <div className="row">
            <div className="col-md-12">
                <div className="text-content">
                <h4>about us</h4>
                <h2>bike rental</h2>
                </div>
            </div>
            </div>
        </div>
        </div>
        <div className="best-features about-features">
        <div className="container">
            <div className="row">
            <div className="col-md-12">
                <div className="section-heading">
                <h2>We are providing bike on rents</h2>
                </div>
            </div>
            <div className="col-md-6">
                <div className="right-image">
                <img src="images/about-1-570x350.jpg" alt />
                </div>
            </div>
            <div className="col-md-6">
                <div className="left-content">
                <h4>we are providing bikes on rent.</h4>
                <p>Renting a bike can save you additional money you need for other things. Furthermore, you won’t have to worry about incurring the costs of repair and damage that comes along with vehicles. Different types of bikes come with different price tags. Depending on the type of bike you are looking to rent, the price may vary. Also, bike rental allows you to explore many different places. Bikes are flexible and offer a good option to travel and explore. Maybe you are looking to explore the city.
                     Or maybe you are renting a bike to explore nature. Perhaps you are looking to do a little shopping and dining..</p>
                <ul className="social-icons">
                    <li><a href="#"><i className="fa fa-facebook" /></a></li>
                    <li><a href="#"><i className="fa fa-twitter" /></a></li>
                    <li><a href="#"><i className="fa fa-linkedin" /></a></li>
                    <li><a href="#"><i className="fa fa-behance" /></a></li>
                </ul>
                </div>
            </div>
            </div>
        </div>
        </div>

        </>
    )
}

export default About;