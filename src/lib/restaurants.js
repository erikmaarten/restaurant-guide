/**
 * @typedef {object} Restaurant
 * @property {string} id Unique slug used as a stable key.
 * @property {string} title Name of the restaurant.
 * @property {string} description Short description of what makes the place worth a visit.
 * @property {number} rating Rating from 0 to 5, one decimal.
 * @property {string} area Neighbourhood in the Stockholm area.
 * @property {string} cuisine Primary cuisine, used for filtering.
 */

/** @type {Restaurant[]} */
export const restaurants = [
    {
        id: 'frantzen',
        title: 'Frantzén',
        description:
            'A three-Michelin-star tasting menu in a discreet townhouse on Klara Norra Kyrkogata. Precise Nordic-Japanese cooking with a legendary wine list.',
        rating: 4.9,
        area: 'Norrmalm',
        cuisine: 'Fine dining'
    },
    {
        id: 'ekstedt',
        title: 'Ekstedt',
        description:
            'Everything is cooked over open fire, in a wood-fired oven or on a hotplate — no electricity. Rustic, smoky and deeply satisfying.',
        rating: 4.7,
        area: 'Östermalm',
        cuisine: 'Nordic'
    },
    {
        id: 'ops',
        title: 'Oaxen Slip',
        description:
            'Bistro-style sibling of Oaxen Krog on Djurgården, serving seasonal Swedish plates with a view over the water.',
        rating: 4.5,
        area: 'Djurgården',
        cuisine: 'Bistro'
    },
    {
        id: 'gastrologik',
        title: 'Gastrologik',
        description:
            'Two stars and a tiny dining room in Östermalm. The kitchen works exclusively with small Swedish producers and changes the menu constantly.',
        rating: 4.8,
        area: 'Östermalm',
        cuisine: 'Fine dining'
    },
    {
        id: 'pelikan',
        title: 'Pelikan',
        description:
            'A century-old beer hall on Södermalm serving classic Swedish husmanskost — meatballs, herring and schnitzel — in a beautifully preserved room.',
        rating: 4.4,
        area: 'Södermalm',
        cuisine: 'Swedish'
    },
    {
        id: 'den-gyldene-freden',
        title: 'Den Gyldene Freden',
        description:
            'One of the oldest restaurants in the world, tucked into a Gamla Stan cellar. Traditional Swedish dishes and a famous artist-owned wall.',
        rating: 4.2,
        area: 'Gamla Stan',
        cuisine: 'Swedish'
    },
    {
        id: 'woodstockholm',
        title: 'Woodstockholm',
        description:
            'Relaxed Mosebacke spot with a rotating menu built around a single theme each season. Great natural wine selection.',
        rating: 4.3,
        area: 'Södermalm',
        cuisine: 'Nordic'
    },
    {
        id: 'babette',
        title: 'Babette',
        description:
            'Neighbourhood favourite on Roslagsgatan known for excellent wood-fired pizza and a warm, crowded, always-lively room.',
        rating: 4.5,
        area: 'Vasastan',
        cuisine: 'Italian'
    },
    {
        id: 'taverna-brillo',
        title: 'Taverna Brillo',
        description:
            'Spacious Italian brasserie on Stureplan with a long bar, wood-fired oven and a menu that runs from breakfast to late night.',
        rating: 4.1,
        area: 'Östermalm',
        cuisine: 'Italian'
    },
    {
        id: 'k-makalos',
        title: 'K-Makalos',
        description:
            'Greek taverna on Södermalm with generous meze, grilled fish and a courtyard that fills up the moment the sun appears.',
        rating: 4.4,
        area: 'Södermalm',
        cuisine: 'Greek'
    },
    {
        id: 'hoi-pub',
        title: 'Hoi Pub',
        description:
            'Unpretentious Vietnamese spot near Odenplan. Big bowls of pho, fresh summer rolls and very reasonable prices.',
        rating: 4.2,
        area: 'Vasastan',
        cuisine: 'Vietnamese'
    },
    {
        id: 'maharaja',
        title: 'Maharaja',
        description:
            'Long-running Indian restaurant on Frejgatan with a broad menu of curries, tandoori and vegetarian dishes.',
        rating: 4.0,
        area: 'Vasastan',
        cuisine: 'Indian'
    },
    {
        id: 'koh-phangan',
        title: 'Koh Phangan',
        description:
            'Buzzy Thai restaurant on Södermalm with bold flavours, sharing plates and a cocktail list to match.',
        rating: 4.3,
        area: 'Södermalm',
        cuisine: 'Thai'
    },
    {
        id: 'ramen-ki-mama',
        title: 'Ramen Ki-Mama',
        description:
            'Small, no-reservations ramen bar near Odenplan. Rich tonkotsu broth and a queue that is absolutely worth joining.',
        rating: 4.1,
        area: 'Vasastan',
        cuisine: 'Japanese'
    },
    {
        id: 'blue-light-yokohama',
        title: 'Blue Light Yokohama',
        description:
            'Japanese izakaya on Södermalm with excellent sashimi, grilled skewers and a compact, well-chosen sake list.',
        rating: 4.5,
        area: 'Södermalm',
        cuisine: 'Japanese'
    },
    {
        id: 'punk-royale',
        title: 'Punk Royale',
        description:
            'Chaotic, theatrical and deliberately over the top. A set menu of indulgent classics served with a lot of attitude.',
        rating: 4.2,
        area: 'Södermalm',
        cuisine: 'European'
    },
    {
        id: 'agrikultur',
        title: 'Agrikultur',
        description:
            'Intimate one-star restaurant on Roslagsgatan focused on Swedish vegetables, foraging and fermentation.',
        rating: 4.6,
        area: 'Vasastan',
        cuisine: 'Nordic'
    },
    {
        id: 'le-rouge',
        title: 'Le Rouge',
        description:
            'Opulent French brasserie in a Gamla Stan cellar. Velvet, candlelight and a menu of steak frites and oysters.',
        rating: 4.1,
        area: 'Gamla Stan',
        cuisine: 'French'
    },
    {
        id: 'hermans',
        title: "Hermans",
        description:
            'Vegan buffet with a spectacular view over Stockholm from Södermalm. Generous, affordable and a local institution.',
        rating: 4.4,
        area: 'Södermalm',
        cuisine: 'Vegan'
    },
    {
        id: 'saluhall',
        title: 'Östermalms Saluhall',
        description:
            'Historic food hall from 1888 with counters, delis and small restaurants. Perfect for a grazing lunch or a fika break.',
        rating: 4.5,
        area: 'Östermalm',
        cuisine: 'Food hall'
    }
];
