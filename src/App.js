import { useState } from "react";

const GEMINI_KEY = "AIzaSyDmWfB8lmbl86ZPSy-4JK9lkP5r8t8oEfU"; // ← Remplacez ici

const MODULES = [
  {
    id:"filieres", title:"Filières DGFiP", sub:"Fiscale & Gestion Publique", icon:"🏛️",
    grad:"from-blue-500 to-blue-700", light:"bg-blue-50", border:"border-blue-300", text:"text-blue-700",
    lessons:[
      {t:"Naissance de la DGFiP", c:"La DGFiP existe depuis 2008, née de la fusion de la Direction Générale des Impôts (DGI) et de la Direction Générale de la Comptabilité Publique (DGCP). Cette fusion visait à simplifier l'accès aux services pour le citoyen, notamment en regroupant dans un même service l'assiette et le recouvrement de l'IR. Les SIP sont nés en 2009/2010. Aujourd'hui on parle de Pôle gestion fiscale et Pôle gestion publique."},
      {t:"La filière gestion fiscale", c:"Elle regroupe :\n1. L'assiette des impôts des particuliers (IR, TH, TF, Patrimoine, Publicité foncière) et des professionnels (TVA, IS, CET...).\n2. Le recouvrement des impôts et amendes.\n3. Le contrôle des impôts.\n4. Le contentieux, les rescrits et la sécurité juridique — pour particuliers et professionnels."},
      {t:"La filière gestion publique", c:"Elle rassemble :\n1. La tenue des comptes de l'État (dépenses, recettes non fiscales).\n2. La tenue des comptes des collectivités territoriales et établissements publics.\n3. Le conseil aux collectivités.\n4. L'expertise économique et financière.\n5. Le contrôle interne comptable et bancaire.\n6. La politique immobilière de l'État."}
    ],
    quiz:[
      {q:"En quelle année la DGFiP a-t-elle été créée ?", c:["2006","2008","2010","2012"], a:1, exp:"La DGFiP est née en 2008 de la fusion de la DGI et de la DGCP."},
      {q:"Quelle est la mission principale de la filière gestion fiscale ?", c:["Gérer les retraites","Assurer l'assiette, le recouvrement et le contrôle des impôts","Gérer les biens immobiliers de l'État","Conseiller les collectivités"], a:1, exp:"La filière fiscale regroupe les missions d'assiette, recouvrement, contrôle et contentieux des impôts."},
      {q:"En quelle année les SIP ont-ils été créés ?", c:["2006/2007","2008/2009","2009/2010","2011/2012"], a:2, exp:"Les SIP sont nés en 2009/2010 pour regrouper l'assiette et le recouvrement de l'IR."},
      {q:"Quelle direction a fusionné avec la DGI pour former la DGFiP ?", c:["Direction Générale de la Comptabilité Publique","Direction Générale du Budget","Direction Nationale des Enquêtes Fiscales","Direction des Grandes Entreprises"], a:0, exp:"La DGFiP est née de la fusion de la DGI et de la DGCP."}
    ]
  },
  {
    id:"controle", title:"Contrôle Fiscal", sub:"BCR, PCE, BDV, DIRCOFI...", icon:"🔍",
    grad:"from-orange-500 to-red-600", light:"bg-orange-50", border:"border-orange-300", text:"text-orange-700",
    lessons:[
      {t:"Pourquoi le contrôle fiscal ?", c:"Le système fiscal français est déclaratif. La fraude porte atteinte à la solidarité nationale et à la concurrence loyale. Le contrôle fiscal poursuit 3 buts :\n• Finalité budgétaire : recouvrer l'impôt éludé.\n• Lutte contre la fraude : sanctionner les comportements frauduleux.\n• Garantir le civisme fiscal."},
      {t:"Les types de contrôles", c:"Contrôles du bureau :\n• La Recherche (BCR/DNEF) : 1er maillon de la chaîne.\n• Le CSP (Contrôle Sur Pièces) : depuis le bureau.\n• L'ESFP : examen contradictoire de la situation fiscale personnelle (cohérence revenus/train de vie).\n\nContrôles sur place :\n• CFE (Contrôle Fiscal Externe) : dans les entreprises — BDV (dép.), DIRCOFI (interrégional), DVNI/DNVSF (national)."},
      {t:"La Brigade de Contrôle et de Recherche (BCR)", c:"Compétence départementale. Missions :\n• Recherche du renseignement et fiscalisation pour proposer des contrôles externes.\n• Droit de communication et droit d'enquête.\n• Participe avec la DNEF aux visites et saisies.\n• Relations avec organismes sociaux, Douanes, Gendarmerie, Police, Justice.\n• Depuis 2016 : pilotage fonctionnel par la DIRCOFI.\nL'emploi implique de nombreux déplacements (permis B nécessaire)."},
      {t:"Le Pôle Contrôle Expertise (PCE)", c:"Le PCE assure la programmation des contrôles des professionnels grâce aux listes data-mining et analyses-risque. Il produit des fiches de programmation pour les BDV et DIRCOFI. L'exploitation des listes nécessite un contrôle sur pièces exhaustif et une analyse globale du dossier. Le programmeur est un acteur clé en amont de la chaîne du contrôle fiscal."},
      {t:"Les niveaux du contrôle externe", c:"• BDV : petites entreprises (CA < 1,5 M€ ventes / 0,5 M€ prestations).\n• DIRCOFI : entreprises moyennes (CA 1,5 M€ – 152,4 M€).\n• DVNI : grands groupes (CA > 152,4 M€). ~30 brigades spécialisées par secteur.\n• DNVSF : personnes physiques à forts enjeux (revenus > 2 M€ ou IFI > 6,9 M€).\n• DGE : grands groupes (CA ou actif > 400 M€)."}
    ],
    quiz:[
      {q:"Quel service assure la recherche du renseignement fiscal au niveau départemental ?", c:["PCE","DNEF","BCR","BDV"], a:2, exp:"La BCR assure la recherche du renseignement au niveau départemental."},
      {q:"Qu'est-ce que l'ESFP ?", c:["Un logiciel de gestion","L'examen contradictoire de la situation fiscale personnelle","Une brigade nationale","Un contrôle sur pièces des professionnels"], a:1, exp:"L'ESFP est l'Examen de la Situation Fiscale Personnelle, contrôle de cohérence revenus/train de vie."},
      {q:"La DIRCOFI contrôle les entreprises dont le CA (ventes) est compris entre :", c:["0 et 1,5 M€","1,5 M€ et 152,4 M€","152,4 M€ et 400 M€","Plus de 400 M€"], a:1, exp:"La DIRCOFI contrôle les entreprises de taille moyenne : CA entre 1,5 M€ et 152,4 M€."},
      {q:"Depuis quelle année la BCR bénéficie-t-elle du pilotage fonctionnel de la DIRCOFI ?", c:["2012","2014","2016","2018"], a:2, exp:"Depuis 2016, la BCR bénéficie d'un pilotage fonctionnel exercé par la DIRCOFI."},
      {q:"Quels sont les 3 objectifs du contrôle fiscal ?", c:["Informer, contrôler, sanctionner","Finalité budgétaire, lutte contre la fraude, civisme fiscal","Assiette, recouvrement, contentieux","Recherche, programmation, vérification"], a:1, exp:"Les 3 buts : finalité budgétaire, lutte contre la fraude, garantie du civisme fiscal."}
    ]
  },
  {
    id:"foncier", title:"Sphère Foncière", sub:"SPF, PTGC, Cadastre...", icon:"🏠",
    grad:"from-green-500 to-emerald-700", light:"bg-green-50", border:"border-green-300", text:"text-green-700",
    lessons:[
      {t:"Les 4 missions topographiques et cadastrales", c:"1. Mission foncière : identification et description de tous les immeubles et propriétaires.\n2. Mission fiscale : gestion des taxes foncières, évaluation de la valeur locative (VL).\n3. Mission topographique : confection et mise à jour du plan cadastral.\n4. Mission documentaire : délivrance de documents cadastraux (données cartographiques et littérales)."},
      {t:"Services de Publicité Foncière (SPF)", c:"• Mission civile : tenir à jour le fichier immobilier, garantir la sécurité des transactions.\n• Mission fiscale : percevoir les droits lors des mutations de propriété.\n• Applications : Fidji et Télé@ctes (dématérialisation avec les notaires).\n• Fusion en cours depuis 2018 : de 354 SPF à 121 (une par département).\n• Depuis 2020 : SAPF (services d'appui) épaulant les SPF à distance."},
      {t:"GMBI et Foncier Innovant", c:"GMBI (Gérer mes Biens Immobiliers) : service en ligne permettant aux propriétaires d'afficher tous leurs biens et d'effectuer des actions (consulter/déclarer).\n\nProjet Foncier Innovant : datamining et IA pour :\n• Détecter les biens potentiellement taxables (bâtis, piscines...).\n• Identifier les biens dont la valeur locative est minorée ou majorée."},
      {t:"Services d'enregistrement et SNE", c:"La mission d'enregistrement couvre la réception des actes, leur analyse juridique et la liquidation des droits. Elle confère à un acte une date certaine. Actes concernés : successions, donations, cessions de parts, fonds de commerce...\n\nSNE (Service National de l'Enregistrement) créé en janvier 2021 à Roanne : gère toutes les formalités souscrites en ligne sur impots.gouv.fr."}
    ],
    quiz:[
      {q:"Quelle application dématérialise les échanges avec les notaires dans les SPF ?", c:["Chorus","Fidji","Télé@ctes","Helios"], a:2, exp:"Télé@ctes permet de dématérialiser les échanges avec les notaires dans les SPF."},
      {q:"Vers combien de SPF le plan de fusion vise-t-il à réduire les 354 existants ?", c:["50","121","200","250"], a:1, exp:"Le plan vise à ramener le nombre de SPF à 121."},
      {q:"Où a été créé le SNE en janvier 2021 ?", c:["Paris","Lyon","Roanne","Bordeaux"], a:2, exp:"Le SNE a été créé en janvier 2021 à Roanne."},
      {q:"Que signifie GMBI ?", c:["Gestion Modernisée des Bases Immobilières","Gérer mes Biens Immobiliers","Gestion et Maintenance des Bases d'Imposition","Grand Modèle de Bases Informatiques"], a:1, exp:"GMBI signifie 'Gérer mes Biens Immobiliers'."}
    ]
  },
  {
    id:"national", title:"Directions Nationales", sub:"DNEF, DVNI, DGE, ENFIP...", icon:"🌐",
    grad:"from-purple-500 to-violet-700", light:"bg-purple-50", border:"border-purple-300", text:"text-purple-700",
    lessons:[
      {t:"Direction des Grandes Entreprises (DGE)", c:"Créée en 2002, la DGE gère les dossiers fiscaux des grands groupes (CA ou actif brut > 400 M€) et leurs filiales à plus de 50%. Elle encaisse ~50% du rendement de l'IS et ~40% de la TVA. Les équipes IFU (Inspection Fiscale Unique) gèrent les dossiers, font du contrôle sur pièces et de la programmation à destination exclusive de la DVNI."},
      {t:"DNEF — Direction Nationale des Enquêtes Fiscales", c:"Échelon national de recherche du renseignement. Elle détecte les mécanismes frauduleux, effectue des procédures de visite et de saisie (L.16B LPF) et contrôle notamment les carrousels TVA.\n\nBrigades : BII (intervention inter-régionale), B3I (ingénierie informatique), BIR (intervention rapide), BNI (investigation), BAPF (police fiscale), BNEE (enquêtes économiques)."},
      {t:"DVNI et DNVSF", c:"DVNI : contrôle les grands groupes (CA > 152,4 M€). Organisée en BVG (vérifications générales par secteur) et BVCI (comptabilités informatisées).\n\nDNVSF : contrôle les personnes physiques les plus significatives (revenus > 2 M€ ou IFI > 6,9 M€). Depuis 2016, contrôle aussi les déclarations patrimoniales des parlementaires (HATVP)."},
      {t:"ENFIP et Cap Numérique", c:"ENFIP (Noisy-le-Grand) : organise les concours et examens professionnels, les formations initiales et continues, les classes préparatoires intégrées (CPI), et assure la coopération internationale (formation de stagiaires étrangers).\n\nCap Numérique : maîtrise d'ouvrage (MOA) numérique de la DGFiP pour en faire 'l'administration numérique de référence'."}
    ],
    quiz:[
      {q:"La DGE gère les entreprises dont le CA est supérieur à :", c:["152,4 M€","200 M€","400 M€","500 M€"], a:2, exp:"La DGE gère les grands groupes dont le CA ou l'actif brut est supérieur à 400 M€."},
      {q:"Où est située l'ENFIP ?", c:["Paris","Lyon","Noisy-le-Grand","Bordeaux"], a:2, exp:"L'ENFIP est située à Noisy-le-Grand."},
      {q:"Que réalise principalement la DNEF en matière de lutte contre la fraude ?", c:["Du contrôle sur pièces uniquement","Des procédures de visite et saisie, et contrôles sur carrousels TVA","Du recouvrement forcé","De la programmation des BDV"], a:1, exp:"La DNEF effectue des procédures de visite et saisie (L.16B LPF) et contrôle les carrousels TVA."},
      {q:"Depuis quelle année la DNVSF contrôle-t-elle les déclarations patrimoniales des parlementaires ?", c:["2012","2014","2016","2018"], a:2, exp:"Depuis 2016, la DNVSF assure le contrôle des déclarations patrimoniales des parlementaires."}
    ]
  },
  {
    id:"nrp", title:"NRP & Relocalisation", sub:"Nouveau Réseau de Proximité", icon:"📍",
    grad:"from-rose-500 to-pink-600", light:"bg-rose-50", border:"border-rose-300", text:"text-rose-700",
    lessons:[
      {t:"Le Nouveau Réseau de Proximité (NRP)", c:"Mis en place de 2020 à 2024/2026. Né du Grand Débat de 2019 face au sentiment d'abandon dans les territoires ruraux.\n\nPrincipe : un usager ne doit pas se trouver à plus de 30 minutes de ses services.\n\nPoints de contact : anciennes trésoreries reconverties, MSAP, France Services, accueil en mairie, bus itinérant. À l'horizon 2022 : 2 000 maisons France Services déployées."},
      {t:"SGC et CDL — Les nouveaux services du NRP", c:"Le NRP consacre la scission des missions des trésoreries en 2 parties :\n\n• SGC (Services de Gestion Comptable) : regroupent les missions de tenue des comptes et budgets locaux de plusieurs trésoreries (professionnalisation, taille critique).\n\n• CDL (Conseillers aux Décideurs Locaux) : regroupent les missions de conseil des élus locaux."},
      {t:"La Relocalisation des services", c:"Anciennement 'dé-métropolisation'. Transfert d'emplois vers 66 villes moyennes (2021–2026) : ~3% des emplois DGFiP. Repose sur le télétravail et la dématérialisation.\n\nEntités créées :\n• 18 SAPF + 1 pôle national publicité foncière.\n• 16 antennes SIE + 3 pôles d'expertise fiscalité entreprises.\n• 4 centres contact particuliers, 10 centres contact professionnels.\n• 5 pôles de contrôle fiscal, 1 centre contact amendes.\n• 8 services d'appui RH."}
    ],
    quiz:[
      {q:"À quelle distance maximale un usager ne doit-il pas se trouver de ses services (NRP) ?", c:["15 min","30 min","45 min","1h"], a:1, exp:"Le NRP repose sur l'idée qu'un usager ne doit pas se trouver à plus de 30 minutes de ses services."},
      {q:"Que signifie SGC dans le cadre du NRP ?", c:["Service de Gestion des Contribuables","Service de Gestion Comptable","Système de Gestion Centralisée","Service de Gestion Cadastrale"], a:1, exp:"SGC = Service de Gestion Comptable, regroupant les missions de tenue des comptes et budgets locaux."},
      {q:"Combien de villes bénéficient de la relocalisation des services DGFiP ?", c:["46","56","66","76"], a:2, exp:"La relocalisation se fera au profit de 66 villes qui ont satisfait à un appel de candidature."},
      {q:"D'où est née l'idée du NRP ?", c:["D'une réforme budgétaire","Du Grand Débat de 2019","D'une directive européenne","D'un rapport de la Cour des comptes"], a:1, exp:"Le NRP trouve son origine dans les suites du Grand Débat organisé en 2019 par le Président de la République."}
    ]
  },
  {
    id:"ddfip", title:"Services DDFiP/DRFiP", sub:"SIP, SIE, Trésoreries...", icon:"🗂️",
    grad:"from-teal-500 to-cyan-600", light:"bg-teal-50", border:"border-teal-300", text:"text-teal-700",
    lessons:[
      {t:"Les 3 grandes missions des DDFiP", c:"1. Missions fiscales : assiette, contrôle, contentieux et recouvrement des impôts, tenue du cadastre et de la publicité foncière.\n\n2. Missions de gestion publique : contrôle et paiement des dépenses publiques, comptes de l'État et des collectivités, gestion domaniale, action économique et financière.\n\n3. Missions transverses : RH, formation, budget, immobilier, logistique, communication, contrôle de gestion, audit."},
      {t:"SIP et SIE", c:"SIP (Service des Impôts des Particuliers) : guichet fiscal unique (IR, taxe foncière). 3 missions : accueil, assiette, recouvrement. 2 pics d'activité : printemps (déclarations) et automne (rôles). Logiciels : Iliad, Rec, Rar, ADONIS, GesPart, Lascot, Majic.\n\nSIE (Service des Impôts des Entreprises) : gère les impôts professionnels des PME/TPE. Logiciels : Medoc, BDRP, GesPro, ADELIE."},
      {t:"La Gestion Publique de l'État", c:"Le DDFiP est le comptable de l'État dans son département. Il gère :\n• Division des dépenses de l'État : rémunérations, retraites, marchés publics via Chorus.\n• Division comptabilité : compte de gestion transmis à la Cour des comptes. CQC (cellule de qualité comptable).\n• Recouvrement : recettes non fiscales.\n• Mission domaniale : gestion des biens de l'État (pilotée par la DIE depuis 2017).\n• Expertise économique et financière : soutien aux entreprises en difficulté."},
      {t:"Les Trésoreries", c:"• Trésorerie mixte : missions fiscales + gestion publique locale (zones rurales).\n• Trésorerie spécialisée : exécution du budget des collectivités, hôpitaux (EPS), offices d'habitat (OPH). Logiciels : Helios (gestion), Rec/Rar (recouvrement).\n• Trésorerie Amendes : recouvrement des amendes et condamnations pécuniaires."}
    ],
    quiz:[
      {q:"Quelles sont les 3 missions principales du SIP ?", c:["Assiette, contrôle, programmation","Accueil, assiette, recouvrement","Information, vérification, contentieux","Cadastre, publicité foncière, recouvrement"], a:1, exp:"Le SIP exerce 3 missions : accueil, assiette, recouvrement."},
      {q:"Quel est le logiciel de gestion utilisé dans les trésoreries (collectivités) ?", c:["Chorus","Fidji","Helios","Medoc"], a:2, exp:"Helios est le logiciel de gestion des collectivités dans les trésoreries."},
      {q:"Quel outil est utilisé par la Division des dépenses de l'État ?", c:["Helios","Chorus","Fidji","Iliad"], a:1, exp:"Chorus est le progiciel de gestion intégré commun à l'ensemble des services de l'État."},
      {q:"Le SIP connaît deux pics d'activité. Lesquels ?", c:["Janvier et juin","Printemps (déclarations) et automne (rôles)","Été et hiver","Février et septembre"], a:1, exp:"2 pics : printemps pour les déclarations, automne pour l'émission des rôles."}
    ]
  }
];

const ORAL_CATS = [
  { cat:"🎯 A — LE CADRE", tips:[
    "Respecter les 5 minutes imparties. Idéal : 4'45 pour garder une marge.",
    "Avoir un plan organisé et structuré — éviter le plan chronologique.",
    "Annoncer clairement (voire lourdement) le plan dans l'introduction.",
    "S'inscrire dans un projet professionnel cohérent et exprimer une motivation.",
    "Mettre en évidence des qualités : rigueur, autonomie, sens du collectif, relationnel...",
    "Valoriser ses compétences via des expériences pertinentes (pas toutes !)."
  ]},
  { cat:"👤 B — PERSONNELLE", tips:[
    "Marquer le jury par votre différence : expérience unique, anecdote marquante.",
    "Exposer ses motivations professionnelles précisément — éviter les généralités.",
    "Avoir un point de vue argumenté. Ne pas être lisse et convenu.",
    "Montrer de la hauteur de vue : tirer des enseignements de ses réussites et échecs.",
    "Utiliser des mots précis. Éviter les phrases toutes faites."
  ]},
  { cat:"🔥 C — VIVANTE", tips:[
    "Écrire d'abord la présentation entière, puis ne retenir que les grandes idées.",
    "Utiliser des flash-back (raison d'éviter le plan chronologique).",
    "Illustrer avec des exemples concrets, anecdotes et métaphores.",
    "Donner du rythme : phrases courtes, style direct ('je'), voix non monotone.",
    "Utiliser des termes positifs.",
    "Alléger des mots inutiles et tics de langage.",
    "INCARNER sa présentation : s'approprier, dominer, rendre vivante.",
    "Gérer le stress : cohérence cardiaque (app Respirelax).",
    "Utiliser des techniques de communication non verbale."
  ]}
];

const JURY = [
  {n:1, t:"NRP", q:["Expliquez-nous le NRP — qu'en pensez-vous ?","Veut-on supprimer des fonctionnaires avec le NRP ?"]},
  {n:2, t:"Loi Essoc", q:["Qu'est-ce que la loi Essoc ?","Quel est le pendant (le pendant de la tolérance) ?"]},
  {n:3, t:"Loi de finances", q:["Quelles sont les grandes orientations de la dernière loi de finances ?","À quoi sert la loi de finances ?"]},
  {n:4, t:"Loi de transformation de la FP", q:["Expliquez son principe ?","Donnez 2 applications concrètes."]},
  {n:5, t:"Les différents impôts", q:["Taux de l'IS ?","L'impôt sur le revenu est-il plus juste que la TVA ?"]},
  {n:6, t:"Missions de la DGFiP", q:["Quelles sont les missions de la DGFiP ?","Doit-on étendre ou restreindre ses missions ?"]},
  {n:7, t:"Dette et déficit", q:["Quelle est la différence ?","Pourquoi une dette élevée est plus problématique en France ?"]},
  {n:8, t:"Télétravail", q:["Toutes les missions sont-elles télétravaillables ?","Comment garder le lien en télétravail avec ses collaborateurs ?"]},
  {n:9, t:"Mobilité fonctionnelle et géographique", q:["Quelles sont vos limites ?","Intérêt de la mobilité fonctionnelle ?"]},
  {n:10, t:"Cour des Comptes", q:["Qu'est-ce que la Cour des comptes ?","Quel est son point de vue sur la DGFiP ?"]},
  {n:11, t:"Séparateur ordonnateur/comptable", q:["Principe du séparateur ordonnateur/comptable ?","Doit-il disparaître ?"]},
  {n:12, t:"Droits et obligations du fonctionnaire", q:["Peut-on travailler dans le privé à côté ?","Pourquoi la DGFiP a-t-elle créé la déontologie ?"]},
  {n:13, t:"Écologie & environnement", q:["Que pouvez-vous nous dire de Bercy Vert ?","Comment concilier fiscalité et écologie ?"]},
  {n:14, t:"PAS (Prélèvement à la Source)", q:["Qu'est-ce que le PAS ?","Qu'est-ce que la déclaration automatique ?"]},
  {n:15, t:"Services de la DGFiP", q:["Missions de la cellule foncière ?","Finalité du contrôle fiscal ?"]},
  {n:16, t:"Questions personnelles", q:["Citez deux qualités et deux défauts.","Pourquoi vous choisir vous ?"]},
  {n:17, t:"Le numérique à la DGFiP", q:["Efforts de la DGFiP pour la relation numérique ?","Limites de la dématérialisation ?"]},
  {n:18, t:"Organisation de la DGFiP", q:["Outils pour connaître l'organisation de votre service ?","Les emplois de contractuels dans la FP, normal ?"]},
  {n:19, t:"Gestion de la crise COVID", q:["Montant du Fonds de Solidarité versé en 2020 ?","Qu'a fait la DGFiP pendant le Covid ?"]},
  {n:20, t:"Égalité Homme/Femme", q:["Pourquoi y a-t-il moins de femmes en direction ?","Est-il plus difficile de réussir à la DGFiP en tant que femme ?"]},
  {n:21, t:"Externalisation des missions", q:["Somme maximale payable en numéraire dans un SIP ?","Le zéro cash — paiement des impôts chez les buralistes ?"]}
];

export default function App() {
  const [page, setPage] = useState('home');
  const [mod, setMod] = useState(null);
  const [lessonOpen, setLessonOpen] = useState(null);
  const [doneL, setDoneL] = useState({});
  const [doneQ, setDoneQ] = useState({});
  const [qz, setQz] = useState({ cur:0, sel:null, score:0, done:false, results:[] });
  const [oralTab, setOralTab] = useState('tips');
  const [chat, setChat] = useState([{role:'ai', txt:'Bonjour ! 👋 Je suis votre assistant DGFiP. Posez-moi vos questions sur les missions, les services ou la préparation à l\'oral !'}]);
  const [chatIn, setChatIn] = useState('');
  const [chatLoad, setChatLoad] = useState(false);

  const totalLessons = MODULES.reduce((s,m)=>s+m.lessons.length,0);
  const doneCount = Object.values(doneL).filter(Boolean).length;

  const startQuiz = (m) => {
    setMod(m);
    setQz({ cur:0, sel:null, score:0, done:false, results:[] });
    setPage('quiz');
  };

  const answerQ = (i) => {
    if(qz.sel !== null) return;
    const q = mod.quiz[qz.cur];
    const ok = i === q.a;
    setQz(prev => ({...prev, sel:i, score: ok ? prev.score+1 : prev.score, results:[...prev.results, {ok, chosen:i, correct:q.a}]}));
  };

  const nextQ = () => {
    const next = qz.cur+1;
    if(next >= mod.quiz.length) {
      setQz(prev=>({...prev, done:true}));
      setDoneQ(prev=>({...prev, [mod.id]:Math.max(prev[mod.id]||0, Math.round((qz.score+(qz.sel===mod.quiz[qz.cur].a?1:0))/mod.quiz.length*100))}));
    } else {
      setQz(prev=>({...prev, cur:next, sel:null}));
    }
  };

  // ── GEMINI API ──
  const sendChat = async () => {
    if(!chatIn.trim() || chatLoad) return;
    const msg = chatIn.trim();
    setChatIn('');
    setChat(prev=>[...prev, {role:'user', txt:msg}]);
    setChatLoad(true);
    try {
      const prompt = `Tu es un assistant expert en préparation aux concours et oraux de la DGFiP (Direction Générale des Finances Publiques). Tu connais parfaitement : les filières fiscale et gestion publique, les services (SIP, SIE, PCE, BCR, BDV, trésoreries), le contrôle fiscal, la sphère foncière, les directions nationales (DNEF, DVNI, DGE, ENFIP), le NRP (Nouveau Réseau de Proximité), et les conseils pour l'oral. Réponds de manière claire, concise et pédagogique en français. Utilise des emojis pour rendre ta réponse plus vivante.\n\nQuestion : ${msg}`;

      const res = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_KEY}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [{ parts: [{ text: prompt }] }]
          })
        }
      );
      const data = await res.json();
      const txt = data.candidates?.[0]?.content?.parts?.[0]?.text || "Désolé, je n'ai pas pu répondre.";
      setChat(prev=>[...prev, {role:'ai', txt}]);
    } catch(e) {
      setChat(prev=>[...prev, {role:'ai', txt:"⚠️ Erreur de connexion. Vérifiez votre clé API Gemini."}]);
    }
    setChatLoad(false);
  };

  // ── HOME ──
  if(page==='home') return (
    <div style={{minHeight:'100vh',background:'linear-gradient(135deg,#667eea 0%,#764ba2 100%)',fontFamily:'system-ui,sans-serif'}}>
      <div style={{background:'rgba(255,255,255,0.1)',backdropFilter:'blur(10px)',padding:'20px 24px',display:'flex',alignItems:'center',justifyContent:'space-between'}}>
        <div>
          <div style={{color:'white',fontWeight:800,fontSize:20}}>🎓 Formation DGFiP</div>
          <div style={{color:'rgba(255,255,255,0.8)',fontSize:13}}>CFTC Finances Publiques</div>
        </div>
        <div style={{display:'flex',gap:8}}>
          {[['📚','Modules'],['🎤','Oral'],['💬','Assistant']].map(([ic,lb])=>(
            <button key={lb} onClick={()=>setPage(lb==='Modules'?'home':lb==='Oral'?'oral':'chat')}
              style={{background:'rgba(255,255,255,0.2)',border:'1px solid rgba(255,255,255,0.3)',color:'white',padding:'6px 14px',borderRadius:20,cursor:'pointer',fontSize:13,fontWeight:600}}>
              {ic} {lb}
            </button>
          ))}
        </div>
      </div>
      <div style={{padding:'32px 24px',maxWidth:960,margin:'0 auto'}}>
        <div style={{textAlign:'center',marginBottom:32}}>
          <h1 style={{color:'white',fontSize:28,fontWeight:800,margin:'0 0 8px'}}>Préparez votre concours DGFiP 🚀</h1>
          <p style={{color:'rgba(255,255,255,0.85)',fontSize:15,margin:0}}>6 modules de formation · Quizzes interactifs · Préparation à l'oral · Assistant IA</p>
          <div style={{background:'rgba(255,255,255,0.15)',borderRadius:12,padding:'12px 20px',display:'inline-block',marginTop:16}}>
            <span style={{color:'white',fontWeight:700,fontSize:15}}>📊 Progression : {doneCount}/{totalLessons} leçons lues · {Object.keys(doneQ).length}/{MODULES.length} modules complétés</span>
          </div>
        </div>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))',gap:16}}>
          {MODULES.map(m=>(
            <div key={m.id} style={{background:'white',borderRadius:16,overflow:'hidden',boxShadow:'0 4px 20px rgba(0,0,0,0.15)',cursor:'pointer',transition:'transform 0.2s'}}
              onMouseEnter={e=>e.currentTarget.style.transform='translateY(-4px)'}
              onMouseLeave={e=>e.currentTarget.style.transform='translateY(0)'}>
              <div style={{backgroundImage:`linear-gradient(135deg,${m.grad.includes('blue')?'#3b82f6,#1d4ed8':m.grad.includes('orange')?'#f97316,#dc2626':m.grad.includes('green')?'#10b981,#065f46':m.grad.includes('purple')?'#8b5cf6,#6d28d9':m.grad.includes('rose')?'#f43f5e,#db2777':'#14b8a6,#0e7490'})`,padding:'20px 20px 16px'}}>
                <div style={{fontSize:32,marginBottom:8}}>{m.icon}</div>
                <div style={{color:'white',fontWeight:800,fontSize:17}}>{m.title}</div>
                <div style={{color:'rgba(255,255,255,0.85)',fontSize:13,marginTop:2}}>{m.sub}</div>
              </div>
              <div style={{padding:'14px 20px 16px'}}>
                <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:10}}>
                  <span style={{fontSize:13,color:'#666'}}>{m.lessons.length} leçons · {m.quiz.length} questions</span>
                  {doneQ[m.id] && <span style={{background:'#d1fae5',color:'#065f46',fontSize:12,fontWeight:700,padding:'2px 8px',borderRadius:10}}>✅ {doneQ[m.id]}%</span>}
                </div>
                <div style={{display:'flex',gap:8}}>
                  <button onClick={()=>{setMod(m);setPage('module');setLessonOpen(null)}}
                    style={{flex:1,backgroundImage:`linear-gradient(135deg,${m.grad.includes('blue')?'#3b82f6,#1d4ed8':m.grad.includes('orange')?'#f97316,#dc2626':m.grad.includes('green')?'#10b981,#065f46':m.grad.includes('purple')?'#8b5cf6,#6d28d9':m.grad.includes('rose')?'#f43f5e,#db2777':'#14b8a6,#0e7490'})`,color:'white',border:'none',padding:'8px 0',borderRadius:8,cursor:'pointer',fontWeight:700,fontSize:13}}>
                    📖 Cours
                  </button>
                  <button onClick={()=>startQuiz(m)}
                    style={{flex:1,background:'#f3f4f6',color:'#374151',border:'none',padding:'8px 0',borderRadius:8,cursor:'pointer',fontWeight:700,fontSize:13}}>
                    🧠 Quiz
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // ── MODULE ──
  if(page==='module' && mod) return (
    <div style={{minHeight:'100vh',background:'#f8fafc',fontFamily:'system-ui,sans-serif'}}>
      <div style={{backgroundImage:`linear-gradient(135deg,${mod.grad.includes('blue')?'#3b82f6,#1d4ed8':mod.grad.includes('orange')?'#f97316,#dc2626':mod.grad.includes('green')?'#10b981,#065f46':mod.grad.includes('purple')?'#8b5cf6,#6d28d9':mod.grad.includes('rose')?'#f43f5e,#db2777':'#14b8a6,#0e7490'})`,padding:'24px',display:'flex',alignItems:'center',gap:16}}>
        <button onClick={()=>setPage('home')} style={{background:'rgba(255,255,255,0.2)',border:'none',color:'white',width:36,height:36,borderRadius:'50%',cursor:'pointer',fontSize:18}}>←</button>
        <div>
          <div style={{color:'white',fontWeight:800,fontSize:22}}>{mod.icon} {mod.title}</div>
          <div style={{color:'rgba(255,255,255,0.8)',fontSize:13}}>{mod.sub}</div>
        </div>
      </div>
      <div style={{maxWidth:700,margin:'0 auto',padding:24}}>
        <div style={{display:'flex',gap:12,marginBottom:24,alignItems:'center'}}>
          <span style={{fontWeight:700,color:'#374151'}}>📚 {mod.lessons.length} leçons</span>
          <button onClick={()=>startQuiz(mod)}
            style={{marginLeft:'auto',background:'linear-gradient(135deg,#f97316,#dc2626)',color:'white',border:'none',padding:'10px 20px',borderRadius:10,cursor:'pointer',fontWeight:700,fontSize:14}}>
            🧠 Démarrer le quiz ({mod.quiz.length} questions)
          </button>
        </div>
        {mod.lessons.map((l,i)=>(
          <div key={i} style={{background:'white',borderRadius:12,marginBottom:12,boxShadow:'0 2px 8px rgba(0,0,0,0.06)',overflow:'hidden'}}>
            <div onClick={()=>{setLessonOpen(lessonOpen===i?null:i); setDoneL(prev=>({...prev,[`${mod.id}-${i}`]:true}));}}
              style={{padding:'16px 20px',display:'flex',alignItems:'center',cursor:'pointer',gap:12}}>
              <div style={{width:32,height:32,borderRadius:'50%',background:doneL[`${mod.id}-${i}`]?'#d1fae5':'#f3f4f6',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:800,color:doneL[`${mod.id}-${i}`]?'#065f46':'#6b7280',fontSize:14,flexShrink:0}}>
                {doneL[`${mod.id}-${i}`]?'✓':i+1}
              </div>
              <span style={{fontWeight:700,color:'#1f2937',flex:1,fontSize:15}}>{l.t}</span>
              <span style={{color:'#9ca3af',fontSize:18}}>{lessonOpen===i?'▲':'▼'}</span>
            </div>
            {lessonOpen===i && (
              <div style={{padding:'0 20px 20px',borderTop:'1px solid #f3f4f6'}}>
                {l.c.split('\n').map((line,j)=>(
                  <p key={j} style={{margin:'8px 0',color:'#374151',lineHeight:1.7,fontSize:14}}>{line}</p>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  // ── QUIZ ──
  if(page==='quiz' && mod) {
    if(qz.done) {
      const final = qz.score;
      const total = mod.quiz.length;
      const pct = Math.round(final/total*100);
      return (
        <div style={{minHeight:'100vh',background:'#f8fafc',fontFamily:'system-ui,sans-serif',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',padding:24}}>
          <div style={{background:'white',borderRadius:20,padding:32,maxWidth:500,width:'100%',textAlign:'center',boxShadow:'0 8px 32px rgba(0,0,0,0.1)'}}>
            <div style={{fontSize:56,marginBottom:12}}>{pct>=80?'🏆':pct>=60?'👍':'💪'}</div>
            <h2 style={{margin:'0 0 8px',color:'#1f2937',fontSize:24}}>Quiz terminé !</h2>
            <div style={{fontSize:48,fontWeight:900,color:pct>=80?'#10b981':pct>=60?'#f97316':'#ef4444',margin:'16px 0'}}>{pct}%</div>
            <p style={{color:'#6b7280',margin:'0 0 24px'}}>{final}/{total} bonnes réponses</p>
            <div style={{background:'#f3f4f6',borderRadius:12,padding:16,marginBottom:24,textAlign:'left'}}>
              {mod.quiz.map((q,i)=>(
                <div key={i} style={{display:'flex',gap:8,marginBottom:8,fontSize:13}}>
                  <span>{qz.results[i]?.ok?'✅':'❌'}</span>
                  <span style={{color:'#374151'}}>{q.q}</span>
                </div>
              ))}
            </div>
            <div style={{display:'flex',gap:10}}>
              <button onClick={()=>startQuiz(mod)} style={{flex:1,background:'linear-gradient(135deg,#8b5cf6,#6d28d9)',color:'white',border:'none',padding:'12px',borderRadius:10,cursor:'pointer',fontWeight:700}}>🔄 Recommencer</button>
              <button onClick={()=>setPage('home')} style={{flex:1,background:'#f3f4f6',color:'#374151',border:'none',padding:'12px',borderRadius:10,cursor:'pointer',fontWeight:700}}>🏠 Accueil</button>
            </div>
          </div>
        </div>
      );
    }
    const q = mod.quiz[qz.cur];
    const colors = ['#3b82f6','#10b981','#f97316','#8b5cf6'];
    return (
      <div style={{minHeight:'100vh',background:'#f8fafc',fontFamily:'system-ui,sans-serif',padding:24,display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
        <div style={{maxWidth:560,width:'100%'}}>
          <div style={{display:'flex',justifyContent:'space-between',marginBottom:16,alignItems:'center'}}>
            <button onClick={()=>setPage('home')} style={{background:'none',border:'none',color:'#6b7280',cursor:'pointer',fontSize:14}}>← Quitter</button>
            <span style={{color:'#6b7280',fontWeight:600,fontSize:14}}>Question {qz.cur+1}/{mod.quiz.length}</span>
            <span style={{background:'#dbeafe',color:'#1d4ed8',fontWeight:700,fontSize:14,padding:'4px 10px',borderRadius:10}}>⭐ {qz.score}</span>
          </div>
          <div style={{background:'white',borderRadius:16,padding:6,marginBottom:16,height:8,boxShadow:'0 2px 8px rgba(0,0,0,0.06)'}}>
            <div style={{height:8,borderRadius:8,background:'linear-gradient(90deg,#8b5cf6,#3b82f6)',width:`${(qz.cur/mod.quiz.length)*100}%`,transition:'width 0.4s'}}/>
          </div>
          <div style={{background:'white',borderRadius:20,padding:28,boxShadow:'0 8px 32px rgba(0,0,0,0.08)',marginBottom:16}}>
            <div style={{fontSize:13,color:'#8b5cf6',fontWeight:700,marginBottom:12}}>{mod.icon} {mod.title}</div>
            <h3 style={{margin:'0 0 24px',color:'#1f2937',fontSize:18,lineHeight:1.5}}>{q.q}</h3>
            <div style={{display:'flex',flexDirection:'column',gap:10}}>
              {q.c.map((ch,i)=>{
                let bg='#f8fafc', border='#e5e7eb', tc='#374151';
                if(qz.sel!==null){
                  if(i===q.a){bg='#d1fae5';border='#10b981';tc='#065f46';}
                  else if(i===qz.sel && i!==q.a){bg='#fee2e2';border='#ef4444';tc='#991b1b';}
                }
                return (
                  <button key={i} onClick={()=>answerQ(i)}
                    style={{background:bg,border:`2px solid ${border}`,borderRadius:10,padding:'12px 16px',textAlign:'left',cursor:qz.sel!==null?'default':'pointer',color:tc,fontWeight:qz.sel!==null&&i===q.a?700:500,fontSize:14,transition:'all 0.2s',display:'flex',alignItems:'center',gap:10}}>
                    <span style={{width:28,height:28,borderRadius:'50%',background:colors[i],color:'white',display:'flex',alignItems:'center',justifyContent:'center',fontSize:13,fontWeight:800,flexShrink:0}}>
                      {String.fromCharCode(65+i)}
                    </span>
                    {ch}
                  </button>
                );
              })}
            </div>
          </div>
          {qz.sel!==null && (
            <div style={{background:qz.sel===q.a?'#d1fae5':'#fee2e2',borderRadius:12,padding:16,marginBottom:16}}>
              <div style={{fontWeight:700,color:qz.sel===q.a?'#065f46':'#991b1b',marginBottom:4}}>{qz.sel===q.a?'✅ Excellent !':'❌ Pas tout à fait...'}</div>
              <p style={{margin:0,color:'#374151',fontSize:14}}>{q.exp}</p>
            </div>
          )}
          {qz.sel!==null && (
            <button onClick={nextQ} style={{width:'100%',background:'linear-gradient(135deg,#8b5cf6,#6d28d9)',color:'white',border:'none',padding:'14px',borderRadius:12,cursor:'pointer',fontWeight:800,fontSize:15}}>
              {qz.cur+1<mod.quiz.length?'Question suivante →':'Voir les résultats 🏆'}
            </button>
          )}
        </div>
      </div>
    );
  }

  // ── ORAL ──
  if(page==='oral') return (
    <div style={{minHeight:'100vh',background:'#f8fafc',fontFamily:'system-ui,sans-serif'}}>
      <div style={{background:'linear-gradient(135deg,#f59e0b,#d97706)',padding:'24px',display:'flex',alignItems:'center',gap:16}}>
        <button onClick={()=>setPage('home')} style={{background:'rgba(255,255,255,0.2)',border:'none',color:'white',width:36,height:36,borderRadius:'50%',cursor:'pointer',fontSize:18}}>←</button>
        <div><div style={{color:'white',fontWeight:800,fontSize:22}}>🎤 Préparation à l'Oral</div><div style={{color:'rgba(255,255,255,0.8)',fontSize:13}}>20 conseils & 21 thèmes des jurys</div></div>
      </div>
      <div style={{maxWidth:760,margin:'0 auto',padding:24}}>
        <div style={{display:'flex',gap:8,marginBottom:24}}>
          {[['tips','💡 20 Conseils'],['themes','📋 21 Thèmes Jurys']].map(([id,lb])=>(
            <button key={id} onClick={()=>setOralTab(id)}
              style={{padding:'10px 20px',borderRadius:10,border:'none',cursor:'pointer',fontWeight:700,fontSize:14,background:oralTab===id?'linear-gradient(135deg,#f59e0b,#d97706)':'white',color:oralTab===id?'white':'#374151',boxShadow:'0 2px 8px rgba(0,0,0,0.06)'}}>
              {lb}
            </button>
          ))}
        </div>
        {oralTab==='tips' && ORAL_CATS.map((cat,ci)=>(
          <div key={ci} style={{background:'white',borderRadius:16,padding:20,marginBottom:16,boxShadow:'0 2px 8px rgba(0,0,0,0.06)'}}>
            <h3 style={{margin:'0 0 14px',fontSize:16,fontWeight:800,color:'#1f2937'}}>{cat.cat}</h3>
            {cat.tips.map((tip,ti)=>(
              <div key={ti} style={{display:'flex',gap:10,marginBottom:10,padding:'10px 12px',background:'#f8fafc',borderRadius:8}}>
                <span style={{background:'#f59e0b',color:'white',borderRadius:'50%',width:22,height:22,display:'flex',alignItems:'center',justifyContent:'center',fontSize:11,fontWeight:800,flexShrink:0}}>{ti+1}</span>
                <span style={{color:'#374151',fontSize:14,lineHeight:1.5}}>{tip}</span>
              </div>
            ))}
          </div>
        ))}
        {oralTab==='themes' && (
          <div>
            <div style={{background:'#fef3c7',border:'1px solid #f59e0b',borderRadius:12,padding:12,marginBottom:16,fontSize:13,color:'#92400e'}}>
              📊 Ces 21 thèmes ont été abordés dans au moins 1/3 des oraux officiels 2020-2021 (contrôleurs & IFIP).
            </div>
            {JURY.map(j=>(
              <div key={j.n} style={{background:'white',borderRadius:12,padding:16,marginBottom:10,boxShadow:'0 2px 8px rgba(0,0,0,0.06)',display:'flex',gap:14,alignItems:'flex-start'}}>
                <div style={{background:'linear-gradient(135deg,#f59e0b,#d97706)',color:'white',borderRadius:10,width:36,height:36,display:'flex',alignItems:'center',justifyContent:'center',fontWeight:800,fontSize:14,flexShrink:0}}>{j.n}</div>
                <div>
                  <div style={{fontWeight:700,color:'#1f2937',marginBottom:6,fontSize:15}}>{j.t}</div>
                  {j.q.map((q,i)=>(
                    <div key={i} style={{display:'flex',gap:6,fontSize:13,color:'#6b7280',marginBottom:3}}>
                      <span>→</span><span style={{fontStyle:'italic'}}>{q}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );

  // ── CHAT ──
  if(page==='chat') return (
    <div style={{minHeight:'100vh',background:'#f8fafc',fontFamily:'system-ui,sans-serif',display:'flex',flexDirection:'column'}}>
      <div style={{background:'linear-gradient(135deg,#6366f1,#4f46e5)',padding:'20px 24px',display:'flex',alignItems:'center',gap:16}}>
        <button onClick={()=>setPage('home')} style={{background:'rgba(255,255,255,0.2)',border:'none',color:'white',width:36,height:36,borderRadius:'50%',cursor:'pointer',fontSize:18}}>←</button>
        <div>
          <div style={{color:'white',fontWeight:800,fontSize:20}}>💬 Assistant IA DGFiP</div>
          <div style={{color:'rgba(255,255,255,0.8)',fontSize:13}}>Propulsé par Gemini • Posez vos questions</div>
        </div>
      </div>
      <div style={{flex:1,overflowY:'auto',padding:'16px 24px',maxWidth:700,width:'100%',margin:'0 auto',boxSizing:'border-box'}}>
        {chat.map((m,i)=>(
          <div key={i} style={{display:'flex',justifyContent:m.role==='user'?'flex-end':'flex-start',marginBottom:12}}>
            <div style={{maxWidth:'80%',background:m.role==='user'?'linear-gradient(135deg,#6366f1,#4f46e5)':'white',color:m.role==='user'?'white':'#374151',borderRadius:m.role==='user'?'16px 16px 4px 16px':'16px 16px 16px 4px',padding:'12px 16px',fontSize:14,lineHeight:1.6,boxShadow:'0 2px 8px rgba(0,0,0,0.08)',whiteSpace:'pre-wrap'}}>
              {m.role==='ai' && <span style={{fontWeight:700,display:'block',marginBottom:4,color:'#6366f1',fontSize:13}}>🤖 Assistant DGFiP</span>}
              {m.txt}
            </div>
          </div>
        ))}
        {chatLoad && <div style={{display:'flex',justifyContent:'flex-start',marginBottom:12}}><div style={{background:'white',borderRadius:'16px 16px 16px 4px',padding:'12px 16px',boxShadow:'0 2px 8px rgba(0,0,0,0.08)',color:'#6b7280',fontSize:14}}>⏳ En train de répondre...</div></div>}
      </div>
      <div style={{background:'white',borderTop:'1px solid #e5e7eb',padding:'16px 24px'}}>
        <div style={{maxWidth:700,margin:'0 auto',display:'flex',gap:10}}>
          <input value={chatIn} onChange={e=>setChatIn(e.target.value)} onKeyDown={e=>e.key==='Enter'&&sendChat()}
            placeholder="Posez votre question sur la DGFiP..." style={{flex:1,border:'2px solid #e5e7eb',borderRadius:12,padding:'12px 16px',fontSize:14,outline:'none',fontFamily:'system-ui'}}/>
          <button onClick={sendChat} disabled={chatLoad}
            style={{background:'linear-gradient(135deg,#6366f1,#4f46e5)',color:'white',border:'none',borderRadius:12,padding:'12px 20px',cursor:'pointer',fontWeight:700,fontSize:15,opacity:chatLoad?0.7:1}}>
            ➤
          </button>
        </div>
        <div style={{maxWidth:700,margin:'8px auto 0',display:'flex',gap:8,flexWrap:'wrap'}}>
          {["Qu'est-ce que la BCR ?","Différence BCR et DNEF ?","Conseils pour l'oral","Missions du SIP","Qu'est-ce que le NRP ?"].map(s=>(
            <button key={s} onClick={()=>setChatIn(s)} style={{background:'#f3f4f6',border:'none',borderRadius:8,padding:'6px 10px',fontSize:12,color:'#374151',cursor:'pointer'}}>{s}</button>
          ))}
        </div>
      </div>
    </div>
  );

  return null;
}