import "./SupportSection.css";
import Accordion from "../Accordion/Accordion"
import { ContactForm } from "../ContactForm/ContactForm";
import { WritingText } from "../ui/writing";
import { MotionEffect } from "../ui/motion-effects";
const SupportSection = () => {
    return (
        <div className="supportSection">
            <div className="titleDiv">
                <WritingText text="Soporte y Preguntas Frecuentes" className="effectTitle" />
            </div>

            <div className="supportSectionContent">
                <MotionEffect slide={{ direction: 'right' }} fade zoom inView delay={0.15}>
                    <div className="formDiv">
                        <ContactForm></ContactForm>
                    </div>
                </MotionEffect>
                <MotionEffect slide={{ direction: 'left' }} fade zoom inView delay={0.15}>
                    <div className="accordionDiv">
                    <Accordion>
                    </Accordion>
                </div>
                </MotionEffect>
            </div>
        </div>

    )
};

export default SupportSection;