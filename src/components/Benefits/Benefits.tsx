import "./Benefits.css";
import Title from "../../common/Title/Title";
import Benefit from "./Benefit/Benefit";

const Benefits = () => {
    return (
        <div className="benefitsContainer">
            <Title>¿Por qué elegir Bookify?</Title>
            <div className="benefits">
                <Benefit
                    title="Fácil de usar"
                    description={`Gestioná los turnos de tus clientes con nuestra interfaz intuitiva. \nFácil de usar para vos y para ellos.`}
                    style="vertical"
                />
                <Benefit
                    title="Cobrá señas con Mercado Pago"
                    description={`Concectate con Mercado Pago y cobrá  señas para confirmar turnos de forma rápida y segura. \nTambién podés habilitar turnos sin necesidad de cobrar nada.`}
                    style="horizontal"
                />
                <Benefit
                    title="Sistema de reembolsos integrado"
                    description={`Cuando un cliente cancela su turno con más de 24 hs de anticipación, se le devuelve automáticamente el 50% de la seña. \nSi vos cancelás el turno, se le reembolsa el 100% sin complicaciones.`}
                    style="horizontal-reverse"
                />
                <Benefit
                    title="Notificaciones automáticas para vos y tus clientes"
                    description={`Te notificamos si se confirmó o canceló algún turno y enviamos recordatorios a tus clientes.`}
                    style="special-mobile"
                />
            </div>
        </div>
    );
}

export default Benefits;
