import "./Header.css";

const Header = () => {
    return (
        <header className="header">
            <nav className="navigation">
                <div className="header__box-logo">
                    <div className="header__logo">
                        {/* <img src="../images/logo.png" alt="" /> */}
                    </div>

                    <div className="header__span">
                        <span>Sazón Perú</span>
                    </div>
                </div>

                <div className="header__navigation-search">
                    <div className="header__search" id="search-icon">
                        <input type="text" placeholder="Buscar recetas..." />
                        <i className="bx bx-search"></i>
                    </div>

                    <ul className="navigation__items">
                        <li>
                            <a className="navigation__link" href="#">
                                Inicio
                            </a>
                        </li>
                        <li>
                            <a className="navigation__link" href="#">
                                Recetas
                            </a>
                        </li>
                        <li>
                            <a className="navigation__link" href="#">
                                Contacto
                            </a>
                        </li>
                    </ul>
                </div>

                <i className="bx bx-menu" id="header__icon-menu"></i>
            </nav>
        </header>
    );
};

export default Header;
