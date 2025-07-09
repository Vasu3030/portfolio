import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

export const contents = [
    {
        id: 0,
        content: [
            {
                title: "CNIP Portail - Econocom",
                description:
                    "Durant mon alternance chez Econocom, j’ai travaillé sur la refonte d’un portail interne utilisé en production par les équipes de management et technicien. Cet outil centralisait le suivi des tickets, la gestion des collaborateurs, et les indicateurs de performance. En raison du caractère confidentiel du projet, il n’est pas possible de montrer certaines choses ayant des données réelles.",
                content: (
                    <div className="flex h-full w-full items-center justify-center">
                        <Zoom>
                            <img
                                src="/econocom.jpg"
                                alt="Suivi production"
                                className="h-full w-full object-contain cursor-zoom-in"
                            />
                        </Zoom>
                    </div>
                ),
            },
            {
                title: "Gestion des collaborateurs",
                description:
                    "Une section dédiée permettait d’ajouter, modifier ou désactiver des collaborateurs. Chaque profil contenait : missions assignées, statut (actif/inactif), taux d’occupation, équipe, etc. Les managers pouvaient aussi visualiser rapidement qui était disponible pour une nouvelle mission.",
                content: (
                    <div className="flex h-full w-full items-center justify-center">
                        <Zoom>
                            <img
                                src="/econocom_collabs.png"
                                alt="Gestion collaborateurs"
                                className="h-full w-full object-contain cursor-zoom-in"
                            />
                        </Zoom>
                    </div>
                ),
            },
            {
                title: "Import des tickets Enedis / GRDF",
                description:
                    "Le portail permettait d'importer les tickets de production provenant des outils métiers d'Enedis et GRDF. Les collaborateurs téléchargeaient les fichiers exports (souvent au format Excel ou CSV) depuis ces plateformes externes, puis les importaient via un formulaire dédié sur le portail. Les données étaient ensuite transformées et stockées dans notre base MySQL pour un suivi centralisé.",
                content: (
                    <div className="flex h-full w-full items-center justify-center">
                        <Zoom>
                            <img
                                src="/econocom_importdata.png"
                                alt="Import manuel Enedis GRDF"
                                className="h-full w-full object-contain cursor-zoom-in"
                            />
                        </Zoom>
                    </div>
                ),
            },
            {
                title: "Technologies utilisées",
                description:
                    "Le portail a été développé avec un stack fullstack moderne : ReactJs + TypeScript côté frontend, NodeJs (Express) pour les APIs. La base de données était en MySQL, et PHP avant la refonte du portail. L’UI utilisait TailwindCSS pour un design rapide et responsive.",
                content: (
                    <div className="flex flex-row gap-18 justify-center items-center">
                        <div className="pt-3 flex flex-wrap justify-center items-center gap-4 min-w-30">
                            {['ReactJs', 'NodeJs', 'TypeScript', 'Express', 'TailwindCSS', 'MySQL', 'PHP'].map((item, i) => (
                                <span
                                    key={i}
                                    className="py-2 px-3 text-xs hover:text-sm
                    rounded-lg text-center border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white
                    transition-all duration-150 ease-in-out"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                ),
            },
        ]
    },
    {
        id: 1,
        content: [
            {
                title: "GasSense",
                description:
                    "GasSense est une solution IoT conçue pour aider les gérants de camping à surveiller à distance le niveau de gaz de leurs bouteilles et anticiper les risques liés aux fuites ou aux manques. Ce projet a été réalisé de manière collaborative avec des camarades de classe. Il allie hardware, infrastructure cloud et développement logiciel pour offrir une solution complète, du terrain jusqu'à l'interface utilisateur.",
                content: (
                    <div className="flex h-full w-full items-center justify-center">
                        <Zoom>
                            <img
                                src="/gassense.png"
                                alt="Présentation GasSense"
                                className="h-full w-full object-contain cursor-zoom-in"
                            />
                        </Zoom>
                    </div>
                ),
            },

            {
                title: "Architecture du projet : LoRaWAN & AWS",
                description:
                    "Les capteurs installés sur les bouteilles de gaz étaient connectés à des microcontrôleurs capables de mesurer le taux de gaz restant. Les données étaient transmises via le réseau LoRaWAN jusqu’à une gateway, puis redirigées vers AWS IoT Core. Une fonction AWS Lambda se chargeait de traiter les messages entrants et de les stocker dans DynamoDB. Cette architecture cloud serverless offrait une solution scalable, robuste et peu coûteuse.",
                content: (
                    <div className="flex h-full w-full items-center justify-center">
                        <Zoom>
                            <img
                                src="/gassense_schema.png"
                                alt="Architecture du projet GasSense"
                                className="h-full w-full object-contain cursor-zoom-in"
                            />
                        </Zoom>
                    </div>
                ),
            },
            {
                title: "Interface web en temps réel",
                description:
                    "L’interface web affichait une liste claire des capteurs déployés avec leurs informations principales : nom, statut (actif/inactif), dernière mesure et seuil critique. Un code couleur permettait d’identifier rapidement les capteurs en alerte.",
                content: (
                    <div className="flex h-full w-full items-center justify-center">
                        <Zoom>
                            <img
                                src="/gassense_sensorlist.png"
                                alt="Liste des capteurs"
                                className="h-full w-full object-contain cursor-zoom-in"
                            />
                        </Zoom>
                    </div>
                ),
            },
            {
                title: "Détail d’un capteur & historique",
                description:
                    "Chaque capteur disposait d’une page dédiée affichant ses données récentes, ses seuils, son état et un graphique retraçant l’évolution de la concentration de gaz dans le temps. Cette vue facilitait l’analyse des fuites ou anomalies.",
                content: (
                    <div className="flex h-full w-full items-center justify-center">
                        <Zoom>
                            <img
                                src="/gassense_sensor.png"
                                alt="Détail capteur"
                                className="h-full w-full object-contain cursor-zoom-in"
                            />
                        </Zoom>
                    </div>
                ),
            },
            {
                title: "Technologies utilisées",
                description:
                    "L’interface utilisateur a été développée avec ReactJs et TailwindCSS pour une expérience fluide et responsive. Le backend s’appuyait sur une architecture NodeJs et Serverless avec AWS (Lambda, IoT Core, DynamoDB). L’infrastructure était provisionnée avec Terraform pour une gestion automatisée et versionnée de l’environnement cloud.",
                content: (
                    <div className="flex flex-row gap-18 justify-center items-center">
                        <div className="pt-3 flex flex-wrap justify-center items-center gap-4 min-w-30">
                            {['ReactJs', 'NodeJs', 'TypeScript', 'TailwindCSS', 'AWS', 'Serverless', 'Terraform', 'MySQL',].map((item, i) => (
                                <span
                                    key={i}
                                    className="py-2 px-3 text-xs hover:text-sm
                    rounded-lg text-center border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white
                    transition-all duration-150 ease-in-out"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                ),
            },
        ]

    },
];