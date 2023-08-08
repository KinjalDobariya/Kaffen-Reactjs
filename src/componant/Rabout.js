
import '../style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { RxCaretRight } from "react-icons/rx";



function Rabout() {

    return (
        <>

            <section className="section kf-about-2" >
                <div className="container">

                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-5 align-self-center">

                            <div className="kf-titles">
                                <div className="kf-subtitle">
                                    About Kaffen
                                </div>
                                <h3 className="kf-title margin-rb">
                                    Have Nice & Enjoyable <br></br>Time With Our Foods
                                </h3>
                            </div>

                            <div className="kf-text color-rb">
                                <p>
                                    Sed ut perspiciatis unde omnis iste natus error voluptate accusantium doloremque
                                    laudantium, totam rem aperiam eaque ipsa quae abillo inventore veritatis
                                </p>
                            </div>

                            <div className="kf-choose-list">
                                <ul className="rb-menu">
                                    <li>
                                        <div className="icon">
                                            <img src={require ('../image/asset 14.png')} alt="" className="img-fluid"/>
                                        </div>
                                        <div className="desc-rb">
                                            <h5 className="name-rb">100% ISO Certification</h5>
                                            <div className="subname-rb">Sed ut perspiciatis unde omnis iste natus error voluptate accusantium doloremque</div>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <a href="about.html" className="kf-btn">
                                <span>explore more us<RxCaretRight className='icon_kf'></RxCaretRight></span>
                                
                            </a>

                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 offset-lg-1 align-self-center">

                            <div className="kf-services-items-2 row">

                                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                    <div className="kf-services-item-2">
                                        <div className="image-rb">
                                            <img src={require ('../image/r47.png')} alt="" className='img-fluid'/>
                                        </div>
                                        <div className="desc-rb margin-s">
                                            <h5 className="name-rb">Birthday Cakes</h5>
                                            <div className="subname-rb ">Sed ut perspiciatis unde</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                    <div className="kf-services-item-2">
                                        <div className="image-rb">
                                        <img src={require ('../image/r48.png')} alt="" className='img-fluid'/>

                                        </div>
                                        <div className="desc-rb margin-s">
                                            <h5 className="name-rb">Fresh Foods</h5>
                                            <div className="subname-rb">Sed ut perspiciatis unde</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                    <div className="kf-services-item-2">
                                        <div className="image-rb">
                                        <img src={require ('../image/r49.png')} alt="" className='img-fluid'/>

                                        </div>
                                        <div className="desc-rb margin-s">
                                            <h5 className="name-rb">Skills Chefs</h5>
                                            <div className="subname-rb">Sed ut perspiciatis unde</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                    <div className="kf-services-item-2">
                                        <div className="image-rb">
                                        <img src={require ('../image/r13.png')} alt="" className='img-fluid'/>

                                        </div>
                                        <div className="desc-rb margin-s">
                                            <h5 className="name-rb">Organic Juice</h5>
                                            <div className="subname-rb">Sed ut perspiciatis unde</div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>

                </div>
            </section>


        </>
    );
}



export default Rabout;













