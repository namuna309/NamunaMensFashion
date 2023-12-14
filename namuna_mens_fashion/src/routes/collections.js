// CSS
import './../css/collections.css';

// Image
import banner from './../img/banner/collectionsBanner_1.png'

// Library
import { useState } from 'react';

const images_all = require.context('./../img/collections', true);
let seasons = new Set();

// 이미지 파일 경로 및 시즌 추출
const allimgList = images_all.keys().map((img) => {
    let season = img.split('/')[1];
    seasons.add(season)
    return [season, images_all(img)];
});

// 시즌 별 이미지 소스 분류
seasons = [...seasons].reverse();

let collections = new Object();

seasons.map((season) => {
    collections[season] = new Array();
}) 

allimgList.map((img) => {
    collections[img[0]].push(img[1]);
})

function Collections() {

    let [sortedSeason, setSeason] = useState(seasons[0]);
    
    return (
        <div className="collections">
            <div className='collections-banner'><img src={banner}/></div>
            <div style={{width: '100%', height: '1px'}}></div>
            <div className='season-sort'>
                {
                    seasons.map((season) => <div><p onClick={() => setSeason(season)}>{season}</p></div>)
                }
            </div>
            <div style={{width: "100%", height: "1px"}}></div>
            <div className='collcetions-containter'>
                {   
                    collections[sortedSeason].map((imgSrc, idx) => {
                            return (
                                <div className='collections-box'>
                                                    <div className='collections-img'><img src={imgSrc}/></div>
                                                    <div className='collections-title'><h6>{sortedSeason} Look {idx + 1}</h6></div>
                                                </div>
                            )
                        })
                    
                }
            </div>
        </div>
    )
}

export default Collections;