import Card from '../../common/Card/Card';
import Title from '../../common/Title/Title';
import SpecialCard from '../../common/Card/SpecialCard/SpecialCard';
import './Benefits.css';
import specialCardImage from '../../assets/images/specialCardImage.png';
import refundUrlIcon from '../../assets/icons/refund.svg';
import Adavantageicon from '../../assets/icons/advantage.svg';
import MailIcon from '../../assets/icons/mail.svg';

import MotionEffect from '../ui/motion-effects'
import useIsMobile from '../../hooks/useIsMobile';

const Benefits = () => {
    const isMobile = useIsMobile();

    return (
        <div className="benefits">
            <Title textAlign="center">¿Por qué elegir Bookify?</Title>

            <div className="benefits-cards">
                <div className="benefits-list">
                    <MotionEffect slide={{ direction: 'down' }} fade zoom inView delay={0.35}>
                        <Card
                            icon={<img src={Adavantageicon} className="icon-advantage" alt="Ventaja" />}
                            title="Facil de Usar"
                            description="Gestioná los turnos de tus clientes con nuestra interfaz intuitiva. Fácil de usar y para vos y para ellos"
                        />
                    </MotionEffect>

                    <MotionEffect slide={{ direction: 'down' }} fade zoom inView delay={0.55}>
                        <Card
                            icon={<img src={MailIcon} className="icon-mail" alt="Notificaciones" />}
                            title="Notificaciones automáticas para vos y tus clientes"
                            description={"Te notificamos si se confirmó o canceló algún turno y enviamos recordatorios a tus clientes."}
                        />
                    </MotionEffect>
                </div>

                <MotionEffect
                    slide={{ direction: isMobile ? 'down' : 'left' }}
                    fade
                    zoom
                    inView
                    delay={isMobile ? 0.4 : 0.6}
                >
                    <div className="special-card-div">
                        <SpecialCard
                            image={specialCardImage}
                            title="Cobrales la seña antes del turno"
                            description={
                                "Conectate con Mercado Pago o Paypal, habilitando la posibilidad de cobrar señas para confirmar turnos de forma rápida y segura."
                            }
                        />
                    </div>
                </MotionEffect>
            </div>
            <div className="bottom-card">
                    <MotionEffect slide={{ direction: 'down' }} fade zoom inView delay={0.45}>
                        <Card
                            icon={<img src={refundUrlIcon} className="icon-reembolso" alt="Reembolso" />}
                            title="Reembolsos automáticos para vos y tus clientes"
                            description={"Si el cliente cancela con más de 24 h de anticipación, recibe el reembolso total. Con menos de 24 h, se devuelve el 50%. Si vos cancelás, siempre se reembolsa el 100% sin complicaciones."}
                        />
                    </MotionEffect>
                </div>
        </div>
    );
};

export default Benefits;
