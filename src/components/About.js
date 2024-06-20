import React from 'react';
import { FaArrowDown } from 'react-icons/fa'; // Assurez-vous d'avoir installé react-icons
import { FaFilePdf } from 'react-icons/fa'; // Pour l'icône du CV
import CV from "../Images/CV.png"

import CLogo from "../Images/CLogo.png"
import JavaLogo from "../Images/JavaLogo.png"
import HCJ from "../Images/HCJ.png"

const About = () => {
    return (
        <div className="bg-white p-8">
            <div className="container mx-auto">
                <h1 className="text-3xl font-bold mb-8">About Me</h1>
                <p className="text-lg mb-4">
                    Actuellement en deuxième année à l'IUT Informatique de la Doua, j'ai eu l'opportunité d'approfondir mes connaissances et compétences dans le domaine de l'informatique. Ce parcours m'a permis de développer et révéler des compétences techniques et analytiques.
                </p>
                <h2 className="text-2xl font-semibold mb-4">Maîtrise d'exécution</h2>
                <p className="text-lg mb-4">
                    Ma passion pour la programmation s'est traduite par la maîtrise de nombreux langages allant du C à Java, en passant par le web (JavaScript, HTML, CSS). Cet éventail de langages m'a permis de comprendre les aspects divers du développement, qu'ils soient théoriques, orientés objet ou web. Réaliser des programmes pour résoudre des problèmes spécifiques, écrire du code robuste et efficace dans les divers thèmes font partie de notre formation.
                </p>
                <div className="flex justify-center my-8">
                    <img src={CLogo} alt="C" className="mx-2 h-16 object-contain" style={{ flex: '1 1 auto' }} />
                    <img src={JavaLogo} alt="Java" className="mx-2 h-16 object-contain" style={{ flex: '1 1 auto' }} />
                    <img src={HCJ} alt="HTML, CSS, JS" className="mx-2 h-16 object-contain" style={{ flex: '1 1 auto' }} />
                </div>

                <h2 className="text-2xl font-semibold mb-4">Optimisation des applications informatiques</h2>
                <p className="text-lg mb-4">
                    J'ai raffiné ma capacité à adapter et optimiser des problèmes informatiques. Que ce soit par l'utilisation de techniques stratégiques avancées pour l'optimisation des performances des algorithmes, mon but est toujours d'atteindre l'efficacité maximale.
                </p>
                <h2 className="text-2xl font-semibold mb-4">Administration des systèmes informatiques</h2>
                <p className="text-lg mb-4">
                    De l'architecture des systèmes à l'installation et la configuration des systèmes, j'acquiers une expérience du monde réel en gérant les plateformes systèmes informatiques. Inspecter et corriger les problèmes de performance et maintenir des systèmes sains sont des aspects cruciaux de ma compétence.
                </p>
                <h2 className="text-2xl font-semibold mb-4">Amélioration des systèmes informatiques en communauté</h2>
                <p className="text-lg mb-4">
                    Le travail de groupe est au cœur de l'informatique, partager des idées et les diverses solutions avec des collègues, travailler dans un cadre de développement agile, et la visualisation de ces systèmes sont des atouts que j'ai acquis.
                </p>
                <h2 className="text-2xl font-semibold mb-4">Conduite de projet</h2>
                <p className="text-lg mb-4">
                    La réussite dépend en grande partie de la gestion d'équipe, de développer une capacité à mener des projets de bout en bout, et en respectant toujours les normes de bonnes pratiques.
                </p>
                <h2 className="text-2xl font-semibold mb-4">Travail en équipe informatique</h2>
                <p className="text-lg mb-4">
                    Le succès dans l'informatique ne dépend pas seulement des capacités techniques, mais aussi de la volonté de travailler en équipe. Partager des idées, des solutions et apprendre des autres est aussi important que la mise en œuvre de ces idées.
                </p>
                <p className="text-lg mb-8">
                    En tant qu'étudiant en Informatique avec une compréhension approfondie des techniques et une capacité à travailler en équipe, je suis prêt à relever les défis de la profession. Mon objectif est de contribuer au développement et à l'innovation dans le domaine de l'informatique, tout en continuant à apprendre et à évoluer.
                </p>
                <div className="flex flex-col items-center my-8 ">
                    <div className="flex items-center justify-center w-full max-w-2xl bg-[#FFF5E1] rounded-2xl shadow-sm p-2">
                        <img src={CV} alt="Sami Abbas CV" className="w-1/3 rounded shadow" />
                        <div className="text-center ml-4">
                            <a href="path/to/cv.pdf" className="inline-flex items-center text-blue-500 hover:text-blue-700">
                                <FaFilePdf className="mr-2" /> Téléchargez mon CV pour plus d'informations sur mon parcours
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
