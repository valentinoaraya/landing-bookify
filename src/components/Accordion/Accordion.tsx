import { Accordion, AccordionItem, AccordionTrigger, AccordionPanel } from "../ui/accordion";
import "./Accordion.css";

const componentAccordion = () => {

    return (
        <Accordion className="accordion">
            <AccordionItem className="accordionItem">
                <AccordionTrigger className="accordionTrigger">¿Necesito instalar algo para usar Bookify?</AccordionTrigger>
                <AccordionPanel className="accordionPanelContent">No, Bookify funciona 100% online desde tu navegador o celular. Solo necesitás conexión a internet.</AccordionPanel>
            </AccordionItem>
            <AccordionItem className="accordionItem">
                <AccordionTrigger className="accordionTrigger">¿Puedo llevar un historial de los turnos de cada cliente?</AccordionTrigger>
                <AccordionPanel className="accordionPanelContent">Sí, Bookify cuenta con un historial en donde vas a poder ver los movimientos que cada cliente ah hecho.</AccordionPanel>
            </AccordionItem>
            <AccordionItem className="accordionItem">
                <AccordionTrigger className="accordionTrigger">¿Es seguro pagar a través de la plataforma?</AccordionTrigger>
                <AccordionPanel className="accordionPanelContent">Sí, usamos la seguridad de Mercado Pago y PayPal para todas las transacciones.</AccordionPanel>
            </AccordionItem>
            <AccordionItem className="accordionItem">
                <AccordionTrigger className="accordionTrigger">¿Puedo manejar varios servicios o profesionales al mismo tiempo?</AccordionTrigger>
                <AccordionPanel className="accordionPanelContent">Sí, podés crear distintos servicios, agendas y profesionales dentro de tu cuenta.</AccordionPanel>
            </AccordionItem>
            <AccordionItem className="accordionItem">
                <AccordionTrigger className="accordionTrigger">¿Es obligatorio cobrar señas?</AccordionTrigger>
                <AccordionPanel className="accordionPanelContent">No, podés habilitar reservas sin seña o definir un monto a tu elección.</AccordionPanel>
            </AccordionItem>
            <AccordionItem className="accordionItem">
                <AccordionTrigger className="accordionTrigger">¿Puedo ofrecer distintos precios o promociones?</AccordionTrigger>
                <AccordionPanel className="accordionPanelContent">Sí, podés configurar precios por servicio, teniendo una cantidad ilimitada para agregar.</AccordionPanel>
            </AccordionItem>
            <AccordionItem className="accordionItem">
                <AccordionTrigger className="accordionTrigger">¿Cómo recibo el dinero de los pagos?</AccordionTrigger>
                <AccordionPanel className="accordionPanelContent">El dinero se acredita directamente en tu cuenta de Mercado Pago o PayPal.</AccordionPanel>
            </AccordionItem>
        </Accordion>
    )
}

export default componentAccordion;
