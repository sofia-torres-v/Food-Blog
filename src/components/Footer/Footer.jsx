import "./Footer.css";
import "boxicons/css/boxicons.css"; // Importa estilos generales

const Footer = () => {
    return (
        <footer className="footer">
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
            <p className="footer__text">
                © Copyright 2021. Todos los derechos reservados. Delicias
                Peruanas.
            </p>
        </footer>
    );
};

export default Footer;
