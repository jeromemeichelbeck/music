import type { TownDTO } from "@/server/models/town.model";

export const townsData = [
  {
    id: 1,
    name: "New York City",
    summary:
      "New York City is a bustling metropolis known for its iconic landmarks and cultural diversity.",
    description:
      "New York City, often simply referred to as NYC, is the largest city in the United States and is known for its iconic landmarks such as Times Square, Central Park, and the Statue of Liberty. It's a melting pot of cultures, offering a wide range of experiences and opportunities.",
    areaId: 1, // Corresponds to New York (State)
    latitude: "40.7128",
    longitude: "-74.0060",
  },
  {
    id: 2,
    name: "Toronto",
    summary:
      "Toronto is the largest city in Canada, known for its diverse culture and vibrant arts scene.",
    description:
      "Toronto is the largest city in Canada and is known for its diverse culture, vibrant arts scene, and a wide range of attractions. It's a global city with a rich history and modern amenities.",
    areaId: 16, // Corresponds to Ontario
    latitude: "43.651070",
    longitude: "-79.347015",
  },
  {
    id: 3,
    name: "London",
    summary:
      "London is the capital of the United Kingdom and a global cultural hub.",
    description:
      "London, the capital of the United Kingdom, is a city rich in history, culture, and diversity. It's home to famous landmarks like the Tower of London, Buckingham Palace, and the British Museum, making it a major cultural and economic center.",
    areaId: 17, // Corresponds to England
    latitude: "51.5074",
    longitude: "-0.1278",
  },
  {
    id: 4,
    name: "Brisbane",
    summary:
      "Brisbane is the capital of Queensland, Australia, known for its warm climate and outdoor activities.",
    description:
      "Brisbane, the capital of Queensland, Australia, is known for its warm climate, outdoor activities, and vibrant cultural scene. It offers access to beautiful beaches and the natural beauty of Queensland.",
    areaId: 18, // Corresponds to Queensland
    latitude: "-27.4698",
    longitude: "153.0251",
  },
  {
    id: 5,
    name: "Paris",
    summary:
      "Paris is the capital of France and a city of romance and culture.",
    description:
      "Paris, the capital of France, is renowned for its romantic ambiance, iconic landmarks like the Eiffel Tower and Louvre Museum, and world-class cuisine. It's often referred to as the 'City of Love' and is a global center for art and fashion.",
    areaId: 19, // Corresponds to Île-de-France
    latitude: "48.8566",
    longitude: "2.3522",
  },
  {
    id: 6,
    name: "Berlin",
    summary: "Berlin is the capital of Germany and a vibrant, creative city.",
    description:
      "Berlin, the capital of Germany, is known for its creative and alternative scene, as well as its rich history. It's home to historic sites like the Berlin Wall and a thriving arts and music culture.",
    areaId: 20, // Corresponds to Berlin
    latitude: "52.5200",
    longitude: "13.4050",
  },
  {
    id: 7,
    name: "Osaka",
    summary:
      "Osaka is a major city in the Kansai region of Japan known for its vibrant street food and entertainment.",
    description:
      "Osaka is a major city located in the Kansai region of Japan. It is known for its vibrant street food culture, entertainment, and historic landmarks. Osaka Castle and Dotonbori are popular attractions.",
    areaId: 21, // Corresponds to Kansai
    latitude: "34.6937",
    longitude: "135.5023",
  },
  {
    id: 8,
    name: "Guangzhou",
    summary:
      "Guangzhou is a major city in southern China known for its trade and cultural heritage.",
    description:
      "Guangzhou is a major city located in southern China. It is known for its role in trade, cultural heritage, and a vibrant food scene. The city offers a mix of historic and modern attractions.",
    areaId: 22, // Corresponds to Guangdong
    latitude: "23.1291",
    longitude: "113.2644",
  },
  {
    id: 9,
    name: "Sydney",
    summary:
      "Sydney is the largest city in New South Wales, Australia, known for its iconic landmarks and beaches.",
    description:
      "Sydney is the largest city in New South Wales, Australia, known for its iconic landmarks, including the Sydney Opera House and Sydney Harbour Bridge, as well as its beautiful beaches. It's a hub for culture, business, and outdoor activities.",
    areaId: 23, // Corresponds to New South Wales
    latitude: "-33.8688",
    longitude: "151.2093",
  },
  {
    id: 10,
    name: "Marseille",
    summary:
      "Marseille is a major port city in southern France with a rich maritime history.",
    description:
      "Marseille is a major port city located in southern France. It has a rich maritime history, Mediterranean culture, and a bustling Old Port area. Marseille offers a blend of history, cuisine, and coastal beauty.",
    areaId: 24, // Corresponds to Occitanie
    latitude: "43.2965",
    longitude: "5.3698",
  },
  {
    id: 11,
    name: "Hannover",
    summary:
      "Hannover is the capital city of Lower Saxony, Germany, known for its trade fairs and gardens.",
    description:
      "Hannover is the capital city of Lower Saxony, Germany. It is known for its trade fairs, including the Hannover Messe, and its beautiful gardens, such as the Herrenhausen Gardens. The city combines modernity with historic charm.",
    areaId: 25, // Corresponds to Lower Saxony
    latitude: "52.3759",
    longitude: "9.7320",
  },
  {
    id: 12,
    name: "Kyoto",
    summary:
      "Kyoto is a historic city in the Kansai region of Japan known for its temples and traditional culture.",
    description:
      "Kyoto is a historic city located in the Kansai region of Japan. It is known for its numerous temples, traditional culture, and historic architecture. Kyoto is a center of traditional Japanese arts and crafts.",
    areaId: 21, // Corresponds to Kansai
    latitude: "35.0116",
    longitude: "135.7681",
  },
  {
    id: 13,
    name: "Chengdu",
    summary:
      "Chengdu is the capital of Sichuan province in China, famous for its spicy cuisine and teahouses.",
    description:
      "Chengdu is the capital of Sichuan province in China. It is famous for its spicy cuisine, particularly Sichuan pepper, and is known for its teahouses, relaxed lifestyle, and traditional Sichuanese culture.",
    areaId: 27, // Corresponds to Sichuan
    latitude: "30.5728",
    longitude: "104.0668",
  },
  {
    id: 14,
    name: "Gold Coast",
    summary:
      "The Gold Coast is a coastal city in Queensland, Australia, known for its beaches and theme parks.",
    description:
      "The Gold Coast is a coastal city located in Queensland, Australia. It is famous for its beautiful beaches, surf culture, and a range of theme parks, making it a popular destination for tourists and water enthusiasts.",
    areaId: 18, // Corresponds to Queensland
    latitude: "-28.0167",
    longitude: "153.3999",
  },
  {
    id: 15,
    name: "Cologne",
    summary:
      "Cologne is a major city in North Rhine-Westphalia, Germany, known for its historic cathedral.",
    description:
      "Cologne is a major city located in North Rhine-Westphalia, Germany. It is known for its historic Cologne Cathedral, a cultural and architectural icon. The city also hosts the annual Cologne Carnival and is a center of media and business.",
    areaId: 26, // Corresponds to North Rhine-Westphalia
    latitude: "50.9375",
    longitude: "6.9603",
  },
  {
    id: 16,
    name: "Kobe",
    summary:
      "Kobe is a city in the Kansai region of Japan known for its cosmopolitan atmosphere and international cuisine.",
    description:
      "Kobe is a city located in the Kansai region of Japan. It is known for its cosmopolitan atmosphere, international cuisine, and picturesque harbor. Kobe is a dynamic city with a blend of cultures.",
    areaId: 21, // Corresponds to Kansai
    latitude: "34.6937",
    longitude: "135.5023",
  },
  {
    id: 17,
    name: "Shenzhen",
    summary:
      "Shenzhen is a major city in Guangdong province, China, known for its modern development and tech industry.",
    description:
      "Shenzhen is a major city located in Guangdong province, China. It is known for its rapid modern development, thriving tech industry, and close proximity to Hong Kong. Shenzhen is a hub for innovation and business.",
    areaId: 22, // Corresponds to Guangdong
    latitude: "22.5431",
    longitude: "114.0579",
  },
  {
    id: 18,
    name: "Melbourne",
    summary:
      "Melbourne is the capital of Victoria, Australia, known for its coffee culture and arts scene.",
    description:
      "Melbourne is the capital of Victoria, Australia, and is known for its vibrant coffee culture, arts scene, and multiculturalism. It's a city of festivals, street art, and culinary delights.",
    areaId: 18, // Corresponds to Queensland
    latitude: "-37.8136",
    longitude: "144.9631",
  },
  {
    id: 19,
    name: "Nice",
    summary:
      "Nice is a city on the French Riviera, known for its Mediterranean beauty and Promenade des Anglais.",
    description:
      "Nice is a city located on the French Riviera in France. It is known for its stunning Mediterranean beauty, including the Promenade des Anglais, and a blend of French and Italian influences. Nice is a popular tourist destination.",
    areaId: 19, // Corresponds to Île-de-France
    latitude: "43.7102",
    longitude: "7.2619",
  },
  {
    id: 20,
    name: "Hamburg",
    summary:
      "Hamburg is a major city in northern Germany known for its maritime history and port.",
    description:
      "Hamburg is a major city located in northern Germany. It is known for its maritime history, bustling port, and unique neighborhoods. The city offers a mix of culture, entertainment, and waterfront views.",
    areaId: 25, // Corresponds to Lower Saxony
    latitude: "53.5511",
    longitude: "9.9937",
  },
  {
    id: 21,
    name: "Nara",
    summary:
      "Nara is a city in the Kansai region of Japan known for its historic temples and deer population.",
    description:
      "Nara is a city located in the Kansai region of Japan. It is known for its historic temples, including Todai-ji with its Great Buddha, and the friendly deer that roam freely in Nara Park. Nara is a cultural and spiritual destination.",
    areaId: 21, // Corresponds to Kansai
    latitude: "34.6851",
    longitude: "135.8048",
  },
  {
    id: 22,
    name: "Hangzhou",
    summary:
      "Hangzhou is a city in Zhejiang province, China, known for its West Lake and tea culture.",
    description:
      "Hangzhou is a city located in Zhejiang province, China. It is famous for its picturesque West Lake, traditional tea culture, and historic temples. Hangzhou is a scenic and cultural destination.",
    areaId: 28, // Corresponds to Zhejiang
    latitude: "30.2672",
    longitude: "120.2024",
  },
  {
    id: 23,
    name: "Gold Coast",
    summary:
      "The Gold Coast is a coastal city in Queensland, Australia, known for its beaches and theme parks.",
    description:
      "The Gold Coast is a coastal city located in Queensland, Australia. It is famous for its beautiful beaches, surf culture, and a range of theme parks, making it a popular destination for tourists and water enthusiasts.",
    areaId: 18, // Corresponds to Queensland
    latitude: "-28.0167",
    longitude: "153.3999",
  },
  {
    id: 24,
    name: "Cologne",
    summary:
      "Cologne is a major city in North Rhine-Westphalia, Germany, known for its historic cathedral.",
    description:
      "Cologne is a major city located in North Rhine-Westphalia, Germany. It is known for its historic Cologne Cathedral, a cultural and architectural icon. The city also hosts the annual Cologne Carnival and is a center of media and business.",
    areaId: 26, // Corresponds to North Rhine-Westphalia
    latitude: "50.9375",
    longitude: "6.9603",
  },
  {
    id: 25,
    name: "Kobe",
    summary:
      "Kobe is a city in the Kansai region of Japan known for its cosmopolitan atmosphere and international cuisine.",
    description:
      "Kobe is a city located in the Kansai region of Japan. It is known for its cosmopolitan atmosphere, international cuisine, and picturesque harbor. Kobe is a dynamic city with a blend of cultures.",
    areaId: 21, // Corresponds to Kansai
    latitude: "34.6937",
    longitude: "135.5023",
  },
  {
    id: 26,
    name: "Shenzhen",
    summary:
      "Shenzhen is a major city in Guangdong province, China, known for its modern development and tech industry.",
    description:
      "Shenzhen is a major city located in Guangdong province, China. It is known for its rapid modern development, thriving tech industry, and close proximity to Hong Kong. Shenzhen is a hub for innovation and business.",
    areaId: 22, // Corresponds to Guangdong
    latitude: "22.5431",
    longitude: "114.0579",
  },
  {
    id: 27,
    name: "Melbourne",
    summary:
      "Melbourne is the capital of Victoria, Australia, known for its coffee culture and arts scene.",
    description:
      "Melbourne is the capital of Victoria, Australia, and is known for its vibrant coffee culture, arts scene, and multiculturalism. It's a city of festivals, street art, and culinary delights.",
    areaId: 18, // Corresponds to Victoria
    latitude: "-37.8136",
    longitude: "144.9631",
  },
  {
    id: 28,
    name: "Nice",
    summary:
      "Nice is a city on the French Riviera, known for its Mediterranean beauty and Promenade des Anglais.",
    description:
      "Nice is a city located on the French Riviera in France. It is known for its stunning Mediterranean beauty, including the Promenade des Anglais, and a blend of French and Italian influences. Nice is a popular tourist destination.",
    areaId: 19, // Corresponds to Provence-Alpes-Côte d'Azur
    latitude: "43.7102",
    longitude: "7.2619",
  },
  {
    id: 29,
    name: "Hamburg",
    summary:
      "Hamburg is a major city in northern Germany known for its maritime history and port.",
    description:
      "Hamburg is a major city located in northern Germany. It is known for its maritime history, bustling port, and unique neighborhoods. The city offers a mix of culture, entertainment, and waterfront views.",
    areaId: 25, // Corresponds to Lower Saxony
    latitude: "53.5511",
    longitude: "9.9937",
  },
  {
    id: 30,
    name: "Nara",
    summary:
      "Nara is a city in the Kansai region of Japan known for its historic temples and deer population.",
    description:
      "Nara is a city located in the Kansai region of Japan. It is known for its historic temples, including Todai-ji with its Great Buddha, and the friendly deer that roam freely in Nara Park. Nara is a cultural and spiritual destination.",
    areaId: 21, // Corresponds to Kansai
    latitude: "34.6851",
    longitude: "135.8048",
  },
  {
    id: 31,
    name: "Suzhou",
    summary:
      "Suzhou is a city in Jiangsu province, China, known for its classical gardens and canals.",
    description:
      "Suzhou is a city located in Jiangsu province, China. It is known for its classical Chinese gardens, traditional architecture, and picturesque canals. Suzhou is often called the 'Venice of the East' for its water towns and historic beauty.",
    areaId: 29, // Corresponds to Jiangsu
    latitude: "31.2990",
    longitude: "120.5853",
  },
  {
    id: 32,
    name: "Perth",
    summary:
      "Perth is the capital of Western Australia, known for its stunning beaches and outdoor lifestyle.",
    description:
      "Perth is the capital of Western Australia and is known for its stunning beaches along the Indian Ocean, outdoor lifestyle, and a growing arts and culinary scene. It's one of the most isolated major cities in the world.",
    areaId: 30, // Corresponds to Western Australia
    latitude: "-31.9505",
    longitude: "115.8605",
  },
  {
    id: 33,
    name: "Lyon",
    summary:
      "Lyon is a city in east-central France, known for its culinary excellence and Renaissance architecture.",
    description:
      "Lyon is a city located in east-central France. It is known for its culinary excellence, historic Renaissance architecture, and vibrant cultural scene. Lyon is often considered the gastronomic capital of France.",
    areaId: 24, // Corresponds to Auvergne-Rhône-Alpes
    latitude: "45.75",
    longitude: "4.85",
  },
  {
    id: 34,
    name: "Stuttgart",
    summary:
      "Stuttgart is the capital of Baden-Württemberg, Germany, known for its automotive industry and cultural heritage.",
    description:
      "Stuttgart is the capital of Baden-Württemberg, Germany. It is known for its strong presence in the automotive industry, with companies like Mercedes-Benz and Porsche headquartered in the city. Stuttgart also boasts a rich cultural heritage and museums.",
    areaId: 31, // Corresponds to Baden-Württemberg
    latitude: "48.7758",
    longitude: "9.1829",
  },
  {
    id: 35,
    name: "Adelaide",
    summary:
      "Adelaide is the capital of South Australia, known for its wine regions and cultural events.",
    description:
      "Adelaide is the capital of South Australia, Australia. It is known for its nearby wine regions, cultural events, and a relaxed lifestyle. Adelaide is often referred to as the 'City of Churches' and offers a variety of cultural experiences.",
    areaId: 32, // Corresponds to South Australia
    latitude: "-34.9285",
    longitude: "138.6007",
  },
  {
    id: 36,
    name: "Munich",
    summary:
      "Munich is the capital of Bavaria, Germany, known for its Oktoberfest and cultural attractions.",
    description:
      "Munich is the capital of Bavaria, Germany. It is famous for its annual Oktoberfest celebration, cultural attractions like the Nymphenburg Palace, and a thriving arts and music scene. Munich is a city that combines tradition with modernity.",
    areaId: 33, // Corresponds to Bavaria
    latitude: "48.1351",
    longitude: "11.5820",
  },
  {
    id: 37,
    name: "Brisbane",
    summary:
      "Brisbane is the capital of Queensland, Australia, known for its warm climate and outdoor activities.",
    description:
      "Brisbane, the capital of Queensland, Australia, is known for its warm climate, outdoor activities, and vibrant cultural scene. It offers access to beautiful beaches and the natural beauty of Queensland.",
    areaId: 18, // Corresponds to Queensland
    latitude: "-27.4698",
    longitude: "153.0251",
  },
  {
    id: 38,
    name: "Frankfurt",
    summary:
      "Frankfurt is a major city in Hesse, Germany, known for its financial district and cultural diversity.",
    description:
      "Frankfurt is a major city located in Hesse, Germany. It is known for its financial district, cultural diversity, and a vibrant arts scene. The city is a hub for commerce and culture.",
    areaId: 34, // Corresponds to Hesse
    latitude: "50.1109",
    longitude: "8.6821",
  },
  {
    id: 39,
    name: "Tokyo",
    summary:
      "Tokyo is the capital of Japan and a bustling metropolis known for its modern technology and historic traditions.",
    description:
      "Tokyo, the capital of Japan, is a bustling metropolis that seamlessly blends modern technology with historic traditions. It offers a wide range of experiences, from neon-lit streets in Shibuya to serene temples and gardens.",
    areaId: 35, // Corresponds to Tokyo Metropolis
    latitude: "35.682839",
    longitude: "139.759455",
  },
  {
    id: 40,
    name: "Düsseldorf",
    summary:
      "Düsseldorf is a city in North Rhine-Westphalia, Germany, known for its fashion and trade fairs.",
    description:
      "Düsseldorf is a city located in North Rhine-Westphalia, Germany. It is known for its fashion industry, trade fairs, and modern architecture. The city also hosts events like the Düsseldorf Carnival and the Düsseldorf Boat Show.",
    areaId: 26, // Corresponds to North Rhine-Westphalia
    latitude: "51.2277",
    longitude: "6.7735",
  },
  {
    id: 41,
    name: "Birmingham",
    summary:
      "Birmingham is a major city in the West Midlands, England, known for its industrial heritage and cultural attractions.",
    description:
      "Birmingham is a major city located in the West Midlands, England. It is known for its industrial heritage, cultural attractions, and a thriving arts and music scene. Birmingham is often referred to as the 'City of a Thousand Trades.'",
    areaId: 36, // Corresponds to West Midlands
    latitude: "52.4862",
    longitude: "-1.8904",
  },
  {
    id: 42,
    name: "Cairns",
    summary:
      "Cairns is a city in Queensland, Australia, known for its proximity to the Great Barrier Reef and rainforests.",
    description:
      "Cairns is a city located in Queensland, Australia. It is known for its proximity to the Great Barrier Reef and the Daintree Rainforest, offering access to stunning natural wonders. Cairns is a popular destination for adventure and nature enthusiasts.",
    areaId: 18, // Corresponds to Queensland
    latitude: "-16.9203",
    longitude: "145.7709",
  },
  {
    id: 43,
    name: "Nagoya",
    summary:
      "Nagoya is a city in Aichi Prefecture, Japan, known for its industrial significance and cultural heritage.",
    description:
      "Nagoya is a city located in Aichi Prefecture, Japan. It is known for its industrial significance, including the automotive industry, and its cultural heritage. Nagoya Castle and the Atsuta Shrine are notable landmarks.",
    areaId: 37, // Corresponds to Chubu
    latitude: "35.1815",
    longitude: "136.9066",
  },
  {
    id: 44,
    name: "Barcelona",
    summary:
      "Barcelona is the capital of Catalonia, Spain, known for its unique architecture and vibrant street life.",
    description:
      "Barcelona is the capital of Catalonia, Spain. It is known for its unique architecture, including the iconic Sagrada Familia, and its vibrant street life. The city offers a blend of Catalan culture, history, and Mediterranean charm.",
    areaId: 38, // Corresponds to Catalonia
    latitude: "41.3851",
    longitude: "2.1734",
  },
  {
    id: 45,
    name: "Leipzig",
    summary:
      "Leipzig is a city in Saxony, Germany, known for its musical heritage and trade fairs.",
    description:
      "Leipzig is a city located in Saxony, Germany. It is known for its musical heritage, including the legacy of Johann Sebastian Bach, and its history of trade fairs. Leipzig is a city that celebrates culture and creativity.",
    areaId: 39, // Corresponds to Saxony
    latitude: "51.3397",
    longitude: "12.3712",
  },
  {
    id: 46,
    name: "Seville",
    summary:
      "Seville is the capital of Andalusia, Spain, known for its historic architecture and flamenco culture.",
    description:
      "Seville is the capital of Andalusia, Spain. It is known for its historic architecture, including the Alcazar of Seville and the Giralda tower, and its vibrant flamenco culture. Seville is a city with a rich cultural and artistic heritage.",
    areaId: 40, // Corresponds to Andalusia
    latitude: "37.3891",
    longitude: "-5.9845",
  },
  {
    id: 47,
    name: "Helsinki",
    summary:
      "Helsinki is the capital of Finland, known for its design, technology, and waterfront setting.",
    description:
      "Helsinki is the capital of Finland and is known for its design excellence, thriving technology sector, and its stunning waterfront setting along the Baltic Sea. The city offers a blend of modernity and natural beauty.",
    areaId: 41, // Corresponds to Uusimaa
    latitude: "60.1699",
    longitude: "24.9384",
  },
  {
    id: 48,
    name: "Edinburgh",
    summary:
      "Edinburgh is the capital of Scotland, known for its historic and cultural significance.",
    description:
      "Edinburgh is the capital of Scotland and is known for its historic and cultural significance. The city features iconic landmarks like the Edinburgh Castle and the Royal Mile. It's also famous for the annual Edinburgh Festival.",
    areaId: 42, // Corresponds to Scotland
    latitude: "55.9533",
    longitude: "-3.1883",
  },
  {
    id: 49,
    name: "Milan",
    summary:
      "Milan is a major city in Lombardy, Italy, known for its fashion and design.",
    description:
      "Milan is a major city located in Lombardy, Italy. It is known for its global influence on fashion and design, as well as its historic and artistic heritage. Milan is a dynamic city at the intersection of tradition and innovation.",
    areaId: 43, // Corresponds to Lombardy
    latitude: "45.4642",
    longitude: "9.1900",
  },
  {
    id: 50,
    name: "Zurich",
    summary:
      "Zurich is the largest city in Switzerland, known for its financial services and quality of life.",
    description:
      "Zurich is the largest city in Switzerland and is known for its financial services sector, quality of life, and cultural attractions. It's a city with a strong global presence and a charming Old Town.",
    areaId: 44, // Corresponds to Zurich
    latitude: "47.3769",
    longitude: "8.5417",
  },
] satisfies TownDTO[];
