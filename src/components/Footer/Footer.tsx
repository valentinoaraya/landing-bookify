import "./Footer.css"
import { EmailIcon, InstagramIcon, PhoneIcon } from "../../common/Icons/Icons";

const Footer = () => {
    return (
        <footer className="footerContainer">
            <div className="footerContent">
                <h3 className="footerTitle">
                    Bookify by Aedes
                </h3>
                <p className="pFooter">© 2025 Bookify. Todos los derechos reservados.</p>
            </div>
            <div className="footerContacts">
                <div className="contact">
                    <EmailIcon
                        width="20"
                        height="20"
                        fill="#A8DADC"
                    />
                    <p>bookify.aedes@gmail.com</p>
                </div>
                <div className="contact">
                    <PhoneIcon
                        width="20"
                        height="20"
                        fill="#A8DADC"
                    />
                    <p>(+54) 2625660880</p>
                </div>
                <div className="contact">
                    <InstagramIcon
                        width="20"
                        height="20"
                        fill="#A8DADC"
                    />
                    <p>@tinoaraya</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
