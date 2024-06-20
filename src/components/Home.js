import React from 'react';
import { FaArrowDown } from 'react-icons/fa'; // Assurez-vous d'avoir installé react-icons
import Sami from "../Images/sami.png"

const Home = () => {
  return (
    <div className="min-h-screen p-8 bg-white">
      <div className="container mx-auto bg-[#FFF5E1] p-8 rounded-lg shadow-lg">
        <div className="flex flex-col md:flex-row items-center mb-16">
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <img src={Sami} alt="Sami ABBAS" className="w-full h-auto rounded shadow" />
          </div>
          <div className="w-full md:w-2/3 pl-0 md:pl-8">
            <h1 className="text-4xl font-bold mb-2">Sami ABBAS</h1>
            <h2 className="text-2xl text-gray-700">Computer science student</h2>
          </div>
        </div>
        <div className="text-center bg-white mb-16 rounded-xl shadow-xl p-12">
          <h3 className="text-3xl font-semibold mb-4">Hello !</h3>
          <p className="text-lg leading-relaxed">
            Bienvenue sur mon portfolio ! Étudiant en informatique à l'IUT DOUA, je suis un Franco-Libanais passionné par le développement web et le basket, je trouve toujours du temps pour dribbler entre les lignes de code. Titulaire du permis de conduire, j'ai un faible pour les voitures, particulièrement les Porsche, symbolisant pour moi la fusion parfaite entre performance et élégance. À travers ce site, je partage mon parcours, mes projets et mes aspirations en tant que futur ingénieur/développeur web. Découvrez mon univers, bienvenue dans mon monde !
          </p>
        </div>
        <div className="text-center mt-16">
          <FaArrowDown className="text-3xl text-gray-700 animate-bounce" />
        </div>
      </div>
    </div>
  );
};

export default Home;
