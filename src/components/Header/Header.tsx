import './Header.css'
import logoUASLP from '../../assets/UASLP-logo.png'
import logoIngenieria from '../../assets/Ingenieria-logo.png'

export const Header = () => {
    return (
        <>
            <header className="header">
                <div className="header-container">
                    <div className="header-left"><img src={logoUASLP} alt="Logo UASLP - Universidad Autónoma de San Luis Potosí" className="header-logo-img" /></div>
                    <div className="header-right"><img src={logoIngenieria} alt="Logo Facultad de Ingeniería" className="header-faculty-img" /></div>
                </div>
            </header>
        </>
    );
};