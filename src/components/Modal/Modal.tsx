import { useState } from 'react';
import { Button } from '../Button/Button';
import { X, Calendar, Clock } from 'lucide-react'
import './Modal.css'
import type { MouseEventHandler } from 'react';

interface Props {
    isOpen: boolean;
    onClose: MouseEventHandler;
    onConfirm: MouseEventHandler;
    imageURL: string;
    professor: string;
}

export const Modal = ({ isOpen, onClose, onConfirm, imageURL, professor }: Props) => {
    if (!isOpen) return null;

    const [selectedDate, setSelectedDate] = useState('');
    const [selectedTime, setSelectedTime] = useState('');

    const handleConfirmClick = () => {
        if (selectedDate && selectedTime) {
            onConfirm({ date: selectedDate, time: selectedTime });
        } else {
            alert('Por favor seleccione fecha y hora');
        }
    };

    const today = new Date().toISOString().split('T')[0];

    return (
        <>
            <div className="modal-overlay" onClick={onClose}>
                <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                    <div className="modal-header">
                        <h2 className="modal-title">Confirmar selección</h2>
                        <button className="modal-close-btn" onClick={onClose}>
                            <X size={24} />
                        </button>
                    </div>

                    <div className="modal-body">
                        <div className="modal-profesor-info">
                            <div className="modal-avatar">
                                <img
                                    src={imageURL}
                                    alt="Profesor"
                                />
                            </div>
                            <h3 className="modal-profesor-name">{professor}</h3>
                        </div>

                        <div className="modal-details">
                            <div className="modal-input-group">
                                <label htmlFor="date-input" className="modal-input-label">
                                    <Calendar size={18} />
                                    <span>Fecha</span>
                                </label>
                                <input
                                    id="date-input"
                                    type="date"
                                    className="modal-date-input"
                                    value={selectedDate}
                                    onChange={(e) => setSelectedDate(e.target.value)}
                                    min={today}
                                />
                            </div>

                            <div className="modal-input-group">
                                <label htmlFor="time-input" className="modal-input-label">
                                    <Clock size={18} />
                                    <span>Hora</span>
                                </label>
                                <input
                                    id="time-input"
                                    type="time"
                                    className="modal-time-input"
                                    value={selectedTime}
                                    onChange={(e) => setSelectedTime(e.target.value)}
                                />
                            </div>
                        </div>

                        <p className="modal-confirmation-text">
                            ¿Está seguro que desea seleccionar a este profesor?
                        </p>
                    </div>

                    <div className="modal-footer">
                        <Button variant="secondary" onClick={onClose} text='Cancelar'>
                        </Button>
                        <Button variant="primary" onClick={onConfirm} text='Confirmar'>
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
}