import React from 'react';
import Unifree from '../Images/Unifree.png';
import Project from './Project';
import MedicalLogi from "../Images/MedicalLogi.png"
import AppMobile from "../Images/AppMobile.png"

export default function Projects() {
    return (
        <div className="bg-white p-8 ">
            <div className="container mx-auto text-center">
                <h1 className="text-3xl font-bold mb-4">Projects</h1>
                <p className="text-lg text-gray-700">
                    Voici quelques exemples de projet que j’ai pu réaliser pendant mes années scolaires.
                </p>
            </div>
            <div className="flex flex-wrap justify-center">
                <Project
                    title="Unifree"
                    githubLink="https://github.com/TawahinBeirut/UnifreeOfficial"
                    description="UniFree est un projet collaboratif dans lequel nous avons créé un site d'e-learning. Ce site a été développé en utilisant React pour la partie frontend et Tailwind CSS pour le style."
                    presImage={Unifree}
                /><Project
                    title="Fitness Guide"
                    githubLink="https://github.com/TawahinBeirut/UnifreeOfficial"
                    description="Nous avons développé, mon collègue et moi, une application mobile visant à faciliter la recherche de salles de sport à proximité des utilisateurs. Cette application aide également les utilisateurs à prendre la meilleure décision possible, grâce à l'intégration de l'API Google Maps."
                    presImage={AppMobile}
                /><Project
                    title="theia ozcar"
                    githubLink="https://github.com/TawahinBeirut/UnifreeOfficial"
                    description="Pendant mon stage, j'ai travaillé sur un site web facilitant la publication des recherches par les chercheurs et rendant accessibles au public les résultats de leurs observations."
                    presImage={MedicalLogi}
                />
            </div>
        </div>
    );
}
