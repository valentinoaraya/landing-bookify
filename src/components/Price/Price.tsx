import PriceCard from "../PriceCard/PriceCard";
import "./Price.css";

const Price = () => {
    return (
        <div className="priceDiv">
            <div className="priceCardDiv">
                <PriceCard title="Costo del Servicio - Plan Único" price="12 USD" features={["Agendas y reservas ilimitadas", "Servicios personalizados e ilimitados", "Recordatorios automáticos por mail", "Soporte por correo", "Integración de Mercado Pago y Paypal","Historial completo de movimientos", "Devolución de pagos automáticos"]}></PriceCard>
            </div>
        </div>
    )
}

export default Price;