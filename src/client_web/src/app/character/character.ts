export class Character {
  energie: string[];
  endurance: string[];
  accueil_jeu_1: boolean;
  approbation: Approbation;
  date_creation: number;
  date_modify: number;
  esclave: string[];
  faction: string;
  habilites: Skill[];
  merite: Merite[];
  name: string;
  question_background_raison: string;
  question_orientation: string[];
  question_vision_esclavage: string;
  rituel: string[];
  sous_ecole: School[];
  sous_faction: string;
  technique_maitre: Skill[];
  xp_autre: number;
  xp_naissance: number;

  constructor() {}
}
