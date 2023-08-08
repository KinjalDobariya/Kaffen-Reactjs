
import '../style.css';

// bootstrap file
import 'bootstrap/dist/css/bootstrap.min.css';


//icon file 
import { FaFacebookF,FaTwitter,FaInstagram,FaYoutube} from "react-icons/fa";
import {MdOutlineWatchLater,MdLocationOn} from "react-icons/md";

function Topheader() {
    return (
		
      <>
        <div class="kf-topline d-none d-lg-block">
				<div class="row">
					<div class="col-xs-12 col-sm-12 col-md-6 col-lg-4 text-lg-start text-sm-center">
						<div class="kf-h-group">
                            <MdOutlineWatchLater className='i text-sm-center'></MdOutlineWatchLater>
							<em>opening hours :</em> 08:00 am - 09:00 pm
						</div>
					</div>
					<div class="col-xs-12 col-sm-12 col-md-6 col-lg-4 mx-lg-0 mx-md-0 mx-sm-0 mx-xs-5 text-sm-center ">
						<div class="kf-h-social">
							<a href="index.html"><FaFacebookF className='social_icon'></FaFacebookF></a>
							<a href="index.html"><FaTwitter className='social_icon'></FaTwitter></a>
							<a href="index.html"><FaInstagram className='social_icon'></FaInstagram></a>
							<a href="index.html"><FaYoutube className='social_icon1'></FaYoutube></a>
						</div>
					</div>
					<div class="col-xs-12 col-sm-12 col-md-12 my-lg-0 my-md-2 col-lg-4 text-lg-end  text-md-center text-sm-center">
						<div class="kf-h-group">
                            <MdLocationOn className='ii'></MdLocationOn>
							<em>Location :</em> 55 main street, new york
						</div>

					</div>
				</div>
			</div>

      </>
        
  
    );
  }
  
  export default Topheader;
  