import { useState } from "react";
import { Button } from "../Button/Button";
import { Modal } from "../Modal/Modal";
import './Card.css'

interface Props {
    imageURL: string;
    name: string;
    raiting: Number;
    subject: string;
    onSelect: Function;
}

export const Card = ({ imageURL, name, raiting, subject, onSelect }: Props) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleSelectClick = () => {
        setIsModalOpen(true);
        if (onSelect) {
            onSelect();
        }
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleConfirm = () => {
        console.log('Confirmado:', name);
        setIsModalOpen(false);
        // Aquí puedes agregar la lógica de confirmación
    };


    return (
        <>
            <div className="card">
                <div className="card-header">
                    <div className="card-avatar">
                        <div className="card-avatar-img">
                            <img src={imageURL} alt="avatar" />
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <h3 className="card-title">{name}</h3>
                    <div className="card-info">
                        <p>Materia: {subject}</p>
                        <p>Calificación: {raiting.toString()}</p>
                    </div>
                    <Button variant="primary" text="Seleccionar" onClick={handleSelectClick}></Button>
                </div>
            </div>

            <Modal isOpen={isModalOpen} onClose={handleCloseModal} onConfirm={handleConfirm} imageURL={imageURL} professor={name} />
        </>
    )
}