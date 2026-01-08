import "./Footer.css"
import { EmailIcon, InstagramIcon } from "../../common/Icons/Icons";

const Footer = () => {
    return (
        <footer className="footerContainer">
            <div className="footerContent">
                <h3 className="footerTitle">
                    Bookify by <a href="https://aedestec.com" target="_blank" rel="noopener noreferrer" className="aedesLink">Aedes</a>
                </h3>
                <p className="pFooter">© 2025 Bookify. Todos los derechos reservados.</p>
            </div>
            <div className="footerContacts">
                <div className="contact">
                    <EmailIcon
                        width="20"
                        height="20"
                        fill="var(--azul-oscuro)"
                    />
                    <p>bookify.aedes@gmail.com</p>
                </div>
                <div className="contact">
                    <InstagramIcon
                        width="20"
                        height="20"
                        fill="var(--azul-oscuro)"
                    />
                    <a href="https://www.instagram.com/aedes.tech/" target="_blank" rel="noopener noreferrer" className="aedesIg">@aedes.tech</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
