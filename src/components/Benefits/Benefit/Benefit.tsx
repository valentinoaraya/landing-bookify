import "./Benefit.css"
import Title from "../../../common/Title/Title";
import { CheckIcon, MoneyIcon, NotificationIcon } from "../../../common/Icons/Icons";

interface Props {
    title: string;
    description: string;
    video?: string;
    image?: string;
    style: "vertical" | "horizontal" | "horizontal-reverse" | "special-mobile";
}

const BenefitSection: React.FC<Props> = ({ title, description, style, image, video }) => {

    const parrafs = description.split("\n")

    return (
        <div className={`benefitContainer ${style}`}>
            <div className="dataBenefit">
                <h2 className="titleBenefit" >{title}</h2>
                {
                    parrafs.map((parraf, index) => {
                        return <p key={index} className="pBenefit">{parraf}</p>
                    })
                }
                {
                    style === "special-mobile" &&
                    <div className="specialDescription">
                        <Title
                            fontSize="1.8rem"
                            width="100%"
                            textAlign="left"
                        >
                            Te notificamos:
                        </Title>
                        <div className="iconsContainer">
                            <div className="iconContainer">
                                <CheckIcon
                                    width="20px"
                                    height="20px"
                                    fill="#A8DADC"
                                />
                                <Title
                                    fontSize={window.innerWidth <= 1030 ? "1rem" : "1.2rem"}
                                    width="100%"
                                    textAlign="left"
                                >
                                    Confirmaciones y cancelaciones de turnos
                                </Title>
                            </div>
                            <div className="iconContainer">
                                <NotificationIcon
                                    width="20px"
                                    height="20px"
                                    fill="#A8DADC"
                                />
                                <Title
                                    fontSize={window.innerWidth <= 1030 ? "1rem" : "1.2rem"}
                                    width="100%"
                                    textAlign="left"
                                >
                                    Recordatorios el día anterior
                                </Title>
                            </div>
                            <div className="iconContainer">
                                <MoneyIcon
                                    width="20px"
                                    height="20px"
                                    fill="#A8DADC"
                                />
                                <Title
                                    fontSize={window.innerWidth <= 1030 ? "1rem" : "1.2rem"}
                                    width="100%"
                                    textAlign="left"
                                >
                                    Confirmaciones de pagos
                                </Title>
                            </div>
                        </div>
                    </div>
                }
            </div>
            <div className={`benefitImage ${image ? style === "vertical" ? "imageVertical" : "imageHorizontal" : style === "special-mobile" ? "videoSpecialMobile" : "video"}`}>
                {
                    video ?
                        <video autoPlay loop muted playsInline width={"100%"}>
                            <source src={video} type="video/mp4" />
                            Tu navegador no soporta videos
                        </video>
                        :
                        <img src={image} alt="Benefit" />
                }
            </div>
        </div>
    );
}

export default BenefitSection;
