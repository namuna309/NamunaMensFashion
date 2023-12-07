// Images
import onModel_img1 from '../img/carousel/onmodel1.jpg';
import onModel_img2 from '../img/carousel/onmodel2.jpg';
import onModel_img3 from '../img/carousel/onmodel3.jpg';
import onModel_img4 from '../img/carousel/onmodel4.jpg';
import cloth_img1 from '../img/carousel/cloth1.jpg';
import cloth_img2 from '../img/carousel/cloth2.jpg';
import cloth_img3 from '../img/carousel/cloth3.jpg';
import cloth_img4 from '../img/carousel/cloth4.jpg';

// Jquery
import $ from 'jquery';
import { useState, useEffect } from 'react';

function Carousel() {

    // 착장 사진 캐러셀
    let [onModel_curPic, changeOnModelPicNum] = useState(0);
    let [onModel_trasition, setOnmodelTransition] = useState('all 0.8s');
    let [onModel_transform, setOnmodelTranform] = useState('');


    // 옷 사진 캐러셀
    let [cloth_curPic, setClothPicNum] = useState(0);
    let [cloth_trasition, setClothTransition] = useState('all 0.8s');
    let [cloth_transform, setClothTranform] = useState('');

    useEffect(() => {
        let onModel_w = $('.onModel .slide-item').width();
        let onModel_maxPicnum = $('.onModel .slide-item img').length;
        let onModel_carousel = setInterval(() => {
            changeOnModelPicNum(infiniteCarousel('m', onModel_curPic, onModel_maxPicnum, onModel_w));
        }, 2000);

        return () => {
            clearInterval(onModel_carousel);
        }
    }, [onModel_curPic]);

    useEffect(() => {
        let cloth_w = $('.cloth .slide-item').width() + parseInt($('.cloth .slide-item').css('margin-right')) * 2;
        let cloth_maxPicnum = $('.cloth .slide-item img').length - 2;
        let cloth_carousel = setInterval(() => {
            setClothPicNum(infiniteCarousel('c', cloth_curPic, cloth_maxPicnum, cloth_w));
        }, 2000);

        return () => {
            clearInterval(cloth_carousel);
        }
    }, [cloth_curPic])
    

    // 무한 캐러셀 로직
    function infiniteCarousel(category ,pic_num, max_pics, box_width) {
        pic_num++;
        if (pic_num >= max_pics) {
            pic_num = 0;
            if (category === 'm') {
                setOnmodelTransition('none');
                setOnmodelTranform('translateX(0px)');
            }
            else {
                setClothTransition('none');
                setClothTranform('translateX(0px)');
            }
            pic_num++;
            setTimeout(() => {
                if (category === 'm') {
                    setOnmodelTransition('all 0.8s');
                    setOnmodelTranform(`translateX(${(-1) * pic_num * box_width}px)`);
                }
                else {
                    setClothTransition('all 0.8s');
                    setClothTranform(`translateX(${(-1) * pic_num * box_width}px)`);
                }
            }, 0);

        }
        else {
            if (category === 'm') {
                setOnmodelTranform(`translateX(${(-1) * pic_num * box_width}px)`);
            }
            else {
                setClothTranform(`translateX(${(-1) * pic_num * box_width}px)`);
            }
        }
        return pic_num;
    }

    return (
        <div className="thumb-slide-box">
            <div className="thumb-slide">
                <div className="box onModel">
                    <div className="slide-container" style={{ transition: `${onModel_trasition}`, transform: `${onModel_transform}` }}>
                        <div className="slide-item"><img src={onModel_img1} alt="" /></div>
                        <div className="slide-item"><img src={onModel_img2} alt="" /></div>
                        <div className="slide-item"><img src={onModel_img3} alt="" /></div>
                        <div className="slide-item"><img src={onModel_img4} alt="" /></div>
                        <div className="slide-item"><img src={onModel_img1} alt="" /></div>
                    </div>
                </div>
                <div className="box cloth">
                    <div className="slide-container" style={{ transition: `${cloth_trasition}`, transform: `${cloth_transform}` }}>
                        <div className="slide-item margin"><img src={cloth_img4} alt="" /></div>
                        <div className="slide-item margin"><img src={cloth_img1} alt="" /></div>
                        <div className="slide-item margin"><img src={cloth_img2} alt="" /></div>
                        <div className="slide-item margin"><img src={cloth_img3} alt="" /></div>
                        <div className="slide-item margin"><img src={cloth_img4} alt="" /></div>
                        <div className="slide-item margin"><img src={cloth_img1} alt="" /></div>
                        <div className="slide-item margin"><img src={cloth_img2} alt="" /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default Carousel;