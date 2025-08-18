import PriceCard from "../PriceCard/PriceCard";
import "./Price.css";

const Price = () => {
    return (
        <div className="priceDiv">
            <div className="priceCardDiv">
                <PriceCard title="Costo del Servicio - Plan Único" price="12 USD" features={["Agendas y reservas ilimitadas", "Servicios personalizados", "Recordatorios automáticos por mail", "Soporte personalizado", "Historial completo de movimientos"]}></PriceCard>
            </div>
        </div>
    )
}

export default Price;