import slogan_img from './../../img/icon/slogan.png';
import $ from 'jquery';

function Slogan() {
    dynamic_opacity();
    return(
        <div className="slogan">
            <div className="contents opacity">
                <div className="img"><img src={slogan_img} alt=""/></div>
                <div className="text">
                    <p>Everything</p>
                    <p>Everywhere</p>
                    <p>All At Fashion</p>
                </div>
            </div>
        </div>
        
    )
}

function dynamic_opacity() {
    let cur_h = 0;
    let prev_h = 0;
    let dh = 0;

    $(window).on('scroll', () => {
        cur_h = $(window).scrollTop();
        
        dh = cur_h - prev_h;
        let opacity = (-1 / (546.8 - 136.7)) * cur_h + (546.8 / (546.8 - 136.7));
        $('.slogan .opacity').css('opacity', opacity);
    }) 
}

export default Slogan;