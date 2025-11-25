import React from 'react';
import teamImage from '../assets/team.jpg';

const Home = () => {
    return (
        <div style={{display:'flex',flexDirection:'column', padding: '20px' }}>
            <h1>Bienvenidos!</h1>
            <h2>Aplicacion web para punto de ventas, desarrollada durante el taller Desarrollo Frontend en Puerto Jóven. Equipo de desarrollo: Jorgelina Locardel, Maia Branchesi, Alex Burgueńo, Lorenzo Martín Prince, Carolina Valentini, Silvana Hernández. Docente: Luigi Tamagnini</h2>
            <img src={teamImage} alt="team" style={{width:'75svw',height:'auto',justifySelf:'center',alignSelf:'center'}} />
        </div>
    );
};

export default Home;