import Card from '../../common/Card/Card';
import Title from '../../common/Title/Title';
import SpecialCard from '../../common/Card/SpecialCard/SpecialCard';
import './Benefits.css';
import specialCardImage from '../../assets/images/specialCardImage.png';
import refundUrlIcon from '../../assets/icons/refund.svg';
import Adavantageicon from '../../assets/icons/advantage.svg';
import MailIcon from '../../assets/icons/mail.svg';

const Benefits = () => {
    return (
        <div className="benefits">
            <Title  textAlign="right">
                ¿Por qué elegir Bookify?
            </Title>
            <div className="benefits-cards">
                <div className="benefits-list">
                    <Card
                        icon={<img src={Adavantageicon} className="icon-advantage" alt="Ventaja" />}
                        title="Facil de Usar"
                        description="Gestioná los turnos de tus clientes con nuestra interfaz intuitiva. Fácil de usar y para vos y para ellos"
                    />
                    <Card
                        icon={<img src={refundUrlIcon} className="icon-reembolso" alt="Reembolso" />}
                        title="Sistema de Rembolso Integrado"
                        description={
                                <>
                                    Cuando un cliente cancela su turno con <strong>más de 24 horas</strong> de anticipación, el sistema automáticamente le reembolsa la seña.
                                    {"\n"} Si el cliente cancela con <strong>menos de 24 horas</strong> de anticipación, se devuelve automáticamente el <strong>50%</strong> de la seña.
                                    {"\n"} Si vos cancelás el turno, se le reembolsa el <strong>100%</strong> sin complicaciones.
                                </> 
                        }
                    />
                    <Card
                        icon={<img src={MailIcon} className="icon-mail" alt="Notificaciones" />}
                        title="Notificaciones automáticas para vos y tus clientes"
                        description={"Te notificamos si se confirmó o canceló algún turno y enviamos recordatorios a tus clientes."}
                    />
                </div>
                <div className="special-card-div">
                    <SpecialCard
                        image={specialCardImage}
                        title="Cobra señas con Mercado Pago o PayPal"
                        description={"Conectate con Mercado Pago o Paypal y cobrá señas para confirmar turnos de forma rápida y segura.\nTambién podés habilitar turnos sin encesidad de cobrar nada."}
                        />
                </div>
            </div>
        </div>
    );
};

export default Benefits;