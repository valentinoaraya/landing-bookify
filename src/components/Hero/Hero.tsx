import "./Hero.css"
import Title from "../../common/Title/Title";
import Button from "../../common/Button/Button";
import videoSchedulingAppointment from "../../assets/videos/pidiendo-turno-opt.mp4"

const Hero = () => {
    return (
        <div className="heroContainer">
            <Title>Gestioná tus turnos de manera eficiente</Title>
            <p className="pHero">Bookify te ayuda a organizar y optimizar los turnos de tus clientes en un solo lugar</p>
            <Button
                width="300px"
                onSubmit={() => window.open("https://wa.me/5492625660880?text=%C2%A1Hola!%20Quiero%20empezar%20a%20usar%20Bookify%20en%20mi%20empresa.%20%C2%BFPod%C3%A9s%20contarme%20c%C3%B3mo%20es%20el%20proceso%3F", '_blank')}
            >
                Empezar con Bookify
            </Button>
            <div className="heroImage">
                <video autoPlay loop muted playsInline width={"100%"}>
                    <source src={videoSchedulingAppointment} type="video/mp4" />
                    Tu navegador no soporta videos
                </video>
            </div>
        </div>
    );
}

export default Hero;
