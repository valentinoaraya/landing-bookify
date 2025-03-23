import "./Benefit.css"
import Title from "../../../common/Title/Title";
import { CheckIcon, MoneyIcon, NotificationIcon } from "../../../common/Icons/Icons";

interface Props {
    title: string;
    description: string;
    image?: string;
    style: "vertical" | "horizontal" | "horizontal-reverse" | "special-mobile";
}

const BenefitSection: React.FC<Props> = ({ title, description, style }) => {

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
                                    widht="20px"
                                    height="20px"
                                    fill="#A8DADC"
                                />
                                <Title
                                    fontSize="1.2rem"
                                    width="100%"
                                    textAlign="left"
                                >
                                    Confirmaciones y cancelaciones de turnos
                                </Title>
                            </div>
                            <div className="iconContainer">
                                <NotificationIcon
                                    widht="20px"
                                    height="20px"
                                    fill="#A8DADC"
                                />
                                <Title
                                    fontSize="1.2rem"
                                    width="100%"
                                    textAlign="left"
                                >
                                    Recordatorios el día anterior
                                </Title>
                            </div>
                            <div className="iconContainer">
                                <MoneyIcon
                                    widht="20px"
                                    height="20px"
                                    fill="#A8DADC"
                                />
                                <Title
                                    fontSize="1.2rem"
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
            <div className="benefitImage">

            </div>
        </div>
    );
}

export default BenefitSection;
