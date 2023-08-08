import '../style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { RxCaretRight } from "react-icons/rx";


function Category() {

    return (
        <>

            <section className="section kf-category">
                <div className="container">

                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">

                            <div className="kf-category-items" >
                                <div className="kf-category-item">
                                    <div className="image-c">
                                        <a href="menu-restaurant.html"><img src={require('../image/r38.jpeg')} alt="" className='img-fluid'/></a>
                                    </div>
                                    <div className="desc">
                                        <h5 className="name">Chiken Roll</h5>
                                    </div>
                                </div>
                                <div className="kf-category-item">
                                    <div className="image-c">
                                        <a href="menu-restaurant.html"><img src={require('../image/r39.jpeg')} alt="" className='img-fluid'/></a>
                                    </div>
                                    <div className="desc">
                                        <h5 className="name">Salad Bowl</h5>
                                    </div>
                                </div>
                                <div className="kf-category-item">
                                    <div className="image-c">
                                        <a href="menu-restaurant.html"><img src={require('../image/r40.jpeg')} alt="" className='img-fluid'/></a>
                                    </div>
                                    <div className="desc">
                                        <h5 className="name">Lobsters</h5>
                                    </div>
                                </div>
                                <div className="kf-category-item">
                                    <div className="image-c">
                                        <a href="menu-restaurant.html"><img src={require('../image/r41.jpeg')} alt="" className='img-fluid'/></a>
                                    </div>
                                    <div className="desc">
                                        <h5 className="name">Italian Burger</h5>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-5 offset-lg-1 align-self-center">

                            <div className="kf-titles">
                                <div className="kf-subtitle">
                                    Popular Categories
                                </div>
                                <h3 class="kf-title margin-c ">
                                    Choose Your Best Food <br></br>From Categories
                                </h3>
                            </div>

                            <div className="kf-text ">
                                <p>
                                    Sed ut perspiciatis unde omnis iste natus error accusantium doloremque laudantium, totam rem
                                    aperiam eaque ipsa quae abillo inventore veritatis quasi architecto beatae vitae dicta sunt explicabo.
                                    Nemo enim ipsluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia con
                                </p>
                            </div>

                            <a href="menu-restaurant.html" className="kf-btn">
                                <span>explore more Category <RxCaretRight class='icon-kf'></RxCaretRight></span>
                                
                            </a>

                        </div>
                    </div>

                </div>

            </section >

        </>


    );
}

export default Category;
