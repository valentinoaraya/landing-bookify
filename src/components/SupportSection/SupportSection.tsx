import "./SupportSection.css";
import Accordion from "../Accordion/Accordion"
import { ContactForm } from "../ContactForm/ContactForm";
import { WritingText } from "../ui/writing";

const SupportSection = () => {
    return (
        <div className="supportSection">
            <div className="titleDiv">
                <WritingText text="Soporte y Preguntas Frecuentes" className="effectTitle" />
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