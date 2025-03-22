import "./Hero.css"
import Title from "../../common/Title/Title";
import Button from "../../common/Button/Button";

const Hero = () => {
    return (
        <div className="heroContainer">
            <Title>Gestioná tus turnos de manera eficiente</Title>
            <p className="pHero">Bookify te ayuda a organizar y optimizar los turnos de tus clientes en un solo lugar</p>
            <Button width="300px">Empezar con Bookify</Button>
        </div>
    );
}

export default Hero;
