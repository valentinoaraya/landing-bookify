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
            <div className="heroImage" style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
                <iframe 
                    src="https://www.loom.com/embed/a6d20e360dd841b49e9066900202780e" 
                    allowFullScreen
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                />
            </div>
        </div>
    );
}

export default Hero;
