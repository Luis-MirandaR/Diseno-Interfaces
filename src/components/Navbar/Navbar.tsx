import { useState } from 'react';
import { Search, ChevronDown, ArrowRightFromLine } from 'lucide-react';
import { Sidebar } from '../Sidebar/Sidebar';
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

            <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
        </>
    );
}