import { Divide as Hamburger } from 'hamburger-react';
import { AiOutlineSearch } from 'react-icons/ai';
import { useState } from 'react';
import logo from '../../images/panaleraMibbLogo-removebg-preview.png';

import './Navbar.css';

const Navbar = () => {

  const [isOpen, setOpen] = useState(false);

  return (
    <header>
      <div className='header-navigation'>
        <Hamburger toggled={isOpen} toggle={setOpen} />
        <img src={logo} alt='logo' className='img-logo'/>
        <AiOutlineSearch className='search-icon' />
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