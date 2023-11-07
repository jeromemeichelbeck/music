import type { AreaDTO } from "@/server/models/area.model";

export const areasData = [
  {
    id: 1,
    name: "New York",
    summary: "New York is a diverse state in the northeastern United States.",
    description:
      "New York is a state located in the northeastern United States. It is known for its diverse population, iconic cityscape in New York City, and beautiful natural areas, including the Adirondack Mountains and the Finger Lakes region.",
    countryId: 1, // Corresponds to the United States
  },
  {
    id: 2,
    name: "Alberta",
    summary:
      "Alberta is a province in western Canada known for its natural beauty.",
    description:
      "Alberta is a province located in western Canada. It is famous for its stunning natural beauty, including the Rocky Mountains, Banff National Park, and Jasper National Park. Alberta is a popular destination for outdoor activities and wildlife viewing.",
    countryId: 2, // Corresponds to Canada
  },
  {
    id: 3,
    name: "England",
    summary: "England is a historic country within the United Kingdom.",
    description:
      "England is a historic country within the United Kingdom. It is known for its rich history, including the Tudor and Victorian eras. England is home to cities like London, Liverpool, and Manchester, each with its own unique character and culture.",
    countryId: 3, // Corresponds to the United Kingdom
  },
  {
    id: 4,
    name: "Queensland",
    summary:
      "Queensland is a state in northeastern Australia known for its tropical landscapes.",
    description:
      "Queensland is a state located in northeastern Australia. It is known for its tropical landscapes, including the Great Barrier Reef, lush rainforests, and beautiful coastal areas. Queensland is a popular destination for outdoor adventures and beach holidays.",
    countryId: 4, // Corresponds to Australia
  },
  {
    id: 5,
    name: "Île-de-France",
    summary:
      "Île-de-France is a region in northern France with a focus on culture and commerce.",
    description:
      "Île-de-France is a region located in northern France and encompasses Paris, the capital city. It is known for its cultural richness, iconic landmarks like the Eiffel Tower, and a strong focus on commerce and finance.",
    countryId: 5, // Corresponds to France
  },
  {
    id: 6,
    name: "Berlin",
    summary: "Berlin is the capital city and one of the 16 states in Germany.",
    description:
      "Berlin is not only the capital city of Germany but also one of the country's 16 states. It is known for its vibrant culture, historical significance, and status as a major economic and political hub.",
    countryId: 6, // Corresponds to Germany
  },
  {
    id: 7,
    name: "Tokyo",
    summary: "Tokyo is a bustling metropolis and the capital city of Japan.",
    description:
      "Tokyo is the capital city of Japan and serves as one of the country's 47 prefectures. It is a dynamic metropolis that blends tradition and modernity, offering a wide range of experiences and opportunities.",
    countryId: 7, // Corresponds to Japan
  },
  {
    id: 8,
    name: "Shanghai",
    summary:
      "Shanghai is a major municipality and a major financial and business hub in China.",
    description:
      "Shanghai is one of the four direct-controlled municipalities of China. It is known for its rapid economic growth, modern skyline, and role as a global financial and business center.",
    countryId: 8, // Corresponds to China
  },
  {
    id: 9,
    name: "New South Wales",
    summary:
      "New South Wales is a state in southeastern Australia known for its diverse landscapes.",
    description:
      "New South Wales is a state located in southeastern Australia. It is known for its diverse landscapes, including coastal areas, the Blue Mountains, and the capital city, Sydney. The state offers a wide range of outdoor and cultural experiences.",
    countryId: 4, // Corresponds to Australia
  },
  {
    id: 10,
    name: "Île-de-France",
    summary:
      "Île-de-France is a region in northern France with a focus on culture and commerce.",
    description:
      "Île-de-France is a region located in northern France and encompasses Paris, the capital city. It is known for its cultural richness, iconic landmarks like the Eiffel Tower, and a strong focus on commerce and finance.",
    countryId: 5, // Corresponds to France
  },
  {
    id: 11,
    name: "Bavaria",
    summary:
      "Bavaria is a federal state in southern Germany known for its traditions and landscapes.",
    description:
      "Bavaria is a federal state located in southern Germany. It is known for its rich traditions, including Oktoberfest, and its diverse landscapes, featuring the Bavarian Alps, beautiful lakes, and charming villages.",
    countryId: 6, // Corresponds to Germany
  },
  {
    id: 12,
    name: "Kanto",
    summary:
      "Kanto is a region in eastern Japan known for its historic sites and modern cities.",
    description:
      "Kanto is a region located in eastern Japan and includes Tokyo, the capital city. It is known for its historic sites, modern cities, and a mix of traditional and contemporary culture.",
    countryId: 7, // Corresponds to Japan
  },
  {
    id: 13,
    name: "Guangdong",
    summary:
      "Guangdong is a province in southern China with a strong economy and culture.",
    description:
      "Guangdong is a province located in southern China. It is known for its strong economy, cultural heritage, and diverse cuisine. Guangzhou, the provincial capital, is a major business and trade hub.",
    countryId: 8, // Corresponds to China
  },
  {
    id: 14,
    name: "Queensland",
    summary:
      "Queensland is a state in northeastern Australia known for its tropical landscapes.",
    description:
      "Queensland is a state located in northeastern Australia. It is known for its tropical landscapes, including the Great Barrier Reef, lush rainforests, and beautiful coastal areas. Queensland is a popular destination for outdoor adventures and beach holidays.",
    countryId: 4, // Corresponds to Australia
  },
  {
    id: 15,
    name: "California",
    summary: "California is a diverse state in the western United States.",
    description:
      "California is a diverse state located in the western United States. It is known for its varied landscapes, including beaches, mountains, and deserts. California is a cultural and economic powerhouse with cities like Los Angeles and San Francisco.",
    countryId: 1, // Corresponds to the United States
  },
  {
    id: 16,
    name: "Quebec",
    summary:
      "Quebec is a French-speaking province in eastern Canada with a rich cultural heritage.",
    description:
      "Quebec is a French-speaking province located in eastern Canada. It is known for its rich cultural heritage, historic Old Quebec City, and beautiful landscapes, including the Laurentian Mountains. Quebec has a distinct culture and history within Canada.",
    countryId: 2, // Corresponds to Canada
  },
  {
    id: 17,
    name: "Scotland",
    summary:
      "Scotland is a country in the United Kingdom with a unique culture and stunning landscapes.",
    description:
      "Scotland is a country located within the United Kingdom. It is known for its unique culture, including bagpipes and kilts, as well as its stunning natural landscapes, including the Highlands and Loch Ness. Edinburgh is the capital and a cultural center.",
    countryId: 3, // Corresponds to the United Kingdom
  },
  {
    id: 18,
    name: "Victoria",
    summary:
      "Victoria is a state in southeastern Australia with a mix of urban and natural attractions.",
    description:
      "Victoria is a state located in southeastern Australia. It is known for its dynamic city of Melbourne, beautiful coastal areas along the Great Ocean Road, and a mix of urban and natural attractions. Victoria is a hub for arts and culture.",
    countryId: 4, // Corresponds to Australia
  },
  {
    id: 19,
    name: "Provence-Alpes-Côte d'Azur",
    summary:
      "Provence-Alpes-Côte d'Azur is a region in southeastern France with Mediterranean charm.",
    description:
      "Provence-Alpes-Côte d'Azur is a region in southeastern France known for its Mediterranean charm, picturesque villages, and beautiful coastline along the French Riviera. It offers a blend of culture, history, and natural beauty.",
    countryId: 5, // Corresponds to France
  },
  {
    id: 20,
    name: "Bavaria",
    summary:
      "Bavaria is a federal state in southern Germany known for its traditions and landscapes.",
    description:
      "Bavaria is a federal state located in southern Germany. It is known for its rich traditions, including Oktoberfest, and its diverse landscapes, featuring the Bavarian Alps, beautiful lakes, and charming villages.",
    countryId: 6, // Corresponds to Germany
  },
  {
    id: 21,
    name: "Kansai",
    summary:
      "Kansai is a region in western Japan with a blend of tradition and modernity.",
    description:
      "Kansai is a region in western Japan known for its blend of tradition and modernity. It includes cities like Osaka, Kyoto, and Nara, each offering historic temples and modern attractions.",
    countryId: 7, // Corresponds to Japan
  },
  {
    id: 22,
    name: "Guangdong",
    summary:
      "Guangdong is a province in southern China with a strong economy and culture.",
    description:
      "Guangdong is a province located in southern China. It is known for its strong economy, cultural heritage, and diverse cuisine. Guangzhou, the provincial capital, is a major business and trade hub.",
    countryId: 8, // Corresponds to China
  },
  {
    id: 23,
    name: "New South Wales",
    summary:
      "New South Wales is a state in southeastern Australia known for its diverse landscapes.",
    description:
      "New South Wales is a state located in southeastern Australia. It is known for its diverse landscapes, including coastal areas, the Blue Mountains, and the capital city, Sydney. The state offers a wide range of outdoor and cultural experiences.",
    countryId: 4, // Corresponds to Australia
  },
  {
    id: 24,
    name: "Occitanie",
    summary:
      "Occitanie is a region in southern France with a blend of landscapes and culture.",
    description:
      "Occitanie is a region in southern France known for its diverse landscapes, including the Pyrenees mountains and the Mediterranean coast. It offers a mix of culture, historic sites, and outdoor activities.",
    countryId: 5, // Corresponds to France
  },
  {
    id: 25,
    name: "Lower Saxony",
    summary:
      "Lower Saxony is a federal state in northern Germany with natural beauty and history.",
    description:
      "Lower Saxony is a federal state located in northern Germany. It is known for its natural beauty, including the Harz Mountains and the North Sea coast. The state also has a rich historical heritage.",
    countryId: 6, // Corresponds to Germany
  },
  {
    id: 26,
    name: "Kansai",
    summary:
      "Kansai is a region in western Japan with a blend of tradition and modernity.",
    description:
      "Kansai is a region in western Japan known for its blend of tradition and modernity. It includes cities like Osaka, Kyoto, and Nara, each offering historic temples and modern attractions.",
    countryId: 7, // Corresponds to Japan
  },
  {
    id: 27,
    name: "Sichuan",
    summary:
      "Sichuan is a province in southwestern China with spicy cuisine and natural beauty.",
    description:
      "Sichuan is a province located in southwestern China. It is known for its spicy cuisine, including Sichuan pepper, and stunning natural beauty, such as the Jiuzhaigou Valley and the Giant Panda Sanctuaries. Chengdu is the provincial capital.",
    countryId: 8, // Corresponds to China
  },
  {
    id: 28,
    name: "Queensland",
    summary:
      "Queensland is a state in northeastern Australia known for its tropical landscapes.",
    description:
      "Queensland is a state located in northeastern Australia. It is known for its tropical landscapes, including the Great Barrier Reef, lush rainforests, and beautiful coastal areas. Queensland is a popular destination for outdoor adventures and beach holidays.",
    countryId: 4, // Corresponds to Australia
  },
  {
    id: 29,
    name: "Texas",
    summary:
      "Texas is a diverse state in the southern United States known for its history and culture.",
    description:
      "Texas is a diverse state located in the southern United States. It is known for its rich history, including the Alamo, and its unique blend of cultures, including Mexican and Western influences. Texas is also famous for its vast landscapes and cities like Houston and Dallas.",
    countryId: 1, // Corresponds to the United States
  },
  {
    id: 30,
    name: "Ontario",
    summary:
      "Ontario is a province in eastern Canada with a mix of urban and natural attractions.",
    description:
      "Ontario is a province located in eastern Canada. It is known for its mix of urban and natural attractions, including the bustling city of Toronto, the stunning landscapes of Algonquin Provincial Park, and the historic capital city, Ottawa. Ontario offers a diverse range of experiences for residents and visitors.",
    countryId: 2, // Corresponds to Canada
  },
] satisfies AreaDTO[];
