import { useState } from 'react';
import { Search, ChevronDown, ArrowRightFromLine, Home, Calendar, History, Users, MessageSquare, ThumbsUp, BookOpen, Edit } from 'lucide-react';
import './Navbar.css';


export const Navbar = ({ }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (

        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <div className="navbar-top">
                        <button className="navbar-menu-btn" onClick={toggleSidebar}>
                            <ArrowRightFromLine size={24} />
                        </button>
                        <div className="navbar-search-wrapper">
                            <input type="text" placeholder="Buscar" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="navbar-search-input" />
                            <Search className="navbar-search-icon" size={20} />
                        </div>
                    </div>
                    <div className="navbar-filters">
                        <button className="navbar-filter-btn">
                            <span>Materia</span>
                            <ChevronDown size={16} />
                        </button>

                        <button className="navbar-filter-btn">
                            <span>Disponibilidad</span>
                            <ChevronDown size={16} />
                        </button>

                        <button className="navbar-filter-btn">
                            <span>Modalidad</span>
                            <ChevronDown size={16} />
                        </button>
                    </div>
                </div>
            </nav>

            {isSidebarOpen && (
                <div className="sidebar-overlay" onClick={toggleSidebar}></div>
            )}

            <aside className={`sidebar ${isSidebarOpen ? 'sidebar-open' : ''}`}>
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
    );
}