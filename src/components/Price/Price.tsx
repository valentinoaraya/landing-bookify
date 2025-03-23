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
                        widht="30"
                        height="30"
                        fill="#A8DADC"
                    />
                    <h2>Sistema de reservas online 24/7</h2>
                </div>
                <div className="priceItem">
                    <MoneyIcon
                        widht="30"
                        height="30"
                        fill="#A8DADC"
                    />
                    <h2>Cobro de señas con Mercado Pago</h2>
                </div>
                <div className="priceItem">
                    <NotificationIcon
                        widht="30"
                        height="30"
                        fill="#A8DADC"
                    />
                    <h2>Recordatorios y notificaciones</h2>
                </div>
                <div className="priceItem">
                    <WalletIcon
                        widht="30"
                        height="30"
                        fill="#A8DADC"
                    />
                    <h2>Reembolsos automáticos</h2>
                </div>
                <div className="priceItem">
                    <PersonConfigIcon
                        widht="30"
                        height="30"
                        fill="#A8DADC"
                    />
                    <h2>Soporte técnico dedicado</h2>
                </div>
            </div>
            <Button width="300px">Empezar con Bookify</Button>
        </div>
    );
}

export default Price;
