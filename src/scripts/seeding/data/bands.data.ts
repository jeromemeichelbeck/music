import type { BandDTO } from "@/server/models/band.model";

export const bandsData = [
  {
    id: 1,
    name: "Eternal Echoes",
    summary: "Progressive Metal Band",
    description:
      "Eternal Echoes is a progressive metal band that pushes the boundaries of the genre with their intricate compositions and thought-provoking lyrics. Their music takes the listener on a journey through complex rhythms and melodic landscapes.",
    townId: 1, // Corresponds to Fictional Town ID
    yearActiveFrom: "2005",
  },
  {
    id: 2,
    name: "Crimson Skies",
    summary: "Gothic Rock Ensemble",
    description:
      "Crimson Skies is a gothic rock ensemble that weaves dark and poetic narratives into their music. Their haunting melodies and evocative lyrics create a unique and immersive listening experience.",
    townId: 2, // Corresponds to Fictional Town ID
    yearActiveFrom: "1998",
  },
  {
    id: 3,
    name: "Solaris Dreams",
    summary: "Space Rock Pioneers",
    description:
      "Solaris Dreams is at the forefront of the space rock genre, exploring the cosmos through their ethereal soundscapes and cosmic lyrics. They transport their audience to distant galaxies with every note.",
    townId: 3, // Corresponds to Fictional Town ID
    yearActiveFrom: "2012",
  },
  {
    id: 4,
    name: "Nebula Nexus",
    summary: "Psychedelic Fusion Collective",
    description:
      "Nebula Nexus is a boundary-pushing psychedelic fusion collective that experiments with diverse musical elements. Their mesmerizing performances blur the lines between genres and transcend musical conventions.",
    townId: 4, // Corresponds to Fictional Town ID
    yearActiveFrom: "2007",
    yearActiveTo: "2019", // Example of an inactive band
  },
  {
    id: 5,
    name: "Astral Harmony",
    summary: "Experimental Jazz Fusion",
    description:
      "Astral Harmony is an experimental jazz fusion band that combines intricate jazz improvisation with a touch of surrealism. Their music is an auditory journey into uncharted territory.",
    townId: 5, // Corresponds to Fictional Town ID
    yearActiveFrom: "2010",
  },
  {
    id: 6,
    name: "Nighthawk Syndicate",
    summary: "Alternative Rockers",
    description:
      "Nighthawk Syndicate is a versatile alternative rock band known for their emotive lyrics and dynamic performances. Their music resonates with a wide range of listeners.",
    townId: 6, // Corresponds to Fictional Town ID
    yearActiveFrom: "2003",
    yearActiveTo: "2017", // Example of an inactive band
  },
  {
    id: 7,
    name: "Echoing Vortex",
    summary: "Post-Metal Architects",
    description:
      "Echoing Vortex is a post-metal band that constructs intricate musical landscapes with soaring instrumentals and profound storytelling. Their compositions take listeners on a journey of introspection.",
    townId: 7, // Corresponds to Fictional Town ID
    yearActiveFrom: "2015",
  },
  {
    id: 8,
    name: "Starlight Serenade",
    summary: "Symphonic Metal Ensemble",
    description:
      "Starlight Serenade is a symphonic metal ensemble that combines the power of metal with orchestral grandeur. Their performances are a majestic fusion of heavy riffs and classical elegance.",
    townId: 8, // Corresponds to Fictional Town ID
    yearActiveFrom: "2009",
  },
  {
    id: 9,
    name: "Lunar Lullaby",
    summary: "Atmospheric Black Metal",
    description:
      "Lunar Lullaby is an atmospheric black metal band that paints haunting soundscapes with their music. Their songs are a journey through the desolate landscapes of the mind.",
    townId: 9, // Corresponds to Fictional Town ID
    yearActiveFrom: "2013",
  },
  {
    id: 10,
    name: "Nocturnal Echo",
    summary: "Death Metal Titans",
    description:
      "Nocturnal Echo is a death metal band that unleashes relentless aggression with their ferocious guitar riffs and growling vocals. Their music is a sonic assault on the senses.",
    townId: 10, // Corresponds to Fictional Town ID
    yearActiveFrom: "2001",
  },
  {
    id: 11,
    name: "Tempest Serpent",
    summary: "Symphonic Black Metal",
    description:
      "Tempest Serpent is a symphonic black metal band that combines the dark intensity of black metal with orchestral elements. Their music is an epic journey through realms of darkness and grandeur.",
    townId: 11, // Corresponds to Fictional Town ID
    yearActiveFrom: "2008",
  },
  {
    id: 12,
    name: "Netherworld Echoes",
    summary: "Doom Metal Pioneers",
    description:
      "Netherworld Echoes is a pioneering doom metal band that has set the standards for the genre with their slow, crushing riffs and mournful lyrics. Their music is a descent into the abyss of despair.",
    townId: 12, // Corresponds to Fictional Town ID
    yearActiveFrom: "1999",
  },
  {
    id: 13,
    name: "Elysian Resonance",
    summary: "Progressive Rock Collective",
    description:
      "Elysian Resonance is a collective of musicians who explore the boundaries of progressive rock. Their compositions are a fusion of intricate rhythms and intricate storytelling.",
    townId: 13, // Corresponds to Fictional Town ID
    yearActiveFrom: "2011",
  },
  {
    id: 14,
    name: "Quantum Soundscapes",
    summary: "Experimental Electronica",
    description:
      "Quantum Soundscapes is an experimental electronica project that takes listeners on a journey through electronic soundscapes. Their music is a sonic exploration of the digital realm.",
    townId: 14, // Corresponds to Fictional Town ID
    yearActiveFrom: "2017",
  },
  {
    id: 15,
    name: "Frostbitten Echoes",
    summary: "Blackened Death Metal",
    description:
      "Frostbitten Echoes is a blackened death metal band that delivers a relentless assault of ferocious riffs and brutal vocals. Their music is a sonic blizzard of aggression.",
    townId: 15, // Corresponds to Fictional Town ID
    yearActiveFrom: "2006",
  },
  {
    id: 16,
    name: "Mystic Mirage",
    summary: "Symphonic Prog Metal",
    description:
      "Mystic Mirage is a symphonic progressive metal band that weaves intricate compositions with orchestral elements. Their music is a journey through mystical realms.",
    townId: 16, // Corresponds to Fictional Town ID
    yearActiveFrom: "2013",
  },
  {
    id: 17,
    name: "Lunar Serenity",
    summary: "Atmospheric Post-Black Metal",
    description:
      "Lunar Serenity is an atmospheric post-black metal band that creates expansive and ethereal soundscapes. Their music is an auditory voyage through lunar landscapes.",
    townId: 17, // Corresponds to Fictional Town ID
    yearActiveFrom: "2010",
  },
  {
    id: 18,
    name: "Nebula Architects",
    summary: "Progressive Djent",
    description:
      "Nebula Architects is a progressive djent band known for their complex rhythms and technical guitar work. Their music is a sonic blueprint of the cosmos.",
    townId: 18, // Corresponds to Fictional Town ID
    yearActiveFrom: "2016",
  },
  {
    id: 19,
    name: "Eternal Twilight",
    summary: "Gothic Metal Pioneers",
    description:
      "Eternal Twilight is a pioneering gothic metal band that helped define the genre. Their music is a journey through dark, romantic soundscapes.",
    townId: 19, // Corresponds to Fictional Town ID
    yearActiveFrom: "1997",
  },
  {
    id: 20,
    name: "Astral Winds",
    summary: "Progressive Space Metal",
    description:
      "Astral Winds is a progressive space metal band that explores the cosmos with their intricate compositions and otherworldly lyrics. Their music is a cosmic odyssey.",
    townId: 20, // Corresponds to Fictional Town ID
    yearActiveFrom: "2004",
  },
  {
    id: 21,
    name: "Celestial Labyrinths",
    summary: "Progressive Metal Ensemble",
    description:
      "Celestial Labyrinths is a progressive metal ensemble that navigates intricate musical mazes. Their compositions are a journey through complex rhythms and sonic labyrinths.",
    townId: 21, // Corresponds to Fictional Town ID
    yearActiveFrom: "2014",
  },
  {
    id: 22,
    name: "Ethereal Euphony",
    summary: "Atmospheric Black Metal",
    description:
      "Ethereal Euphony is an atmospheric black metal band that creates expansive and otherworldly soundscapes. Their music is an ethereal journey through the realms of the mind.",
    townId: 22, // Corresponds to Fictional Town ID
    yearActiveFrom: "2012",
  },
  {
    id: 23,
    name: "Crimson Veil",
    summary: "Gothic Metal Ensemble",
    description:
      "Crimson Veil is a gothic metal ensemble that shrouds their music in dark, romantic mystique. Their melodies and lyrics are an exploration of the heart's hidden depths.",
    townId: 23, // Corresponds to Fictional Town ID
    yearActiveFrom: "2009",
  },
  {
    id: 24,
    name: "Echoing Sirens",
    summary: "Symphonic Prog Metal",
    description:
      "Echoing Sirens is a symphonic progressive metal band that blends intricate compositions with symphonic grandeur. Their music is an epic journey through mythical landscapes.",
    townId: 24, // Corresponds to Fictional Town ID
    yearActiveFrom: "2011",
  },
  {
    id: 25,
    name: "Galactic Odyssey",
    summary: "Progressive Space Rock",
    description:
      "Galactic Odyssey is a progressive space rock band that embarks on cosmic musical adventures. Their compositions are a voyage through celestial realms and unknown galaxies.",
    townId: 25, // Corresponds to Fictional Town ID
    yearActiveFrom: "2015",
  },
  {
    id: 26,
    name: "Vortex Nexus",
    summary: "Progressive Djent Architects",
    description:
      "Vortex Nexus is a collective of progressive djent architects who craft intricate and technical soundscapes. Their music is a labyrinth of rhythmic complexities.",
    townId: 26, // Corresponds to Fictional Town ID
    yearActiveFrom: "2017",
  },
  {
    id: 27,
    name: "Abyssal Echoes",
    summary: "Blackened Death Metal Titans",
    description:
      "Abyssal Echoes is a blackened death metal band that unleashes a relentless storm of aggression. Their music is a descent into the abyss of chaos and darkness.",
    townId: 27, // Corresponds to Fictional Town ID
    yearActiveFrom: "2008",
  },
  {
    id: 28,
    name: "Lunar Enigma",
    summary: "Atmospheric Post-Black Metal",
    description:
      "Lunar Enigma is an atmospheric post-black metal band that weaves enigmatic soundscapes. Their music is a journey through the mysteries of the lunar night.",
    townId: 28, // Corresponds to Fictional Town ID
    yearActiveFrom: "2016",
  },
  {
    id: 29,
    name: "Stellar Reverie",
    summary: "Progressive Rock Ensemble",
    description:
      "Stellar Reverie is a progressive rock ensemble that explores the boundaries of the genre. Their music is a reverie through intricate melodies and poetic narratives.",
    townId: 29, // Corresponds to Fictional Town ID
    yearActiveFrom: "2013",
  },
  {
    id: 30,
    name: "Voidwalkers",
    summary: "Atmospheric Black Metal Pioneers",
    description:
      "Voidwalkers are pioneering atmospheric black metal artists who delve into cosmic soundscapes. Their music is a journey through the abyss of the void.",
    townId: 30, // Corresponds to Fictional Town ID
    yearActiveFrom: "2007",
  },
  {
    id: 31,
    name: "Eternal Solstice",
    summary: "Symphonic Prog Metal",
    description:
      "Eternal Solstice is a symphonic progressive metal band that weaves intricate compositions with symphonic grandeur. Their music is an epic journey through mythical landscapes.",
    townId: 31, // Corresponds to Fictional Town ID
    yearActiveFrom: "2010",
  },
  {
    id: 32,
    name: "Cosmic Echoes",
    summary: "Progressive Space Rock",
    description:
      "Cosmic Echoes is a progressive space rock band that embarks on cosmic musical adventures. Their compositions are a voyage through celestial realms and unknown galaxies.",
    townId: 32, // Corresponds to Fictional Town ID
    yearActiveFrom: "2014",
  },
  {
    id: 33,
    name: "Quantum Harmonics",
    summary: "Progressive Djent Architects",
    description:
      "Quantum Harmonics is a collective of progressive djent architects who craft intricate and technical soundscapes. Their music is a labyrinth of rhythmic complexities.",
    townId: 33, // Corresponds to Fictional Town ID
    yearActiveFrom: "2016",
  },
  {
    id: 34,
    name: "Abyssal Symphony",
    summary: "Blackened Death Metal Titans",
    description:
      "Abyssal Symphony is a blackened death metal band that unleashes a relentless storm of aggression. Their music is a descent into the abyss of chaos and darkness.",
    townId: 34, // Corresponds to Fictional Town ID
    yearActiveFrom: "2009",
  },
  {
    id: 35,
    name: "Lunar Mystique",
    summary: "Atmospheric Post-Black Metal",
    description:
      "Lunar Mystique is an atmospheric post-black metal band that weaves enigmatic soundscapes. Their music is a journey through the mysteries of the lunar night.",
    townId: 35, // Corresponds to Fictional Town ID
    yearActiveFrom: "2011",
  },
  {
    id: 36,
    name: "Celestial Currents",
    summary: "Progressive Metal Explorers",
    description:
      "Celestial Currents are progressive metal explorers who push the boundaries of the genre. Their music is a journey through intricate rhythms and sonic landscapes.",
    townId: 36, // Corresponds to Fictional Town ID
    yearActiveFrom: "2015",
  },
  {
    id: 37,
    name: "Astral Alchemy",
    summary: "Progressive Rock Ensemble",
    description:
      "Astral Alchemy is a progressive rock ensemble that explores the boundaries of the genre. Their music is an alchemical journey through intricate melodies and poetic narratives.",
    townId: 37, // Corresponds to Fictional Town ID
    yearActiveFrom: "2017",
  },
  {
    id: 38,
    name: "Eternal Nightfall",
    summary: "Atmospheric Black Metal Pioneers",
    description:
      "Eternal Nightfall are pioneering atmospheric black metal artists who delve into cosmic soundscapes. Their music is a journey through the endless night.",
    townId: 38, // Corresponds to Fictional Town ID
    yearActiveFrom: "2013",
  },
  {
    id: 39,
    name: "Symphonic Shadows",
    summary: "Symphonic Prog Metal",
    description:
      "Symphonic Shadows is a symphonic progressive metal band that weaves intricate compositions with symphonic grandeur. Their music is an epic journey through shadowy landscapes.",
    townId: 39, // Corresponds to Fictional Town ID
    yearActiveFrom: "2012",
  },
  {
    id: 40,
    name: "Stellar Odyssey",
    summary: "Progressive Space Rock",
    description:
      "Stellar Odyssey is a progressive space rock band that embarks on cosmic musical adventures. Their compositions are a voyage through celestial realms and distant galaxies.",
    townId: 40, // Corresponds to Fictional Town ID
    yearActiveFrom: "2016",
  },
  {
    id: 41,
    name: "Quantum Resonance",
    summary: "Progressive Djent Architects",
    description:
      "Quantum Resonance is a collective of progressive djent architects who craft intricate and technical soundscapes. Their music is a labyrinth of rhythmic complexities.",
    townId: 41, // Corresponds to Fictional Town ID
    yearActiveFrom: "2018",
  },
  {
    id: 42,
    name: "Abyssal Fury",
    summary: "Blackened Death Metal Titans",
    description:
      "Abyssal Fury is a blackened death metal band that unleashes a relentless storm of aggression. Their music is a descent into the abyss of fury and darkness.",
    townId: 42, // Corresponds to Fictional Town ID
    yearActiveFrom: "2010",
  },
  {
    id: 43,
    name: "Lunar Reverie",
    summary: "Atmospheric Post-Black Metal",
    description:
      "Lunar Reverie is an atmospheric post-black metal band that weaves enigmatic soundscapes. Their music is a journey through the mysterious realms of the lunar night.",
    townId: 43, // Corresponds to Fictional Town ID
    yearActiveFrom: "2014",
  },
  {
    id: 44,
    name: "Cosmic Explorers",
    summary: "Progressive Metal Visionaries",
    description:
      "Cosmic Explorers are progressive metal visionaries who push the boundaries of the genre. Their music is a journey through intricate rhythms and sonic explorations.",
    townId: 44, // Corresponds to Fictional Town ID
    yearActiveFrom: "2011",
  },
  {
    id: 45,
    name: "Eternal Eclipse",
    summary: "Progressive Rock Ensemble",
    description:
      "Eternal Eclipse is a progressive rock ensemble that explores the boundaries of the genre. Their music is an eclipse of intricate melodies and poetic narratives.",
    townId: 1, // Corresponds to Fictional Town ID 1
    yearActiveFrom: "2019",
  },
  {
    id: 46,
    name: "Astral Illumination",
    summary: "Atmospheric Black Metal Pioneers",
    description:
      "Astral Illumination are pioneering atmospheric black metal artists who delve into cosmic soundscapes. Their music is an illumination in the vast cosmic expanse.",
    townId: 2, // Corresponds to Fictional Town ID 2
    yearActiveFrom: "2013",
  },
  {
    id: 47,
    name: "Symphonic Enigma",
    summary: "Symphonic Prog Metal",
    description:
      "Symphonic Enigma is a symphonic progressive metal band that weaves intricate compositions with symphonic grandeur. Their music is an enigmatic journey through symphonic landscapes.",
    townId: 3, // Corresponds to Fictional Town ID 3
    yearActiveFrom: "2012",
  },
  {
    id: 48,
    name: "Stellar Serenade",
    summary: "Progressive Space Rock",
    description:
      "Stellar Serenade is a progressive space rock band that embarks on cosmic musical adventures. Their compositions are a serenade through celestial realms and distant galaxies.",
    townId: 4, // Corresponds to Fictional Town ID 4
    yearActiveFrom: "2017",
  },
  {
    id: 49,
    name: "Quantum Harmonies",
    summary: "Progressive Djent Architects",
    description:
      "Quantum Harmonies is a collective of progressive djent architects who craft intricate and technical soundscapes. Their music is a labyrinth of rhythmic complexities.",
    townId: 5, // Corresponds to Fictional Town ID 5
    yearActiveFrom: "2018",
  },
  {
    id: 50,
    name: "Abyssal Descent",
    summary: "Blackened Death Metal Titans",
    description:
      "Abyssal Descent is a blackened death metal band that unleashes a relentless storm of aggression. Their music is a descent into the abyss of fury and darkness.",
    townId: 6, // Corresponds to Fictional Town ID 6
    yearActiveFrom: "2010",
  },
  {
    id: 51,
    name: "Lunar Symphony",
    summary: "Atmospheric Post-Black Metal",
    description:
      "Lunar Symphony is an atmospheric post-black metal band that weaves enigmatic soundscapes. Their music is a symphony through the mysterious realms of the lunar night.",
    townId: 7, // Corresponds to Fictional Town ID 7
    yearActiveFrom: "2014",
  },
] satisfies BandDTO[];
