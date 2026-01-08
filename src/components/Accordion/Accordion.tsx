import { Accordion, AccordionItem, AccordionTrigger, AccordionPanel } from "../ui/accordion";
import "./Accordion.css";

const componentAccordion = () => {

    return (
        <Accordion className="accordion">
            <AccordionItem className="accordionItem">
                <AccordionTrigger className="accordionTrigger">¿Cómo comienzo?</AccordionTrigger>
                <AccordionPanel className="accordionPanelContent">Haciendo click en los botones de esta página te contactas con nosotros mediante chat de instagram para que creemos tu cuenta.</AccordionPanel>
            </AccordionItem>
            <AccordionItem className="accordionItem">
                <AccordionTrigger className="accordionTrigger">¿Necesito instalar algo para usar Bookify?</AccordionTrigger>
                <AccordionPanel className="accordionPanelContent">No, Bookify funciona 100% online desde tu navegador o celular. Solo necesitás conexión a internet.</AccordionPanel>
            </AccordionItem>
            <AccordionItem className="accordionItem">
                <AccordionTrigger className="accordionTrigger">¿Puedo llevar un historial de los turnos de cada cliente?</AccordionTrigger>
                <AccordionPanel className="accordionPanelContent">Sí, Bookify cuenta con un historial en donde vas a poder ver los movimientos de cada cliente.</AccordionPanel>
            </AccordionItem>
            <AccordionItem className="accordionItem">
                <AccordionTrigger className="accordionTrigger">¿Es seguro pagar a través de la plataforma?</AccordionTrigger>
                <AccordionPanel className="accordionPanelContent">Sí, usamos la seguridad de Mercado Pago para todas las transacciones.</AccordionPanel>
            </AccordionItem>
            <AccordionItem className="accordionItem">
                <AccordionTrigger className="accordionTrigger">¿Puedo manejar varios servicios o profesionales al mismo tiempo?</AccordionTrigger>
                <AccordionPanel className="accordionPanelContent">Sí, con el Plan Equipo podés crear servicios ilimitados e incluir hasta 5 profesionales dentro de tu cuenta. Si deseas agregar más profesionales, se cobrará un adicional de $5.000 por profesional adicional. El plan Individual ofrece hasta 5 servicios y el Plan Individual Plus ofrece servicios ilimitados pero ambos para un solo profecional.</AccordionPanel>
            </AccordionItem>
            <AccordionItem className="accordionItem">
                <AccordionTrigger className="accordionTrigger">¿Es obligatorio cobrar señas?</AccordionTrigger>
                <AccordionPanel className="accordionPanelContent">No, podés habilitar reservas sin seña o definir un monto a tu elección.</AccordionPanel>
            </AccordionItem>
            <AccordionItem className="accordionItem">
                <AccordionTrigger className="accordionTrigger">¿Cómo recibo el dinero de los pagos?</AccordionTrigger>
                <AccordionPanel className="accordionPanelContent">El dinero se acredita directamente en tu cuenta de Mercado Pago.</AccordionPanel>
            </AccordionItem>
        </Accordion>
    )
}

export default componentAccordion;
