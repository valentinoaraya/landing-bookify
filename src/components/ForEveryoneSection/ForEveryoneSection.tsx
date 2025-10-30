import"./ForEveryoneSection.css"
import Title from "../../common/Title/Title";
import workItems from "../../assets/images/workItems.png"
import ListItem from "../ListItem/ListItem";
import { MotionEffect } from "../ui/motionEffects";
import { useEffect, useState } from "react";

const ForEveryoneSection = () => {
    // Responsive font size para title
    const [fontSize, setFontSize] = useState(() => {
        if (typeof window === 'undefined') return "3rem";
        if (window.innerWidth <= 590) return "1.6rem";
        if (window.innerWidth <= 1012) return "2rem";
        return "3rem";
    });

    type Align = "left" | "center" | "right";
    const [textAlign, setTextAlign] = useState<Align>(() => (typeof window !== "undefined" && window.innerWidth <= 1012 ? 'center' : 'left'));
    useEffect(() => {
        const handleResize = () => {
            setTextAlign(window.innerWidth <= 1012 ? 'center' : 'left');
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 590 && fontSize !== "1.6rem") setFontSize("1.6rem");
            else if (window.innerWidth <= 1012 && window.innerWidth > 590 && fontSize !== "2rem") setFontSize("2rem");
            else if (window.innerWidth > 1012 && fontSize !== "3rem") setFontSize("3rem");
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [fontSize]);

    return (
        <div className="forEveryoneContainer">
            <MotionEffect slide={{ direction: 'down' }} fade zoom inView delay={0.15}>
                <div className="upperContainer">
                    <Title fontSize={fontSize} textAlign={textAlign}>
                        Un sistema hecho para <span className="newColor">todos</span>. <br /> Sin importar el <span className="newColor">rubro</span> ni el <span className="newColor">tamaño</span>.
                    </Title>

                    <p className="pForEveryone">
                        Bookify se adapta a vos, no al revés. <br /> Desde un profesional independiente hasta una empresa con múltiples sucursales, nuestro sistema crece con tu negocio. <br /> No necesitás conocimientos técnicos ni configuración avanzada: empezás y ya podés tomar reservas.
                    </p>
                </div>
            </MotionEffect>
            <MotionEffect slide={{ direction: 'down' }} fade zoom inView delay={0.15}>
                <div className="downContainer">
                    <div className="forEveryonePointsContainer">
                        <ListItem width={90}>
                            Sin curva de aprendizaje: interfaz simple, pensada para cualquier persona.
                        </ListItem>
                        <ListItem width={90}>
                            Funciona igual de bien con 10 o 1000 clientes.
                        </ListItem>
                        <ListItem width={90}>
                            Personalizable según tu tipo de servicio: desde talleres hasta consultorios.
                        </ListItem>
                        <ListItem width={90}>
                            Accesible desde cualquier dispositivo.
                        </ListItem>
                    </div>
                    <img src={workItems} alt="image" className="workItemsImage"/>
                </div>
            </MotionEffect>
        </div>
    )
}

export default ForEveryoneSection;