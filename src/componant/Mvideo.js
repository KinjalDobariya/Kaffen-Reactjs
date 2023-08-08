import '../style.css';

// bootstrap file
import 'bootstrap/dist/css/bootstrap.min.css';

import { FaPlay } from "react-icons/fa"



function Mvideo() {

    return (
        <>

            <div class="section kf-video">
                <div className="container">
                    <div class="kf-video-choose">
                        <div class="play"><FaPlay className='v-icon'></FaPlay> </div>
                    </div>
                </div>


            </div>

        </>
    );
}

export default Mvideo;