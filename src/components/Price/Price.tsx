import PriceCard from "../PriceCard/PriceCard";
import { MotionEffect } from "../ui/motionEffects";
import "./Price.css";

const Price = () => {
    return (
        <MotionEffect slide={{ direction: 'up' }} fade zoom inView delay={0.01}>
            <div className="priceDiv">
                <div className="priceCardDiv">
                    <PriceCard title="Costo del Servicio - Plan Único" price="$12.000 / mes" features={["Agendas y reservas ilimitadas", "Servicios personalizados e ilimitados", "Recordatorios automáticos por mail", "Soporte por correo", "Integración de Mercado Pago y Paypal","Historial completo de movimientos", "Devolución de pagos automáticos"]}></PriceCard>
                </div>
            </div>
        </MotionEffect>
    )
}

export default Price;