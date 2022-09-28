import './Navbar.css';

const Navbar = () => {
    return (
        <header>
            <div className='header-navigation'>
                <nav className="desktop-navbar">
                    <ul className="navbar__items">
                      <li>Inicio</li>
                      <li>Productos</li>
                      <li>Contacto</li>
                    </ul>
                </nav>
                {/* modal navbar start */}
                <div className="modal-navbar__background">
                    <nav className="modal-navbar">
                      <ul className="modal-navbar__items">
                        <li>Inicio</li>
                        <li>Productos</li>
                        <li>Contacto</li>
                      </ul>
                    </nav>
                </div>
                {/* modal navbar end */}
            </div>
        </header>
    )
}

export default Navbar;