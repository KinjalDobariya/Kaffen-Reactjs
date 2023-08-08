
import '../style.css';

// bootstrap file
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaGem,FaUserTie,FaRegGrinStars} from "react-icons/fa";
import { BsTrophy} from "react-icons/bs";



function Rnumber() {

    return (
        <>

            <section class="section kf-numbers-2 section-bg">
                <div class="container">
                    <div class="kf-numbers-items-2 row text-center">
                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-3 my-lg-0 my-md-2 my-sm-4 my-xs-4">
                            <div class="kf-numbers-item-2 ">
                                <div class="icon-rn"><FaGem></FaGem></div>
                                <div class="num">256+</div>
                                <div class="desc-rn">
                                    <h5 class="name-rn">Premium Clients</h5>
                                    <div class="subname">Sed ut perspiciatis unde</div>
                                </div>
                            </div>
                        </div>

                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-3">
                            <div class="kf-numbers-item-2">
                                <div class="icon-rn"><FaUserTie></FaUserTie></div>
                                <div class="num">36+</div>
                                <div class="desc-rn">
                                    <h5 class="name-rn">Professional Chefs</h5>
                                    <div class="subname">Sed ut perspiciatis unde</div>
                                </div>
                            </div>
                        </div>

                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-3">
                            <div class="kf-numbers-item-2">
                                <div class="icon-rn"><BsTrophy></BsTrophy></div>
                                <div class="num">753+</div>
                                <div class="desc-rn">
                                    <h5 class="name-rn">Winning Awards</h5>
                                    <div class="subname">Sed ut perspiciatis unde</div>
                                </div>
                            </div>
                        </div>

                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-3">
                            <div class="kf-numbers-item-2">
                                <div class="icon-rn"><FaRegGrinStars></FaRegGrinStars></div>
                                <div class="num">100+</div>
                                <div class="desc-rn">
                                    <h5 class="name-rn">5 Star Reviews</h5>
                                    <div class="subname">Sed ut perspiciatis unde</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}



export default Rnumber;







