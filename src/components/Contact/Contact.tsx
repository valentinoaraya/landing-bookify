import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Linkedin, Github, MessageSquarePlus } from "lucide-react";
import { LinkPreview } from "../link-preview";
import { ButtonWithEmoji } from "../button-with-emoji";
import emailjs from "@emailjs/browser"
import { useState } from "react";
import Swal from "sweetalert2";

export const Contact: React.FC<{ themeClasses: any }> = ({ themeClasses }) => {

    const [isLoading, setIsLoading] = useState(false);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsLoading(true);
        const form = e.currentTarget;
        const formData = new FormData(form);
        emailjs.send(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
            {
                title: formData.get("title") as string,
                name: formData.get("name") as string,
                message: formData.get("message") as string,
                email: formData.get("email") as string,
            },
            {
                publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "",
                limitRate: {
                    id: "app",
                    throttle: 10000,
                }
            }
        ).then(() => {
            setIsLoading(false);
            Swal.fire({
                title: "Consulta enviada correctamente.",
                text: "Nos pondremos en contacto contigo a la brevedad.",
                icon: "success",
                draggable: false,
                confirmButtonColor: "#dc2626",
            });
            form.reset();
        }).catch((error) => {
            console.error("Error al enviar el email:", error);
            setIsLoading(false);
            Swal.fire({
                title: "Error al enviar la consulta.",
                text: "Por favor, intenta nuevamente más tarde.",
                icon: "error",
                draggable: false,
                confirmButtonColor: "#dc2626",
            });
        })
    }

    return (
        <section id="contacto" className={`py-16 lg:py-24 ${themeClasses.sectionBg}`}>
            <div className="container mx-auto px-4 lg:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-5xl font-bold mb-4">Contanos tu idea, la hacemos realidad</h2>
                    <p className={`text-xl ${themeClasses.textSecondary} max-w-3xl mx-auto`}>
                        ¿Tenés un proyecto en mente? Nos encantaría escucharte y ayudarte a convertir tu visión en una solución
                        tecnológica exitosa.
                    </p>
                </div>

                <form className="grid lg:grid-cols-2 gap-12" onSubmit={sendEmail}>
                    <Card className={`${themeClasses.cardBg} ${themeClasses.cardBorder} shadow-xl`}>
                        <CardHeader>
                            <CardTitle className={`${themeClasses.text} text-2xl`}>Envianos un mensaje</CardTitle>
                            <CardDescription className={themeClasses.textSecondary}>
                                Completá el formulario y nos pondremos en contacto contigo a la brevedad.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="space-y-2">
                                <label className={`text-sm font-medium ${themeClasses.textSecondary}`}>Nombre completo</label>
                                <Input
                                    required
                                    name="name"
                                    placeholder="Tu nombre completo"
                                    className={`${themeClasses.inputBg} ${themeClasses.inputBorder} ${themeClasses.inputText} ${themeClasses.inputPlaceholder}`}
                                />
                            </div>
                            <div className="space-y-2">
                                <label className={`text-sm font-medium ${themeClasses.textSecondary}`}>Email</label>
                                <Input
                                    required
                                    name="email"
                                    type="email"
                                    placeholder="tu@email.com"
                                    className={`${themeClasses.inputBg} ${themeClasses.inputBorder} ${themeClasses.inputText} ${themeClasses.inputPlaceholder}`}
                                />
                            </div>
                            <div className="space-y-2">
                                <label className={`text-sm font-medium ${themeClasses.textSecondary}`}>Asunto</label>
                                <Input
                                    required
                                    name="title"
                                    placeholder="Idea, proyecto o consulta"
                                    className={`${themeClasses.inputBg} ${themeClasses.inputBorder} ${themeClasses.inputText} ${themeClasses.inputPlaceholder}`}
                                />
                            </div>
                            <div className="space-y-2">
                                <label className={`text-sm font-medium ${themeClasses.textSecondary}`}>Mensaje</label>
                                <Textarea
                                    required
                                    name="message"
                                    placeholder="Contanos sobre tu proyecto o idea..."
                                    rows={5}
                                    className={`${themeClasses.inputBg} ${themeClasses.inputBorder} ${themeClasses.inputText} ${themeClasses.inputPlaceholder}`}
                                />
                            </div>
                            <ButtonWithEmoji
                                emoji="📩"
                                className="w-full"
                                type="submit"
                                isLoading={isLoading}
                                disabled={isLoading}
                            >
                                Enviar mensaje
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </ButtonWithEmoji>
                        </CardContent>
                    </Card>

                    <div className="space-y-8">
                        <div>
                            <h3 className={`text-2xl font-bold ${themeClasses.text} mb-4`}>Información de contacto</h3>
                            <div className="space-y-4">
                                <div className="flex items-center space-x-3">
                                    <Mail className="h-5 w-5 text-red-400" />
                                    <span className={themeClasses.textSecondary}>aedestechnologies@gmail.com</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <Linkedin className="h-5 w-5 text-red-400" />
                                    <LinkPreview url="https://www.linkedin.com/company/aedestech/" isStatic={true} imageSrc="/team/aedes-linkedin.png">
                                        <span className={themeClasses.textSecondary}>linkedin.com/company/aedestech</span>
                                    </LinkPreview>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <Github className="h-5 w-5 text-red-400" />
                                    <LinkPreview url="https://github.com/Aedes" isStatic={true} imageSrc="/team/aedes-github.png">
                                        <span className={themeClasses.textSecondary}>github.com/aedes</span>
                                    </LinkPreview>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-red-500/10 to-rose-600/10 p-6 rounded-lg border border-red-500/20">
                            <h4 className={`text-xl font-bold ${themeClasses.text} mb-2`}>¿Listo para comenzar?</h4>
                            <p className={`${themeClasses.textSecondary} mb-4`}>
                                Transformemos juntos tu idea en una solución tecnológica innovadora que impulse tu negocio.
                            </p>
                            <div
                                onClick={() => { window.open("https://wa.me/5492625660880?text=%C2%A1Hola!%20Quiero%20iniciar%20un%20proyecto%20con%20Aedes.%20%C2%BFPodemos%20hablar%3F", '_blank') }}
                            >
                                <Button variant="outline" className="border-red-500 text-red-400 hover:bg-red-500/10">
                                    <MessageSquarePlus className="text-red-400" />
                                    Agendar reunión
                                </Button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
}