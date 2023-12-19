// CSS
import './../css/collections.css';

// Image
import banner from './../img/banner/collectionsBanner_1.png'

// Library
import { useState, useEffect } from 'react';
import axios from 'axios';

const images_all = require.context('./../img/collections', true);
const seasons = ['2023 SS', '2022 FW', '2022 SS', '2021 FW', '2021 SS', '2020 FW']


function Collections() {

    let [sortedSeason, setSeason] = useState(seasons[0]);
    let [imgsrc, setSrc] = useState([]);

    useEffect(() => {
        let img_paths = new Array();
        axios.get(`http://localhost:8080/collections?season=${sortedSeason}`)
            .then((data) => {
                img_paths = data.data[0].dir;
                setSrc(img_paths.map(img => {return images_all(img)}));
                
            }).catch(err => console.log(err));
        
        
    }, [sortedSeason])

    return (
        <div className="collections">
            <div className='collections-banner'><img src={banner} /></div>
            <div style={{ width: '100%', height: '1px' }}></div>
            <div className='season-sort'>
                {
                    seasons.map((season) => <div><p onClick={() => setSeason(season)}>{season}</p></div>)
                }
            </div>
            <div style={{ width: "100%", height: "1px" }}></div>
            <div className='collcetions-containter'>
                {
                    imgsrc.map((img, idx) => {
                        return(
                            <div className='collections-box'>
                                <div className='collections-img'><img src={img} /></div>
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