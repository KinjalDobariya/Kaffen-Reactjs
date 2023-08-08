
import '../style.css';

// bootstrap file
import 'bootstrap/dist/css/bootstrap.min.css';

function About() {
    return (
        <>

            <section className="section kf-about section-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-5">
                            <div className="kf-titles">
                                <div className="kf-subtitle">
                                    About Us
                                </div>
                                <h3 className="kf-title">
                                    Organic & Fresh Coffee <br></br>Provider Center
                                </h3>
                            </div>
                            <div className="kf-text">
                                <p>
                                    Sed ut perspiciatis unde omnis iste natus error voluptate accusantium doloremque laudantium,
                                    totam rem aperiam eaque ipsa quae abillo inventore veritatis et quasi architecto beatae vitae dicta
                                    sunt explicabo. Nemo enim ipsluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia
                                    consequuntur magni dolores eos qui ratione
                                </p>
                            </div>
                            <div className="kf-about-quote">
                                <div> <img src={require('../image/asset 1.png')} alt="" ></img> </div>
                                <div className='contant_quote'>Quis autem vel eum iure reprehenderit in ealuptate velit esse molestiae</div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-7">
                            <div className="kf-about-image">
                                <img src={require('../image/asset 2.png')} className="img-fluid" alt=""></img>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

        </>
    );
}


export default About;