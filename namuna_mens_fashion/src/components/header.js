// CSS
import './../css/header.css'

// Library
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Header() {
    let [headerCss, setCss] = useState({ position: 'fixed', top: "0", zIndex: "20" });
    let mainCss = { position: 'fixed', top: "0", zIndex: "20" };
    let othersCss = { position: 'relative' };

    let location = useLocation();

    useEffect(() => {
        location.pathname == '/' ? setCss(mainCss) : setCss(othersCss);;
    }, [location]);

    return (
        <header style={headerCss}>
            <div className="header_inner background-font-color">
                <div className="logo">
                    <Link className="logo-img" to={'./'} onClick={() => setCss(mainCss)}></Link>
                </div>
                <div className='menu'>
                    <Link className='collection' to={'./collections'} onClick={() => setCss(othersCss)}>Collection</Link>
                    <Link className='qna' to={'./qnas'} onClick={() => setCss(othersCss)}>Q&A</Link>
                </div>
            </div>
        </header>
    )
}

export default Header;