import "./HowItWorks.css";
import Title from "../../common/Title/Title";
import { NumberOneIcon, NumberTwoIcon, NumberThreeIcon } from "../../common/Icons/Icons";
import videoAddingService from "../../assets/videos/agregando-servicio-opt.mp4"

const HowItWorks = () => {
    return (
        <div className="howItWorksContainer">
            <Title>Comenzá a utilizarlo ahora</Title>
            <div className="howItWorksContent">
                <div className="howItWorksSteps">
                    <div className="step">
                        <div className="stepTitle">
                            <NumberOneIcon
                                widht="40px"
                                height="40px"
                                fill="#A8DADC"
                            />
                            <Title
                                fontSize="1.8rem"
                                width="100%"
                                textAlign="left"
                            >
                                Iniciá sesión
                            </Title>
                        </div>
                        <p className="pStep">Contactanos, creamos tu cuenta y podés iniciar sesión. Conectate a Mercado Pago para cobrar señas.</p>
                    </div>
                    <div className="step">
                        <div className="stepTitle">
                            <NumberTwoIcon
                                widht="40px"
                                height="40px"
                                fill="#A8DADC"
                            />
                            <Title
                                fontSize="1.8rem"
                                width="100%"
                                textAlign="left"
                            >
                                Habilitá turnos
                            </Title>
                        </div>
                        <p className="pStep">Agregá los servicios que vas a ofrecer y habilitá los turnos los días y horarios que quieras.</p>
                    </div>
                    <div className="step">
                        <div className="stepTitle">
                            <NumberThreeIcon
                                widht="40px"
                                height="40px"
                                fill="#A8DADC"
                            />
                            <Title
                                fontSize="1.8rem"
                                width="100%"
                                textAlign="left"
                            >
                                Recibí reservas
                            </Title>
                        </div>
                        <p className="pStep">Tus clientes reservan de forma rápida y segura desde cualquier dispositivo.</p>
                    </div>
                </div>
                <div className="howItWorksImage">
                    <video autoPlay loop muted playsInline width={"100%"}>
                        <source src={videoAddingService} type="video/mp4" />
                        Tu navegador no soporta videos
                    </video>
                </div>
            </div>
        </div>
    );
}

export default HowItWorks;
