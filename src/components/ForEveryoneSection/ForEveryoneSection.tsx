import"./ForEveryoneSection.css"
import Title from "../../common/Title/Title";
import workItems from "../../assets/images/workItems.png"
import ListItem from "../ListItem/ListItem";
import { MotionEffect } from "../ui/motion-effects";

const ForEveryoneSection = () => {
    return (
        <div className="for-everyone-container">
            <MotionEffect slide={{ direction: 'down' }} fade zoom inView delay={0.15}>
                <div className="upper-container">
                    <Title fontSize={window.innerWidth <= 600 ? "2rem" : "3rem"} textAlign="left">
                        Un sistema hecho para <span className="new-color">todos</span>. <br /> Sin importar el <span className="new-color">rubro</span> ni el <span className="new-color">tamaño</span>.
                    </Title>

                    <p className="p-for-everyone">
                        Bookify se adapta a vos, no al revés. <br /> Desde un profesional independiente hasta una empresa con múltiples sucursales, nuestro sistema crece con tu negocio. <br /> No necesitás conocimientos técnicos ni configuración avanzada: empezás y ya podés tomar reservas.
                    </p>
                </div>
            </MotionEffect>
            <MotionEffect slide={{ direction: 'down' }} fade zoom inView delay={0.15}>
                <div className="down-container">
                    <div className="for-everyone-points-container">
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
                    <img src={workItems} alt="image" className="work-items-image"/>
                </div>
            </MotionEffect>
        </div>
    )
}

export default ForEveryoneSection;