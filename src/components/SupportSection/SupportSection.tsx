import Title from "../../common/Title/Title";
import "./SupportSection.css";
import Accordion from "../Accordion/Accordion"
import { ContactForm } from "../ContactForm/ContactForm";

const SupportSection = () => {
    return (
        <div className="supportSection">
            <div className="titleDiv">
                <Title >Soporte y Preguntas Frecuentes</Title>
            </div>

            <div className="supportSectionContent">
                <div className="formDiv">
                    <ContactForm></ContactForm>
                </div>

                <div className="accordionDiv">
                    <Accordion>
                    </Accordion>
                </div>
            </div>
        </div>

    )
};

export default SupportSection;