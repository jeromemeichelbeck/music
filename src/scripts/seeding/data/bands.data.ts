import type { BandDTO } from "@/server/models/band.model";

export const bandsData = [
  {
    name: "The Beatles",
    description:
      "The Beatles were an English rock band formed in Liverpool in 1960. With a line-up comprising John Lennon, Paul McCartney, George Harrison and Ringo Starr, they are regarded as the most influential band of all time. The group were integral to the development of 1960s counterculture and popular music's recognition as an art form.",
    townId: 1,
  },
  {
    name: "The Rolling Stones",
    description:
      "The Rolling Stones are an English rock band formed in London in 1962. Diverging from the pop rock of the early-1960s, the Rolling Stones pioneered the gritty, heavier-driven sound that came to define hard rock.",
    townId: 1,
  },
  {
    name: "Led Zeppelin",
    description:
      "Led Zeppelin were an English rock band formed in London in 1968. The group consisted of vocalist Robert Plant, guitarist Jimmy Page, bassist/keyboardist John Paul Jones, and drummer John Bonham. With a heavy, guitar-driven sound, they are cited as one of the progenitors of hard rock and heavy metal.",
    townId: 1,
  },
  {
    name: "Pink Floyd",
    description:
      "Pink Floyd were an English rock band formed in London in 1965. Gaining a following as a psychedelic pop group, they were distinguished for their extended compositions, sonic experimentation, philosophical lyrics and elaborate live shows, and became a leading band of the progressive rock genre.",
    townId: 2,
  },
  {
    name: "Queen",
    description:
      "Queen are a British rock band formed in London in 1970. Their classic line-up was Freddie Mercury (lead vocals, piano), Brian May (guitar, vocals), Roger Taylor (drums, vocals) and John Deacon (bass). Their earliest works were influenced by progressive rock, hard rock and heavy metal, but the band gradually ventured into more conventional and radio-friendly works by incorporating further styles, such as arena rock and pop rock.",
    townId: 2,
  },
  {
    name: "AC/DC",
    description:
      "AC/DC are an Australian rock band formed in Sydney in 1973 by Scottish-born brothers Malcolm and Angus Young. Although their music has been variously described as hard rock, blues rock, and heavy metal, the band themselves call it simply rock and roll.",
    townId: 2,
  },
  {
    name: "Metallica",
    description:
      "Metallica is an American heavy metal band. The band was formed in 1981 in Los Angeles by vocalist/guitarist James Hetfield and drummer Lars Ulrich, and has been based in San Francisco for most of its career.",
    townId: 2,
  },
  {
    name: "Nirvana",
    description:
      "Nirvana was an American rock band formed in Aberdeen, Washington, in 1987. Founded by lead singer-songwriter and guitarist Kurt Cobain and bassist Krist Novoselic, the band went through a succession of drummers before recruiting Dave Grohl in 1990.",
    townId: 2,
  },
] satisfies BandDTO[];
