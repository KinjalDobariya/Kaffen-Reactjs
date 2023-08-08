
import '../style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BiUser, BiTime } from "react-icons/bi";
import { BsPhone } from "react-icons/bs";
import { FaChevronDown, FaAt } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import { RxCaretRight } from "react-icons/rx";



function Form() {

    return (
        <>
            <section className="section kf-reservation kf-section-no-margin">
                <div className="container">

                    <div className="kf-reservation-form">

                        <div className="image-left"></div>
                        <div className="image-right"></div>

                        <div className="kf-titles text-center">
                            <div className="kf-subtitle">
                                Booking Table
                            </div>
                            <h3 className="kf-title">
                                Make Your Reservation
                            </h3>
                        </div>

                        <form>
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                    <div className="kf-field">
                                        <input type="text" name="name" placeholder="Full Name" />
                                        <BiUser className='in'></BiUser>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                    <div className="kf-field">
                                        <input type="email" name="email" placeholder="Email Address" />
                                        <FaAt className='in inn2'></FaAt>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                    <div className="kf-field">
                                        <input type="tel" name="tel" placeholder="Phone Number" />
                                        <BsPhone className='in'></BsPhone>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                    <div className="kf-field">
                                        <select name="persons">
                                            <option>1 Person</option>
                                            <option>2 Persons</option>
                                            <option>3 Persons</option>
                                            <option>4 Persons</option>
                                        </select>
                                        <FaChevronDown className='in inn'></FaChevronDown>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                    <div className="kf-field">
                                        <input type="date" name="date" />
                                        <MdDateRange className='in'></MdDateRange>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                    <div className="kf-field">
                                        <input type="text" name="time" placeholder="Time" />
                                        <BiTime className='in'></BiTime>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
                                    <div className="kf-bts">
                                        <a href="Im" className="kf-btn">
                                            <span>booking table <RxCaretRight className='icon_kf'></RxCaretRight></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>


        </>
    );
}



export default Form;