import { Card } from './components/Card/Card';
import { Header } from './components/Header/Header';
import './App.css'
import { Navbar } from './components/Navbar/Navbar';

const img1: string = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv3C5cat6iptKxWBRLveiGUDH54ZXYMfV2fQ&s';
const img2: string = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiInPnjS4-mEYU7ZV5KyzlH0tX3hw42ySwCQ&s'
const img3: string = 'https://sanluispotosi.quadratin.com.mx/www/wp-content/uploads/2021/02/WhatsApp-Image-2021-02-09-at-6.36.49-PM.jpeg'
const img4: string = 'https://ciep.ing.uaslp.mx/intranet/img/user/personal/10314.png'
const img5: string = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVnByA6u_Gcr3HW_zYkykVZS_hZ9nzdk_yww&s'

interface Professor {
    id: number;
    imageURL: string;
    name: string;
    rating: number;
    subject: string;
}

const professors: Professor[] = [
    { id: 1, imageURL: img1, name: 'Pedro David Arjona Villicaña', rating: 5, subject: 'Modelado y simulación de Redes' },
    { id: 2, imageURL: img2, name: 'César Augusto Puente Montejano', rating: 5, subject: 'Visión Computacional' },
    { id: 3, imageURL: img3, name: 'Genoveva Viridiana Silva Rodríguez', rating: 5, subject: 'Diseño de Interfaces' },
    { id: 4, imageURL: img4, name: 'Francisco Eduardo Martínez Pérez', rating: 5, subject: 'Proyectos Computacionales I' },
    { id: 5, imageURL: img5, name: 'Alejandra Guadalupe Silva Trujillo', rating: 5, subject: 'Criptografía' },
];

const handleSelect = (id: number) => {
    console.log('Profesor seleccionado:', id);
};


export const App = () => {
    return (
        <>
            <div className="app">
                <Header />
                <Navbar />

                <main className="main-content">
                    <div className="cards-grid">
                        {
                            professors.map(({ id, imageURL, name, rating, subject }) => (
                                <Card imageURL={imageURL} name={name} raiting={rating} subject={subject} onSelect={() => handleSelect(id)}></Card>
                            ))
                        }
                    </div>
                </main>
            </div>
        </>
    );
};