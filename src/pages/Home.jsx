import React from 'react';
import teamImage from '../assets/team.jpg';

const Home = () => {
    return (
        <div>
            <h1>Bienvenidos!</h1>
            <h2>Aplicacion web para punto de ventas, desarrollada durante el taller Desarrollo Frontend en Puerto Jóven.</h2>
            <img src={teamImage} alt="team" style={{width:'80svw'}} />
        </div>
    );
};

export default Home;