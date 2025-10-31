import PriceCard from "../PriceCard/PriceCard";
import { MotionEffect } from "../ui/motionEffects";
import "./Price.css";

const Price = () => {
    return (
            <div className="priceDiv">
                <MotionEffect slide={{ direction: 'up' }} fade zoom inView delay={0.01}>
                <div className="priceCardDiv">
                    <PriceCard title="Plan Inividual" price="$10.000 / mes" features={["1 profesional", "Hasta 5 servicios", "Recordatorios y emails automáticos", "Pagos online con Mercado Pago","Rembolsos automáticos", "Historial completo de movimientos", "Soporte por correo"]}></PriceCard>
                </div>
                </MotionEffect>

                <MotionEffect slide={{ direction: 'up' }} fade zoom inView delay={0.01}>
                <div className="priceCardDiv">
                    <PriceCard title="Plan Individual Plus" price="$15.000 / mes" features={["1 profesional", "Servicios personalizados e ilimitados", "Métricas de rendimiento (turnos, ingresos, asistencias)", "Recordatorios automáticos por mail", "Pagos online con Mercado Pago", "Rembolsos automáticos", "Historial completo de movimientos", "Soporte prioritario"]}></PriceCard>
                </div>
                </MotionEffect>

                <MotionEffect slide={{ direction: 'up' }} fade zoom inView delay={0.01}>
                <div className="priceCardDiv">
                    <PriceCard title="Plan Equipo" price="Proximamente..." features={["Hasta 5 profesionales", "Servicios ilimitados por profesional", "Dashborard administrativo",  "Integración de Mercado Pago y Paypal", "Métricas avanzadas por profesional y por servicio", "Gestión de agendas separadas", "Historial completo de movimientos", "Devolución de pagos automáticos", "Recordatorios automáticos por mail", "Soporte prioritario", "+ Profesionales adicionales: $5.000 / mes cada profesional"]}></PriceCard>
                </div>
                </MotionEffect>
            </div>
    )
}

export default Price;