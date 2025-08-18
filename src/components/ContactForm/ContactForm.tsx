import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import "./ContactForm.css"

interface ContactFormProps {
    className?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({ className = '' }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const result = await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    subject: formData.subject,
                    message: formData.message,
                },
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );

            console.log(result.text);
            alert('✅ ¡Mensaje enviado correctamente!');
            setFormData({ name: '', email: '', subject: '', message: '' });
        } catch (error) {
            console.error(error);
            alert('❌ Error al enviar el mensaje: ' + error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className={`contactContainer ${className}`}>
            <div className="contactHeader">
                <h2 className="contactTitle">Contáctanos</h2>
                <p className="contactSubtitle">
                    ¿Tienes alguna duda o consulta? Envíanos un mensaje y te responderemos pronto.
                </p>
            </div>

            <form onSubmit={handleSubmit} className="contactForm">
                <div className="formRow">
                    <div className="inputGroup">
                        <label htmlFor="name" className="inputLabel">Nombre</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="inputField"
                            required
                        />
                    </div>

                    <div className="inputGroup">
                        <label htmlFor="email" className="inputLabel">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="inputField"
                            required
                        />
                    </div>
                </div>

                <div className="inputGroup">
                    <label htmlFor="subject" className="inputLabel">Asunto</label>
                    <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="inputField"
                        required
                    />
                </div>

                <div className="inputGroup">
                    <label htmlFor="message" className="inputLabel">Mensaje</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className="textareaField"
                        required
                    />
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`submitButton ${isSubmitting ? 'submitButtonDisabled' : ''}`}
                >
                    {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
                </button>
            </form>
        </div>
    );
};
