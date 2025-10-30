import "./Hero.css"
import Title from "../../common/Title/Title";
import Button from "../../common/Button/Button";
import videoSchedulingAppointment from "../../assets/videos/pidiendo-turno-opt.mp4"

const Hero = () => {
    return (
        <div className="heroContainer">

                <Title>
                    Agendá, cobrales y notificá… <span className="highlight">todo en un solo lugar</span>
                </Title>

                <p className="pHero">Configurá tus turnos, compartí un link con tus clientes y empezá a recibir reservas. Todo desde una sola plataforma.</p>
                
                <Button
                    width="300px"
                    onSubmit={() => window.open("https://www.instagram.com/aedes.tech/", '_blank')}
                >
                    Comenzá Ahora
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
