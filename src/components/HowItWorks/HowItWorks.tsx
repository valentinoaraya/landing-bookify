import "./HowItWorks.css";
import Title from "../../common/Title/Title";
import { NumberOneIcon, NumberTwoIcon, NumberThreeIcon } from "../../common/Icons/Icons";
import videoAddingService from "../../assets/videos/agregando-servicio-opt.mp4"

const HowItWorks = () => {
    return (
        <div className="howItWorksContainer">
            <Title
                fontSize={window.innerWidth <= 760 ? "2rem" : "3rem"}
            >
                Comenzá a utilizarlo ahora
            </Title>
            <div className="howItWorksContent">
                <div className="howItWorksSteps">
                    <div className="step">
                        <div className="stepTitle">
                            <NumberOneIcon
                                width={window.innerWidth <= 760 ? "30px" : "40px"}
                                height={window.innerWidth <= 760 ? "30px" : "40px"}
                                fill="#A8DADC"
                            />
                            <Title
                                fontSize={window.innerWidth <= 760 ? "1.5rem" : "1.8rem"}
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
                                width={window.innerWidth <= 760 ? "30px" : "40px"}
                                height={window.innerWidth <= 760 ? "30px" : "40px"}
                                fill="#A8DADC"
                            />
                            <Title
                                fontSize={window.innerWidth <= 760 ? "1.5rem" : "1.8rem"}
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
                                width={window.innerWidth <= 760 ? "30px" : "40px"}
                                height={window.innerWidth <= 760 ? "30px" : "40px"}
                                fill="#A8DADC"
                            />
                            <Title
                                fontSize={window.innerWidth <= 760 ? "1.5rem" : "1.8rem"}
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
