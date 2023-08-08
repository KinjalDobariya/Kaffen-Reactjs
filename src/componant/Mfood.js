
import '../style.css';

// bootstrap file
import 'bootstrap/dist/css/bootstrap.min.css';


function Mfood() {

    return (
        <>

            <section className="section kf-about-2" >
                <div className="container">
                    <div className="kf-services-chooses row">
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
                            <div className="kf-services-choose">
                                <div className="image-rb">
                                    <img src={require('../image/r47.png')} alt="" className='img-fluid' />
                                </div>
                                <div className="desc-rb margin-s">
                                    <h5 className="name-rb">Birthday Cakes</h5>
                                    <div className="subname-rb ">Sed ut perspiciatis unde</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
                            <div className="kf-services-choose">
                                <div className="image-rb">
                                    <img src={require('../image/r48.png')} alt="" className='img-fluid' />

                                </div>
                                <div className="desc-rb margin-s">
                                    <h5 className="name-rb">Fresh Foods</h5>
                                    <div className="subname-rb">Sed ut perspiciatis unde</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
                            <div className="kf-services-choose">
                                <div className="image-rb">
                                    <img src={require('../image/r49.png')} alt="" className='img-fluid' />

                                </div>
                                <div className="desc-rb margin-s">
                                    <h5 className="name-rb">Skills Chefs</h5>
                                    <div className="subname-rb">Sed ut perspiciatis unde</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
                            <div className="kf-services-choose">
                                <div className="image-rb">
                                    <img src={require('../image/r13.png')} alt="" className='img-fluid' />
                                </div>
                                <div className="desc-rb margin-s">
                                    <h5 className="name-rb">Organic Juice</h5>
                                    <div className="subname-rb">Sed ut perspiciatis unde</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Mfood;