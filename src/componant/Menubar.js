import '../style.css';

// bootstrap file
import 'bootstrap/dist/css/bootstrap.min.css';

function Menubar() {

    return (

        <>
            <section className="section kf-menu-one">
                <div className="container">

                    <div className="kf-titles text-center">
                        <div className="kf-subtitle" >
                            Choose Best Coffee
                        </div>
                        <h3 className="kf-title">
                            Kaffen Popular Coffee Menu
                        </h3>
                    </div>

                    <div className="menu-items">
						<div className="row">
							<div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
								<div className="menu-item">
									<div className="menu-image">
										<a href="index.html" className="has-popup-image"><img src={require ("../image/asset 6.jpeg")} alt="" /></a>
									</div>
									<div className="menu-desc">
										<h5 className="menu-name">Americano Coffee</h5>
										<div className="subname">2/3 espresso, 1/3 streamed milk</div>
										<div className="price">$4.9</div>
									</div>
								</div>
							</div>
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
								<div className="menu-item">
									<div className="menu-image">
										<a href="index.html" className="has-popup-image"><img src={require ("../image/asset 7.jpeg")} alt="" /></a>
									</div>
									<div className="menu-desc">
										<h5 className="menu-name">Americano Coffee</h5>
										<div className="subname">2/3 espresso, 1/3 streamed milk</div>
										<div className="price">$4.9</div>
									</div>
								</div>
							</div>
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
								<div className="menu-item">
									<div className="menu-image">
										<a href="index.html" className="has-popup-image"><img src={require ("../image/asset 8.jpeg")} alt="" /></a>
									</div>
									<div className="menu-desc">
										<h5 className="menu-name">Americano Coffee</h5>
										<div className="subname">2/3 espresso, 1/3 streamed milk</div>
										<div className="price">$4.9</div>
									</div>
								</div>
							</div>
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
								<div className="menu-item">
									<div className="menu-image">
										<a href="index.html" className="has-popup-image"><img src={require ("../image/asset 9.jpeg")} alt="" /></a>
									</div>
									<div className="menu-desc">
										<h5 className="menu-name">Americano Coffee</h5>
										<div className="subname">2/3 espresso, 1/3 streamed milk</div>
										<div className="price">$4.9</div>
									</div>
								</div>
							</div>
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
								<div className="menu-item">
									<div className="menu-image">
										<a href="index.html" className="has-popup-image"><img src={require ("../image/asset 10.jpeg")} alt="" /></a>
									</div>
									<div className="menu-desc">
										<h5 className="menu-name">Americano Coffee</h5>
										<div className="subname">2/3 espresso, 1/3 streamed milk</div>
										<div className="price">$4.9</div>
									</div>
								</div>
							</div>
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
								<div className="menu-item">
									<div className="menu-image">
										<a href="index.html" className="has-popup-image"><img src={require ("../image/asset 11.jpeg")} alt="" /></a>
									</div>
									<div className="menu-desc">
										<h5 className="menu-name">Americano Coffee</h5>
										<div className="subname">2/3 espresso, 1/3 streamed milk</div>
										<div className="price">$4.9</div>
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

                export default Menubar;