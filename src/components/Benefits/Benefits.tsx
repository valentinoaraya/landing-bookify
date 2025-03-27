import "./Benefits.css";
import Title from "../../common/Title/Title";
import Benefit from "./Benefit/Benefit";
import videoPayingAppointment from "../../assets/videos/pagando-mp-opt.mp4"
import imageRefund from "../../assets/images/reembolsar.png"
import videoNotifications from "../../assets/videos/video-notificaciones2-opt.mp4"
import imageAppointmentsPanel from "../../assets/images/panel-turnos.png"

const Benefits = () => {
    return (
        <div className="benefitsContainer">
            <Title
                fontSize={window.innerWidth <= 760 ? "2rem" : "3rem"}
            >
                ¿Por qué elegir Bookify?
            </Title>
            <div className="benefits">
                <Benefit
                    title="Fácil de usar"
                    description={`Gestioná los turnos de tus clientes con nuestra interfaz intuitiva. \nFácil de usar para vos y para ellos.`}
                    style="vertical"
                    image={imageAppointmentsPanel}
                />
                <Benefit
                    title="Cobrá señas con Mercado Pago"
                    description={`Concectate con Mercado Pago y cobrá  señas para confirmar turnos de forma rápida y segura. \nTambién podés habilitar turnos sin necesidad de cobrar nada.`}
                    style="horizontal"
                    video={videoPayingAppointment}
                />
                <Benefit
                    title="Sistema de reembolsos integrado"
                    description={`Cuando un cliente cancela su turno con más de 24 hs de anticipación, se le devuelve automáticamente el 50% de la seña. \nSi vos cancelás el turno, se le reembolsa el 100% sin complicaciones.`}
                    style="horizontal-reverse"
                    image={imageRefund}
                />
                <Benefit
                    title="Notificaciones automáticas para vos y tus clientes"
                    description={`Te notificamos si se confirmó o canceló algún turno y enviamos recordatorios a tus clientes.`}
                    style="special-mobile"
                    video={videoNotifications}
                />
            </div>
        </div>
    );
}

export default Benefits;
