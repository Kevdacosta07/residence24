import {
  BellRing,
  CircleCheck,
  Flower2,
  KeyRound,
  Mail,
  PawPrint,
  ScanEye,
  ShieldCheck,
  Truck,
  UsersRound,
  Wrench,
} from "lucide-react";

export const pillars = [
  {
    icon: KeyRound,
    number: "01",
    title: "Présence & Intendance",
    subtitle: "Veiller sur votre propriété",
    description: "Des passages réguliers et une présence humaine attentive pour maintenir la vie, le soin et l'équilibre de votre demeure.",
    highlights: ["Aération et contrôle global des espaces", "Maintien des habitudes de la résidence", "Vérification des fluides et compteurs"],
  },
  {
    icon: PawPrint,
    number: "02",
    title: "Animaux & Cadre de vie",
    subtitle: "Préserver votre quotidien",
    description: "Le soin attentionné apporté à vos animaux de compagnie, vos végétaux et la gestion discrète des affaires courantes.",
    highlights: ["Soins et promenades personnalisées", "Entretien des végétaux d'intérieur et terrasses", "Relève et suivi sécurisé du courrier"],
  },
  {
    icon: Wrench,
    number: "03",
    title: "Coordination & Préparation",
    subtitle: "Anticiper votre sérénité",
    description: "La supervision sur place des intervenants techniques et la préparation d'exception de votre arrivée.",
    highlights: ["Accueil et suivi des artisans", "Gestion immédiate des imprévus", "Chauffage, provisions et linge prêts"],
  },
];

export const services = [
  {
    icon: KeyRound,
    title: "Présence & Intendance privée",
    text: "Passages convenus ou présence prolongée selon votre rythme pour faire vivre la propriété et prévenir tout dysfonctionnement.",
    details: ["Aération naturelle des pièces", "Inspection visuelle globale", "Contrôle des installations et compteurs"],
  },
  {
    icon: ScanEye,
    title: "Veille attentive de la propriété",
    text: "Une présence humaine rassurante et discrète qui s'assure de l'intégrité de vos espaces sans aucun dispositif intrusif.",
    details: ["Vérification des accès et fermetures", "Inspection après intempéries", "Sérénité pendant vos absences prolongées"],
  },
  {
    icon: PawPrint,
    title: "Soins aux animaux & végétaux",
    text: "Une attention chaleureuse et rigoureuse portée à vos compagnons à quatre pattes et à vos plantes d'exception.",
    details: ["Nourriture, promenades et affection", "Arrosage et soin des plantes", "Respect strict du rythme de vos animaux"],
  },
  {
    icon: Mail,
    title: "Gestion du courrier & livraisons",
    text: "Relève, tri confidentiel et transmission de votre correspondance ainsi que la réception sécurisée de vos colis.",
    details: ["Relève et mise à l'abri du courrier", "Réception des livraisons et plis", "Alerte immédiate en cas de pli urgent"],
  },
  {
    icon: Wrench,
    title: "Coordination des prestataires",
    text: "Supervision sur place des interventions d'artisans, jardiniers ou équipes de maintenance avec rapport explicite.",
    details: ["Accueil et ouverture aux prestataires", "Suivi du bon déroulement des travaux", "Rapport détaillé avec photos"],
  },
  {
    icon: BellRing,
    title: "Préparation sur mesure du retour",
    text: "Retrouvez une résidence chaleureuse, parfaitement ordonnée et prête à vivre dès votre arrivée.",
    details: ["Réglage de la température de confort", "Provisions fraîches selon vos désirs", "Linge préparé et lits faits"],
  },
];

export const method = [
  {
    number: "01",
    title: "Premier entretien confidentiel",
    subtitle: "À votre résidence ou par téléphone",
    text: "Nous échangeons sur la configuration de votre propriété, vos habitudes de vie et le niveau d'intendance souhaité.",
  },
  {
    number: "02",
    title: "Cahier des charges & Protocole",
    subtitle: "Sur mesure et sans ambiguïté",
    text: "Un protocole sur mesure est rédigé : fréquence des passages, gestion des accès, consignes spécifiques et conduite à tenir.",
  },
  {
    number: "03",
    title: "Présence dédiée & Intendance",
    subtitle: "Discrétion et rigueur swiss precision",
    text: "Votre intendant attitré exécute chaque mission avec le plus grand soin, dans le respect absolu de votre intimité.",
  },
  {
    number: "04",
    title: "Suivi & Comptes rendus privés",
    subtitle: "Transparence totale",
    text: "Après chaque intervention, vous recevez un compte rendu concis par le canal de votre choix avec photos si souhaité.",
  },
];

export const values = [
  { icon: UsersRound, title: "Confiance & Continuité", text: "Un intendant dédié unique qui connaît votre demeure et vos exigences." },
  { icon: CircleCheck, title: "Exigence & Précision", text: "Un niveau de soin suisse appliqué à chaque consigne et chaque détail." },
  { icon: Flower2, title: "Discrétion Absolue", text: "Aucune exposition de votre adresse ni de votre intérieur. Confidentialité totale." },
  { icon: ShieldCheck, title: "Ancrage Genevois", text: "Proximité immédiate dans le canton de Genève pour intervenir promptement." },
];

export const faqs = [
  {
    question: "Qu'est-ce que l'intendance privée pour une résidence à Genève?",
    answer:
      "L'intendance privée consiste à confier les visites, le suivi courant et la coordination de votre résidence à un interlocuteur dédié pendant vos absences. Residence24 organise les passages selon vos consignes, coordonne les intervenants et vous transmet un compte rendu après chaque visite.",
  },
  {
    question: "Qui peut s'occuper d'une villa ou d'une résidence secondaire pendant une absence à Genève?",
    answer:
      "Residence24 accompagne les propriétaires de villas, appartements et résidences secondaires à Genève. Le service est adapté à la fréquence de vos absences, aux particularités de la propriété, aux accès, aux animaux et aux prestataires à coordonner.",
  },
  {
    question: "Residence24 est-elle une société de sécurité?",
    answer:
      "Non. Residence24 propose une présence de confiance et une intendance privée de haute précision. Nous apportons un soin humain et une attention vivante à votre demeure, sans remplacer les alarmes ou sociétés de sécurité agréées.",
  },
  {
    question: "Comment est garantie la confidentialité de ma résidence?",
    answer:
      "La discrétion est notre principe fondateur. Aucun nom de client, aucun visuel identifiable ni aucune adresse ne sont divulgués. Vos clés et accès sont conservés sous protocole sécurisé strict.",
  },
  {
    question: "À quelle fréquence intervenez-vous?",
    answer:
      "La fréquence est entièrement personnalisée : de passages hebdomadaires à une présence quotidienne lors de déplacements prolongés, selon le protocole établi ensemble.",
  },
  {
    question: "Comment se déroule le suivi pendant mon absence?",
    answer:
      "Vous choisissez le canal et le rythme. Un compte rendu succinct vous est adressé après chaque passage, accompagné de photos ciblées pour votre parfaite sérénité.",
  },
  {
    question: "Pouvez-vous prendre soin de mes animaux de compagnie?",
    answer:
      "Absolument. Nourriture, promenades, présence et soins spécifiques sont dispensés selon les habitudes exactes de votre animal pour préserver ses repères.",
  },
  {
    question: "Que se passe-t-il en cas d'imprévu ou de problème technique?",
    answer:
      "En cas d'anomalie, nous sécurisons la situation sur place, vous informons immédiatement et organisons, avec votre accord, l'intervention de vos prestataires ou de nos artisans partenaires.",
  },
  {
    question: "Quelles sont les zones desservies dans le canton de Genève?",
    answer:
      "Nous intervenons sur l'ensemble du canton de Genève, notamment à Cologny, Collonge-Bellerive, Vandoeuvres, Chêne-Bougeries, Bellevue, Genthod, Pregny-Chambésy et Genève-Ville.",
  },
];
