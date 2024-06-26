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
                <section class="my-4">
                    <h2 class="text-xl font-bold">Maîtrise d'exécution</h2>
                    <p>Ma passion pour la programmation s'est traduite par la maîtrise de nombreux langages allant du C à Java, en passant par le web (JavaScript, HTML, CSS). Cet éventail de langages m'a permis de comprendre les aspects divers du développement, qu'ils soient théoriques, orientés objet ou web. Réaliser des programmes pour résoudre des problèmes spécifiques, écrire du code robuste et efficace dans divers contextes fait partie intégrante de ma formation.</p>
                </section>

                <section class="my-4">
                    <h2 class="text-xl font-bold">Langages maîtrisés :</h2>
                    <ul class="list-disc list-inside">
                        <li>C</li>
                        <li>Java</li>
                        <li>HTML, CSS, JavaScript</li>
                    </ul>
                    <div className="flex justify-center my-8">
                        <img src={CLogo} alt="C" className="mx-2 h-16 object-contain" style={{ flex: '1 1 auto' }} />
                        <img src={JavaLogo} alt="Java" className="mx-2 h-16 object-contain" style={{ flex: '1 1 auto' }} />
                        <img src={HCJ} alt="HTML, CSS, JS" className="mx-2 h-16 object-contain" style={{ flex: '1 1 auto' }} />
                    </div>
                </section>

                <section class="my-4">
                    <h2 class="text-xl font-bold">Optimisation des applications informatiques</h2>
                    <p>J'ai affiné ma capacité à adapter et optimiser des solutions informatiques. Que ce soit par l'utilisation de techniques stratégiques avancées pour l'optimisation des performances des algorithmes ou par la réduction de la complexité du code, mon objectif est toujours d'atteindre l'efficacité maximale.</p>
                </section>

                <section class="my-4">
                    <h2 class="text-xl font-bold">Administration des systèmes informatiques</h2>
                    <p>De l'architecture des systèmes à l'installation et la configuration des systèmes, j'ai acquis une expérience concrète en gérant diverses plateformes informatiques. Identifier et corriger les problèmes de performance ainsi que maintenir des systèmes sains sont des aspects cruciaux de mes compétences.</p>
                </section>

                <section class="my-4">
                    <h2 class="text-xl font-bold">Expérience de Stage</h2>
                    <p>Lors de mon stage à l'Institut de Recherche pour le Développement (IRD), j'ai travaillé sur le développement d'un composant de visualisation de données environnementales pour la plateforme Theia Ozcar. Ce projet m'a permis de mettre en pratique mes compétences en Vue.js, TypeScript, Quasar, et Apache ECharts, tout en collaborant avec une équipe de chercheurs et de développeurs.</p>
                    <ul class="list-disc list-inside">
                        <li>Créer une interface utilisateur pour visualiser et comparer des graphiques de données environnementales.</li>
                        <li>Intégrer cette interface dans la plateforme Theia Ozcar pour une utilisation continue par les chercheurs.</li>
                        <li>Initialisation du chart et réactivité dans Vue.js : Utilisation du hook onMounted pour s'assurer que le DOM est monté avant l'initialisation d'ECharts, résolvant ainsi les problèmes de chargement.</li>
                        <li>Réactivité des props de type array : Mise en place d'un watcher avec l'option deep: true pour détecter les changements dans les arrays, assurant ainsi une mise à jour correcte des données.</li>
                        <li>Gestion des appels asynchrones : Utilisation des fonctions async et await pour garantir la récupération complète des données avant de mettre à jour l'affichage.</li>
                    </ul>
                </section>

                <section class="my-4">
                    <h2 class="text-xl font-bold">Conclusion</h2>
                    <p>En tant qu'étudiant en Informatique avec une compréhension approfondie des techniques et une capacité à travailler en équipe, je suis prêt à relever les défis de la profession. Mon objectif est de contribuer au développement et à l'innovation dans le domaine de l'informatique, tout en continuant à apprendre et à évoluer.</p>
                </section>
                <div className="flex flex-col items-center my-8 ">
                    <div className="flex items-center justify-center w-full max-w-2xl bg-[#FFF5E1] rounded-2xl shadow-sm p-2">
                        <img src={CV} alt="Sami Abbas CV" className="w-1/3 rounded shadow" />
                        <div className="text-center ml-4">
                            <a href="https://www.canva.com/design/DAGIrs3WxDk/-LxdeMxft3zEhZOOqdT8rw/view?utm_content=DAGIrs3WxDk&utm_campaign=designshare&utm_medium=link&utm_source=editor" className="inline-flex items-center text-blue-500 hover:text-blue-700">
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
