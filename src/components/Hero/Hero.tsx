import "./Hero.css"
import Title from "../../common/Title/Title";
import Button from "../../common/Button/Button";

const Hero = () => {
    return (
        <div className="heroContainer">
            <Title>
                Agendá, cobrales y notificá… <span className="highlight">todo en un solo lugar</span>
            </Title>
            <p className="pHero">Configurá tus turnos, compartí un link con tus clientes y empezá a recibir reservas. Todo desde una sola plataforma.</p>
            <Button
                width="300px"
                onSubmit={() => window.open("https://bookify.aedestec.com/", '_blank')}
            >
                Comenzá Ahora
            </Button>
            <div className="heroImage">
                <div className="youtubeVideo">
                    <iframe
                        src="https://www.youtube.com/embed/TgdDMe12cCQ?controls=1&modestbranding=1&rel=0&enablejsapi=1"
                        title="Guía rápida Bookify - Aedes"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        id="youtube-video"
                    />
                </div>
            </div>
        </div>
    );
}

export default Hero;
