import "./Footer.css";
import logo from "../../assets/logo.png";
import "boxicons/css/boxicons.css"; // Importa estilos generales

const Footer = () => {
    return (
        <footer>
            <div className="footer">
                <div className="header__box-logo">
                    <div className="header__logo">
                        <img src={logo} alt="" />
                    </div>

                    <div className="header__span">
                        <span>Sazón Perú</span>
                    </div>
                </div>
                <p className="footer__text">
                    © Copyright 2021. Todos los derechos reservados. Delicias
                    Peruanas.
                </p>
                <div className="footer__box-icons">
                    <div className="icon-box">
                        <i className="bx bxl-facebook footer__icon"></i>
                    </div>
                    <div className="icon-box">
                        <i className="bx bxl-instagram footer__icon"></i>
                    </div>
                    <div className="icon-box">
                        <i className="bx bxl-twitter footer__icon"></i>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
