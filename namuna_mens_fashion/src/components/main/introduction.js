// Images
import intro1 from './../../img/introduction/intro1.png';
import intro2 from './../../img/introduction/intro2.png';
import intro3 from './../../img/introduction/intro3.png';
// Jquery
import $ from 'jquery';

// React
import { useState, useEffect } from 'react';

function Introduction() {

    let [img, setImg] = useState([intro1, intro2, intro3]);
    let [title, setTitle] = useState(["NAMUNA HOMMME FASHION", "CASUAL AND SPECIAL", "ALL AYAWYS FOR MEN"]);
    let [content, setContent] = useState(["NAMUNA는 하이엔드 남성복 브랜드로 아트적이고 컨셉츄얼한 디자인을 클래식한 남성 테일러링에 접목시켜 현대적인 PRET A PORTER 컬렉션을 선보입니다.", "고급스러운 소재와 트렌디한 디테일의 차별화된 스타일로 특별하면서도 시크한 캐주얼룩을 선호합니다.", "2020년 FW 런칭 이후 NAMUNA가 전개하는 컬렉션들은 유명 패션 피플과 젊은 남성들 에게 큰 인기를 끌며, 독보적인 남성 캐주얼 브랜드로 자리매김하고 있습니다."]);
    let [idx, setIdx] = useState(0);
    let [scr, setScr] = useState(0);
    let [box, setBox] = useState(['show', 'hide', 'hide']);
    let [container, setContainer] = useState('hide')

    useEffect(() => {
        let carousel_pos = $('.thumb-slide-box').position().top - $('header').height();
        let Introduction_top = $('.Introduction').position().top - $('header').height();
        let Introduction_height = $('.Introduction').height();
        let picsNum = img.length;

        $(window).on('scroll', () => {
            setScr($(window).scrollTop());
        });

        if (scr >= carousel_pos && container != 'show' ) {
            setContainer('show')
        }
        else if (scr < carousel_pos ) {
            setContainer('hide');
        }
        
        for (let i = 0; i < picsNum; i++) {
            if (scr >= Introduction_top + i * Introduction_height / picsNum && scr < Introduction_top + (i + 1) * Introduction_height / picsNum ) {
                setIdx(i);
                break;
            }
        }
    }, [scr, container]);
    

    useEffect(() => {
        let copy = ['hide', 'hide', 'hide'];
        copy[idx] = 'show';
        setBox(copy);
        
    }, [idx]);
    

    return (
        <div className="Introduction">
            <div className={`Introduction-container ${container}`}>
            {
                box.map((b, i) => {
                    return (
                        <IntroductionBox key = {i} box={b} title={title[i]} content={content[i]} img={img[i]} />
                    )
                })
            }
                
            </div>
        </div>
        

        
    )
}

function IntroductionBox(prosp) {
    let box = prosp.box;
    let title = prosp.title;
    let content = prosp.content;
    let img = prosp.img;
    
    
    return (
        <div className={`Introduction-box ${box}`}>
            <div className="Introduction-text">
                <div className="text-box">
                    <div className="text-title title" style={{ fontSize: "24px" }}>
                        <p>{title}</p>
                    </div>
                    <div className="text-content">
                        <p>{content}
                        </p>
                    </div>
                </div>
            </div>
            <div className="Introduction-img">
                <img src={img} alt="" />
            </div>
        </div>
    )
}

export default Introduction;