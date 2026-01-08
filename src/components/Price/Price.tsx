import PriceCard from "../PriceCard/PriceCard";
import { MotionEffect } from "../ui/motionEffects";
import "./Price.css";

const Price = () => {
    return (
        <div className="priceDiv">
            <MotionEffect slide={{ direction: 'up' }} fade zoom inView delay={0.01}>
                <div className="priceCardDiv">
                    <PriceCard title="Plan Individual" price="$12.000 / mes" features={["1 profesional", "Hasta 5 servicios", "Recordatorios y emails automáticos", "Pagos online con Mercado Pago", "Rembolsos automáticos", "Historial completo de movimientos", "Soporte por correo"]}></PriceCard>
                </div>
            </MotionEffect>

            <MotionEffect slide={{ direction: 'up' }} fade zoom inView delay={0.01}>
                <div className="priceCardDiv">
                    <PriceCard title="Plan Individual Plus" price="$18.000 / mes" features={["Incluye Plan Individual", "Servicios personalizados e ilimitados", "Métricas de rendimiento (turnos, ingresos, asistencias)", "Soporte prioritario"]}></PriceCard>
                </div>
            </MotionEffect>

            <MotionEffect slide={{ direction: 'up' }} fade zoom inView delay={0.01}>
                <div className="priceCardDiv">
                    <PriceCard title="Plan Equipo" price="Próximamente..." features={["Incluye Plan Individual Plus por profesional", "Hasta 5 profesionales", "Dashboard administrativo", "Gestión de agendas separadas", "Historial completo de movimientos por profesional", "Historial centralizado de pacientes", "+ Profesionales adicionales: $5.000 / mes cada profesional"]}></PriceCard>
                </div>
            </MotionEffect>
        </div>
    )
}

export default Price;