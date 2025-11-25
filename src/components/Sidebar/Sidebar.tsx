import { Home, Calendar, History, Users, MessageSquare, ThumbsUp, BookOpen, Edit } from 'lucide-react';
import './Sidebar.css';
import type { MouseEventHandler } from 'react';

interface Props {
    isOpen: boolean;
    onClose: MouseEventHandler;
}

// Sidebar recieves a boolean which indicate if its open and a handler for when its clicked to close
export const Sidebar = ({ isOpen, onClose }: Props) => {
    return (
        <>
            {isOpen && (
                <div className="sidebar-overlay" onClick={onClose}></div>
            )}

            <aside className={`sidebar ${isOpen ? 'sidebar-open' : ''}`}>
                <div className="sidebar-header">
                    <div className="sidebar-profile">
                        <div className="sidebar-avatar">
                            <Users size={32} />
                        </div>
                        <button className="sidebar-edit-btn">
                            <span>Editar perfil</span>
                            <Edit size={16} />
                        </button>
                    </div>
                </div>

                <nav className="sidebar-nav">
                    <button className="sidebar-nav-item"><Home size={20} /><span>Inicio</span></button>
                    <button className="sidebar-nav-item"><Calendar size={20} /><span>Sesiones Programadas</span></button>
                    <button className="sidebar-nav-item"><History size={20} /><span>Historial de tutorias</span></button>
                    <button className="sidebar-nav-item"><Users size={20} /><span>Foro Académico</span></button>
                    <button className="sidebar-nav-item"><MessageSquare size={20} /><span>Chat</span></button>
                    <button className="sidebar-nav-item"><ThumbsUp size={20} /><span>Recomendaciones</span></button>
                    <button className="sidebar-nav-item"><BookOpen size={20} /><span>Recursos Académicos</span></button>
                </nav>
            </aside>
        </>
    )
}