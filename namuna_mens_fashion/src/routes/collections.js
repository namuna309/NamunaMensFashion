//CSS
import './../css/collections.css';

// Image
import FW2023 from './../img/collections/2023_FW/namuna_men_fall_winter_runway_look_2023_1.png';


// const images = require.context('./../img/collections/2023_FW', true);
// const imgList = images.keys().map((img) => images(img));

const images_all = require.context('./../img/collections', true);
const allimgList = images_all.keys().map((img) => images_all(img));

function Collections() {
    
    return (
        <div className="collections">
            <div className='collcetions-containter'>
                {   
                    
                    allimgList.map((imgSrc, idx) => {
                        return(
                            <div className='collections-box'>
                                <div className='collections-img' ><img src={imgSrc} /></div>
                                <div className='collections-title'><h6>FW2023 Look {idx + 1}</h6></div>
                            </div>
                        )
                    })
                }
                {/* <div className='collections-box'>
                    <div className='collections-img' ><img src={FW2023} /></div>
                    <div className='collections-title'><h5>FW2023</h5></div>
                </div>
                <div className='collections-box'>
                    <div className='collections-img' ><img src={FW2023} /></div>
                    <div className='collections-title'><h5>FW2023</h5></div>
                </div>
                <div className='collections-box'>
                    <div className='collections-img' ><img src={FW2023} /></div>
                    <div className='collections-title'><h5>FW2023</h5></div>
                </div>
                <div className='collections-box'>
                    <div className='collections-img' ><img src={FW2023} /></div>
                    <div className='collections-title'><h5>FW2023</h5></div>
                </div>
                <div className='collections-box'>
                    <div className='collections-img' ><img src={FW2023} /></div>
                    <div className='collections-title'><h5>FW2023</h5></div>
                </div> */}
            </div>
        </div>
    )
}

export default Collections;