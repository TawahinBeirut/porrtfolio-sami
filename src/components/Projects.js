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
                    description="Projet de Groupe pour la SAE ou jsp quoi"
                    presImage={Unifree}
                /><Project
                    title="Fitness Guide"
                    githubLink="https://github.com/TawahinBeirut/UnifreeOfficial"
                    description=" projet mobile permetant au utilisateur de faciliter leur chercher de salle de sport autour de chez eux en ayant les note pas etoiles des salles et la distance grace a l'api de google maps"
                    presImage={AppMobile}
                /><Project
                    title="theia ozcar"
                    githubLink="https://github.com/TawahinBeirut/UnifreeOfficial"
                    description=" projet de mon sujet de stage un site permentant au chercheur des observateur de publier leur donner recolter et de reussir a les afficher dans des graphe pour voir l'evolution"
                    presImage={MedicalLogi}
                />
            </div>
        </div>
    );
}
