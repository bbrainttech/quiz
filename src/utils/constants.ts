import { DefaultTheme } from "@react-navigation/native";

export const COLORS = {
  primary: DefaultTheme.colors.primary,
} as const;

export type TAnswers = "A" | "B" | "C" | "D";

export interface TOption<T> {
  label: T;
  option: string;
}
export interface TQuestion {
  id?: string;
  question: string;
  options: [TOption<"A">, TOption<"B">, TOption<"C">, TOption<"D">];
  answer: TAnswers;
  tense?: string;
}


export type TAcceptedLanguage = "English" | "French";
export interface TQuestions {
  English: TQuestion[];
  French: TQuestion[];
}
export const QUESTIONS = {
  English: [
    {
      question: "She __TENSE__ a letter everyday",
      tense: "write",
      options: [
        {
          label: "A",
          option: "write",
        },
        {
          label: "B",
          option: "wrote",
        },
        {
          label: "C",
          option: "wrote",
        },
        {
          label: "D",
          option: "write",
        },
      ],
      answer: "A",
    },
    {
      question: "They __TENSE__  soccer on weekends",
      tense: "play",
      options: [
        {
          label: "A",
          option: "played",
        },
        {
          label: "B",
          option: "Play",
        },
        {
          label: "C",
          option: "Are playing",
        },
        {
          label: "D",
          option: "Were playing",
        },
      ],
      answer: "B",
    },
    {
      question: "He __TENSE__ lunch right now",
      tense: "eat",
      options: [
        {
          label: "A",
          option: "eats",
        },
        {
          label: "B",
          option: "is eating",
        },
        {
          label: "C",
          option: "ate",
        },
        {
          label: "D",
          option: "has eaten",
        },
      ],
      answer: "B",
    },
    {
      question: "We __TENSE__ for the exam currently",
      tense: "study",
      options: [
        {
          label: "A",
          option: "study",
        },
        {
          label: "B",
          option: "studied",
        },
        {
          label: "C",
          option: "are studying",
        },
        {
          label: "D",
          option: "were studying",
        },
      ],
      answer: "C",
    },
    {
      question: "She __TENSE__ her homework.",
      tense: "finish",
      options: [
        {
          label: "A",
          option: "finishes",
        },
        {
          label: "B",
          option: "is finishing",
        },
        {
          label: "C",
          option: "finished",
        },
        {
          label: "D",
          option: "has finished",
        },
      ],
      answer: "D",
    },
    {
      question: "They __TENSE__ Paris twice",
      tense: "visit",
      options: [
        {
          label: "A",
          option: "visit",
        },
        {
          label: "B",
          option: "have visited",
        },
        {
          label: "C",
          option: "visited",
        },
        {
          label: "D",
          option: "were visiting",
        },
      ],
      answer: "B",
    },
    {
      question: "I __TENSE__ this book for two hours",
      tense: "read",
      options: [
        {
          label: "A",
          option: "read",
        },
        {
          label: "B",
          option: "have read",
        },
        {
          label: "C",
          option: "am reading",
        },
        {
          label: "D",
          option: "have been reading",
        },
      ],
      answer: "D",
    },
    {
      question: "She __TENSE__ at the company since 2010",
      tense: "work",
      options: [
        {
          label: "A",
          option: "works",
        },
        {
          label: "B",
          option: "is working",
        },
        {
          label: "C",
          option: "worked",
        },
        {
          label: "D",
          option: "has been working",
        },
      ],
      answer: "D",
    },
    {
      question: "She __TENSE__ a letter yesterday",
      tense: "write",
      options: [
        {
          label: "A",
          option: "writes",
        },
        {
          label: "B",
          option: "is writing",
        },
        {
          label: "C",
          option: "wrote",
        },
        {
          label: "D",
          option: "was writing",
        },
      ],
      answer: "C",
    },
    {
      question: "They __TENSE__ soccer last weekend",
      tense: "play",
      options: [
        {
          label: "A",
          option: "play",
        },
        {
          label: "B",
          option: "played",
        },
        {
          label: "C",
          option: "are playing",
        },
        {
          label: "D",
          option: "were playing",
        },
      ],
      answer: "B",
    },
    {
      question: "He __TENSE__ lunch when I called",
      tense: "eat",
      options: [
        {
          label: "A",
          option: "eats",
        },
        {
          label: "B",
          option: "is eating",
        },
        {
          label: "C",
          option: "ate",
        },
        {
          label: "D",
          option: "was eating",
        },
      ],
      answer: "D",
    },
    {
      question: "We __TENSE__ when the power went out.",
      tense: "study",
      options: [
        {
          label: "A",
          option: "study",
        },
        {
          label: "B",
          option: "studied",
        },
        {
          label: "C",
          option: "are studying",
        },
        {
          label: "D",
          option: "were studying",
        },
      ],
      answer: "D",
    },
    {
      question: "She __TENSE__ her homework before dinner.",
      tense: "finish",
      options: [
        {
          label: "A",
          option: "finishes",
        },
        {
          label: "B",
          option: "is finishing",
        },
        {
          label: "C",
          option: "had finished",
        },
        {
          label: "D",
          option: "has finished",
        },
      ],
      answer: "C",
    },
    {
      question: "They __TENSE__ Paris before moving to London",
      tense: "visit",
      options: [
        {
          label: "A",
          option: "visit",
        },
        {
          label: "B",
          option: "visited",
        },
        {
          label: "C",
          option: "had visited",
        },
        {
          label: "D",
          option: "has visited",
        },
      ],
      answer: "C",
    },
    {
      question: "I __TENSE__ the book for two hours before she arrived",
      tense: "read",
      options: [
        {
          label: "A",
          option: "read",
        },
        {
          label: "B",
          option: "am reading",
        },
        {
          label: "C",
          option: "had read",
        },
        {
          label: "D",
          option: "had been reading",
        },
      ],
      answer: "D",
    },
    {
      question: "She __TENSE__ at the company for five years before she was promoted",
      tense: "work",
      options: [
        {
          label: "A",
          option: "works",
        },
        {
          label: "B",
          option: "is working",
        },
        {
          label: "C",
          option: "worked",
        },
        {
          label: "D",
          option: "had been working",
        },
      ],
      answer: "D",
    },
    {
      question: "He __TENSE__ lunch right now",
      tense: "eat",
      options: [
        {
          label: "A",
          option: "eats",
        },
        {
          label: "B",
          option: "is eating",
        },
        {
          label: "C",
          option: "ate",
        },
        {
          label: "D",
          option: "has eaten",
        },
      ],
      answer: "B",
    },
    {
      question: "They __TENSE__ soccer at the park",
      tense: "play",
      options: [
        {
          label: "A",
          option: "play",
        },
        {
          label: "B",
          option: "played",
        },
        {
          label: "C",
          option: "are playing",
        },
        {
          label: "D",
          option: "were playing",
        },
      ],
      answer: "C",
    },
    {
      question: "She __TENSE__ a letter when I knocked",
      tense: "write",
      options: [
        {
          label: "A",
          option: "writes",
        },
        {
          label: "B",
          option: "is writing",
        },
        {
          label: "C",
          option: "was writing",
        },
        {
          label: "D",
          option: "had written",
        },
      ],
      answer: "C",
    },
    {
      question: "They __TENSE__ soccer when it started to rain",
      tense: "play",
      options: [
        {
          label: "A",
          option: "play",
        },
        {
          label: "B",
          option: "played",
        },
        {
          label: "C",
          option: "are playing",
        },
        {
          label: "D",
          option: "were playing",
        },
      ],
      answer: "D",
    },
    {
      question: "He __TENSE__ lunch at noon tomorrow",
      tense: "eat",
      options: [
        {
          label: "A",
          option: "eats",
        },
        {
          label: "B",
          option: "is eating",
        },
        {
          label: "C",
          option: "ate",
        },
        {
          label: "D",
          option: "will be eating",
        },
      ],
      answer: "D",
    },
    {
      question: "They __TENSE__ soccer at this time next week.",
      tense: "play",
      options: [
        {
          label: "A",
          option: "play",
        },
        {
          label: "B",
          option: "played",
        },
        {
          label: "C",
          option: "are playing",
        },
        {
          label: "D",
          option: "will be playing",
        },
      ],
      answer: "D",
    },
    {
      question: "I __TENSE__ the book when she called.",
      tense: "read",
      options: [
        {
          label: "A",
          option: "read",
        },
        {
          label: "B",
          option: "am reading",
        },
        {
          label: "C",
          option: "was reading",
        },
        {
          label: "D",
          option: "had read",
        },
      ],
      answer: "C",
    },
    {
      question: "She __TENSE__ on the project when I saw her",
      tense: "work",
      options: [
        {
          label: "A",
          option: "works",
        },
        {
          label: "B",
          option: "is working",
        },
        {
          label: "C",
          option: "worked",
        },
        {
          label: "D",
          option: "was working",
        },
      ],
      answer: "D",
    },
    {
      question: " __TENSE__ a student.",
      tense: "be",
      options: [
        {
          label: "A",
          option: "am",
        },
        {
          label: "B",
          option: "was",
        },
        {
          label: "C",
          option: "will be",
        },
        {
          label: "D",
          option: "have been",
        },
      ],
      answer: "A",
    },
    {
      question: "They __TENSE__ to the cinema yesterday",
      tense: "go",
      options: [
        {
          label: "A",
          option: "go",
        },
        {
          label: "B",
          option: "went",
        },
        {
          label: "C",
          option: "are going",
        },
        {
          label: "D",
          option: "will go",
        },
      ],
      answer: "B",
    },
    {
      question: "She __TENSE__ this book many times",
      tense: "read",
      options: [
        {
          label: "A",
          option: "reads",
        },
        {
          label: "B",
          option: "is reading",
        },
        {
          label: "C",
          option: "has read",
        },
        {
          label: "D",
          option: "was reading",
        },
      ],
      answer: "C",
    },
    {
      question: "They __TENSE__ before the meeting started.",
      tense: "arrive",
      options: [
        {
          label: "A",
          option: "arrive",
        },
        {
          label: "B",
          option: "are arriving",
        },
        {
          label: "C",
          option: "arrived",
        },
        {
          label: "D",
          option: "had arrived",
        },
      ],
      answer: "D",
    },
    {
      question: "We __TENSE__ on this project together.",
      tense: "work",
      options: [
        {
          label: "A",
          option: "work",
        },
        {
          label: "B",
          option: "are working",
        },
        {
          label: "C",
          option: "have worked",
        },
        {
          label: "D",
          option: "have been working",
        },
      ],
      answer: "D",
    },
    {
      question: "He __TENSE__ an email when I entered his office.",
      tense: "write",
      options: [
        {
          label: "A",
          option: "writes",
        },
        {
          label: "B",
          option: "is writing",
        },
        {
          label: "C",
          option: "wrote",
        },
        {
          label: "D",
          option: "was writing",
        },
      ],
      answer: "D",
    },
  ],
  French: [
    {
      question: "Hier, je__TENSE__ un livre intéressant",
      tense: "lire",
      options: [
        {
          label: "A",
          option: "lisais",
        },
        {
          label: "B",
          option: "ai lu",
        },
        {
          label: "C",
          option: "avais lu",
        },
        {
          label: "D",
          option: "lirai",
        },
      ],
      answer: "A",
    },
    {
      question: "Elle __TENSE__ français quand elle était petite.",
      tense: "parler",
      options: [
        {
          label: "A",
          option: "parle",
        },
        {
          label: "B",
          option: "a parlé",
        },
        {
          label: "C",
          option: "parlait",
        },
        {
          label: "D",
          option: "parlera",
        },
      ],
      answer: "C",
    },
    {
      question: "Nous __TENSE__ nos devoirs.",
      tense: "finir",
      options: [
        {
          label: "A",
          option: "avons fini",
        },
        {
          label: "B",
          option: "finissons",
        },
        {
          label: "C",
          option: "finissions",
        },
        {
          label: "D",
          option: "finirons",
        },
      ],
      answer: "A",
    },
    {
      question: "J'__TENSE__le bus tous les jours.",
      tense: "prendre",
      options: [
        {
          label: "A",
          option: "ai pris",
        },
        {
          label: "B",
          option: "prenais",
        },
        {
          label: "C",
          option: "avais pris",
        },
        {
          label: "D",
          option: "prends",
        },
      ],
      answer: "B",
    },
    {
      question: "Ils__TENSE__au cinéma la semaine dernière.",
      tense: "aller",
      options: [
        {
          label: "A",
          option: "sont allés",
        },
        {
          label: "B",
          option: "allaient",
        },
        {
          label: "C",
          option: "étaient allés",
        },
        {
          label: "D",
          option: "iront.",
        },
      ],
      answer: "A",
    },
    {
      question: "Quand j'étais enfant, je__TENSE__ de devenir astronaute.",
      tense: "rêver",
      options: [
        {
          label: "A",
          option: "rêvais",
        },
        {
          label: "B",
          option: "ai rêvé",
        },
        {
          label: "C",
          option: "avais rêvé",
        },
        {
          label: "D",
          option: "rêverai.",
        },
      ],
      answer: "A",
    },
    {
      question: "Tu __TENSE__ une pizza ce soir?",
      tense: "manger",
      options: [
        {
          label: "A",
          option: "manges",
        },
        {
          label: "B",
          option: "as mangé",
        },
        {
          label: "C",
          option: "mangeais",
        },
        {
          label: "D",
          option: "mangeras.",
        },
      ],
      answer: "B",
    },
    {
      question: "On __TENSE__ cette maison il y a 20 ans",
      tense: "construire",
      options: [
        {
          label: "A",
          option: "a construit",
        },
        {
          label: "B",
          option: "construit",
        },
        {
          label: "C",
          option: "construisait",
        },
        {
          label: "D",
          option: "construira.",
        },
      ],
      answer: "A",
    },
    {
      question: "Elle__TENSE__la réponse.",
      tense: "savoir",
      options: [
        {
          label: "A",
          option: "ne savait pas ",
        },
        {
          label: "B",
          option: "n'a pas su ",
        },
        {
          label: "C",
          option: "ne savait rien ",
        },
        {
          label: "D",
          option: "ne saura pas.",
        },
      ],
      answer: "A",
    },
    {
      question: "Nous__TENSE__ en Europe l'été dernier.",
      tense: "voyager",
      options: [
        {
          label: "A",
          option: "avons voyagé ",
        },
        {
          label: "B",
          option: "voyagions",
        },
        {
          label: "C",
          option: "voyagerons",
        },
        {
          label: "D",
          option: "avions voyage. ",
        },
      ],
      answer: "A",
    },
    {
      question: "J __TENSE__ mes courses plus ",
      tense: "faire",
      options: [
        {
          label: "A",
          option: "ai fait ",
        },
        {
          label: "B",
          option: "fais",
        },
        {
          label: "C",
          option: "faisais",
        },
        {
          label: "D",
          option: "ferai.",
        },
      ],
      answer: "A",
    },
    {
      question: "Ils __TENSE__ à Paris depuis 10 ans.",
      tense: "habiter",
      options: [
        {
          label: "A",
          option: "ont habité ",
        },
        {
          label: "B",
          option: "habitaient ",
        },
        {
          label: "C",
          option: ") habiteront.",
        },
        {
          label: "D",
          option: "habitent",
        },
      ],
      answer: "D",
    },
    {
      question: "Que __TENSE__hier soir?",
      tense: "lire",
      options: [
        {
          label: "A",
          option: "lisais-tu ",
        },
        {
          label: "B",
          option: "lis-tu ",
        },
        {
          label: "C",
          option: "lisais",
        },
        {
          label: "D",
          option: "liras-tu.",
        },
      ],
      answer: "C",
    },
    {
      question: "Elle __TENSE__une lettre à son ami. ",
      tense: "write",
      options: [
        {
          label: "A",
          option: "a écrit ",
        },
        {
          label: "B",
          option: "écrit",
        },
        {
          label: "C",
          option: "écrivait ",
        },
        {
          label: "D",
          option: "écrira.",
        },
      ],
      answer: "A",
    },
    {
      question: "Nous __TENSE__ à la plage. ",
      tense: "aller",
      options: [
        {
          label: "A",
          option: "ne sommes pas allées ",
        },
        {
          label: "B",
          option: "ne sommes pas allés ",
        },
        {
          label: "C",
          option: "n'allions pas ",
        },
        {
          label: "D",
          option: "ne irons pas",
        },
      ],
      answer: "B",
    },
    {
      question: "Quand il __TENSE__nous sommes restés à la maison.",
      tense: "pleuvoir",
      options: [
        {
          label: "A",
          option: "a plu ",
        },
        {
          label: "B",
          option: "pleut",
        },
        {
          label: "C",
          option: "pleuvra",
        },
        {
          label: "D",
          option: "pleuvait",
        },
      ],
      answer: "D",
    },
    {
      question: "Vous __TENSE__ce film? ",
      tense: "avoir",
      options: [
        {
          label: "A",
          option: "verrez",
        },
        {
          label: "B",
          option: "avez vu ",
        },
        {
          label: "C",
          option: "voyez",
        },
        {
          label: "D",
          option: "voyiez.",
        },
      ],
      answer: "B",
    },
    {
      question: "Ne me __TENSE__pas un coup comme celui-là !",
      tense: "refaire",
      options: [
        {
          label: "A",
          option: "refaite",
        },
        {
          label: "B",
          option: "refaîtes",
        },
        {
          label: "C",
          option: "refaites",
        },
        {
          label: "D",
          option: "refaisez",
        },
      ],
      answer: "C",
    },
    {
      question: "Les clients __TENSE__en masse dans ce magasin.",
      tense: "accourir",
      options: [
        {
          label: "A",
          option: "accourrent",
        },
        {
          label: "B",
          option: "acourrent",
        },
        {
          label: "C",
          option: "acourent",
        },
        {
          label: "D",
          option: "accourent",
        },
      ],
      answer: "D",
    },
    {
      question: "Que nous vous__TENSE__ou non n’a pas d’importance !",
      tense: "croire",
      options: [
        {
          label: "A",
          option: "croyons",
        },
        {
          label: "B",
          option: "croyez",
        },
        {
          label: "C",
          option: "croyions",
        },
        {
          label: "D",
          option: "croyiez",
        },
      ],
      answer: "C",
    },
    {
      question: " __TENSE__le courage de te défendre",
      tense: "avoir",
      options: [
        {
          label: "A",
          option: "Aie",
        },
        {
          label: "B",
          option: "Aies",
        },
        {
          label: "C",
          option: "Ai",
        },
        {
          label: "D",
          option: "Ait",
        },
      ],
      answer: "A",
    },
    {
      question: "Ils ont __TENSE__ leurs amis au centre-ville.",
      tense: "rejoindre",
      options: [
        {
          label: "A",
          option: "rejoinds",
        },
        {
          label: "B",
          option: "rejoind",
        },
        {
          label: "C",
          option: "rejoint",
        },
        {
          label: "D",
          option: "rejoins",
        },
      ],
      answer: "C",
    },
    {
      question: "Ce projet __TENSE__ l’idée que l’éducation est utile.",
      tense: "promouvoir",
      options: [
        {
          label: "A",
          option: "promouvoit",
        },
        {
          label: "B",
          option: "promouvoie",
        },
        {
          label: "C",
          option: "promeut",
        },
        {
          label: "D",
          option: "promeuve",
        },
      ],
      answer: "C",
    },
    {
      question: "Je __TENSE__ de rage.",
      tense: "bouter",
      options: [
        {
          label: "A",
          option: "boue",
        },
        {
          label: "B",
          option: "bous",
        },
        {
          label: "C",
          option: "bouille",
        },
        {
          label: "D",
          option: "bouts",
        },
      ],
      answer: "B",
    },
    {
      question: "Ce n’est pas que je n’ __TENSE__  pas envie de venir, mais je ne me sens pas très bien..",
      tense: "avoir",
      options: [
        {
          label: "A",
          option: "ai",
        },
        {
          label: "B",
          option: "aie",
        },
        {
          label: "C",
          option: "aies",
        },
        {
          label: "D",
          option: "ait",
        },
      ],
      answer: "B",
    },
    {
      question: "Si tu veux distinguer les détails,  __TENSE__  la photo.",
      tense: "agrandir",
      options: [
        {
          label: "A",
          option: "agrandis",
        },
        {
          label: "B",
          option: "agrandie",
        },
        {
          label: "C",
          option: "agrandi",
        },
        {
          label: "D",
          option: "agrandit",
        },
      ],
      answer: "A",
    },
    {
      question: "Le dessert est __TENSE__  dans le menu.",
      tense: "inclure",
      options: [
        {
          label: "A",
          option: "inclu",
        },
        {
          label: "B",
          option: "inclue",
        },
        {
          label: "C",
          option: "inclus",
        },
        {
          label: "D",
          option: "inclut",
        },
      ],
      answer: "C",
    },
    {
      question: "Vous vous  __TENSE__ tout le temps.",
      tense: "contredire",
      options: [
        {
          label: "A",
          option: "contredîtes",
        },
        {
          label: "B",
          option: "contredisez",
        },
        {
          label: "C",
          option: "contredites",
        },
        {
          label: "D",
          option: "contredîsez",
        },
      ],
      answer: "B",
    },
  ],
  
  
} satisfies TQuestions;
