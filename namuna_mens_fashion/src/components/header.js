import './../css/header.css'

function Header() {
    return (
        <header>
        <div className="header_inner background-font-color">
            <div className="logo">
                <div className="logo-img"></div>
            </div>
            <nav className='menu'>
                <div className='collection'>collection</div>
            </nav>
        </div>
      </header>
    )
}

export default Header;