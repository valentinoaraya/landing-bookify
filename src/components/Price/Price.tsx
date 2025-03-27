import "./Price.css";
import { CheckIcon, MoneyIcon, NotificationIcon, WalletIcon, PersonConfigIcon } from "../../common/Icons/Icons";
import Button from "../../common/Button/Button";

const Price = () => {
    return (
        <div className="priceContainer">
            <h1 className="titlePrice">Todo esto por solo <span>$20.000</span> / mes</h1>
            <div className="priceContent">
                <div className="priceItem">
                    <CheckIcon
                        width={window.innerWidth <= 760 ? "20px" : "30px"}
                        height="30"
                        fill="#A8DADC"
                    />
                    <h2>Sistema de reservas online 24/7</h2>
                </div>
                <div className="priceItem">
                    <MoneyIcon
                        width={window.innerWidth <= 760 ? "20px" : "30px"}
                        height="30"
                        fill="#A8DADC"
                    />
                    <h2>Cobro de señas con Mercado Pago</h2>
                </div>
                <div className="priceItem">
                    <NotificationIcon
                        width={window.innerWidth <= 760 ? "20px" : "30px"}
                        height="30"
                        fill="#A8DADC"
                    />
                    <h2>Recordatorios y notificaciones</h2>
                </div>
                <div className="priceItem">
                    <WalletIcon
                        width={window.innerWidth <= 760 ? "20px" : "30px"}
                        height="30"
                        fill="#A8DADC"
                    />
                    <h2>Reembolsos automáticos</h2>
                </div>
                <div className="priceItem">
                    <PersonConfigIcon
                        width={window.innerWidth <= 760 ? "20px" : "30px"}
                        height="30"
                        fill="#A8DADC"
                    />
                    <h2>Soporte técnico dedicado</h2>
                </div>
            </div>
            <Button
                boxShadow
                width="300px"
                onSubmit={() => window.open("https://wa.me/5492625660880?text=%C2%A1Hola!%20Quiero%20empezar%20a%20usar%20Bookify%20en%20mi%20empresa.%20%C2%BFPod%C3%A9s%20contarme%20c%C3%B3mo%20es%20el%20proceso%3F", '_blank')}
            >
                Empezar con Bookify
            </Button>
        </div>
    );
}

export default Price;
