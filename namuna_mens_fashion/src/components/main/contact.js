// Video
import vid from './../../vid/fashion.mp4'

// Jquery
import $ from 'jquery';

// React
import { useState, useEffect } from 'react';

function Contact() {
    let [disp, setDisp] = useState('hide');
    let [move, setMove] = useState('down');
    let [scr, setScr] = useState(0);

    useEffect(() => {
        let Introduction_top = $('.Introduction').position().top - $('header').height();
        let fashion_show_showPoint = Introduction_top + $('.Introduction').height() + $('.blank').height() * 2.5 - $('.Introduction-container').height();

        $(window).on('scroll', () => {
            setScr($(window).scrollTop());
        });

        if(scr >= fashion_show_showPoint) {
            setDisp('show');
            setMove('up');
            $('video').get(0).play();
        } else {
            setDisp('hide');
            setMove('down');
            $('video').get(0).pause();
        }
    })
    


    return (
        <div className="fashion-show ">
            <div className={`fashion-show-container ${disp} ${move}`}>
                <button type="button" className="btn btn-secondary contact">Contact Us</button>
                <video src={vid} muted loop></video>
            </div>
        </div>
    )
}

export default Contact;