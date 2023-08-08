

import '../style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { RxCaretRight } from "react-icons/rx";


function Parallax() {

	return (

		<>
			<section className="kf-cta kf-parallax">
				<div className="container">
					<div className="row">
						<div className="col-xs-12 col-sm-12 col-md-12 col-lg-8">
							<div className="kf-titles">
								<div className="kf-subtitle">
									Need a Table On Coffee House
								</div>
								<h3 className="kf-title-parallax">
									Booking Table For Your & Family Members
								</h3>
							</div>
						</div>
						<div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 align-self-center text-lg-end text-md-end text-sm-center my-lg-0 my-md-0 my-sm-5 ">
							<a href="index.html" className="kf-btn">
								<span>booking table 	<RxCaretRight className='icon_kf'></RxCaretRight></span>

							</a>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}


export default Parallax;