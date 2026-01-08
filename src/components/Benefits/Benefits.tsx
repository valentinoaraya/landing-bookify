import Card from '../../common/Card/Card';
import SpecialCard from '../../common/Card/SpecialCard/SpecialCard';
import './Benefits.css';
import specialCardImage from '../../assets/images/specialCardImage.png';
import refundUrlIcon from '../../assets/Icons/Refund.svg';
import Adavantageicon from '../../assets/Icons/Advantage.svg';
import MailIcon from '../../assets/Icons/mail.svg';
import MotionEffect from '../ui/motionEffects'
import useIsMobile from '../../hooks/useIsMobile';
import { WritingText } from '../ui/writing';


const Benefits = () => {
    const isMobile = useIsMobile();

    return (
        <div className="benefits">
            <div className='titleDiv'>
                <WritingText text="¿Por qué elegir Bookify?" className="effectTitle" />
            </div>

            <div className="benefitsCards">
                <div className="benefitsList">

                    <div className="benefitsItem">
                        <MotionEffect slide={{ direction: 'down' }} fade zoom inView delay={0.15}>
                            <Card
                                icon={<img src={Adavantageicon} className="advantageIcon" alt="Ventaja" />}
                                title="Facil de Usar"
                                description="Gestioná los turnos de tus clientes con nuestra interfaz intuitiva. Fácil de usar y para vos y para ellos"
                            />
                        </MotionEffect>
                    </div>


                    <div className="benefitsItem">
                        <MotionEffect slide={{ direction: 'down' }} fade zoom inView delay={0.3}>
                            <Card
                                icon={<img src={MailIcon} className="mailIcon" alt="Notificaciones" />}
                                title="Notificaciones automáticas para vos y tus clientes"
                                description={"Te notificamos si se confirmó o canceló algún turno y enviamos recordatorios a tus clientes."}
                            />
                        </MotionEffect>
                    </div>
                </div>

                <div className="specialCardDiv benefitsItem">
                    <MotionEffect
                        slide={{ direction: isMobile ? 'down' : 'left' }}
                        fade
                        zoom
                        inView
                        delay={isMobile ? 0.4 : 0.6}
                    >
                        <SpecialCard
                            image={specialCardImage}
                            title="Cobrales la seña antes del turno"
                            description={
                                "Conectate con Mercado Pago, habilitando la posibilidad de cobrar señas para confirmar turnos de forma rápida y segura."
                            }
                        />
                    </MotionEffect>
                </div>
            </div>

            <div className="bottomCard benefitsItem">
                <MotionEffect slide={{ direction: 'down' }} fade zoom inView delay={0.30}>
                    <Card
                        icon={<img src={refundUrlIcon} className="refundIcon" alt="Reembolso" />}
                        title="Reembolsos automáticos para vos y tus clientes"
                        description={"Si el cliente cancela con más de 24 h de anticipación, recibe el reembolso total. Con menos de 24 h, se devuelve el 50%. Si vos cancelás, siempre se reembolsa el 100% sin complicaciones."}
                    />
                </MotionEffect>
            </div>
        </div>
    );
};

export default Benefits;
