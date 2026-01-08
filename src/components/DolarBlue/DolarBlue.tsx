import { useEffect, useState } from 'react';
import "./DolarBlue.css";

const DolarBlue = () => {
    const [venta, setVenta] = useState<number | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetch('https://dolarapi.com/v1/dolares/blue')
            .then((res) => res.json())
            .then((data) => {
                setVenta(Math.round(12000 / data.venta));
            })
            .catch((err) => {
                console.error('Error al obtener cotización:', err);
                setError('No se pudo obtener la cotización');
            });
    }, []);

    if (error) return <p>{error}</p>;

    return (
        <div className="dolarBlueContainer">
            <p className="DolarBlueText">{venta} USD</p>
        </div>
    );
}

export default DolarBlue;