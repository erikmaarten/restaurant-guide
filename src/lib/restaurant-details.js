/**
 * Detail-page data for each restaurant, keyed by the `id` in restaurants.js.
 *
 * Researched 2026-10-21 from official sites, BokaBord, Thatsup, Krogguiden,
 * Restaurant Guru, Wikipedia and company registers. Anything that could not be
 * confirmed is `null` and the page shows "Not publicly confirmed".
 *
 * Restaurants do not publish sales data, so `bestSellers` are signature dishes
 * from the official menu or the dishes reviewers mention most.
 *
 * @typedef {object} Booking
 * @property {string} url Booking link (https or mailto).
 * @property {string} [label] Button label. Defaults to "Book a table".
 * @property {string} [note] Extra booking info, e.g. group sizes.
 *
 * @typedef {object} OpeningHours
 * @property {string} days
 * @property {string} time
 *
 * @typedef {object} RestaurantDetails
 * @property {'open' | 'unclear' | 'moved' | 'closed' | 'unknown'} status
 * @property {string | null} statusNote Shown as a banner when status is not "open".
 * @property {string} intro Two-sentence intro to the restaurant experience.
 * @property {string | null} address
 * @property {string | null} phone
 * @property {string | null} phoneNote
 * @property {OpeningHours[] | null} hours
 * @property {string | null} hoursNote
 * @property {string[] | null} bestSellers
 * @property {string | null} bestSellersNote
 * @property {string | null} owner
 * @property {number | null} sinceYear Used to compute years in business.
 * @property {string | null} sinceText
 * @property {Booking | null} booking
 * @property {string | null} bookingNote Shown when there is no booking link.
 * @property {string | null} website
 */

/** @type {Record<string, RestaurantDetails>} */
export const restaurantDetails = {
    frantzen: {
        status: 'open',
        statusNote: null,
        intro:
            'A three-Michelin-star restaurant in a townhouse on Klara Norra Kyrkogata, serving a single fixed tasting menu at both lunch and dinner. Tables for the following month are released on the 1st at 10:00, so it books up fast.',
        address: 'Klara Norra Kyrkogata 26, 111 22 Stockholm',
        phone: '+46 8 20 85 80',
        phoneNote: 'Listed by BokaBord; the official site publishes only an email address.',
        hours: [
            { days: 'Wed–Fri', time: '12:30–01:00' },
            { days: 'Sat–Tue', time: 'Closed' }
        ],
        hoursNote:
            'The official site says lunch and dinner Tuesday–Friday without times, and BokaBord lists Tuesday as closed. Call to confirm.',
        bestSellers: ['Onion soup', 'French toast', 'Madeleine cookies'],
        bestSellersNote: 'Most mentioned in guest reviews. The menu is a fixed set menu.',
        owner: 'Chef Björn Frantzén (Frantzén Group)',
        sinceYear: 2008,
        sinceText: 'Opened in Lindeberg in 2008 and moved to the current premises in 2017.',
        booking: {
            url: 'https://www.bokabord.se/sv/restaurang/frantzen',
            note: 'Parties of 5–8: email reservation@restaurantfrantzen.com.'
        },
        bookingNote: null,
        website: 'https://restaurantfrantzen.com'
    },

    ekstedt: {
        status: 'open',
        statusNote: null,
        intro:
            'Chef Niklas Ekstedt cooks everything over open fire, in wood ovens and on hotplates, with no electricity in the kitchen. The evening starts with a tour of the kitchen and a signature oyster snack cooked in a cone over the flames.',
        address: 'Humlegårdsgatan 17, 114 46 Stockholm',
        phone: '+46 8 611 12 10',
        phoneNote: null,
        hours: [
            { days: 'Tue–Thu', time: '17:30–01:00' },
            { days: 'Fri', time: '17:00–01:00' },
            { days: 'Sat', time: '15:30–01:00' },
            { days: 'Sun–Mon', time: 'Closed' }
        ],
        hoursNote:
            'Times from the official site. BokaBord lists closing at 00:00. Closed Midsummer, Christmas and New Year.',
        bestSellers: ['Oyster cooked over flames', 'Soufflé', 'Pike perch'],
        bestSellersNote: 'Signature oyster snack per Michelin; the others are most mentioned in reviews.',
        owner:
            'Founded by chef Niklas Ekstedt. The restaurant appears to be operated by Stureplansgruppen (not publicly confirmed).',
        sinceYear: 2011,
        sinceText: 'Opened November 2011. One Michelin star.',
        booking: {
            url: 'https://www.bokabord.se/sv/restaurang/ekstedt',
            note: 'Bookable three months ahead, up to 6 guests. Larger groups: info@ekstedt.nu.'
        },
        bookingNote: null,
        website: 'https://ekstedt.nu'
    },

    ops: {
        status: 'moved',
        statusNote:
            'Oaxen Slip closed in December 2022. The site on Djurgården is now Restaurang Slipen, with a different concept, and the details below are for Slipen. The old oaxen.com domain no longer works.',
        intro:
            'Oaxen Slip was the bistro of the Oaxen restaurants on Djurgården, which closed in December 2022. The site reopened in 2023 as Restaurang Slipen, run by Lotta and David Zetterström of the Fabrique bakeries.',
        address: 'Beckholmsvägen 26, 115 21 Stockholm (Restaurang Slipen)',
        phone: '+46 8 551 531 05',
        phoneNote: 'Restaurang Slipen',
        hours: null,
        hoursNote:
            'Slipen’s own site says daily 07:30–19:00, while Thatsup (June 2026) lists longer evening hours. Call to confirm.',
        bestSellers: ['Råbiff (steak tartare)', 'Herring', 'Turbot (piggvar)'],
        bestSellersNote: 'From the former Oaxen Slip, per reviews. Slipen’s menu is different.',
        owner:
            'Lotta and David Zetterström (Fabrique). Previously Magnus Ek and Agneta Green.',
        sinceYear: null,
        sinceText: 'Oaxen Slip opened in 2013 and closed in December 2022. Slipen has run since 2023.',
        booking: null,
        bookingNote: 'Restaurang Slipen says it does not take table bookings.',
        website: 'https://slipen.se'
    },

    gastrologik: {
        status: 'closed',
        statusNote:
            'Permanently closed on 17 December 2022. The Artillerigatan premises are now Ergo. gastrologik.se has been taken over by an unrelated site, so it is not linked here.',
        intro:
            'Gastrologik was a small Östermalm dining room serving a tasting menu of about 20 small courses built around Swedish producers. It earned two Michelin stars before closing in December 2022.',
        address: 'Artillerigatan 14, Östermalm, Stockholm (former address)',
        phone: null,
        phoneNote: null,
        hours: null,
        hoursNote: null,
        bestSellers: null,
        bestSellersNote:
            'There was no à la carte menu, only a changing tasting menu called “På producenternas villkor”.',
        owner: 'Chefs Jacob Holmström and Anton Bjuhr',
        sinceYear: null,
        sinceText: 'Open 2011–2022 (11 years).',
        booking: null,
        bookingNote: null,
        website: null
    },

    pelikan: {
        status: 'open',
        statusNote: null,
        intro:
            'A Södermalm beer hall in a 1904 building, serving classic Swedish dishes such as hand-rolled meatballs, herring and pork knuckle with root mash. It has traded as Pelikan since 1969 and serves a daily lunch on weekdays 11:30–13:30.',
        address: 'Blekingegatan 40, 116 62 Stockholm',
        phone: '+46 8 556 090 90',
        phoneNote: null,
        hours: [{ days: 'Mon–Sun', time: '11:30–01:00' }],
        hoursNote: 'Official site. BokaBord lists an earlier closing time (00:00) on Sunday–Thursday.',
        bestSellers: ['Hand-rolled meatballs', 'Pork knuckle with root mash', 'Herring'],
        bestSellersNote: 'The dishes the official site highlights.',
        owner:
            'The Sürer brothers (since December 2013). The site suggests it belongs to the Boqueria group, which is not publicly confirmed.',
        sinceYear: 1904,
        sinceText: 'The building dates from 1904 (originally Port Arthur). Renamed Pelikan in 1969.',
        booking: {
            url: 'https://www.bokabord.se/sv/restaurang/pelikan',
            note: 'Large lunch parties: info@pelikan.se.'
        },
        bookingNote: null,
        website: 'https://pelikan.se'
    },

    'den-gyldene-freden': {
        status: 'open',
        statusNote: null,
        intro:
            'Open at this Gamla Stan address since 1722, Den Gyldene Freden serves Swedish classics such as meatballs, toast Skagen and beef tartare. Painter Anders Zorn bought the restaurant in 1919, and the Swedish Academy owns the property today.',
        address: 'Österlånggatan 51, 111 31 Stockholm',
        phone: '+46 8 24 97 60',
        phoneNote: null,
        hours: [
            { days: 'Mon–Thu', time: '12:00–23:00' },
            { days: 'Fri–Sat', time: '12:00–01:00' }
        ],
        hoursNote: 'Sunday hours are not publicly confirmed. Call to confirm.',
        bestSellers: ['Meatballs (köttbullar)', 'Toast Skagen', 'Beef tartare (råbiff)'],
        bestSellersNote: 'Official menu items that reviewers mention most.',
        owner:
            'The Swedish Academy owns the property. Filip Fastén became operator and part-owner in 2019; whether he still is has not been confirmed.',
        sinceYear: 1722,
        sinceText:
            'Closed in 1891 and reopened in 1895. Relaunched under a new operator in March 2019.',
        booking: {
            url: 'https://gyldenefreden.se/boka-bord/',
            note: 'Online booking up to 8 guests. Larger groups: info@gyldenefreden.se.'
        },
        bookingNote: null,
        website: 'https://gyldenefreden.se'
    },

    woodstockholm: {
        status: 'open',
        statusNote: null,
        intro:
            'A Mosebacke Torg restaurant whose menu follows a rotating theme that changes roughly every two months. The interiors are by Lars Stensö, and the restaurant is a Michelin Guide selection.',
        address: 'Mosebacke Torg 9, 116 46 Stockholm',
        phone: '+46 8 369 399',
        phoneNote: null,
        hours: [{ days: 'Mon–Sun', time: '17:00–23:00' }],
        hoursNote: null,
        bestSellers: [
            'Lamb tartare with smetana and cucumber',
            'Whole zander from Ljusterö',
            'Celeriac with spelt and butter'
        ],
        bestSellersNote: 'Typical dishes per Krogguiden. The menu changes with each theme.',
        owner: 'Woodstockholm AB (individual owners not publicly confirmed)',
        sinceYear: null,
        sinceText: 'Opening year not publicly confirmed. It was already running by May 2015.',
        booking: {
            url: 'https://app.bokabord.se/reservation/?hash=6f4e22917c2a3e8aefdd1332215dbb5c',
            note: 'Private dining: reservations@woodstockholm.com.'
        },
        bookingNote: null,
        website: 'https://woodstockholm.com'
    },

    babette: {
        status: 'open',
        statusNote: null,
        intro:
            'A Vasastan restaurant on Roslagsgatan known for sourdough pizza and a short menu of Italian-leaning plates. It holds a Michelin Bib Gourmand and opened in January 2015.',
        address: 'Roslagsgatan 6, 113 55 Stockholm',
        phone: '+46 8 50 90 22 24',
        phoneNote: null,
        hours: [{ days: 'Mon–Sun', time: '17:00–01:00' }],
        hoursNote: null,
        bestSellers: [
            'Sourdough pizza',
            'Ricotta with mushrooms and potatoes',
            'Veal tartare with colatura and parmesan'
        ],
        bestSellersNote: 'Dishes highlighted by the Michelin Guide.',
        owner:
            'Babette AB. CEO Jon Sparre Lacotte, chair Dan Erik Källström and board member Johan Agrell, each owning 25–50%.',
        sinceYear: 2015,
        sinceText: 'Opened January 2015.',
        booking: {
            url: 'https://babette.se/',
            note: 'Use the “Boka bord” button on the website.'
        },
        bookingNote: null,
        website: 'https://babette.se'
    },

    'taverna-brillo': {
        status: 'closed',
        statusNote:
            'Permanently closed. The operating company went bankrupt in May 2024 and Stureplansgruppen has taken over the premises. tavernabrillo.se and brillo.se are now unrelated sites, so they are not linked here.',
        intro:
            'Taverna Brillo was a large Italian brasserie at Sturegatan 6 near Stureplan, in premises of about 1,400 m². It opened in 2011 and went bankrupt in May 2024.',
        address: 'Sturegatan 6, Stockholm (former address)',
        phone: null,
        phoneNote: null,
        hours: null,
        hoursNote: null,
        bestSellers: null,
        bestSellersNote: null,
        owner:
            'Svenska Brasserier (CEO Michael Porseryd). Restaurateurs Danyel Couet and Sebastian Thuresson took a large minority stake in autumn 2023.',
        sinceYear: null,
        sinceText: 'Open 2011–2024 (about 13 years).',
        booking: null,
        bookingNote: null,
        website: null
    },

    'k-makalos': {
        status: 'unknown',
        statusNote:
            'We could not identify this restaurant. Brasserie Makalös is a French restaurant in Norrmalm and a different place. Kamarina, a Greek restaurant on Södermalm, closed on 28 June 2026, but we cannot confirm it is the same one.',
        intro:
            'We could not find any restaurant called K-Makalos, so no verified details are available. Please check the name or address before relying on this entry.',
        address: null,
        phone: null,
        phoneNote: null,
        hours: null,
        hoursNote: null,
        bestSellers: null,
        bestSellersNote: null,
        owner: null,
        sinceYear: null,
        sinceText: null,
        booking: null,
        bookingNote: null,
        website: null
    },

    'hoi-pub': {
        status: 'unknown',
        statusNote:
            'We could not identify this restaurant. It is not in Thatsup’s list of Vietnamese restaurants in Vasastan (updated 21 October 2026). An Nam at Tegnérgatan 19 is a Vietnamese restaurant in Vasastan, but we cannot confirm it is the same one.',
        intro:
            'We could not find any Vietnamese restaurant called Hoi Pub near Odenplan, so no verified details are available. Please check the name or address before relying on this entry.',
        address: null,
        phone: null,
        phoneNote: null,
        hours: null,
        hoursNote: null,
        bestSellers: null,
        bestSellersNote: null,
        owner: null,
        sinceYear: null,
        sinceText: null,
        booking: null,
        bookingNote: null,
        website: null
    },

    maharaja: {
        status: 'unclear',
        statusNote:
            'The restaurant is listed as Restaurang Maharajah. One source (Restaurant Guru) says it is permanently closed, but most others, including a listing updated this week, show it open. Call to confirm before visiting.',
        intro:
            'An Indian tandoori restaurant at Frejgatan 16 in Vasastan, about 700 m from Odenplan. The menu covers curries, tandoori dishes and vegetarian options.',
        address: 'Frejgatan 16, 113 49 Stockholm',
        phone: '+46 8 612 05 82',
        phoneNote: null,
        hours: [
            { days: 'Mon–Fri', time: '11:00–14:30 and 17:00–22:00' },
            { days: 'Sat–Sun', time: '13:00–22:00' }
        ],
        hoursNote: 'Sources differ on the exact times. Call to confirm.',
        bestSellers: ['Chicken korma', 'Chicken tikka', 'Butter chicken'],
        bestSellersNote: 'Most mentioned in guest reviews.',
        owner: null,
        sinceYear: null,
        sinceText: null,
        booking: {
            url: 'https://meny.menu/restaurants/stockholm-1/maharajah-vasastan/reserve',
            label: 'Book via meny.menu',
            note: 'Third-party booking form. The restaurant also takes drop-ins.'
        },
        bookingNote: null,
        website: null
    },

    'koh-phangan': {
        status: 'open',
        statusNote: null,
        intro:
            'A Thai restaurant on Skånegatan in Södermalm, open since 1994 and run by its staff. Only about 40% of tables can be booked, so the rest of the room is drop-in.',
        address: 'Skånegatan 57, 116 37 Stockholm',
        phone: '+46 8 525 145 73',
        phoneNote: 'Number on the official site. Other listings show 08-642 50 40.',
        hours: [
            { days: 'Mon–Thu', time: '16:00–late' },
            { days: 'Fri', time: '16:00–01:00' },
            { days: 'Sat', time: '12:00–01:00' },
            { days: 'Sun', time: '12:00–late' }
        ],
        hoursNote: null,
        bestSellers: ['Thai chicken', 'Prawns', 'Pork ribs'],
        bestSellersNote: 'Dishes named in guest reviews.',
        owner: 'Not publicly confirmed. The website is signed by “the staff”.',
        sinceYear: 1994,
        sinceText: null,
        booking: {
            url: 'mailto:contact@kohphangan.se',
            label: 'Book by email',
            note: 'Bookings by email or phone on weekdays 10:00–16:00. No online booking.'
        },
        bookingNote: null,
        website: 'https://kohphangan.se/sodermalm/'
    },

    'ramen-ki-mama': {
        status: 'closed',
        statusNote:
            'Reported permanently closed (Thatsup, February 2026). The exact date is not public, but it was between late 2022 and mid-2023. The premises are now Sweet O Salti, a Palestinian restaurant, and ramenkimama.se is an unrelated site. The 4.1 rating shown on the guide dates from before the closure.',
        intro:
            'Ramen Ki-Mama was a small Japanese restaurant at Birger Jarlsgatan 93 in Vasastan, known for ramen such as Wantanmen and Yakiniku, plus gyoza. It is reported closed, and the premises now house a different restaurant.',
        address: 'Birger Jarlsgatan 93A, Vasastan, Stockholm (former address)',
        phone: null,
        phoneNote: null,
        hours: null,
        hoursNote: null,
        bestSellers: ['Wantanmen ramen', 'Yakiniku ramen', 'Gyoza'],
        bestSellersNote: 'Most mentioned in guest reviews.',
        owner: null,
        sinceYear: null,
        sinceText: 'Opened in the early 2000s (unconfirmed) and closed around 2022–23.',
        booking: null,
        bookingNote: null,
        website: null
    },

    'blue-light-yokohama': {
        status: 'open',
        statusNote: null,
        intro:
            'A Japanese restaurant on Åsögatan near Medborgarplatsen, run by founder and executive chef Tom Ishidori. The current menu is ramen-focused, with a ramen weekend from Friday to Sunday.',
        address: 'Åsögatan 170, 116 32 Stockholm',
        phone: '+46 8 644 68 00',
        phoneNote: null,
        hours: [
            { days: 'Fri', time: '17:00–21:00' },
            { days: 'Sat–Sun', time: '12:00–21:00' }
        ],
        hoursNote:
            'Official site, which does not list Monday–Thursday. Other listings show weekday evenings, so call to confirm.',
        bestSellers: ['Old School Tonkotsu Ramen', 'B.L.Y Vegetarian Ramen', 'Tatsuta-age fried chicken'],
        bestSellersNote: 'The dishes on the official menu.',
        owner: 'Tom Ishidori (founder and executive chef)',
        sinceYear: null,
        sinceText: 'The website says “over 10 years”. The exact opening year is not public.',
        booking: {
            url: 'https://www.bluelightyokohama.com/booking',
            label: 'Booking info',
            note: 'No online booking. Groups of 5 or more should email contact@bluelightyokohama.com; smaller groups can drop by.'
        },
        bookingNote: null,
        website: 'https://www.bluelightyokohama.com'
    },

    'punk-royale': {
        status: 'open',
        statusNote: null,
        intro:
            'A theatrical, deliberately over-the-top restaurant on Folkungagatan serving a fixed “Menu Royale” of at least 18 courses. Caviar is served on the back of your hand with a vodka shot.',
        address: 'Folkungagatan 128, 116 30 Stockholm',
        phone: '+46 72 938 12 84',
        phoneNote: 'Listed by Krogguiden only; not confirmed on the official site.',
        hours: [
            { days: 'Tue–Thu', time: 'Weekday seating' },
            { days: 'Fri–Sat and holidays', time: 'Weekend seating' },
            { days: 'Sat', time: 'Lunch seating' }
        ],
        hoursNote: 'Exact times are not publicly confirmed. Call to confirm.',
        bestSellers: [
            'Caviar on the back of the hand with a vodka shot',
            'Foie gras “happy falukorv man”',
            'Menu Royale (18+ courses)'
        ],
        bestSellersNote: 'Signature moments per Krogguiden and the official site. There is no à la carte menu.',
        owner:
            'Erik Gustafsson (through EKKG Holding AB), with Joakim Almquist as partner. The operating company for this venue is not confirmed.',
        sinceYear: 2015,
        sinceText: 'Opened in 2015.',
        booking: {
            url: 'https://punkroyale.com/stockholm/',
            note: 'Use the “Book a table” button on the website.'
        },
        bookingNote: null,
        website: 'https://punkroyale.com/stockholm/'
    },

    agrikultur: {
        status: 'moved',
        statusNote:
            'Agrikultur at Roslagsgatan 43 closed on 22 December 2022. Chef Filip Fastén reopened in 2025 as Krog Agrikultur at Franska Bukten 10 in Slussen, and the details below are for Krog Agrikultur. The description on the card refers to the original restaurant.',
        intro:
            'Chef Filip Fastén’s restaurant on Roslagsgatan closed in December 2022 and returned in 2025 as Krog Agrikultur, under Guldbron in Slussen. The menu changes with the season, and Expressen’s 2025 review singled out mushrooms with scrambled egg, scallop with sabayon and poached monkfish.',
        address: 'Franska Bukten 10, 116 45 Stockholm (Krog Agrikultur)',
        phone: '+46 8 286 040',
        phoneNote: 'Krog Agrikultur',
        hours: [
            { days: 'Mon–Thu', time: '16:00–00:00 (kitchen from 17:00)' },
            { days: 'Fri–Sat', time: '11:30–01:00' },
            { days: 'Sun', time: '11:30–23:00' }
        ],
        hoursNote: 'Kitchen opens at 17:00 Monday–Thursday and 11:30 Friday–Sunday.',
        bestSellers: [
            'Mushrooms with scrambled egg',
            'Scallop with sabayon',
            'Poached monkfish with beurre blanc'
        ],
        bestSellersNote: 'Dishes from Expressen’s 2025 review. The official site lists no signature dishes.',
        owner: 'Chef-owner Filip Fastén (operating company not confirmed)',
        sinceYear: null,
        sinceText: 'The original opened in December 2015. Krog Agrikultur opened in 2025.',
        booking: {
            url: 'https://widget.elyrasystems.com/krog-agrikultur'
        },
        bookingNote: null,
        website: 'https://agrikultur.se'
    },

    'le-rouge': {
        status: 'closed',
        statusNote:
            'Reported permanently closed. The operating company, Restaurang Le Rouge AB, went bankrupt (sources give 2022 and 2024). A “Le Rouge – Lebanese Cuisine” page exists for the same address, but we could not confirm it operates. lerouge.se now redirects to an unrelated site.',
        intro:
            'Le Rouge was a French brasserie at Brunnsgränd 2–4 in Gamla Stan, known for steak dishes such as entrecôte and Beef Wellington. It is reported permanently closed after its operating company went bankrupt.',
        address: 'Brunnsgränd 2–4, 111 30 Stockholm (former address)',
        phone: null,
        phoneNote: null,
        hours: null,
        hoursNote: null,
        bestSellers: ['Entrecôte', 'Beef Wellington', 'Côte de bœuf'],
        bestSellersNote: 'Most mentioned in guest reviews.',
        owner: 'Restaurang Le Rouge AB (historic; Al Bannout was the sole signatory)',
        sinceYear: null,
        sinceText:
            'The operating company was formed in September 2019, but the restaurant is older (reviews date from 2014–15).',
        booking: null,
        bookingNote: null,
        website: null
    },

    hermans: {
        status: 'open',
        statusNote: null,
        intro:
            'A 100% plant-based buffet restaurant on Fjällgatan in Södermalm with hot and cold dishes, homemade bread, hummus, dips and pickles. The weekday lunch buffet runs 11:00–16:00, and the buffet closes an hour before the restaurant.',
        address: 'Fjällgatan 23B, 116 28 Stockholm',
        phone: '+46 8 643 94 80',
        phoneNote: null,
        hours: [
            { days: 'Mon–Thu', time: '11:00–21:00' },
            { days: 'Fri', time: '11:00–22:00' },
            { days: 'Sat', time: '12:00–22:00' },
            { days: 'Sun', time: '12:00–21:00' }
        ],
        hoursNote: null,
        bestSellers: ['Shepherd’s pie', 'Lasagna', 'Thai curry with basmati rice'],
        bestSellersNote: 'Most mentioned in guest reviews.',
        owner: 'Aluma AB (individual owners not publicly confirmed)',
        sinceYear: 1992,
        sinceText: 'Founding year from a secondary source (Eniro), not the official site.',
        booking: {
            url: 'mailto:bokning@hermans.se',
            label: 'Book by email',
            note: 'A table-booking link was not confirmed. You can also call 08-643 94 80.'
        },
        bookingNote: null,
        website: 'https://hermans.se'
    },

    saluhall: {
        status: 'open',
        statusNote: null,
        intro:
            'A historic food hall at Östermalmstorg that opened in 1888 and reopened in March 2020 after a major renovation. Fish, meat, cheese and produce counters share the hall with small restaurants.',
        address: 'Östermalmstorg, 114 39 Stockholm',
        phone: null,
        phoneNote: 'Only the individual stalls publish phone numbers.',
        hours: [
            { days: 'Mon–Fri', time: '09:30–19:00' },
            { days: 'Sat', time: '09:30–17:00' },
            { days: 'Sun', time: 'Closed' }
        ],
        hoursNote:
            'Hall hours. Each stall sets its own hours and the restaurants stay open in the evenings. Holiday exceptions are listed on the official site.',
        bestSellers: [
            'Lisa Elmqvist Fisk & Skaldjur',
            'Melanders Fisk',
            'Willy Ohlsson Eftr. (meat and delicatessen)'
        ],
        bestSellersNote: 'Best-known long-standing stalls (official trader descriptions), not sales data.',
        owner: 'The City of Stockholm (Fastighetskontoret)',
        sinceYear: 1888,
        sinceText: 'Inaugurated 30 November 1888.',
        booking: {
            url: 'https://ostermalmshallen.se/handlare/',
            label: 'See stalls & restaurants',
            note: 'Booking is done per restaurant stall, for example Hedvig or Bistrot du Passage.'
        },
        bookingNote: null,
        website: 'https://ostermalmshallen.se'
    }
};
