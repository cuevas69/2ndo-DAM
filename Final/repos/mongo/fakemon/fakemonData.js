// Puedes almacenar tus datos de Fakemon aquí
const fakemonData = [
    {
      "id": 1,
      "image": "fakemonico/001.png",
      "name": "Plantiger",
      "type1": "GRASS",
      "type2": "",
      "basestats": [
        45,
        49,
        45,
        65,
        65,
        45
      ],
      "genderrate": "FemaleOneEighth",
      "growthrate": "Parabolic",
      "baseexp": "64",
      "effortpoints": [
        0,
        0,
        0,
        0,
        1,
        0
      ],
      "rareness": "45",
      "happiness": "70",
      "abilities": [
        [
          "OVERGROW"
        ]
      ],
      "hiddenability": "HYPERCUTTER",
      "moves": [
        [
          "1",
          "TACKLE"
        ],
        [
          "1",
          "GROWL"
        ],
        [
          "5",
          "LEECHSEED"
        ],
        [
          "8",
          "SLEEPPOWDER"
        ],
        [
          "12",
          "RAZORLEAF"
        ],
        [
          "16",
          "METALCLAW"
        ]
      ],
      "eggmoves": [
        [
          "AMNESIA",
          "CHARM"
        ],
        [
          "CURSE",
          "ENDURE"
        ],
        [
          "GIGADRAIN",
          "GRASSWHISTLE"
        ],
        [
          "INGRAIN",
          "LEAFSTORM"
        ],
        [
          "MAGICALLEAF",
          "NATUREPOWER"
        ],
        [
          "PETALDANCE",
          "POWERWHIP"
        ],
        [
          "SKULLBASH"
        ]
      ],
      "compatibility": "Monster,Grass",
      "stepstohatch": "5355",
      "height": "0.7",
      "weight": "6.9",
      "habitat": "Grassland",
      "pokedex": "Pequeño tigre que habita en los bosques.",
      "evolutions": "BLADEGER,Level,16"
    },
    {
      "id": 2,
      "image": "fakemonico/002.png",
      "name": "Bladeger",
      "type1": "GRASS",
      "type2": "STEEL",
      "basestats": [
        70,
        110,
        80,
        80,
        55,
        60
      ],
      "genderrate": "FemaleOneEighth",
      "growthrate": "Parabolic",
      "baseexp": "145",
      "effortpoints": [
        0,
        0,
        0,
        0,
        1,
        1
      ],
      "rareness": "45",
      "happiness": "70",
      "abilities": [
        [
          "OVERGROW"
        ]
      ],
      "hiddenability": "HYPERCUTTER",
      "moves": [
        [
          "1",
          "SCRATCH"
        ],
        [
          "1",
          "GROWL"
        ],
        [
          "5",
          "LEECHSEED"
        ],
        [
          "8",
          "SLEEPPOWDER"
        ],
        [
          "12",
          "RAZORLEAF"
        ],
        [
          "16",
          "METALCLAW"
        ],
        [
          "20",
          "SLASH"
        ],
        [
          "20",
          "BITE"
        ],
        [
          "25",
          "WORKUP"
        ],
        [
          "25",
          "LEAFBLADE"
        ],
        [
          "27",
          "AGILITY"
        ]
      ],
      "compatibility": "Monster,Grass",
      "stepstohatch": "5355",
      "height": "1.0",
      "weight": "13.0",
      "habitat": "Grassland",
      "pokedex": "Tigre que habita en los bosques.",
      "evolutions": "LEAFANG,Level,32"
    },
    {
      "id": 3,
      "image": "fakemonico/003.png",
      "name": "Leafang",
      "type1": "GRASS",
      "type2": "STEEL",
      "basestats": [
        70,
        130,
        100,
        80,
        55,
        65
      ],
      "genderrate": "FemaleOneEighth",
      "growthrate": "Parabolic",
      "baseexp": "236",
      "effortpoints": [
        0,
        0,
        0,
        0,
        2,
        1
      ],
      "rareness": "45",
      "happiness": "70",
      "abilities": [
        [
          "TECHNICIAN"
        ]
      ],
      "hiddenability": "HYPERCUTTER",
      "moves": [
        [
          "1",
          "SCRATCH"
        ],
        [
          "1",
          "GROWL"
        ],
        [
          "5",
          "LEECHSEED"
        ],
        [
          "8",
          "SLEEPPOWDER"
        ],
        [
          "12",
          "RAZORLEAF"
        ],
        [
          "16",
          "METALCLAW"
        ],
        [
          "20",
          "SLASH"
        ],
        [
          "20",
          "BITE"
        ],
        [
          "25",
          "WORKUP"
        ],
        [
          "25",
          "LEAFBLADE"
        ],
        [
          "27",
          "AGILITY"
        ],
        [
          "32",
          "BULLETPUNCH"
        ],
        [
          "34",
          "SWORDSDANCE"
        ],
        [
          "36",
          "FURYCUTTER"
        ],
        [
          "36",
          "CRUNCH"
        ],
        [
          "45",
          "UTURN"
        ],
        [
          "50",
          "DRAGONCLAW"
        ],
        [
          "50",
          "IRONHEAD"
        ]
      ],
      "compatibility": "Monster,Grass",
      "stepstohatch": "5355",
      "height": "2.0",
      "weight": "100.0",
      "habitat": "Grassland",
      "pokedex": "Mitológico tigre dientes de sable, sus colmillos son mas fuerte que sus garras metálicas. Habita en los bosques.",
      "evolutions": ""
    },
    {
      "id": 4,
      "image": "fakemonico/004.png",
      "name": "Aveflama",
      "type1": "FIRE",
      "basestats": [
        39,
        52,
        43,
        50,
        60,
        65
      ],
      "genderrate": "FemaleOneEighth",
      "growthrate": "Parabolic",
      "baseexp": "62",
      "effortpoints": [
        0,
        0,
        0,
        1,
        0,
        0
      ],
      "rareness": "45",
      "happiness": "70",
      "abilities": [
        [
          "BLAZE"
        ]
      ],
      "hiddenability": "FLAMEBODY",
      "moves": [
        [
          "1",
          "SCRATCH"
        ],
        [
          "1",
          "GROWL"
        ],
        [
          "7",
          "EMBER"
        ],
        [
          "10",
          "GUST"
        ],
        [
          "16",
          "DRAGONBREATH"
        ]
      ],
      "eggmoves": [
        [
          "ANCIENTPOWER",
          "BEATUP"
        ],
        [
          "BELLYDRUM",
          "BITE"
        ],
        [
          "COUNTER",
          "CRUNCH"
        ],
        [
          "DRAGONDANCE",
          "DRAGONPULSE"
        ],
        [
          "DRAGONRUSH",
          "FLAREBLITZ"
        ],
        [
          "FOCUSPUNCH",
          "METALCLAW"
        ],
        [
          "OUTRAGE"
        ]
      ],
      "compatibility": "Monster,Dragon",
      "stepstohatch": "5355",
      "height": "0.6",
      "weight": "8.5",
      "habitat": "Mountain",
      "pokedex": "Pequeño halcón destinado a ser un gran depredador. Se mueve tanto en montañas como en volcanes.",
      "evolutions": "BLAZEBIRD,Level,16"
    },
    {
      "id": 5,
      "image": "fakemonico/005.png",
      "name": "Blazebird",
      "type1": "FIRE",
      "type2": "FLYING",
      "basestats": [
        58,
        64,
        58,
        65,
        80,
        80
      ],
      "genderrate": "FemaleOneEighth",
      "growthrate": "Parabolic",
      "baseexp": "142",
      "effortpoints": [
        0,
        0,
        0,
        1,
        1,
        0
      ],
      "rareness": "45",
      "happiness": "70",
      "abilities": [
        [
          "FLAMEBODY"
        ]
      ],
      "hiddenability": "SPEEDBOOST",
      "moves": [
        [
          "1",
          "SCRATCH"
        ],
        [
          "1",
          "GROWL"
        ],
        [
          "1",
          "EMBER"
        ],
        [
          "7",
          "EMBER"
        ],
        [
          "10",
          "GUST"
        ],
        [
          "17",
          "DRAGONBREATH"
        ],
        [
          "18",
          "WINGATTACK"
        ],
        [
          "22",
          "ROOST"
        ],
        [
          "25",
          "FLAMEBURST"
        ],
        [
          "29",
          "AIRSLASH"
        ]
      ],
      "compatibility": "Monster,Dragon",
      "stepstohatch": "5355",
      "height": "1.1",
      "weight": "19.0",
      "habitat": "Mountain",
      "pokedex": "Halcón de fuego que puede localizar a sus presas a gran distancia.",
      "evolutions": "FLAMEHAWK,Level,32"
    },
    {
      "id": 6,
      "image": "fakemonico/006.png",
      "name": "Flamehawk",
      "type1": "FIRE",
      "type2": "FLYING",
      "basestats": [
        78,
        84,
        78,
        100,
        109,
        85
      ],
      "genderrate": "FemaleOneEighth",
      "growthrate": "Parabolic",
      "baseexp": "240",
      "effortpoints": [
        0,
        0,
        0,
        0,
        3,
        0
      ],
      "rareness": "45",
      "happiness": "70",
      "abilities": [
        [
          "FLAMEBODY"
        ]
      ],
      "hiddenability": "SPEEDBOOST",
      "moves": [
        [
          "1",
          "AIRSLASH"
        ],
        [
          "1",
          "DRAGONCLAW"
        ],
        [
          "1",
          "SHADOWCLAW"
        ],
        [
          "1",
          "SCRATCH"
        ],
        [
          "1",
          "GROWL"
        ],
        [
          "1",
          "EMBER"
        ],
        [
          "1",
          "SMOKESCREEN"
        ],
        [
          "7",
          "EMBER"
        ],
        [
          "10",
          "SMOKESCREEN"
        ],
        [
          "17",
          "DRAGONRAGE"
        ],
        [
          "21",
          "SCARYFACE"
        ],
        [
          "28",
          "FIREFANG"
        ],
        [
          "32",
          "FLAMEBURST"
        ],
        [
          "36",
          "WINGATTACK"
        ],
        [
          "41",
          "DRAGONCLAW"
        ],
        [
          "47",
          "FLAMETHROWER"
        ],
        [
          "56",
          "DRAGONDANCE"
        ],
        [
          "62",
          "INFERNO"
        ],
        [
          "71",
          "HEATWAVE"
        ],
        [
          "77",
          "FLAREBLITZ"
        ]
      ],
      "compatibility": "Monster,Dragon",
      "stepstohatch": "5355",
      "height": "1.7",
      "weight": "90.5",
      "habitat": "Mountain",
      "pokedex": "Este halcón de fuego es capaz de cazar a grandes distancias por volcanes y montañas.",
      "evolutions": ""
    },
    {
      "id": 7,
      "image": "fakemonico/007.png",
      "name": "Froggfat",
      "type1": "WATER",
      "basestats": [
        44,
        48,
        65,
        43,
        50,
        64
      ],
      "genderrate": "FemaleOneEighth",
      "growthrate": "Parabolic",
      "baseexp": "63",
      "effortpoints": [
        0,
        0,
        1,
        0,
        0,
        0
      ],
      "rareness": "45",
      "happiness": "70",
      "abilities": [
        [
          "TORRENT"
        ]
      ],
      "hiddenability": "ROUGHSKIN",
      "moves": [
        [
          "1",
          "TACKLE"
        ],
        [
          "4",
          "TAILWHIP"
        ],
        [
          "7",
          "BUBBLE"
        ],
        [
          "10",
          "WITHDRAW"
        ],
        [
          "13",
          "WATERGUN"
        ],
        [
          "16",
          "BITE"
        ]
      ],
      "eggmoves": [
        [
          "AQUAJET",
          "AQUARING"
        ],
        [
          "BRINE",
          "FAKEOUT"
        ],
        [
          "FLAIL",
          "FORESIGHT"
        ],
        [
          "HAZE",
          "MIRRORCOAT"
        ],
        [
          "MIST",
          "MUDSPORT"
        ],
        [
          "MUDDYWATER",
          "REFRESH"
        ],
        [
          "WATERSPOUT",
          "YAWN"
        ]
      ],
      "compatibility": "Monster,Water1",
      "stepstohatch": "5355",
      "height": "0.5",
      "weight": "9.0",
      "habitat": "WatersEdge",
      "pokedex": "Habita en los pantanos. Será mejor no tocarla.",
      "evolutions": "TOADESTING,Level,16"
    },
    {
      "id": 8,
      "image": "fakemonico/008.png",
      "name": "Toadesting",
      "type1": "WATER",
      "type2": "POISON",
      "basestats": [
        59,
        63,
        80,
        58,
        65,
        80
      ],
      "genderrate": "FemaleOneEighth",
      "growthrate": "Parabolic",
      "baseexp": "142",
      "effortpoints": [
        0,
        0,
        1,
        0,
        0,
        1
      ],
      "rareness": "45",
      "happiness": "70",
      "abilities": [
        [
          "ROUGHSKIN"
        ]
      ],
      "hiddenability": "POISONTOUCH",
      "moves": [
        [
          "1",
          "TACKLE"
        ],
        [
          "1",
          "TAILWHIP"
        ],
        [
          "1",
          "BUBBLE"
        ],
        [
          "4",
          "TAILWHIP"
        ],
        [
          "7",
          "BUBBLE"
        ],
        [
          "10",
          "WITHDRAW"
        ],
        [
          "13",
          "WATERGUN"
        ],
        [
          "16",
          "BITE"
        ],
        [
          "18",
          "SLUDGE"
        ],
        [
          "20",
          "RAPIDSPIN"
        ],
        [
          "24",
          "PROTECT"
        ],
        [
          "28",
          "WATERPULSE"
        ],
        [
          "32",
          "AQUATAIL"
        ],
        [
          "36",
          "SKULLBASH"
        ],
        [
          "40",
          "IRONDEFENSE"
        ],
        [
          "44",
          "RAINDANCE"
        ],
        [
          "48",
          "HYDROPUMP"
        ]
      ],
      "compatibility": "Monster,Water1",
      "stepstohatch": "5355",
      "height": "1.0",
      "weight": "22.5",
      "habitat": "WatersEdge",
      "pokedex": "Esta rana venenosa tiene un veneno que se propaga al contacto.",
      "evolutions": "TOXIBIAN,Level,32"
    },
    {
      "id": 9,
      "image": "fakemonico/009.png",
      "name": "Toxibian",
      "type1": "WATER",
      "type2": "POISON",
      "basestats": [
        80,
        70,
        100,
        65,
        80,
        120
      ],
      "genderrate": "Female50Percent",
      "growthrate": "Slow",
      "baseexp": "180",
      "effortpoints": [
        0,
        0,
        0,
        0,
        0,
        2
      ],
      "rareness": "60",
      "happiness": "70",
      "abilities": [
        [
          "ROUGHSKIN"
        ]
      ],
      "hiddenability": "POISONTOUCH",
      "moves": [
        [
          "1",
          "POISONSTING"
        ],
        [
          "1",
          "SUPERSONIC"
        ],
        [
          "1",
          "CONSTRICT"
        ],
        [
          "5",
          "SUPERSONIC"
        ],
        [
          "8",
          "CONSTRICT"
        ],
        [
          "12",
          "ACID"
        ],
        [
          "15",
          "TOXICSPIKES"
        ],
        [
          "19",
          "BUBBLEBEAM"
        ],
        [
          "22",
          "WRAP"
        ],
        [
          "26",
          "ACIDSPRAY"
        ],
        [
          "29",
          "BARRIER"
        ],
        [
          "34",
          "WATERPULSE"
        ],
        [
          "38",
          "POISONJAB"
        ],
        [
          "43",
          "SCREECH"
        ],
        [
          "47",
          "HEX"
        ],
        [
          "52",
          "HYDROPUMP"
        ],
        [
          "56",
          "SLUDGEWAVE"
        ],
        [
          "61",
          "WRINGOUT"
        ]
      ],
      "compatibility": "Water3",
      "stepstohatch": "5355",
      "height": "1.6",
      "weight": "55.0",
      "habitat": "Sea",
      "pokedex": "Desprende una gran cantidad de toxinas que se propagan al contacto.",
      "evolutions": ""
    },
    {
      "id": 10,
      "image": "fakemonico/010.png",
      "name": "Rattel",
      "type1": "NORMAL",
      "type2": "DARK",
      "basestats": [
        30,
        56,
        35,
        72,
        25,
        35
      ],
      "genderrate": "Female50Percent",
      "growthrate": "Medium",
      "baseexp": "51",
      "effortpoints": [
        0,
        0,
        0,
        1,
        0,
        0
      ],
      "rareness": "255",
      "happiness": "70",
      "abilities": [
        [
          "RUNAWAY",
          "GUTS"
        ]
      ],
      "hiddenability": "HUSTLE",
      "moves": [
        [
          "1",
          "TACKLE"
        ],
        [
          "1",
          "TAILWHIP"
        ],
        [
          "4",
          "QUICKATTACK"
        ],
        [
          "7",
          "FOCUSENERGY"
        ],
        [
          "10",
          "BITE"
        ],
        [
          "13",
          "PURSUIT"
        ],
        [
          "16",
          "HYPERFANG"
        ],
        [
          "19",
          "SUCKERPUNCH"
        ]
      ],
      "eggmoves": [
        [
          "BITE",
          "COUNTER"
        ],
        [
          "RETURN",
          "FLAMEWHEEL"
        ],
        [
          "FURYSWIPES",
          "RETURN"
        ],
        [
          "MEFIRST",
          "REVENGE"
        ],
        [
          "REVERSAL",
          "SCREECH"
        ],
        [
          "UPROAR"
        ]
      ],
      "compatibility": "Field",
      "stepstohatch": "4080",
      "height": "0.3",
      "weight": "3.5",
      "habitat": "Grassland",
      "pokedex": "Esta rata de callejón no dudará en robarte la comida.",
      "wilditemuncommon": "CHILANBERRY",
      "evolutions": "RATIGMA,Level,20"
    },
    {
      "id": 11,
      "image": "fakemonico/011.png",
      "name": "Ratigma",
      "type1": "NORMAL",
      "type2": "DARK",
      "basestats": [
        65,
        100,
        60,
        110,
        50,
        70
      ],
      "genderrate": "Female50Percent",
      "growthrate": "Medium",
      "baseexp": "145",
      "effortpoints": [
        0,
        0,
        0,
        2,
        0,
        0
      ],
      "rareness": "127",
      "happiness": "70",
      "abilities": [
        [
          "RUNAWAY",
          "GUTS"
        ]
      ],
      "hiddenability": "HUSTLE",
      "moves": [
        [
          "1",
          "SWORDSDANCE"
        ],
        [
          "1",
          "TACKLE"
        ],
        [
          "1",
          "TAILWHIP"
        ],
        [
          "1",
          "QUICKATTACK"
        ],
        [
          "1",
          "FOCUSENERGY"
        ],
        [
          "4",
          "QUICKATTACK"
        ],
        [
          "7",
          "FOCUSENERGY"
        ],
        [
          "10",
          "BITE"
        ],
        [
          "13",
          "PURSUIT"
        ],
        [
          "16",
          "HYPERFANG"
        ],
        [
          "19",
          "SUCKERPUNCH"
        ],
        [
          "20",
          "SCARYFACE"
        ],
        [
          "24",
          "CRUNCH"
        ],
        [
          "29",
          "ASSURANCE"
        ],
        [
          "34",
          "SUPERFANG"
        ],
        [
          "39",
          "DOUBLEEDGE"
        ],
        [
          "44",
          "ENDEAVOR"
        ]
      ],
      "compatibility": "Field",
      "stepstohatch": "4080",
      "height": "0.7",
      "weight": "18.5",
      "habitat": "Grassland",
      "pokedex": "Atraídos por el holor de la comida. Se esconden en la oscuridad de los callejones.",
      "wilditemuncommon": "CHILANBERRY",
      "evolutions": ""
    },
    {
      "id": 12,
      "image": "fakemonico/012.png",
      "name": "Escabrum",
      "type1": "BUG",
      "type2": "ROCK",
      "basestats": [
        30,
        45,
        59,
        57,
        30,
        39
      ],
      "genderrate": "Female50Percent",
      "growthrate": "Parabolic",
      "baseexp": "52",
      "effortpoints": [
        0,
        0,
        1,
        0,
        0,
        0
      ],
      "rareness": "255",
      "happiness": "70",
      "abilities": [
        [
          "SWARM",
          "STURDY"
        ]
      ],
      "hiddenability": "SHEERFORCE",
      "moves": [
        [
          "1",
          "DEFENSECURL"
        ],
        [
          "1",
          "ROLLOUT"
        ],
        [
          "5",
          "POISONSTING"
        ],
        [
          "8",
          "SCREECH"
        ],
        [
          "12",
          "PURSUIT"
        ],
        [
          "15",
          "PROTECT"
        ],
        [
          "22",
          "BUGBITE"
        ],
        [
          "29",
          "AGILITY"
        ],
        [
          "33",
          "STEAMROLLER"
        ],
        [
          "36",
          "TOXIC"
        ],
        [
          "40",
          "ROCKCLIMB"
        ],
        [
          "43",
          "DOUBLEEDGE"
        ]
      ],
      "eggmoves": [
        [
          "PINMISSILE",
          "ROCKCLIMB"
        ],
        [
          "SPIKES",
          "TAKEDOWN"
        ],
        [
          "TOXICSPIKES",
          "TWINEEDLE"
        ]
      ],
      "compatibility": "Bug",
      "stepstohatch": "4080",
      "height": "0.4",
      "weight": "5.3",
      "pokedex": "Es un escarabajo que habita entre las rocas.",
      "wilditemcommon": "PECHABERRY",
      "wilditemuncommon": "POISONBARB",
      "evolutions": "ESCARABRUTO,Level,12"
    },
    {
      "id": 13,
      "image": "fakemonico/013.png",
      "name": "Escarabruto",
      "type1": "BUG",
      "type2": "ROCK",
      "basestats": [
        40,
        55,
        99,
        47,
        40,
        79
      ],
      "genderrate": "Female50Percent",
      "growthrate": "Parabolic",
      "baseexp": "126",
      "effortpoints": [
        0,
        0,
        2,
        0,
        0,
        0
      ],
      "rareness": "120",
      "happiness": "70",
      "abilities": [
        [
          "SWARM",
          "STURDY"
        ]
      ],
      "hiddenability": "SHEERFORCE",
      "moves": [
        [
          "1",
          "DEFENSECURL"
        ],
        [
          "1",
          "ROLLOUT"
        ],
        [
          "5",
          "POISONSTING"
        ],
        [
          "8",
          "SCREECH"
        ],
        [
          "12",
          "PURSUIT"
        ],
        [
          "15",
          "PROTECT"
        ],
        [
          "22",
          "BUGBITE"
        ],
        [
          "22",
          "ROCKTOMB"
        ],
        [
          "29",
          "AGILITY"
        ],
        [
          "33",
          "STEAMROLLER"
        ],
        [
          "36",
          "TOXIC"
        ],
        [
          "40",
          "ROCKCLIMB"
        ],
        [
          "43",
          "DOUBLEEDGE"
        ]
      ],
      "compatibility": "Bug",
      "stepstohatch": "4080",
      "height": "1.2",
      "weight": "58.5",
      "pokedex": "Habita en las montañas y costas rocosas. Este escarabajo pesa mas de lo que aparenta.",
      "wilditemcommon": "PECHABERRY",
      "wilditemuncommon": "POISONBARB",
      "evolutions": "BUGSTONE,Level,26"
    },
    {
      "id": 14,
      "image": "fakemonico/014.png",
      "name": "Bugstone",
      "type1": "BUG",
      "type2": "ROCK",
      "basestats": [
        60,
        90,
        89,
        112,
        55,
        69
      ],
      "genderrate": "Female50Percent",
      "growthrate": "Parabolic",
      "baseexp": "214",
      "effortpoints": [
        0,
        0,
        0,
        3,
        0,
        0
      ],
      "rareness": "60",
      "happiness": "70",
      "abilities": [
        [
          "SWARM",
          "STURDY"
        ]
      ],
      "hiddenability": "SHEERFORCE",
      "moves": [
        [
          "1",
          "DEFENSECURL"
        ],
        [
          "1",
          "ROLLOUT"
        ],
        [
          "5",
          "POISONSTING"
        ],
        [
          "8",
          "SCREECH"
        ],
        [
          "12",
          "PURSUIT"
        ],
        [
          "15",
          "PROTECT"
        ],
        [
          "22",
          "BUGBITE"
        ],
        [
          "22",
          "ROCKTOMB"
        ],
        [
          "29",
          "AGILITY"
        ],
        [
          "30",
          "ROCKSLIDE"
        ],
        [
          "33",
          "STEAMROLLER"
        ],
        [
          "35",
          "HEADSMASH"
        ],
        [
          "36",
          "TOXIC"
        ],
        [
          "40",
          "ROCKCLIMB"
        ],
        [
          "43",
          "DOUBLEEDGE"
        ]
      ],
      "compatibility": "Bug",
      "stepstohatch": "5355",
      "height": "2.5",
      "weight": "200.5",
      "pokedex": "Para evolucionar a esta especie, Escarabruto debe levantar una roca. Rara vez se suele vez esta especie de escarabajo.",
      "wilditemcommon": "PECHABERRY",
      "wilditemuncommon": "POISONBARB",
      "evolutions": ""
    },
    {
      "id": 15,
      "image": "fakemonico/015.png",
      "name": "Owling",
      "type1": "PSYCHIC",
      "type2": "FLYING",
      "basestats": [
        60,
        30,
        30,
        50,
        66,
        56
      ],
      "genderrate": "Female50Percent",
      "growthrate": "Medium",
      "baseexp": "52",
      "effortpoints": [
        1,
        0,
        0,
        0,
        0,
        0
      ],
      "rareness": "255",
      "happiness": "70",
      "abilities": [
        [
          "INNERFOCUS"
        ]
      ],
      "hiddenability": "KEENEYE",
      "moves": [
        [
          "1",
          "PECK"
        ],
        [
          "1",
          "LEER"
        ],
        [
          "6",
          "NIGHTSHADE"
        ],
        [
          "9",
          "PSYWAVE"
        ],
        [
          "12",
          "LUCKYCHANT"
        ],
        [
          "17",
          "MIRACLEEYE"
        ],
        [
          "20",
          "CONFUSION"
        ]
      ],
      "eggmoves": [
        [
          "DRILLPECK",
          "FAINTATTACK"
        ],
        [
          "FEATHERDANCE",
          "HAZE"
        ],
        [
          "QUICKATTACK",
          "REFRESH"
        ],
        [
          "ROOST",
          "SKILLSWAP"
        ],
        [
          "STEELWING",
          "SUCKERPUNCH"
        ],
        [
          "SYNCHRONOISE",
          "ZENHEADBUTT"
        ]
      ],
      "compatibility": "Flying",
      "stepstohatch": "4080",
      "height": "0.7",
      "weight": "21.2",
      "habitat": "Forest",
      "pokedex": "Puede comunicarse a través de los sueños en situaciones de peligro.",
      "evolutions": "PSYCHOWL,Level,20"
    },
    {
      "id": 16,
      "image": "fakemonico/016.png",
      "name": "Psychowl",
      "type1": "PSYCHIC",
      "type2": "FLYING",
      "basestats": [
        75,
        75,
        70,
        100,
        105,
        70
      ],
      "genderrate": "Female50Percent",
      "growthrate": "Medium",
      "baseexp": "165",
      "effortpoints": [
        0,
        0,
        0,
        1,
        1,
        0
      ],
      "rareness": "75",
      "happiness": "70",
      "abilities": [
        [
          "INNERFOCUS"
        ]
      ],
      "hiddenability": "KEENEYE",
      "moves": [
        [
          "1",
          "PECK"
        ],
        [
          "1",
          "LEER"
        ],
        [
          "6",
          "NIGHTSHADE"
        ],
        [
          "9",
          "PSYWAVE"
        ],
        [
          "12",
          "LUCKYCHANT"
        ],
        [
          "17",
          "MIRACLEEYE"
        ],
        [
          "20",
          "MEFIRST"
        ],
        [
          "23",
          "CONFUSERAY"
        ],
        [
          "27",
          "TAILWIND"
        ],
        [
          "30",
          "WISH"
        ],
        [
          "37",
          "PSYBEAM"
        ],
        [
          "42",
          "FUTURESIGHT"
        ],
        [
          "47",
          "STOREDPOWER"
        ],
        [
          "54",
          "OMINOUSWIND"
        ],
        [
          "54",
          "POWERSWAP"
        ],
        [
          "59",
          "GUARDSWAP"
        ],
        [
          "66",
          "PSYCHIC"
        ]
      ],
      "compatibility": "Flying",
      "stepstohatch": "5355",
      "height": "1.5",
      "weight": "15.0",
      "habitat": "Forest",
      "pokedex": "Puede ver en cierto tiempo y cierto momento el futuro.",
      "evolutions": ""
    },
    {
      "id": 17,
      "image": "fakemonico/017.png",
      "name": "Scalizz",
      "type1": "POISON",
      "basestats": [
        48,
        61,
        40,
        50,
        61,
        40
      ],
      "genderrate": "Female50Percent",
      "growthrate": "Medium",
      "baseexp": "60",
      "effortpoints": [
        0,
        1,
        0,
        0,
        0,
        0
      ],
      "rareness": "140",
      "happiness": "100",
      "abilities": [
        [
          "POISONTOUCH"
        ]
      ],
      "hiddenability": "POISONTOUCH",
      "moves": [
        [
          "1",
          "ASTONISH"
        ],
        [
          "3",
          "MUDSLAP"
        ],
        [
          "8",
          "POISONSTING"
        ],
        [
          "10",
          "TAUNT"
        ],
        [
          "15",
          "PURSUIT"
        ],
        [
          "17",
          "FAINTATTACK"
        ],
        [
          "22",
          "REVENGE"
        ],
        [
          "24",
          "SWAGGER"
        ],
        [
          "29",
          "MUDBOMB"
        ],
        [
          "31",
          "SUCKERPUNCH"
        ],
        [
          "36",
          "VENOSHOCK"
        ],
        [
          "38",
          "NASTYPLOT"
        ],
        [
          "43",
          "POISONJAB"
        ],
        [
          "45",
          "SLUDGEBOMB"
        ],
        [
          "50",
          "FLATTER"
        ]
      ],
      "eggmoves": [
        [
          "ACUPRESSURE",
          "BULLETPUNCH"
        ],
        [
          "COUNTER",
          "CROSSCHOP"
        ],
        [
          "DRAINPUNCH",
          "DYNAMICPUNCH"
        ],
        [
          "FAKEOUT",
          "FEINT"
        ],
        [
          "HEADBUTT",
          "MEFIRST"
        ],
        [
          "MEDITATE",
          "SMELLINGSALT"
        ],
        [
          "VACUUMWAVE",
          "WAKEUPSLAP"
        ]
      ],
      "compatibility": "Humanlike",
      "stepstohatch": "2805",
      "height": "0.7",
      "weight": "23.0",
      "pokedex": "No tiene colmillos, pero su lengua tiene bacterias mortales.",
      "wilditemuncommon": "BLACKSLUDGE",
      "evolutions": "VENODON,Level,35"
    },
    {
      "id": 18,
      "image": "fakemonico/018.png",
      "name": "Venodon",
      "type1": "POISON",
      "type2": "DRAGON",
      "basestats": [
        83,
        106,
        65,
        85,
        86,
        65
      ],
      "genderrate": "Female50Percent",
      "growthrate": "Medium",
      "baseexp": "172",
      "effortpoints": [
        0,
        2,
        0,
        0,
        0,
        0
      ],
      "rareness": "75",
      "happiness": "70",
      "abilities": [
        [
          "POISONTOUCH"
        ]
      ],
      "hiddenability": "POISONTOUCH",
      "moves": [
        [
          "1",
          "ASTONISH"
        ],
        [
          "1",
          "MUDSLAP"
        ],
        [
          "1",
          "POISONSTING"
        ],
        [
          "3",
          "MUDSLAP"
        ],
        [
          "8",
          "POISONSTING"
        ],
        [
          "10",
          "TAUNT"
        ],
        [
          "15",
          "PURSUIT"
        ],
        [
          "17",
          "FAINTATTACK"
        ],
        [
          "22",
          "REVENGE"
        ],
        [
          "24",
          "SWAGGER"
        ],
        [
          "29",
          "MUDBOMB"
        ],
        [
          "31",
          "SUCKERPUNCH"
        ],
        [
          "36",
          "VENOSHOCK"
        ],
        [
          "41",
          "NASTYPLOT"
        ],
        [
          "49",
          "POISONJAB"
        ],
        [
          "54",
          "SLUDGEBOMB"
        ],
        [
          "62",
          "FLATTER"
        ]
      ],
      "compatibility": "Humanlike",
      "stepstohatch": "5355",
      "height": "1.3",
      "weight": "44.4",
      "pokedex": "Las bacterias de su lengua le hacen ganar batallas. Es muy astuto.",
      "wilditemuncommon": "BLACKSLUDGE",
      "evolutions": ""
    },
    {
      "id": 19,
      "image": "fakemonico/019.png",
      "name": "Landram",
      "type1": "GROUND",
      "basestats": [
        60,
        60,
        50,
        75,
        40,
        50
      ],
      "genderrate": "Female50Percent",
      "growthrate": "Medium",
      "baseexp": "67",
      "effortpoints": [
        0,
        0,
        0,
        1,
        0,
        0
      ],
      "rareness": "190",
      "happiness": "70",
      "abilities": [
        [
          "SANDVEIL",
          "ARENATRAP"
        ]
      ],
      "hiddenability": "ARENATRAP",
      "moves": [
        [
          "1",
          "ODORSLEUTH"
        ],
        [
          "1",
          "TACKLE"
        ],
        [
          "1",
          "GROWL"
        ],
        [
          "1",
          "DEFENSECURL"
        ],
        [
          "6",
          "FLAIL"
        ],
        [
          "10",
          "TAKEDOWN"
        ],
        [
          "15",
          "ROLLOUT"
        ],
        [
          "19",
          "SLAM"
        ],
        [
          "24",
          "MAGNITUDE"
        ],
        [
          "28",
          "ENDURE"
        ],
        [
          "33",
          "CHARM"
        ],
        [
          "37",
          "EARTHQUAKE"
        ],
        [
          "42",
          "DOUBLEEDGE"
        ]
      ],
      "eggmoves": [
        [
          "ANCIENTPOWER",
          "BODYSLAM"
        ],
        [
          "COUNTER",
          "ENDEAVOR"
        ],
        [
          "FISSURE",
          "FOCUSENERGY"
        ],
        [
          "HEADSMASH",
          "HEAVYSLAM"
        ],
        [
          "ICESHARD",
          "MUDSLAP"
        ],
        [
          "SNORE"
        ]
      ],
      "compatibility": "Field",
      "stepstohatch": "5355",
      "height": "0.6",
      "weight": "19.5",
      "pokedex": "Cabra montesa fiel a su rebaño.",
      "evolutions": "GOATHERN,Level,32"
    },
    {
      "id": 20,
      "image": "fakemonico/020.png",
      "name": "Goathern",
      "type1": "GROUND",
      "basestats": [
        80,
        115,
        70,
        105,
        60,
        70
      ],
      "genderrate": "Female50Percent",
      "growthrate": "Medium",
      "baseexp": "166",
      "effortpoints": [
        0,
        2,
        0,
        0,
        0,
        0
      ],
      "rareness": "75",
      "happiness": "70",
      "abilities": [
        [
          "SANDVEIL",
          "ARENATRAP"
        ]
      ],
      "hiddenability": "ARENATRAP",
      "moves": [
        [
          "1",
          "FIREFANG"
        ],
        [
          "1",
          "THUNDERFANG"
        ],
        [
          "1",
          "HORNATTACK"
        ],
        [
          "1",
          "GROWL"
        ],
        [
          "1",
          "DEFENSECURL"
        ],
        [
          "1",
          "BULLDOZE"
        ],
        [
          "6",
          "RAPIDSPIN"
        ],
        [
          "10",
          "KNOCKOFF"
        ],
        [
          "15",
          "ROLLOUT"
        ],
        [
          "19",
          "MAGNITUDE"
        ],
        [
          "24",
          "SLAM"
        ],
        [
          "25",
          "FURYATTACK"
        ],
        [
          "31",
          "ASSURANCE"
        ],
        [
          "39",
          "SCARYFACE"
        ],
        [
          "46",
          "EARTHQUAKE"
        ],
        [
          "54",
          "GIGAIMPACT"
        ]
      ],
      "compatibility": "Field",
      "stepstohatch": "5355",
      "height": "1.9",
      "weight": "92.5",
      "pokedex": "Es el Pokemon más elegante de las montañas.",
      "evolutions": ""
    },
    {
      "id": 21,
      "image": "fakemonico/021.png",
      "name": "Pepp",
      "type1": "FIRE",
      "basestats": [
        45,
        75,
        37,
        83,
        70,
        55
      ],
      "genderrate": "Female25Percent",
      "growthrate": "Medium",
      "baseexp": "73",
      "effortpoints": [
        0,
        0,
        0,
        1,
        0,
        0
      ],
      "rareness": "45",
      "happiness": "70",
      "abilities": [
        [
          "FLASHFIRE"
        ]
      ],
      "hiddenability": "FLASHFIRE",
      "moves": [
        [
          "1",
          "SMOG"
        ],
        [
          "1",
          "LEER"
        ],
        [
          "5",
          "EMBER"
        ],
        [
          "8",
          "SMOKESCREEN"
        ],
        [
          "12",
          "FAINTATTACK"
        ],
        [
          "15",
          "FIRESPIN"
        ],
        [
          "19",
          "CLEARSMOG"
        ],
        [
          "22",
          "FLAMEBURST"
        ],
        [
          "26",
          "CONFUSERAY"
        ],
        [
          "29",
          "FIREPUNCH"
        ],
        [
          "33",
          "LAVAPLUME"
        ],
        [
          "36",
          "SUNNYDAY"
        ],
        [
          "40",
          "FLAMETHROWER"
        ],
        [
          "43",
          "FIREBLAST"
        ]
      ],
      "eggmoves": [
        [
          "BARRIER",
          "BELLYDRUM"
        ],
        [
          "CROSSCHOP",
          "DYNAMICPUNCH"
        ],
        [
          "FLAREBLITZ",
          "FOCUSENERGY"
        ],
        [
          "IRONTAIL",
          "KARATECHOP"
        ],
        [
          "MACHPUNCH",
          "MEGAPUNCH"
        ],
        [
          "SCREECH",
          "THUNDERPUNCH"
        ]
      ],
      "compatibility": "Undiscovered",
      "stepstohatch": "6630",
      "height": "0.7",
      "weight": "21.4",
      "habitat": "Mountain",
      "pokedex": "Se puede comer, pero solo los amantes del picante.",
      "wilditemuncommon": "MAGMARIZER",
      "evolutions": "CHILLYPEPPER,Level,18"
    },
    {
      "id": 22,
      "image": "fakemonico/022.png",
      "name": "Chillypepper",
      "type1": "FIRE",
      "basestats": [
        65,
        95,
        57,
        93,
        100,
        85
      ],
      "genderrate": "Female25Percent",
      "growthrate": "Medium",
      "baseexp": "173",
      "effortpoints": [
        0,
        0,
        0,
        0,
        2,
        0
      ],
      "rareness": "45",
      "happiness": "70",
      "abilities": [
        [
          "FLASHFIRE"
        ]
      ],
      "hiddenability": "FLASHFIRE",
      "moves": [
        [
          "1",
          "SMOG"
        ],
        [
          "1",
          "LEER"
        ],
        [
          "1",
          "EMBER"
        ],
        [
          "5",
          "EMBER"
        ],
        [
          "8",
          "SMOKESCREEN"
        ],
        [
          "12",
          "FAINTATTACK"
        ],
        [
          "15",
          "FIRESPIN"
        ],
        [
          "19",
          "CLEARSMOG"
        ],
        [
          "22",
          "FLAMEBURST"
        ],
        [
          "26",
          "CONFUSERAY"
        ],
        [
          "29",
          "FIREPUNCH"
        ],
        [
          "36",
          "LAVAPLUME"
        ],
        [
          "42",
          "SUNNYDAY"
        ],
        [
          "49",
          "FLAMETHROWER"
        ],
        [
          "55",
          "FIREBLAST"
        ]
      ],
      "compatibility": "Humanlike",
      "stepstohatch": "6630",
      "height": "1.3",
      "weight": "44.5",
      "habitat": "Mountain",
      "pokedex": "Los amantes del picante no lo usan ni como ingrediente.",
      "wilditemuncommon": "MAGMARIZER",
      "evolutions": ""
    },
    {
      "id": 23,
      "image": "fakemonico/023.png",
      "name": "Quattro",
      "type1": "STEEL",
      "basestats": [
        60,
        80,
        95,
        50,
        70,
        85
      ],
      "genderrate": "Genderless",
      "growthrate": "Parabolic",
      "baseexp": "154",
      "effortpoints": [
        0,
        0,
        2,
        0,
        0,
        0
      ],
      "rareness": "60",
      "happiness": "70",
      "abilities": [
        [
          "CLEARBODY"
        ]
      ],
      "hiddenability": "CLEARBODY",
      "moves": [
        [
          "1",
          "VICEGRIP"
        ],
        [
          "1",
          "CHARGE"
        ],
        [
          "1",
          "THUNDERSHOCK"
        ],
        [
          "1",
          "GEARGRIND"
        ],
        [
          "6",
          "CHARGE"
        ],
        [
          "11",
          "THUNDERSHOCK"
        ],
        [
          "16",
          "GEARGRIND"
        ],
        [
          "21",
          "BIND"
        ],
        [
          "26",
          "CHARGEBEAM"
        ],
        [
          "31",
          "AUTOTOMIZE"
        ],
        [
          "36",
          "MIRRORSHOT"
        ],
        [
          "40",
          "SCREECH"
        ],
        [
          "44",
          "DISCHARGE"
        ],
        [
          "48",
          "METALSOUND"
        ],
        [
          "52",
          "SHIFTGEAR"
        ],
        [
          "56",
          "LOCKON"
        ],
        [
          "60",
          "ZAPCANNON"
        ],
        [
          "64",
          "HYPERBEAM"
        ]
      ],
      "compatibility": "Mineral",
      "stepstohatch": "5355",
      "height": "0.6",
      "weight": "51.0",
      "pokedex": "Creación del Dr. Sergey.",
      "evolutions": "JAYWHEELER,Level,30"
    },
    {
      "id": 24,
      "image": "fakemonico/024.png",
      "name": "Jaywheeler",
      "type1": "STEEL",
      "basestats": [
        60,
        100,
        115,
        90,
        70,
        85
      ],
      "genderrate": "Genderless",
      "growthrate": "Parabolic",
      "baseexp": "234",
      "effortpoints": [
        0,
        0,
        3,
        0,
        0,
        0
      ],
      "rareness": "30",
      "happiness": "70",
      "abilities": [
        [
          "CLEARBODY"
        ]
      ],
      "hiddenability": "CLEARBODY",
      "moves": [
        [
          "1",
          "VICEGRIP"
        ],
        [
          "1",
          "CHARGE"
        ],
        [
          "1",
          "THUNDERSHOCK"
        ],
        [
          "1",
          "GEARGRIND"
        ],
        [
          "6",
          "CHARGE"
        ],
        [
          "11",
          "THUNDERSHOCK"
        ],
        [
          "16",
          "GEARGRIND"
        ],
        [
          "21",
          "BIND"
        ],
        [
          "25",
          "CHARGEBEAM"
        ],
        [
          "31",
          "AUTOTOMIZE"
        ],
        [
          "36",
          "MIRRORSHOT"
        ],
        [
          "40",
          "SCREECH"
        ],
        [
          "44",
          "DISCHARGE"
        ],
        [
          "48",
          "METALSOUND"
        ],
        [
          "54",
          "SHIFTGEAR"
        ],
        [
          "60",
          "LOCKON"
        ],
        [
          "66",
          "ZAPCANNON"
        ],
        [
          "72",
          "HYPERBEAM"
        ]
      ],
      "compatibility": "Mineral",
      "stepstohatch": "5355",
      "height": "0.6",
      "weight": "81.0",
      "pokedex": "Creación estrella del Dr. Sergey.",
      "evolutions": ""
    },
    {
      "id": 25,
      "image": "fakemonico/025.png",
      "name": "Similight",
      "type1": "ELECTRIC",
      "basestats": [
        76,
        104,
        71,
        108,
        104,
        71
      ],
      "genderrate": "FemaleOneEighth",
      "growthrate": "Parabolic",
      "baseexp": "240",
      "effortpoints": [
        0,
        1,
        0,
        1,
        1,
        0
      ],
      "rareness": "45",
      "happiness": "70",
      "abilities": [
        [
          "DOWNLOAD"
        ]
      ],
      "hiddenability": "DOWNLOAD",
      "moves": [
        [
          "1",
          "FIREPUNCH"
        ],
        [
          "1",
          "QUICKATTACK"
        ],
        [
          "1",
          "LEER"
        ],
        [
          "1",
          "THUNDERSHOCK"
        ],
        [
          "1",
          "LOWKICK"
        ],
        [
          "5",
          "THUNDERSHOCK"
        ],
        [
          "8",
          "LOWKICK"
        ],
        [
          "12",
          "SWIFT"
        ],
        [
          "15",
          "SHOCKWAVE"
        ],
        [
          "19",
          "THUNDERWAVE"
        ],
        [
          "22",
          "ELECTROBALL"
        ],
        [
          "26",
          "AMNESIA"
        ],
        [
          "29",
          "THUNDERPUNCH"
        ],
        [
          "36",
          "DISCHARGE"
        ],
        [
          "42",
          "SCREECH"
        ],
        [
          "49",
          "THUNDERBOLT"
        ],
        [
          "55",
          "THUNDER"
        ],
        [
          "62",
          "GIGAIMPACT"
        ]
      ],
      "compatibility": "Field,Humanlike",
      "stepstohatch": "5355",
      "height": "1.2",
      "weight": "55.0",
      "pokedex": "Este babuino absorbe la electricidad para hacerse más fuerte.",
      "evolutions": ""
    },
    {
      "id": 26,
      "image": "fakemonico/026.png",
      "name": "Crowron",
      "type1": "STEEL",
      "type2": "FLYING",
      "basestats": [
        60,
        85,
        42,
        91,
        85,
        42
      ],
      "genderrate": "Female50Percent",
      "growthrate": "Parabolic",
      "baseexp": "81",
      "effortpoints": [
        0,
        0,
        0,
        1,
        0,
        0
      ],
      "rareness": "30",
      "happiness": "35",
      "abilities": [
        [
          "INSOMNIA",
          "IRONBARBS"
        ]
      ],
      "hiddenability": "IRONBARBS",
      "moves": [
        [
          "1",
          "LEER"
        ],
        [
          "1",
          "PECK"
        ],
        [
          "6",
          "SANDATTACK"
        ],
        [
          "9",
          "SWIFT"
        ],
        [
          "12",
          "AGILITY"
        ],
        [
          "17",
          "FURYATTACK"
        ],
        [
          "20",
          "FEINT"
        ],
        [
          "23",
          "AIRCUTTER"
        ],
        [
          "25",
          "BULLETPUNCH"
        ],
        [
          "28",
          "SPIKES"
        ],
        [
          "30",
          "MACHPUNCH"
        ],
        [
          "31",
          "METALSOUND"
        ],
        [
          "34",
          "STEELWING"
        ],
        [
          "39",
          "AUTOTOMIZE"
        ],
        [
          "40",
          "CLOSECOMBAT"
        ],
        [
          "42",
          "AIRSLASH"
        ],
        [
          "45",
          "SLASH"
        ],
        [
          "50",
          "NIGHTSLASH"
        ]
      ],
      "eggmoves": [
        [
          "ASSURANCE",
          "BRAVEBIRD"
        ],
        [
          "CURSE",
          "DRILLPECK"
        ],
        [
          "ENDURE",
          "GUARDSWAP"
        ],
        [
          "PURSUIT",
          "SKYATTACK"
        ],
        [
          "STEALTHROCK",
          "WHIRLWIND"
        ]
      ],
      "compatibility": "Flying",
      "stepstohatch": "5355",
      "height": "0.5",
      "weight": "2.1",
      "habitat": "Forest",
      "pokedex": "Tiene una gran resistencia y astucia.",
      "evolutions": "RAVENSTEEL,HasMove,BULLETPUNCH"
    },
    {
      "id": 27,
      "image": "fakemonico/027.png",
      "name": "Ravensteel",
      "type1": "STEEL",
      "type2": "FLYING",
      "basestats": [
        100,
        125,
        52,
        71,
        105,
        52
      ],
      "genderrate": "Female50Percent",
      "growthrate": "Parabolic",
      "baseexp": "177",
      "effortpoints": [
        0,
        2,
        0,
        0,
        0,
        0
      ],
      "rareness": "30",
      "happiness": "35",
      "abilities": [
        [
          "INSOMNIA",
          "IRONBARBS"
        ]
      ],
      "hiddenability": "IRONBARBS",
      "moves": [
        [
          "1",
          "LEER"
        ],
        [
          "1",
          "PECK"
        ],
        [
          "6",
          "SANDATTACK"
        ],
        [
          "9",
          "SWIFT"
        ],
        [
          "12",
          "AGILITY"
        ],
        [
          "17",
          "FURYATTACK"
        ],
        [
          "20",
          "FEINT"
        ],
        [
          "23",
          "AIRCUTTER"
        ],
        [
          "25",
          "BULLETPUNCH"
        ],
        [
          "28",
          "SPIKES"
        ],
        [
          "30",
          "MACHPUNCH"
        ],
        [
          "31",
          "METALSOUND"
        ],
        [
          "34",
          "STEELWING"
        ],
        [
          "39",
          "AUTOTOMIZE"
        ],
        [
          "40",
          "CLOSECOMBAT"
        ],
        [
          "42",
          "AIRSLASH"
        ],
        [
          "45",
          "SLASH"
        ],
        [
          "50",
          "NIGHTSLASH"
        ]
      ],
      "compatibility": "Flying",
      "stepstohatch": "5355",
      "height": "0.9",
      "weight": "27.3",
      "pokedex": "Adquiere un brazo de metal con el que defenderse de los depredadores mas grandes.",
      "evolutions": ""
    },
    {
      "id": 28,
      "image": "fakemonico/028.png",
      "name": "Chester Jr.",
      "type1": "PSYCHIC",
      "basestats": [
        60,
        25,
        45,
        90,
        90,
        90
      ],
      "genderrate": "Female50Percent",
      "growthrate": "Medium",
      "baseexp": "140",
      "effortpoints": [
        0,
        0,
        0,
        0,
        0,
        1
      ],
      "rareness": "145",
      "happiness": "70",
      "abilities": [
        [
          "SYNCHRONIZE",
          "MAGICGUARD"
        ]
      ],
      "hiddenability": "FILTER",
      "moves": [
        [
          "1",
          "TICKLE"
        ],
        [
          "1",
          "BARRIER"
        ],
        [
          "1",
          "CONFUSION"
        ],
        [
          "4",
          "COPYCAT"
        ],
        [
          "8",
          "MEDITATE"
        ],
        [
          "11",
          "DOUBLESLAP"
        ],
        [
          "15",
          "MIMIC"
        ],
        [
          "18",
          "ENCORE"
        ],
        [
          "22",
          "AMNESIA"
        ],
        [
          "22",
          "ACIDARMOR"
        ],
        [
          "25",
          "PSYBEAM"
        ],
        [
          "29",
          "SUBSTITUTE"
        ],
        [
          "32",
          "RECYCLE"
        ],
        [
          "36",
          "TRICK"
        ],
        [
          "39",
          "PSYCHIC"
        ],
        [
          "43",
          "ROLEPLAY"
        ],
        [
          "46",
          "BATONPASS"
        ],
        [
          "50",
          "SAFEGUARD"
        ]
      ],
      "eggmoves": [
        [
          "CHARM",
          "CONFUSERAY"
        ],
        [
          "FAKEOUT",
          "FUTURESIGHT"
        ],
        [
          "HEALINGWISH",
          "HYPNOSIS"
        ],
        [
          "ICYWIND",
          "MAGICROOM"
        ],
        [
          "MIMIC",
          "NASTYPLOT"
        ],
        [
          "POWERSPLIT",
          "TEETERDANCE"
        ],
        [
          "TRICK",
          "WAKEUPSLAP"
        ]
      ],
      "compatibility": "Undiscovered",
      "stepstohatch": "6630",
      "height": "0.6",
      "weight": "13.0",
      "pokedex": "Le gusta mucho a los niños. Pero a el no le gustan los niños.",
      "wilditemuncommon": "LEPPABERRY",
      "evolutions": "CHESTERSR,HappinessDay,"
    },
    {
      "id": 29,
      "image": "fakemonico/029.png",
      "name": "Chester Sr.",
      "type1": "PSYCHIC",
      "basestats": [
        70,
        45,
        65,
        90,
        100,
        120
      ],
      "genderrate": "Female50Percent",
      "growthrate": "Medium",
      "baseexp": "161",
      "effortpoints": [
        0,
        0,
        0,
        0,
        0,
        2
      ],
      "rareness": "45",
      "happiness": "70",
      "abilities": [
        [
          "SYNCHRONIZE",
          "MAGICGUARD"
        ]
      ],
      "hiddenability": "FILTER",
      "moves": [
        [
          "1",
          "MAGICALLEAF"
        ],
        [
          "1",
          "QUICKGUARD"
        ],
        [
          "1",
          "WIDEGUARD"
        ],
        [
          "1",
          "POWERSWAP"
        ],
        [
          "1",
          "GUARDSWAP"
        ],
        [
          "1",
          "BARRIER"
        ],
        [
          "1",
          "CONFUSION"
        ],
        [
          "4",
          "COPYCAT"
        ],
        [
          "8",
          "MEDITATE"
        ],
        [
          "11",
          "DOUBLESLAP"
        ],
        [
          "15",
          "MIMIC"
        ],
        [
          "15",
          "PSYWAVE"
        ],
        [
          "18",
          "ENCORE"
        ],
        [
          "22",
          "AMNESIA"
        ],
        [
          "22",
          "ACIDARMOR"
        ],
        [
          "25",
          "PSYBEAM"
        ],
        [
          "29",
          "SUBSTITUTE"
        ],
        [
          "32",
          "RECYCLE"
        ],
        [
          "36",
          "TRICK"
        ],
        [
          "39",
          "PSYCHIC"
        ],
        [
          "43",
          "ROLEPLAY"
        ],
        [
          "46",
          "BATONPASS"
        ],
        [
          "50",
          "SAFEGUARD"
        ]
      ],
      "compatibility": "Humanlike",
      "stepstohatch": "6630",
      "height": "1.3",
      "weight": "54.5",
      "habitat": "Urban",
      "pokedex": "Al contrario de su antecesor, si le gustan los niños.",
      "wilditemuncommon": "LEPPABERRY",
      "evolutions": ""
    },
    {
      "id": 30,
      "image": "fakemonico/030.png",
      "name": "Camalucha",
      "type1": "NORMAL",
      "type2": "FIGHTING",
      "basestats": [
        55,
        55,
        50,
        55,
        45,
        65
      ],
      "genderrate": "FemaleOneEighth",
      "growthrate": "Medium",
      "baseexp": "65",
      "effortpoints": [
        0,
        0,
        0,
        0,
        0,
        1
      ],
      "rareness": "45",
      "happiness": "70",
      "abilities": [
        [
          "ADAPTABILITY"
        ]
      ],
      "hiddenability": "ANTICIPATION",
      "moves": [
        [
          "1",
          "HELPINGHAND"
        ],
        [
          "1",
          "TACKLE"
        ],
        [
          "1",
          "TAILWHIP"
        ],
        [
          "5",
          "SANDATTACK"
        ],
        [
          "9",
          "GROWL"
        ],
        [
          "13",
          "QUICKATTACK"
        ],
        [
          "17",
          "BITE"
        ],
        [
          "21",
          "COVET"
        ],
        [
          "25",
          "TAKEDOWN"
        ],
        [
          "29",
          "CHARM"
        ],
        [
          "33",
          "BATONPASS"
        ],
        [
          "37",
          "DOUBLEEDGE"
        ],
        [
          "41",
          "RETURN"
        ],
        [
          "45",
          "TRUMPCARD"
        ]
      ],
      "eggmoves": [
        [
          "CHARM",
          "COVET"
        ],
        [
          "CURSE",
          "DETECT"
        ],
        [
          "ENDURE",
          "FAKETEARS"
        ],
        [
          "FLAIL",
          "NATURALGIFT"
        ],
        [
          "STOREDPOWER",
          "SYNCHRONOISE"
        ],
        [
          "TICKLE",
          "WISH"
        ],
        [
          "YAWN"
        ]
      ],
      "compatibility": "Field",
      "stepstohatch": "9180",
      "height": "0.3",
      "weight": "6.5",
      "habitat": "Urban",
      "pokedex": "Es capaz de adaptarse al entorno, pero no puede cambiar de entorno.",
      "evolutions": "CAMALEAGUA,Item,WATERSTONE,CAMALEARBOL,Item,LEAFSTONE,CAMALEFUEGO,Item,FIRESTONE"
    },
    {
      "id": 31,
      "image": "fakemonico/031.png",
      "name": "Camaleagua",
      "type1": "WATER",
      "type2": "FIGHTING",
      "basestats": [
        130,
        65,
        60,
        65,
        110,
        95
      ],
      "genderrate": "FemaleOneEighth",
      "growthrate": "Medium",
      "baseexp": "184",
      "effortpoints": [
        2,
        0,
        0,
        0,
        0,
        0
      ],
      "rareness": "45",
      "happiness": "70",
      "abilities": [
        [
          "ADAPTABILITY"
        ]
      ],
      "hiddenability": "WATERABSORB",
      "moves": [
        [
          "1",
          "HELPINGHAND"
        ],
        [
          "1",
          "TACKLE"
        ],
        [
          "1",
          "TAILWHIP"
        ],
        [
          "5",
          "SANDATTACK"
        ],
        [
          "9",
          "WATERGUN"
        ],
        [
          "13",
          "QUICKATTACK"
        ],
        [
          "17",
          "WATERPULSE"
        ],
        [
          "21",
          "AURORABEAM"
        ],
        [
          "24",
          "AURASPHERE"
        ],
        [
          "24",
          "BRICKBREAK"
        ],
        [
          "25",
          "AQUARING"
        ],
        [
          "29",
          "ACIDARMOR"
        ],
        [
          "33",
          "HAZE"
        ],
        [
          "37",
          "MUDDYWATER"
        ],
        [
          "41",
          "ICEBEAM"
        ],
        [
          "45",
          "HYDROPUMP"
        ]
      ],
      "compatibility": "Field",
      "stepstohatch": "9180",
      "height": "1.0",
      "weight": "29.0",
      "habitat": "Urban",
      "pokedex": "Se adapta al entorno de agua. No puede cambiar de entorno.",
      "evolutions": ""
    },
    {
      "id": 32,
      "image": "fakemonico/032.png",
      "name": "Camalearbol",
      "type1": "GRASS",
      "type2": "FIGHTING",
      "basestats": [
        65,
        110,
        130,
        95,
        60,
        65
      ],
      "genderrate": "FemaleOneEighth",
      "growthrate": "Medium",
      "baseexp": "184",
      "effortpoints": [
        2,
        0,
        0,
        0,
        0,
        0
      ],
      "rareness": "45",
      "happiness": "70",
      "abilities": [
        [
          "ADAPTABILITY"
        ]
      ],
      "hiddenability": "LEAFGUARD",
      "moves": [
        [
          "1",
          "HELPINGHAND"
        ],
        [
          "1",
          "TACKLE"
        ],
        [
          "1",
          "TAILWHIP"
        ],
        [
          "5",
          "SANDATTACK"
        ],
        [
          "9",
          "RAZORLEAF"
        ],
        [
          "13",
          "QUICKATTACK"
        ],
        [
          "17",
          "GRASSWHISTLE"
        ],
        [
          "21",
          "MAGICALLEAF"
        ],
        [
          "24",
          "AURASPHERE"
        ],
        [
          "24",
          "BRICKBREAK"
        ],
        [
          "25",
          "GIGADRAIN"
        ],
        [
          "29",
          "SWORDSDANCE"
        ],
        [
          "33",
          "SYNTHESIS"
        ],
        [
          "37",
          "SUNNYDAY"
        ],
        [
          "41",
          "RETURN"
        ],
        [
          "45",
          "LEAFBLADE"
        ]
      ],
      "compatibility": "Field",
      "stepstohatch": "9180",
      "height": "1.0",
      "weight": "29.0",
      "habitat": "Urban",
      "pokedex": "Se adapta al entorno del bosque. No puede cambiar de entorno.",
      "evolutions": ""
    },
    {
      "id": 33,
      "image": "fakemonico/033.png",
      "name": "Camalefuego",
      "type1": "FIRE",
      "type2": "FIGHTING",
      "basestats": [
        65,
        130,
        60,
        65,
        95,
        110
      ],
      "genderrate": "FemaleOneEighth",
      "growthrate": "Medium",
      "baseexp": "184",
      "effortpoints": [
        2,
        0,
        0,
        0,
        0,
        0
      ],
      "rareness": "45",
      "happiness": "70",
      "abilities": [
        [
          "ADAPTABILITY"
        ]
      ],
      "hiddenability": "FLASHFIRE",
      "moves": [
        [
          "1",
          "HELPINGHAND"
        ],
        [
          "1",
          "TACKLE"
        ],
        [
          "1",
          "TAILWHIP"
        ],
        [
          "5",
          "SANDATTACK"
        ],
        [
          "9",
          "EMBER"
        ],
        [
          "13",
          "QUICKATTACK"
        ],
        [
          "17",
          "BITE"
        ],
        [
          "21",
          "FIREFANG"
        ],
        [
          "24",
          "AURASPHERE"
        ],
        [
          "24",
          "BRICKBREAK"
        ],
        [
          "25",
          "FIRESPIN"
        ],
        [
          "29",
          "SCARYFACE"
        ],
        [
          "33",
          "SMOG"
        ],
        [
          "37",
          "LAVAPLUME"
        ],
        [
          "41",
          "FLAREBLITZ"
        ],
        [
          "45",
          "CRUNCH"
        ]
      ],
      "compatibility": "Field",
      "stepstohatch": "9180",
      "height": "1.0",
      "weight": "29.0",
      "habitat": "Urban",
      "pokedex": "Se adapta al entorno del fuego. No puede cambiar de entorno.",
      "evolutions": ""
    },
    {
      "id": 34,
      "image": "fakemonico/034.png",
      "name": "Heroina",
      "type1": "NORMAL",
      "type2": "FAIRY",
      "basestats": [
        90,
        120,
        75,
        60,
        45,
        60
      ],
      "genderrate": "Female75Percent",
      "growthrate": "Fast",
      "baseexp": "158",
      "effortpoints": [
        0,
        2,
        0,
        0,
        0,
        0
      ],
      "rareness": "75",
      "happiness": "70",
      "abilities": [
        [
          "INTIMIDATE"
        ]
      ],
      "hiddenability": "QUICKFEET",
      "moves": [
        [
          "1",
          "ICEFANG"
        ],
        [
          "1",
          "FIREFANG"
        ],
        [
          "1",
          "THUNDERFANG"
        ],
        [
          "1",
          "TACKLE"
        ],
        [
          "1",
          "SCARYFACE"
        ],
        [
          "1",
          "TAILWHIP"
        ],
        [
          "1",
          "CHARM"
        ],
        [
          "7",
          "BITE"
        ],
        [
          "13",
          "LICK"
        ],
        [
          "19",
          "HEADBUTT"
        ],
        [
          "27",
          "ROAR"
        ],
        [
          "35",
          "RAGE"
        ],
        [
          "43",
          "PLAYROUGH"
        ],
        [
          "51",
          "PAYBACK"
        ],
        [
          "59",
          "CRUNCH"
        ],
        [
          "67",
          "OUTRAGE"
        ]
      ],
      "compatibility": "Field,Fairy",
      "stepstohatch": "5355",
      "height": "1.4",
      "weight": "48.7",
      "habitat": "Urban",
      "pokedex": "Esta centaura hará todo lo posible para erradicar el mal.",
      "evolutions": ""
    },
    {
      "id": 35,
      "image": "fakemonico/035.png",
      "name": "Ducky",
      "type1": "WATER",
      "basestats": [
        55,
        60,
        40,
        75,
        55,
        50
      ],
      "genderrate": "Female50Percent",
      "growthrate": "Parabolic",
      "baseexp": "60",
      "effortpoints": [
        0,
        0,
        0,
        1,
        0,
        0
      ],
      "rareness": "255",
      "happiness": "70",
      "abilities": [
        [
          "CLOUDNINE"
        ]
      ],
      "hiddenability": "CLOUDNINE",
      "moves": [
        [
          "1",
          "TACKLE"
        ],
        [
          "1",
          "TAILWHIP"
        ],
        [
          "7",
          "BUBBLE"
        ],
        [
          "10",
          "HYPNOSIS"
        ],
        [
          "12",
          "WATERGUN"
        ],
        [
          "15",
          "DOUBLESLAP"
        ],
        [
          "18",
          "RAINDANCE"
        ],
        [
          "21",
          "BODYSLAM"
        ],
        [
          "25",
          "BUBBLEBEAM"
        ],
        [
          "28",
          "MUDSHOT"
        ],
        [
          "31",
          "BELLYDRUM"
        ],
        [
          "35",
          "WAKEUPSLAP"
        ],
        [
          "38",
          "HYDROPUMP"
        ],
        [
          "41",
          "MUDBOMB"
        ]
      ],
      "eggmoves": [
        [
          "BUBBLEBEAM",
          "ENCORE"
        ],
        [
          "ENDEAVOR",
          "ENDURE"
        ],
        [
          "HAZE",
          "ICEBALL"
        ],
        [
          "MINDREADER",
          "MIST"
        ],
        [
          "MUDSHOT",
          "REFRESH"
        ],
        [
          "SPLASH",
          "WATERPULSE"
        ],
        [
          "WATERSPORT"
        ]
      ],
      "compatibility": "Water1",
      "stepstohatch": "5355",
      "height": "0.6",
      "weight": "12.4",
      "habitat": "WatersEdge",
      "pokedex": "It is possible to see this Pokémon's spiral innards right through its thin skin. However, the skin is also very flexible. Even sharp fangs bounce right off it.",
      "evolutions": "DUCKFIST,Item,WATERSTONE,AQUAGANZA,Level,35"
    },
    {
      "id": 36,
      "image": "fakemonico/036.png",
      "name": "Duckfist",
      "type1": "FIGHTING",
      "type2": "FLYING",
      "basestats": [
        90,
        105,
        95,
        70,
        70,
        90
      ],
      "genderrate": "Female50Percent",
      "growthrate": "Parabolic",
      "baseexp": "225",
      "effortpoints": [
        0,
        0,
        3,
        0,
        0,
        0
      ],
      "rareness": "45",
      "happiness": "70",
      "abilities": [
        [
          "SWIFTSWIM"
        ]
      ],
      "hiddenability": "IRONFIST",
      "moves": [
        [
          "1",
          "DETECT"
        ],
        [
          "1",
          "TACKLE"
        ],
        [
          "1",
          "HONECLAWS"
        ],
        [
          "4",
          "KARATECHOP"
        ],
        [
          "8",
          "WINGATTACK"
        ],
        [
          "12",
          "ROOST"
        ],
        [
          "16",
          "AERIALACE"
        ],
        [
          "20",
          "ENCORE"
        ],
        [
          "24",
          "FLING"
        ],
        [
          "28",
          "BATONPASS"
        ],
        [
          "32",
          "BOUNCE"
        ],
        [
          "36",
          "ENDEAVOR"
        ],
        [
          "40",
          "FEATHERDANCE"
        ],
        [
          "44",
          "HIJUMPKICK"
        ],
        [
          "48",
          "SKYATTACK"
        ],
        [
          "55",
          "SKYDROP"
        ],
        [
          "60",
          "SWORDSDANCE"
        ]
      ],
      "compatibility": "Water1",
      "stepstohatch": "5355",
      "height": "1.3",
      "weight": "54.0",
      "habitat": "WatersEdge",
      "pokedex": "A este boxeador se le da muy bien pelear en el agua.",
      "wilditemuncommon": "KINGSROCK",
      "evolutions": ""
    },
    {
      "id": 37,
      "image": "fakemonico/037.png",
      "name": "Aquaganza",
      "type1": "WATER",
      "type2": "FLYING",
      "basestats": [
        85,
        50,
        100,
        65,
        100,
        70
      ],
      "genderrate": "Female50Percent",
      "growthrate": "Medium",
      "baseexp": "151",
      "effortpoints": [
        0,
        0,
        2,
        0,
        0,
        0
      ],
      "rareness": "45",
      "happiness": "70",
      "abilities": [
        [
          "RAINDISH"
        ]
      ],
      "hiddenability": "RAINDISH",
      "moves": [
        [
          "1",
          "SOAK"
        ],
        [
          "1",
          "GROWL"
        ],
        [
          "1",
          "WATERGUN"
        ],
        [
          "1",
          "WATERSPORT"
        ],
        [
          "1",
          "WINGATTACK"
        ],
        [
          "6",
          "SUPERSONIC"
        ],
        [
          "9",
          "WINGATTACK"
        ],
        [
          "14",
          "MIST"
        ],
        [
          "17",
          "WATERPULSE"
        ],
        [
          "22",
          "PAYBACK"
        ],
        [
          "25",
          "PROTECT"
        ],
        [
          "28",
          "ROOST"
        ],
        [
          "34",
          "BRINE"
        ],
        [
          "39",
          "STOCKPILE"
        ],
        [
          "39",
          "SWALLOW"
        ],
        [
          "39",
          "SPITUP"
        ],
        [
          "46",
          "FLING"
        ],
        [
          "52",
          "TAILWIND"
        ],
        [
          "58",
          "HYDROPUMP"
        ],
        [
          "63",
          "HURRICANE"
        ]
      ],
      "compatibility": "Water1,Flying",
      "stepstohatch": "5355",
      "height": "1.2",
      "weight": "28.0",
      "habitat": "Sea",
      "pokedex": "Simplemente mamá pato.",
      "evolutions": ""
    },
    {
      "id": 38,
      "image": "fakemonico/038.png",
      "name": "Jalea",
      "type1": "NORMAL",
      "basestats": [
        48,
        48,
        48,
        48,
        48,
        48
      ],
      "genderrate": "Genderless",
      "growthrate": "Medium",
      "baseexp": "101",
      "effortpoints": [
        1,
        0,
        0,
        0,
        0,
        0
      ],
      "rareness": "35",
      "happiness": "70",
      "abilities": [
        [
          "IMPOSTER"
        ]
      ],
      "hiddenability": "IMPOSTER",
      "moves": [
        [
          "1",
          "TRANSFORM"
        ]
      ],
      "compatibility": "Ditto",
      "stepstohatch": "5355",
      "height": "0.3",
      "weight": "4.0",
      "habitat": "Urban",
      "pokedex": "Este Pokemon es capaz de adoptar las apariencias de sus rivales.",
      "wilditemcommon": "QUICKPOWDER",
      "wilditemuncommon": "METALPOWDER",
      "evolutions": ""
    },
    {
      "id": 39,
      "image": "fakemonico/039.png",
      "name": "Wizzyce",
      "type1": "PSYCHIC",
      "type2": "ICE",
      "basestats": [
        40,
        35,
        30,
        105,
        120,
        70
      ],
      "genderrate": "Female25Percent",
      "growthrate": "Parabolic",
      "baseexp": "140",
      "effortpoints": [
        0,
        0,
        0,
        0,
        2,
        0
      ],
      "rareness": "100",
      "happiness": "70",
      "abilities": [
        [
          "MAGICBOUNCE"
        ]
      ],
      "hiddenability": "MAGICBOUNCE",
      "moves": [
        [
          "1",
          "PSYWAVE"
        ],
        [
          "1",
          "KINESIS"
        ],
        [
          "1",
          "CONFUSION"
        ],
        [
          "16",
          "CONFUSION"
        ],
        [
          "18",
          "POWDERSNOW"
        ],
        [
          "22",
          "MIRACLEEYE"
        ],
        [
          "24",
          "THUNDERWAVE"
        ],
        [
          "28",
          "PSYBEAM"
        ],
        [
          "30",
          "AURORABEAM"
        ],
        [
          "36",
          "CALMMIND"
        ],
        [
          "37",
          "RECOVER"
        ],
        [
          "40",
          "PSYCHOCUT"
        ],
        [
          "42",
          "ROLEPLAY"
        ],
        [
          "46",
          "PSYCHIC"
        ],
        [
          "48",
          "FUTURESIGHT"
        ],
        [
          "52",
          "TRICK"
        ]
      ],
      "compatibility": "Humanlike",
      "stepstohatch": "5355",
      "height": "1.3",
      "weight": "56.5",
      "habitat": "Urban",
      "pokedex": "Se rumorea que guía a los perdidos en la nieve.",
      "wilditemuncommon": "TWISTEDSPOON",
      "evolutions": "MINDFREAK,HasMove,CALMMIND"
    },
    {
      "id": 40,
      "image": "fakemonico/040.png",
      "name": "Mindfreak",
      "type1": "PSYCHIC",
      "type2": "ICE",
      "basestats": [
        55,
        50,
        45,
        120,
        135,
        95
      ],
      "genderrate": "Female25Percent",
      "growthrate": "Parabolic",
      "baseexp": "221",
      "effortpoints": [
        0,
        0,
        0,
        0,
        3,
        0
      ],
      "rareness": "50",
      "happiness": "70",
      "abilities": [
        [
          "MAGICBOUNCE"
        ]
      ],
      "hiddenability": "MAGICBOUNCE",
      "moves": [
        [
          "1",
          "PSYWAVE"
        ],
        [
          "1",
          "KINESIS"
        ],
        [
          "1",
          "CONFUSION"
        ],
        [
          "16",
          "CONFUSION"
        ],
        [
          "18",
          "POWDERSNOW"
        ],
        [
          "22",
          "MIRACLEEYE"
        ],
        [
          "24",
          "THUNDERWAVE"
        ],
        [
          "28",
          "PSYBEAM"
        ],
        [
          "30",
          "AURORABEAM"
        ],
        [
          "36",
          "CALMMIND"
        ],
        [
          "37",
          "RECOVER"
        ],
        [
          "40",
          "PSYCHOCUT"
        ],
        [
          "42",
          "ROLEPLAY"
        ],
        [
          "46",
          "PSYCHIC"
        ],
        [
          "48",
          "FUTURESIGHT"
        ],
        [
          "52",
          "TRICK"
        ]
      ],
      "compatibility": "Humanlike",
      "stepstohatch": "5355",
      "height": "1.5",
      "weight": "48.0",
      "habitat": "Urban",
      "pokedex": "Habita en las sombras de las tormentas de nieve. Guía a los perdidos, pero no sabemos hacia donde...",
      "wilditemuncommon": "TWISTEDSPOON",
      "evolutions": ""
    },
    {
      "id": 41,
      "image": "fakemonico/041.png",
      "name": "Cuttie",
      "type1": "NORMAL",
      "basestats": [
        60,
        60,
        60,
        30,
        35,
        35
      ],
      "genderrate": "Female50Percent",
      "growthrate": "Slow",
      "baseexp": "56",
      "effortpoints": [
        1,
        0,
        0,
        0,
        0,
        0
      ],
      "rareness": "255",
      "happiness": "70",
      "abilities": [
        [
          "TRUANT"
        ]
      ],
      "moves": [
        [
          "1",
          "SCRATCH"
        ],
        [
          "1",
          "YAWN"
        ],
        [
          "7",
          "ENCORE"
        ],
        [
          "13",
          "SLACKOFF"
        ],
        [
          "19",
          "FAINTATTACK"
        ],
        [
          "25",
          "AMNESIA"
        ],
        [
          "31",
          "COVET"
        ],
        [
          "37",
          "CHIPAWAY"
        ],
        [
          "43",
          "COUNTER"
        ],
        [
          "49",
          "FLAIL"
        ]
      ],
      "eggmoves": [
        [
          "AFTERYOU",
          "BODYSLAM"
        ],
        [
          "CRUSHCLAW",
          "CURSE"
        ],
        [
          "HAMMERARM",
          "NIGHTSLASH"
        ],
        [
          "PURSUIT",
          "SLASH"
        ],
        [
          "SLEEPTALK",
          "SNORE"
        ],
        [
          "TICKLE"
        ]
      ],
      "compatibility": "Field",
      "stepstohatch": "4080",
      "height": "0.8",
      "weight": "24.0",
      "habitat": "Forest",
      "pokedex": "Este Pokemon no se mueve ni a por comida.",
      "evolutions": "ATLAS,Level,36"
    },
    {
      "id": 42,
      "image": "fakemonico/042.png",
      "name": "Atlas",
      "type1": "NORMAL",
      "basestats": [
        150,
        160,
        100,
        100,
        95,
        65
      ],
      "genderrate": "Female50Percent",
      "growthrate": "Slow",
      "baseexp": "252",
      "effortpoints": [
        3,
        0,
        0,
        0,
        0,
        0
      ],
      "rareness": "45",
      "happiness": "70",
      "abilities": [
        [
          "TRUANT"
        ]
      ],
      "moves": [
        [
          "1",
          "SCRATCH"
        ],
        [
          "1",
          "YAWN"
        ],
        [
          "1",
          "ENCORE"
        ],
        [
          "1",
          "SLACKOFF"
        ],
        [
          "7",
          "ENCORE"
        ],
        [
          "13",
          "SLACKOFF"
        ],
        [
          "19",
          "FAINTATTACK"
        ],
        [
          "25",
          "AMNESIA"
        ],
        [
          "31",
          "COVET"
        ],
        [
          "36",
          "SWAGGER"
        ],
        [
          "37",
          "CHIPAWAY"
        ],
        [
          "43",
          "COUNTER"
        ],
        [
          "49",
          "FLAIL"
        ],
        [
          "55",
          "FLING"
        ],
        [
          "61",
          "PUNISHMENT"
        ],
        [
          "67",
          "HAMMERARM"
        ]
      ],
      "compatibility": "Field",
      "stepstohatch": "4080",
      "height": "2.0",
      "weight": "130.5",
      "habitat": "Forest",
      "pokedex": "Duerme alrededor de 14 horas diarias, eso sí, procura evitarlo en sus horas de caza.",
      "evolutions": ""
    },
    {
      "id": 43,
      "image": "fakemonico/043.png",
      "name": "Fireant",
      "type1": "BUG",
      "type2": "FIRE",
      "basestats": [
        75,
        85,
        55,
        70,
        85,
        55
      ],
      "genderrate": "Female50Percent",
      "growthrate": "Slow",
      "baseexp": "72",
      "effortpoints": [
        0,
        1,
        0,
        0,
        0,
        0
      ],
      "rareness": "45",
      "happiness": "70",
      "abilities": [
        [
          "BLAZE"
        ]
      ],
      "hiddenability": "SWARM",
      "moves": [
        [
          "1",
          "EMBER"
        ],
        [
          "1",
          "STRINGSHOT"
        ],
        [
          "10",
          "LEECHLIFE"
        ],
        [
          "20",
          "TAKEDOWN"
        ],
        [
          "30",
          "FLAMECHARGE"
        ],
        [
          "40",
          "BUGBITE"
        ],
        [
          "50",
          "DOUBLEEDGE"
        ],
        [
          "60",
          "FLAMEWHEEL"
        ],
        [
          "70",
          "BUGBUZZ"
        ],
        [
          "80",
          "AMNESIA"
        ],
        [
          "90",
          "THRASH"
        ],
        [
          "100",
          "FLAREBLITZ"
        ]
      ],
      "eggmoves": [
        [
          "ENDURE",
          "FORESIGHT"
        ],
        [
          "HARDEN",
          "MAGNETRISE"
        ],
        [
          "MORNINGSUN",
          "STRINGSHOT"
        ],
        [
          "ZENHEADBUTT"
        ]
      ],
      "compatibility": "Bug",
      "stepstohatch": "10455",
      "height": "1.1",
      "weight": "28.8",
      "pokedex": "Hormiga capaz de generar fuego.",
      "evolutions": "QUEENT,ItemFemale,DAWNSTONE"
    },
    {
      "id": 44,
      "image": "fakemonico/044.png",
      "name": "Aquant",
      "type1": "BUG",
      "type2": "WATER",
      "basestats": [
        75,
        85,
        55,
        70,
        85,
        55
      ],
      "genderrate": "Female50Percent",
      "growthrate": "Medium",
      "baseexp": "54",
      "effortpoints": [
        0,
        0,
        0,
        1,
        0,
        0
      ],
      "rareness": "200",
      "happiness": "70",
      "abilities": [
        [
          "TORRENT"
        ]
      ],
      "hiddenability": "SWARM",
      "moves": [
        [
          "1",
          "BUBBLE"
        ],
        [
          "7",
          "QUICKATTACK"
        ],
        [
          "10",
          "LEECHLIFE"
        ],
        [
          "13",
          "SWEETSCENT"
        ],
        [
          "19",
          "WATERSPORT"
        ],
        [
          "25",
          "BUBBLEBEAM"
        ],
        [
          "31",
          "AGILITY"
        ],
        [
          "37",
          "MIST"
        ],
        [
          "37",
          "HAZE"
        ],
        [
          "43",
          "BATONPASS"
        ]
      ],
      "eggmoves": [
        [
          "AQUAJET",
          "BUGBITE"
        ],
        [
          "ENDURE",
          "FORESIGHT"
        ],
        [
          "HYDROPUMP",
          "MINDREADER"
        ],
        [
          "MUDSHOT",
          "PSYBEAM"
        ],
        [
          "SIGNALBEAM"
        ]
      ],
      "compatibility": "Water1,Bug",
      "stepstohatch": "4080",
      "height": "0.5",
      "weight": "1.7",
      "habitat": "WatersEdge",
      "pokedex": "Hormiga capaz de generar agua.",
      "evolutions": "QUEENT,ItemFemale,DAWNSTONE"
    },
    {
      "id": 45,
      "image": "fakemonico/045.png",
      "name": "Grasant",
      "type1": "BUG",
      "type2": "GRASS",
      "basestats": [
        55,
        63,
        90,
        42,
        50,
        80
      ],
      "genderrate": "Female50Percent",
      "growthrate": "Parabolic",
      "baseexp": "133",
      "effortpoints": [
        0,
        0,
        2,
        0,
        0,
        0
      ],
      "rareness": "120",
      "happiness": "70",
      "abilities": [
        [
          "OVERGROW"
        ]
      ],
      "hiddenability": "SWARM",
      "moves": [
        [
          "1",
          "GRASSWHISTLE"
        ],
        [
          "1",
          "TACKLE"
        ],
        [
          "1",
          "STRINGSHOT"
        ],
        [
          "1",
          "BUGBITE"
        ],
        [
          "1",
          "RAZORLEAF"
        ],
        [
          "20",
          "PROTECT"
        ]
      ],
      "compatibility": "Bug",
      "stepstohatch": "4080",
      "height": "0.5",
      "weight": "7.3",
      "pokedex": "Hormiga capaz de controlar el bosque.",
      "wilditemuncommon": "MENTALHERB",
      "evolutions": "QUEENT,ItemFemale,DAWNSTONE"
    },
    {
      "id": 46,
      "image": "fakemonico/046.png",
      "name": "Queent",
      "type1": "BUG",
      "basestats": [
        85,
        60,
        65,
        100,
        135,
        105
      ],
      "genderrate": "Female50Percent",
      "growthrate": "Slow",
      "baseexp": "248",
      "effortpoints": [
        0,
        0,
        0,
        0,
        3,
        0
      ],
      "rareness": "15",
      "happiness": "70",
      "abilities": [
        [
          "MOLDBREAKER"
        ]
      ],
      "hiddenability": "SWARM",
      "moves": [
        [
          "1",
          "EMBER"
        ],
        [
          "1",
          "STRINGSHOT"
        ],
        [
          "1",
          "LEECHLIFE"
        ],
        [
          "1",
          "GUST"
        ],
        [
          "10",
          "LEECHLIFE"
        ],
        [
          "20",
          "GUST"
        ],
        [
          "30",
          "FIRESPIN"
        ],
        [
          "31",
          "BUBBLEBEAM"
        ],
        [
          "32",
          "MAGICALLEAF"
        ],
        [
          "40",
          "WHIRLWIND"
        ],
        [
          "41",
          "SILVERWIND"
        ],
        [
          "42",
          "QUIVERDANCE"
        ],
        [
          "60",
          "HEATWAVE"
        ],
        [
          "70",
          "BUGBUZZ"
        ],
        [
          "80",
          "RAGEPOWDER"
        ],
        [
          "90",
          "HURRICANE"
        ],
        [
          "100",
          "FIERYDANCE"
        ]
      ],
      "compatibility": "Bug",
      "stepstohatch": "10455",
      "height": "1.6",
      "weight": "46.0",
      "pokedex": "Esta hormiga reina es capaz de controlar los tres elementos.",
      "wilditemcommon": "SILVERPOWDER",
      "wilditemuncommon": "SILVERPOWDER",
      "wilditemrare": "SILVERPOWDER",
      "evolutions": ""
    },
    {
      "id": 47,
      "image": "fakemonico/047.png",
      "name": "Ospeed",
      "type1": "NORMAL",
      "type2": "FLYING",
      "basestats": [
        35,
        85,
        45,
        75,
        35,
        35
      ],
      "genderrate": "Female50Percent",
      "growthrate": "Medium",
      "baseexp": "62",
      "effortpoints": [
        0,
        1,
        0,
        0,
        0,
        0
      ],
      "rareness": "190",
      "happiness": "70",
      "abilities": [
        [
          "RUNAWAY",
          "EARLYBIRD"
        ]
      ],
      "hiddenability": "TANGLEDFEET",
      "moves": [
        [
          "1",
          "PECK"
        ],
        [
          "1",
          "GROWL"
        ],
        [
          "5",
          "QUICKATTACK"
        ],
        [
          "10",
          "RAGE"
        ],
        [
          "14",
          "FURYATTACK"
        ],
        [
          "19",
          "PURSUIT"
        ],
        [
          "23",
          "UPROAR"
        ],
        [
          "28",
          "ACUPRESSURE"
        ],
        [
          "30",
          "DRILLRUN"
        ],
        [
          "32",
          "DOUBLEHIT"
        ],
        [
          "37",
          "AGILITY"
        ],
        [
          "41",
          "DRILLPECK"
        ],
        [
          "46",
          "ENDEAVOR"
        ],
        [
          "50",
          "THRASH"
        ]
      ],
      "eggmoves": [
        [
          "ASSURANCE",
          "BRAVEBIRD"
        ],
        [
          "ENDEAVOR",
          "FAINTATTACK"
        ],
        [
          "FLAIL",
          "HAZE"
        ],
        [
          "MIRRORMOVE",
          "NATURALGIFT"
        ],
        [
          "QUICKATTACK",
          "SUPERSONIC"
        ]
      ],
      "compatibility": "Flying",
      "stepstohatch": "5355",
      "height": "1.4",
      "weight": "39.2",
      "habitat": "Grassland",
      "pokedex": "Puede llegar a alcanzar gran velocidad punta.",
      "wilditemuncommon": "SHARPBEAK",
      "evolutions": "OSTRICK,Level,31,OSDRILL,HasMove,DRILLRUN"
    },
    {
      "id": 48,
      "image": "fakemonico/048.png",
      "name": "Ostrick",
      "type1": "NORMAL",
      "type2": "FLYING",
      "basestats": [
        60,
        110,
        60,
        80,
        60,
        110
      ],
      "genderrate": "Female50Percent",
      "growthrate": "Medium",
      "baseexp": "161",
      "effortpoints": [
        0,
        2,
        0,
        0,
        0,
        0
      ],
      "rareness": "45",
      "happiness": "70",
      "abilities": [
        [
          "RUNAWAY",
          "EARLYBIRD"
        ]
      ],
      "hiddenability": "TANGLEDFEET",
      "moves": [
        [
          "1",
          "PLUCK"
        ],
        [
          "1",
          "PECK"
        ],
        [
          "1",
          "GROWL"
        ],
        [
          "1",
          "QUICKATTACK"
        ],
        [
          "1",
          "RAGE"
        ],
        [
          "5",
          "QUICKATTACK"
        ],
        [
          "10",
          "RAGE"
        ],
        [
          "14",
          "FURYATTACK"
        ],
        [
          "19",
          "PURSUIT"
        ],
        [
          "23",
          "UPROAR"
        ],
        [
          "28",
          "ACUPRESSURE"
        ],
        [
          "34",
          "TRIATTACK"
        ],
        [
          "41",
          "AGILITY"
        ],
        [
          "47",
          "DRILLPECK"
        ],
        [
          "54",
          "ENDEAVOR"
        ],
        [
          "60",
          "THRASH"
        ]
      ],
      "compatibility": "Flying",
      "stepstohatch": "5355",
      "height": "1.8",
      "weight": "85.2",
      "habitat": "Grassland",
      "pokedex": "Es más vaga que su antecesor, pero es capaz de lanzar ataques a distancia.",
      "wilditemuncommon": "SHARPBEAK",
      "evolutions": ""
    },
    {
      "id": 49,
      "image": "fakemonico/049.png",
      "name": "Osdrill",
      "type1": "NORMAL",
      "type2": "FLYING",
      "basestats": [
        70,
        110,
        70,
        110,
        60,
        60
      ],
      "genderrate": "Female50Percent",
      "growthrate": "Medium",
      "baseexp": "161",
      "effortpoints": [
        0,
        2,
        0,
        0,
        0,
        0
      ],
      "rareness": "45",
      "happiness": "70",
      "abilities": [
        [
          "RUNAWAY",
          "EARLYBIRD"
        ]
      ],
      "hiddenability": "TANGLEDFEET",
      "moves": [
        [
          "1",
          "PLUCK"
        ],
        [
          "1",
          "PECK"
        ],
        [
          "1",
          "GROWL"
        ],
        [
          "1",
          "QUICKATTACK"
        ],
        [
          "1",
          "RAGE"
        ],
        [
          "5",
          "QUICKATTACK"
        ],
        [
          "10",
          "RAGE"
        ],
        [
          "14",
          "FURYATTACK"
        ],
        [
          "19",
          "PURSUIT"
        ],
        [
          "23",
          "UPROAR"
        ],
        [
          "28",
          "ACUPRESSURE"
        ],
        [
          "30",
          "DRILLRUN"
        ],
        [
          "34",
          "TAKEDOWN"
        ],
        [
          "41",
          "AGILITY"
        ],
        [
          "47",
          "DRILLPECK"
        ],
        [
          "54",
          "ENDEAVOR"
        ],
        [
          "60",
          "THRASH"
        ]
      ],
      "compatibility": "Flying",
      "stepstohatch": "5355",
      "height": "1.8",
      "weight": "85.2",
      "habitat": "Grassland",
      "pokedex": "Puede llegar a correr más de 100 KM por día.",
      "wilditemuncommon": "SHARPBEAK",
      "evolutions": ""
    },
    {
      "id": 50,
      "image": "fakemonico/050.png",
      "name": "Astroin",
      "type1": "ROCK",
      "type2": "PSYCHIC",
      "basestats": [
        35,
        40,
        35,
        55,
        90,
        100
      ],
      "genderrate": "Genderless",
      "growthrate": "Fast",
      "baseexp": "154",
      "effortpoints": [
        0,
        2,
        0,
        0,
        0,
        0
      ],
      "rareness": "45",
      "happiness": "70",
      "abilities": [
        [
          "LEVITATE"
        ]
      ],
      "moves": [
        [
          "1",
          "TACKLE"
        ],
        [
          "1",
          "HARDEN"
        ],
        [
          "1",
          "CONFUSION"
        ],
        [
          "5",
          "ROCKTHROW"
        ],
        [
          "9",
          "FIRESPIN"
        ],
        [
          "13",
          "ROCKPOLISH"
        ],
        [
          "17",
          "PSYWAVE"
        ],
        [
          "21",
          "EMBARGO"
        ],
        [
          "25",
          "ROCKSLIDE"
        ],
        [
          "29",
          "COSMICPOWER"
        ],
        [
          "33",
          "PSYCHIC"
        ],
        [
          "37",
          "HEALBLOCK"
        ],
        [
          "41",
          "STONEEDGE"
        ],
        [
          "45",
          "SOLARBEAM"
        ],
        [
          "49",
          "EXPLOSION"
        ],
        [
          "53",
          "WONDERROOM"
        ]
      ],
      "compatibility": "Mineral",
      "stepstohatch": "6630",
      "height": "1.2",
      "weight": "154.0",
      "habitat": "Cave",
      "pokedex": "Meteorito caído del espacio.",
      "wilditemuncommon": "SUNSTONE",
      "wilditemrare": "COMETSHARD",
      "evolutions": "METEOR,Level,24"
    },
    {
      "id": 51,
      "image": "fakemonico/051.png",
      "name": "Meteor",
      "type1": "ROCK",
      "type2": "PSYCHIC",
      "basestats": [
        80,
        70,
        95,
        65,
        55,
        115
      ],
      "genderrate": "Genderless",
      "growthrate": "Fast",
      "baseexp": "154",
      "effortpoints": [
        0,
        2,
        0,
        0,
        0,
        0
      ],
      "rareness": "45",
      "happiness": "70",
      "abilities": [
        [
          "LEVITATE"
        ]
      ],
      "moves": [
        [
          "1",
          "TACKLE"
        ],
        [
          "1",
          "HARDEN"
        ],
        [
          "1",
          "CONFUSION"
        ],
        [
          "5",
          "ROCKTHROW"
        ],
        [
          "9",
          "FIRESPIN"
        ],
        [
          "13",
          "ROCKPOLISH"
        ],
        [
          "17",
          "PSYWAVE"
        ],
        [
          "21",
          "EMBARGO"
        ],
        [
          "25",
          "ROCKSLIDE"
        ],
        [
          "29",
          "COSMICPOWER"
        ],
        [
          "33",
          "PSYCHIC"
        ],
        [
          "37",
          "HEALBLOCK"
        ],
        [
          "41",
          "STONEEDGE"
        ],
        [
          "45",
          "SOLARBEAM"
        ],
        [
          "49",
          "EXPLOSION"
        ],
        [
          "53",
          "WONDERROOM"
        ]
      ],
      "compatibility": "Mineral",
      "stepstohatch": "6630",
      "height": "1.2",
      "weight": "154.0",
      "habitat": "Cave",
      "pokedex": "Meteorito caído del espacio. Adoptó una forma rara.",
      "wilditemuncommon": "SUNSTONE",
      "wilditemrare": "COMETSHARD",
      "evolutions": "PROJECTISO,Level,42"
    },
    {
      "id": 52,
      "image": "fakemonico/052.png",
      "name": "Project.iso",
      "type1": "GROUND",
      "type2": "PSYCHIC",
      "basestats": [
        60,
        60,
        105,
        75,
        90,
        120
      ],
      "genderrate": "Genderless",
      "growthrate": "Medium",
      "baseexp": "175",
      "effortpoints": [
        0,
        0,
        0,
        0,
        0,
        2
      ],
      "rareness": "90",
      "happiness": "70",
      "abilities": [
        [
          "LEVITATE"
        ]
      ],
      "moves": [
        [
          "1",
          "PSYWAVE"
        ],
        [
          "1",
          "HARDEN"
        ],
        [
          "1",
          "CONFUSION"
        ],
        [
          "1",
          "RAPIDSPIN"
        ],
        [
          "4",
          "RAPIDSPIN"
        ],
        [
          "7",
          "MUDSLAP"
        ],
        [
          "10",
          "ROCKTOMB"
        ],
        [
          "13",
          "PSYBEAM"
        ],
        [
          "17",
          "POWERTRICK"
        ],
        [
          "21",
          "ANCIENTPOWER"
        ],
        [
          "25",
          "SELFDESTRUCT"
        ],
        [
          "28",
          "EXTRASENSORY"
        ],
        [
          "31",
          "COSMICPOWER"
        ],
        [
          "34",
          "GUARDSPLIT"
        ],
        [
          "34",
          "POWERSPLIT"
        ],
        [
          "36",
          "HYPERBEAM"
        ],
        [
          "40",
          "EARTHPOWER"
        ],
        [
          "47",
          "SANDSTORM"
        ],
        [
          "54",
          "HEALBLOCK"
        ],
        [
          "61",
          "EXPLOSION"
        ]
      ],
      "compatibility": "Mineral",
      "stepstohatch": "5355",
      "height": "1.5",
      "weight": "108.0",
      "habitat": "RoughTerrain",
      "pokedex": "El meteorito resultó ser un extraterrestre. \u00c2\u00bfNos querrá decir algo?",
      "evolutions": ""
    },
    {
      "id": 53,
      "image": "fakemonico/053.png",
      "name": "Goliam",
      "type1": "ROCK",
      "type2": "GROUND",
      "basestats": [
        80,
        95,
        115,
        35,
        45,
        45
      ],
      "genderrate": "Female50Percent",
      "growthrate": "Parabolic",
      "baseexp": "137",
      "effortpoints": [
        0,
        0,
        2,
        0,
        0,
        0
      ],
      "rareness": "120",
      "happiness": "70",
      "abilities": [
        [
          "ROCKHEAD",
          "STURDY"
        ]
      ],
      "hiddenability": "SANDVEIL",
      "moves": [
        [
          "1",
          "TACKLE"
        ],
        [
          "1",
          "DEFENSECURL"
        ],
        [
          "1",
          "MUDSPORT"
        ],
        [
          "1",
          "ROCKPOLISH"
        ],
        [
          "4",
          "MUDSPORT"
        ],
        [
          "8",
          "ROCKPOLISH"
        ],
        [
          "11",
          "ROCKTHROW"
        ],
        [
          "15",
          "MAGNITUDE"
        ],
        [
          "18",
          "ROLLOUT"
        ],
        [
          "22",
          "ROCKBLAST"
        ],
        [
          "27",
          "SMACKDOWN"
        ],
        [
          "31",
          "SELFDESTRUCT"
        ],
        [
          "36",
          "BULLDOZE"
        ],
        [
          "42",
          "STEALTHROCK"
        ],
        [
          "47",
          "EARTHQUAKE"
        ],
        [
          "53",
          "EXPLOSION"
        ],
        [
          "58",
          "DOUBLEEDGE"
        ],
        [
          "64",
          "STONEEDGE"
        ]
      ],
      "compatibility": "Mineral",
      "stepstohatch": "4080",
      "height": "1.0",
      "weight": "105.0",
      "habitat": "Mountain",
      "pokedex": "Este pequeño golem tiene una gran fuerza física.",
      "wilditemuncommon": "EVERSTONE",
      "evolutions": "TYTAN,Level,38"
    },
    {
      "id": 54,
      "image": "fakemonico/054.png",
      "name": "Tytan",
      "type1": "ROCK",
      "type2": "GROUND",
      "basestats": [
        110,
        120,
        130,
        45,
        55,
        65
      ],
      "genderrate": "Female50Percent",
      "growthrate": "Parabolic",
      "baseexp": "218",
      "effortpoints": [
        0,
        0,
        3,
        0,
        0,
        0
      ],
      "rareness": "45",
      "happiness": "70",
      "abilities": [
        [
          "ROCKHEAD",
          "STURDY"
        ]
      ],
      "hiddenability": "SANDVEIL",
      "moves": [
        [
          "1",
          "TACKLE"
        ],
        [
          "1",
          "DEFENSECURL"
        ],
        [
          "1",
          "MUDSPORT"
        ],
        [
          "1",
          "ROCKPOLISH"
        ],
        [
          "4",
          "MUDSPORT"
        ],
        [
          "8",
          "ROCKPOLISH"
        ],
        [
          "11",
          "ROCKTHROW"
        ],
        [
          "15",
          "MAGNITUDE"
        ],
        [
          "18",
          "STEAMROLLER"
        ],
        [
          "22",
          "ROCKBLAST"
        ],
        [
          "27",
          "SMACKDOWN"
        ],
        [
          "31",
          "SELFDESTRUCT"
        ],
        [
          "36",
          "BULLDOZE"
        ],
        [
          "42",
          "STEALTHROCK"
        ],
        [
          "47",
          "EARTHQUAKE"
        ],
        [
          "53",
          "EXPLOSION"
        ],
        [
          "58",
          "DOUBLEEDGE"
        ],
        [
          "64",
          "STONEEDGE"
        ],
        [
          "69",
          "HEAVYSLAM"
        ]
      ],
      "compatibility": "Mineral",
      "stepstohatch": "4080",
      "height": "1.4",
      "weight": "300.0",
      "habitat": "Mountain",
      "pokedex": "Es capaz de aguantar grandes golpes físicos.",
      "wilditemuncommon": "EVERSTONE",
      "evolutions": ""
    },
    {
      "id": 55,
      "image": "fakemonico/055.png",
      "name": "Wolfie",
      "type1": "DARK",
      "basestats": [
        40,
        65,
        40,
        65,
        80,
        40
      ],
      "genderrate": "FemaleOneEighth",
      "growthrate": "Parabolic",
      "baseexp": "66",
      "effortpoints": [
        0,
        0,
        0,
        0,
        1,
        0
      ],
      "rareness": "75",
      "happiness": "70",
      "abilities": [
        [
          "SUPERLUCK"
        ]
      ],
      "hiddenability": "MOXIE",
      "moves": [
        [
          "1",
          "SCRATCH"
        ],
        [
          "1",
          "LEER"
        ],
        [
          "5",
          "PURSUIT"
        ],
        [
          "9",
          "FAKETEARS"
        ],
        [
          "13",
          "FURYSWIPES"
        ],
        [
          "17",
          "FAINTATTACK"
        ],
        [
          "21",
          "SCARYFACE"
        ],
        [
          "25",
          "TAUNT"
        ],
        [
          "29",
          "FOULPLAY"
        ],
        [
          "33",
          "TORMENT"
        ],
        [
          "37",
          "TRANSFORM"
        ],
        [
          "41",
          "EMBARGO"
        ],
        [
          "45",
          "PUNISHMENT"
        ],
        [
          "49",
          "NASTYPLOT"
        ],
        [
          "53",
          "IMPRISON"
        ],
        [
          "57",
          "NIGHTDAZE"
        ]
      ],
      "eggmoves": [
        [
          "CAPTIVATE",
          "COUNTER"
        ],
        [
          "DARKPULSE",
          "DETECT"
        ],
        [
          "EXTRASENSORY",
          "MEMENTO"
        ],
        [
          "SNATCH",
          "SUCKERPUNCH"
        ]
      ],
      "compatibility": "Field",
      "stepstohatch": "6630",
      "height": "0.7",
      "weight": "12.5",
      "pokedex": "Cría de lobo. Le gusta la noche.",
      "evolutions": "WOLFRAM,Level,30"
    },
    {
      "id": 56,
      "image": "fakemonico/056.png",
      "name": "Wolfram",
      "type1": "DARK",
      "basestats": [
        40,
        75,
        40,
        65,
        80,
        60
      ],
      "genderrate": "FemaleOneEighth",
      "growthrate": "Parabolic",
      "baseexp": "66",
      "effortpoints": [
        0,
        0,
        0,
        0,
        1,
        0
      ],
      "rareness": "75",
      "happiness": "70",
      "abilities": [
        [
          "SUPERLUCK"
        ]
      ],
      "hiddenability": "MOXIE",
      "moves": [
        [
          "1",
          "SCRATCH"
        ],
        [
          "1",
          "LEER"
        ],
        [
          "5",
          "PURSUIT"
        ],
        [
          "9",
          "FAKETEARS"
        ],
        [
          "13",
          "FURYSWIPES"
        ],
        [
          "17",
          "FAINTATTACK"
        ],
        [
          "21",
          "SCARYFACE"
        ],
        [
          "25",
          "TAUNT"
        ],
        [
          "29",
          "FOULPLAY"
        ],
        [
          "33",
          "TORMENT"
        ],
        [
          "37",
          "TRANSFORM"
        ],
        [
          "41",
          "EMBARGO"
        ],
        [
          "45",
          "PUNISHMENT"
        ],
        [
          "49",
          "NASTYPLOT"
        ],
        [
          "53",
          "IMPRISON"
        ],
        [
          "57",
          "NIGHTDAZE"
        ]
      ],
      "compatibility": "Field",
      "stepstohatch": "6630",
      "height": "0.7",
      "weight": "12.5",
      "pokedex": "Solo sale por la noche y duerme durante el día.",
      "evolutions": "LYCAN,Item,MOONSTONE"
    },
    {
      "id": 57,
      "image": "fakemonico/057.png",
      "name": "Lycan",
      "type1": "DARK",
      "type2": "FIGHTING",
      "basestats": [
        60,
        105,
        60,
        105,
        120,
        60
      ],
      "genderrate": "FemaleOneEighth",
      "growthrate": "Parabolic",
      "baseexp": "179",
      "effortpoints": [
        0,
        0,
        0,
        0,
        2,
        0
      ],
      "rareness": "45",
      "happiness": "70",
      "abilities": [
        [
          "SUPERLUCK"
        ]
      ],
      "hiddenability": "MOXIE",
      "moves": [
        [
          "1",
          "UTURN"
        ],
        [
          "1",
          "SCRATCH"
        ],
        [
          "1",
          "LEER"
        ],
        [
          "1",
          "PURSUIT"
        ],
        [
          "1",
          "HONECLAWS"
        ],
        [
          "5",
          "PURSUIT"
        ],
        [
          "9",
          "HONECLAWS"
        ],
        [
          "13",
          "FURYSWIPES"
        ],
        [
          "17",
          "FAINTATTACK"
        ],
        [
          "21",
          "SCARYFACE"
        ],
        [
          "25",
          "TAUNT"
        ],
        [
          "29",
          "FOULPLAY"
        ],
        [
          "30",
          "NIGHTSLASH"
        ],
        [
          "34",
          "AURASPHERE"
        ],
        [
          "39",
          "AGILITY"
        ],
        [
          "44",
          "CLOSECOMBAT"
        ],
        [
          "49",
          "PUNISHMENT"
        ],
        [
          "54",
          "NASTYPLOT"
        ],
        [
          "59",
          "IMPRISON"
        ],
        [
          "64",
          "NIGHTDAZE"
        ]
      ],
      "compatibility": "Field",
      "stepstohatch": "5355",
      "height": "1.6",
      "weight": "81.1",
      "pokedex": "Se transforma y genera fuerza gracias a la luz lunar.",
      "evolutions": ""
    },
    {
      "id": 58,
      "image": "fakemonico/058.png",
      "name": "Ironphant",
      "type1": "STEEL",
      "type2": "GROUND",
      "basestats": [
        75,
        100,
        200,
        30,
        55,
        65
      ],
      "genderrate": "Female50Percent",
      "growthrate": "Medium",
      "baseexp": "179",
      "effortpoints": [
        0,
        0,
        2,
        0,
        0,
        0
      ],
      "rareness": "25",
      "happiness": "70",
      "abilities": [
        [
          "SHEERFORCE"
        ]
      ],
      "hiddenability": "ROCKHEAD",
      "moves": [
        [
          "1",
          "THUNDERFANG"
        ],
        [
          "1",
          "ICEFANG"
        ],
        [
          "1",
          "FIREFANG"
        ],
        [
          "1",
          "MUDSPORT"
        ],
        [
          "1",
          "TACKLE"
        ],
        [
          "1",
          "HARDEN"
        ],
        [
          "1",
          "BIND"
        ],
        [
          "4",
          "CURSE"
        ],
        [
          "7",
          "ROCKTHROW"
        ],
        [
          "10",
          "RAGE"
        ],
        [
          "13",
          "ROCKTOMB"
        ],
        [
          "16",
          "STEALTHROCK"
        ],
        [
          "19",
          "AUTOTOMIZE"
        ],
        [
          "22",
          "SMACKDOWN"
        ],
        [
          "25",
          "DRAGONBREATH"
        ],
        [
          "28",
          "SLAM"
        ],
        [
          "31",
          "SCREECH"
        ],
        [
          "34",
          "ROCKSLIDE"
        ],
        [
          "37",
          "CRUNCH"
        ],
        [
          "40",
          "IRONTAIL"
        ],
        [
          "42",
          "HEADSMASH"
        ],
        [
          "43",
          "BULLDOZE"
        ],
        [
          "46",
          "STONEEDGE"
        ],
        [
          "49",
          "DOUBLEEDGE"
        ],
        [
          "52",
          "SANDSTORM"
        ]
      ],
      "compatibility": "Mineral",
      "stepstohatch": "6630",
      "height": "9.2",
      "weight": "400.0",
      "habitat": "Cave",
      "pokedex": "Es lento pero es un guerrero perfecto para aguantar embestidas.",
      "wilditemuncommon": "METALCOAT",
      "evolutions": ""
    },
    {
      "id": 59,
      "image": "fakemonico/059.png",
      "name": "Beacon",
      "type1": "STEEL",
      "type2": "GHOST",
      "basestats": [
        60,
        80,
        110,
        60,
        90,
        110
      ],
      "genderrate": "Female50Percent",
      "growthrate": "Medium",
      "baseexp": "234",
      "effortpoints": [
        0,
        0,
        2,
        0,
        1,
        0
      ],
      "rareness": "222",
      "happiness": "70",
      "abilities": [
        [
          "MUMMY"
        ]
      ],
      "moves": [
        [
          "1",
          "TACKLE"
        ],
        [
          "1",
          "SWORDSDANCE"
        ],
        [
          "5",
          "FURYCUTTER"
        ],
        [
          "8",
          "METALSOUND"
        ],
        [
          "13",
          "PURSUIT"
        ],
        [
          "18",
          "AUTOTOMIZE"
        ],
        [
          "20",
          "SHADOWSNEAK"
        ],
        [
          "22",
          "AERIALACE"
        ],
        [
          "26",
          "RETALIATE"
        ],
        [
          "29",
          "SLASH"
        ],
        [
          "30",
          "FLASHCANNON"
        ],
        [
          "31",
          "SHADOWBALL"
        ],
        [
          "32",
          "IRONDEFENSE"
        ],
        [
          "33",
          "NASTYPLOT"
        ],
        [
          "36",
          "NIGHTSLASH"
        ],
        [
          "41",
          "POWERTRICK"
        ],
        [
          "45",
          "IRONHEAD"
        ],
        [
          "51",
          "SACREDSWORD"
        ]
      ],
      "compatibility": "Mineral",
      "stepstohatch": "5120",
      "height": "1.7",
      "weight": "53.0",
      "pokedex": "Guía a los perdidos con su luz para tragarlos de por vida en su interior.",
      "evolutions": ""
    },
    {
      "id": 60,
      "image": "fakemonico/060.png",
      "name": "Snailhorn",
      "type1": "WATER",
      "type2": "GROUND",
      "basestats": [
        111,
        83,
        68,
        39,
        92,
        82
      ],
      "genderrate": "Female50Percent",
      "growthrate": "Medium",
      "baseexp": "166",
      "effortpoints": [
        2,
        0,
        0,
        0,
        0,
        0
      ],
      "rareness": "75",
      "happiness": "70",
      "abilities": [
        [
          "STICKYHOLD",
          "STORMDRAIN"
        ]
      ],
      "hiddenability": "SANDFORCE",
      "moves": [
        [
          "1",
          "MUDSLAP"
        ],
        [
          "1",
          "MUDSPORT"
        ],
        [
          "1",
          "HARDEN"
        ],
        [
          "1",
          "WATERPULSE"
        ],
        [
          "2",
          "MUDSPORT"
        ],
        [
          "4",
          "HARDEN"
        ],
        [
          "7",
          "WATERPULSE"
        ],
        [
          "11",
          "MUDBOMB"
        ],
        [
          "16",
          "HIDDENPOWER"
        ],
        [
          "22",
          "RAINDANCE"
        ],
        [
          "29",
          "BODYSLAM"
        ],
        [
          "41",
          "MUDDYWATER"
        ],
        [
          "54",
          "RECOVER"
        ]
      ],
      "compatibility": "Water1,Amorphous",
      "stepstohatch": "5355",
      "height": "0.9",
      "weight": "29.9",
      "pokedex": "Es lento pero muy resistente. Habita en las playas.",
      "formnames": "West Sea,East Sea",
      "evolutions": ""
    },
    {
      "id": 61,
      "image": "fakemonico/061.png",
      "name": "Batxic",
      "type1": "POISON",
      "type2": "FLYING",
      "basestats": [
        40,
        55,
        35,
        75,
        30,
        40
      ],
      "genderrate": "Female50Percent",
      "growthrate": "Medium",
      "baseexp": "49",
      "effortpoints": [
        0,
        0,
        0,
        1,
        0,
        0
      ],
      "rareness": "255",
      "happiness": "70",
      "abilities": [
        [
          "INNERFOCUS",
          "POISONTOUCH"
        ]
      ],
      "hiddenability": "INFILTRATOR",
      "moves": [
        [
          "1",
          "LEECHLIFE"
        ],
        [
          "4",
          "SUPERSONIC"
        ],
        [
          "8",
          "ASTONISH"
        ],
        [
          "12",
          "BITE"
        ],
        [
          "15",
          "WINGATTACK"
        ],
        [
          "19",
          "CONFUSERAY"
        ],
        [
          "23",
          "SWIFT"
        ],
        [
          "26",
          "AIRCUTTER"
        ],
        [
          "30",
          "ACROBATICS"
        ],
        [
          "34",
          "MEANLOOK"
        ],
        [
          "37",
          "POISONFANG"
        ],
        [
          "41",
          "HAZE"
        ],
        [
          "45",
          "AIRSLASH"
        ]
      ],
      "eggmoves": [
        [
          "BRAVEBIRD",
          "CURSE"
        ],
        [
          "DEFOG",
          "FAINTATTACK"
        ],
        [
          "GIGADRAIN",
          "GUST"
        ],
        [
          "HYPNOSIS",
          "NASTYPLOT"
        ],
        [
          "PURSUIT",
          "QUICKATTACK"
        ],
        [
          "STEELWING",
          "WHIRLWIND"
        ],
        [
          "ZENHEADBUTT"
        ]
      ],
      "compatibility": "Flying",
      "stepstohatch": "4080",
      "height": "0.8",
      "weight": "7.5",
      "habitat": "Cave",
      "pokedex": "Habita en las cuevas oscuras. Provoca enfermedades.",
      "evolutions": "BATPIRE,Level,22"
    },
    {
      "id": 62,
      "image": "fakemonico/062.png",
      "name": "Batpire",
      "type1": "POISON",
      "type2": "FLYING",
      "basestats": [
        75,
        80,
        70,
        100,
        65,
        75
      ],
      "genderrate": "Female50Percent",
      "growthrate": "Medium",
      "baseexp": "159",
      "effortpoints": [
        0,
        0,
        0,
        2,
        0,
        0
      ],
      "rareness": "90",
      "happiness": "70",
      "abilities": [
        [
          "INNERFOCUS",
          "POISONTOUCH"
        ]
      ],
      "hiddenability": "INFILTRATOR",
      "moves": [
        [
          "1",
          "SCREECH"
        ],
        [
          "1",
          "LEECHLIFE"
        ],
        [
          "1",
          "SUPERSONIC"
        ],
        [
          "1",
          "ASTONISH"
        ],
        [
          "4",
          "SUPERSONIC"
        ],
        [
          "8",
          "ASTONISH"
        ],
        [
          "12",
          "BITE"
        ],
        [
          "15",
          "WINGATTACK"
        ],
        [
          "19",
          "CONFUSERAY"
        ],
        [
          "24",
          "SWIFT"
        ],
        [
          "28",
          "AIRCUTTER"
        ],
        [
          "33",
          "ACROBATICS"
        ],
        [
          "38",
          "MEANLOOK"
        ],
        [
          "42",
          "POISONFANG"
        ],
        [
          "47",
          "HAZE"
        ],
        [
          "52",
          "AIRSLASH"
        ]
      ],
      "compatibility": "Flying",
      "stepstohatch": "4080",
      "height": "1.6",
      "weight": "55.0",
      "habitat": "Cave",
      "pokedex": "Viven en castillos oscuros. Les atrae la sangre.",
      "evolutions": "TOXIMPIRE,Item,DUSKSTONE"
    },
    {
      "id": 63,
      "image": "fakemonico/063.png",
      "name": "Toximpire",
      "type1": "POISON",
      "type2": "FLYING",
      "basestats": [
        85,
        90,
        80,
        130,
        70,
        80
      ],
      "genderrate": "Female50Percent",
      "growthrate": "Medium",
      "baseexp": "241",
      "effortpoints": [
        0,
        0,
        0,
        3,
        0,
        0
      ],
      "rareness": "90",
      "happiness": "70",
      "abilities": [
        [
          "INNERFOCUS",
          "POISONTOUCH"
        ]
      ],
      "hiddenability": "INFILTRATOR",
      "moves": [
        [
          "1",
          "CROSSPOISON"
        ],
        [
          "1",
          "SCREECH"
        ],
        [
          "1",
          "LEECHLIFE"
        ],
        [
          "1",
          "SUPERSONIC"
        ],
        [
          "1",
          "ASTONISH"
        ],
        [
          "4",
          "SUPERSONIC"
        ],
        [
          "8",
          "ASTONISH"
        ],
        [
          "12",
          "BITE"
        ],
        [
          "15",
          "WINGATTACK"
        ],
        [
          "19",
          "CONFUSERAY"
        ],
        [
          "24",
          "SWIFT"
        ],
        [
          "28",
          "AIRCUTTER"
        ],
        [
          "33",
          "ACROBATICS"
        ],
        [
          "38",
          "MEANLOOK"
        ],
        [
          "42",
          "POISONFANG"
        ],
        [
          "47",
          "HAZE"
        ],
        [
          "52",
          "AIRSLASH"
        ]
      ],
      "compatibility": "Flying",
      "stepstohatch": "4080",
      "height": "1.8",
      "weight": "75.0",
      "habitat": "Cave",
      "pokedex": "Se alimenta únicamente de sangre, ya sea de humanos o Pokemon.",
      "evolutions": ""
    },
    {
      "id": 64,
      "image": "fakemonico/064.png",
      "name": "Octopunch",
      "type1": "WATER",
      "type2": "FIGHTING",
      "basestats": [
        70,
        120,
        65,
        85,
        105,
        85
      ],
      "genderrate": "FemaleOneEighth",
      "growthrate": "Parabolic",
      "baseexp": "239",
      "effortpoints": [
        0,
        0,
        0,
        3,
        0,
        0
      ],
      "rareness": "45",
      "happiness": "70",
      "abilities": [
        [
          "IRONFIST"
        ]
      ],
      "hiddenability": "IRONFIST",
      "moves": [
        [
          "1",
          "BUBBLEBEAM"
        ],
        [
          "1",
          "DOUBLESLAP"
        ],
        [
          "1",
          "SUBMISSION"
        ],
        [
          "25",
          "AQUAJET"
        ],
        [
          "26",
          "ICEPUNCH"
        ],
        [
          "27",
          "MACHPUNCH"
        ],
        [
          "36",
          "DYNAMICPUNCH"
        ],
        [
          "43",
          "AQUATAIL"
        ],
        [
          "50",
          "CIRCLETHROW"
        ],
        [
          "58",
          "BELLYDRUM"
        ]
      ],
      "compatibility": "Monster,Dragon",
      "stepstohatch": "5355",
      "height": "1.7",
      "weight": "52.2",
      "habitat": "Forest",
      "pokedex": "Es muy inteligente y puede golpear a sus oponentes con sus tentáculos.",
      "evolutions": ""
    },
    {
      "id": 65,
      "image": "fakemonico/065.png",
      "name": "Armole",
      "type1": "ELECTRIC",
      "type2": "STEEL",
      "basestats": [
        55,
        70,
        95,
        45,
        25,
        55
      ],
      "genderrate": "Female50Percent",
      "growthrate": "Medium",
      "baseexp": "152",
      "effortpoints": [
        0,
        2,
        0,
        0,
        0,
        0
      ],
      "rareness": "180",
      "happiness": "70",
      "abilities": [
        [
          "IRONBARBS",
          "LIGHTNINGROD"
        ]
      ],
      "hiddenability": "STURDY",
      "moves": [
        [
          "1",
          "TACKLE"
        ],
        [
          "1",
          "THUNDERSHOCK"
        ],
        [
          "5",
          "IRONDEFENSE"
        ],
        [
          "9",
          "ROLLOUT"
        ],
        [
          "13",
          "CHARGE"
        ],
        [
          "17",
          "SPARK"
        ],
        [
          "21",
          "NUZZLE"
        ],
        [
          "25",
          "MAGNETRISE"
        ],
        [
          "29",
          "IRONHEAD"
        ],
        [
          "33",
          "WILDCHARGE"
        ],
        [
          "37",
          "WILDCHARGE"
        ],
        [
          "41",
          "WILDCHARGE"
        ],
        [
          "45",
          "PINMISSILE"
        ],
        [
          "49",
          "PROTECT"
        ],
        [
          "53",
          "FELLSTINGER"
        ]
      ],
      "eggmoves": [
        [
          "REVERSAL",
          "PRESENT"
        ],
        [
          "ENCORE",
          "TWINEEDLE"
        ],
        [
          "WISH",
          "FAKEOUT"
        ],
        [
          "TICKLE",
          "FLAIL"
        ],
        [
          "DISARMINGVOICE"
        ]
      ],
      "compatibility": "Field,Fairy",
      "stepstohatch": "3072",
      "height": "0.3",
      "weight": "3.3",
      "habitat": "Mountain",
      "pokedex": "Está entrenado perfectamente para ser Guardia Real de Utopía.",
      "wilditemuncommon": "SITRUSBERRY",
      "evolutions": "MOLEKING,Level,25"
    },
    {
      "id": 66,
      "image": "fakemonico/066.png",
      "name": "Moleking",
      "type1": "ELECTRIC",
      "type2": "STEEL",
      "basestats": [
        75,
        105,
        96,
        63,
        40,
        73
      ],
      "genderrate": "Female50Percent",
      "growthrate": "Medium",
      "baseexp": "152",
      "effortpoints": [
        0,
        2,
        0,
        0,
        0,
        0
      ],
      "rareness": "180",
      "happiness": "70",
      "abilities": [
        [
          "IRONBARBS",
          "LIGHTNINGROD"
        ]
      ],
      "hiddenability": "STURDY",
      "moves": [
        [
          "1",
          "TACKLE"
        ],
        [
          "1",
          "THUNDERSHOCK"
        ],
        [
          "5",
          "IRONDEFENSE"
        ],
        [
          "9",
          "ROLLOUT"
        ],
        [
          "13",
          "CHARGE"
        ],
        [
          "17",
          "SPARK"
        ],
        [
          "21",
          "NUZZLE"
        ],
        [
          "25",
          "MAGNETRISE"
        ],
        [
          "29",
          "IRONHEAD"
        ],
        [
          "33",
          "WILDCHARGE"
        ],
        [
          "37",
          "WILDCHARGE"
        ],
        [
          "41",
          "WILDCHARGE"
        ],
        [
          "45",
          "PINMISSILE"
        ],
        [
          "49",
          "PROTECT"
        ],
        [
          "53",
          "FELLSTINGER"
        ]
      ],
      "compatibility": "Field,Fairy",
      "stepstohatch": "3072",
      "height": "0.3",
      "weight": "3.3",
      "habitat": "Mountain",
      "pokedex": "Jura su lealtad al rey mediante honor y batallas.",
      "wilditemuncommon": "SITRUSBERRY",
      "evolutions": ""
    },
    {
      "id": 67,
      "image": "fakemonico/067.png",
      "name": "Greensnake",
      "type1": "POISON",
      "type2": "GRASS",
      "basestats": [
        35,
        60,
        44,
        55,
        40,
        54
      ],
      "genderrate": "Female50Percent",
      "growthrate": "Medium",
      "baseexp": "58",
      "effortpoints": [
        0,
        1,
        0,
        0,
        0,
        0
      ],
      "rareness": "255",
      "happiness": "70",
      "abilities": [
        [
          "INTIMIDATE",
          "SHEDSKIN"
        ]
      ],
      "hiddenability": "UNNERVE",
      "moves": [
        [
          "1",
          "WRAP"
        ],
        [
          "1",
          "LEER"
        ],
        [
          "4",
          "POISONSTING"
        ],
        [
          "9",
          "BITE"
        ],
        [
          "12",
          "GLARE"
        ],
        [
          "17",
          "SCREECH"
        ],
        [
          "20",
          "RAZORLEAF"
        ],
        [
          "25",
          "STOCKPILE"
        ],
        [
          "25",
          "SWALLOW"
        ],
        [
          "25",
          "SPITUP"
        ],
        [
          "28",
          "ACIDSPRAY"
        ],
        [
          "30",
          "LEAFBLADE"
        ],
        [
          "33",
          "MUDBOMB"
        ],
        [
          "36",
          "GASTROACID"
        ],
        [
          "41",
          "HAZE"
        ],
        [
          "44",
          "COIL"
        ],
        [
          "49",
          "GUNKSHOT"
        ]
      ],
      "eggmoves": [
        [
          "BEATUP",
          "DISABLE"
        ],
        [
          "IRONTAIL",
          "POISONFANG"
        ],
        [
          "POISONTAIL",
          "PURSUIT"
        ],
        [
          "SCARYFACE",
          "SLAM"
        ],
        [
          "SNATCH",
          "SPITE"
        ],
        [
          "SUCKERPUNCH",
          "SWITCHEROO"
        ]
      ],
      "compatibility": "Field,Dragon",
      "stepstohatch": "5355",
      "height": "2.0",
      "weight": "6.9",
      "habitat": "Grassland",
      "pokedex": "Se camufla entre las plantas para cazar a sus presas.",
      "evolutions": "GREENCOBRA,Level,30"
    },
    {
      "id": 68,
      "image": "fakemonico/068.png",
      "name": "Greencobra",
      "type1": "POISON",
      "type2": "GRASS",
      "basestats": [
        70,
        95,
        69,
        95,
        65,
        79
      ],
      "genderrate": "Female50Percent",
      "growthrate": "Medium",
      "baseexp": "58",
      "effortpoints": [
        0,
        1,
        0,
        0,
        0,
        0
      ],
      "rareness": "255",
      "happiness": "70",
      "abilities": [
        [
          "INTIMIDATE",
          "SHEDSKIN"
        ]
      ],
      "hiddenability": "UNNERVE",
      "moves": [
        [
          "1",
          "WRAP"
        ],
        [
          "1",
          "LEER"
        ],
        [
          "4",
          "POISONSTING"
        ],
        [
          "9",
          "BITE"
        ],
        [
          "12",
          "GLARE"
        ],
        [
          "17",
          "SCREECH"
        ],
        [
          "20",
          "RAZORLEAF"
        ],
        [
          "25",
          "STOCKPILE"
        ],
        [
          "25",
          "SWALLOW"
        ],
        [
          "25",
          "SPITUP"
        ],
        [
          "28",
          "ACIDSPRAY"
        ],
        [
          "30",
          "LEAFBLADE"
        ],
        [
          "33",
          "MUDBOMB"
        ],
        [
          "36",
          "GASTROACID"
        ],
        [
          "41",
          "HAZE"
        ],
        [
          "44",
          "COIL"
        ],
        [
          "49",
          "GUNKSHOT"
        ]
      ],
      "eggmoves": [
        [
          "BEATUP",
          "DISABLE"
        ],
        [
          "IRONTAIL",
          "POISONFANG"
        ],
        [
          "POISONTAIL",
          "PURSUIT"
        ],
        [
          "SCARYFACE",
          "SLAM"
        ],
        [
          "SNATCH",
          "SPITE"
        ],
        [
          "SUCKERPUNCH",
          "SWITCHEROO"
        ]
      ],
      "compatibility": "Field,Dragon",
      "stepstohatch": "5355",
      "height": "2.0",
      "weight": "6.9",
      "habitat": "Grassland",
      "pokedex": "Se camufla entre las plantas para cazar a sus presas. Tiene un veneno mortal.",
      "evolutions": ""
    },
    {
      "id": 69,
      "image": "fakemonico/069.png",
      "name": "Aprendiz",
      "type1": "PSYCHIC",
      "type2": "FIGHTING",
      "basestats": [
        250,
        5,
        5,
        50,
        35,
        105
      ],
      "genderrate": "AlwaysMale",
      "growthrate": "Fast",
      "baseexp": "395",
      "effortpoints": [
        2,
        0,
        0,
        0,
        0,
        0
      ],
      "rareness": "30",
      "happiness": "140",
      "abilities": [
        [
          "NATURALCURE",
          "SERENEGRACE"
        ]
      ],
      "hiddenability": "HEALER",
      "moves": [
        [
          "1",
          "DEFENSECURL"
        ],
        [
          "1",
          "POUND"
        ],
        [
          "1",
          "GROWL"
        ],
        [
          "5",
          "TAILWHIP"
        ],
        [
          "9",
          "REFRESH"
        ],
        [
          "12",
          "DOUBLESLAP"
        ],
        [
          "16",
          "SOFTBOILED"
        ],
        [
          "20",
          "BESTOW"
        ],
        [
          "23",
          "MINIMIZE"
        ],
        [
          "25",
          "BRICKBREAK"
        ],
        [
          "26",
          "AURASPHERE"
        ],
        [
          "27",
          "DIZZYPUNCH"
        ],
        [
          "31",
          "PSYCHIC"
        ],
        [
          "32",
          "ZENHEADBUTT"
        ],
        [
          "34",
          "FLING"
        ],
        [
          "38",
          "HEALPULSE"
        ],
        [
          "42",
          "EGGBOMB"
        ],
        [
          "46",
          "AMNESIA"
        ],
        [
          "50",
          "HEALINGWISH"
        ],
        [
          "54",
          "DOUBLEEDGE"
        ]
      ],
      "eggmoves": [
        [
          "AROMATHERAPY",
          "COUNTER"
        ],
        [
          "ENDURE",
          "GRAVITY"
        ],
        [
          "HEALBELL",
          "HELPINGHAND"
        ],
        [
          "METRONOME",
          "MUDBOMB"
        ],
        [
          "NATURALGIFT",
          "PRESENT"
        ]
      ],
      "compatibility": "Fairy",
      "stepstohatch": "10455",
      "height": "1.1",
      "weight": "34.6",
      "habitat": "Urban",
      "pokedex": "Monje capaz de combatir con estilo de sumo.",
      "wilditemcommon": "LUCKYPUNCH",
      "wilditemuncommon": "LUCKYEGG",
      "evolutions": "MONK,Item,DAWNSTONE"
    },
    {
      "id": 70,
      "image": "fakemonico/070.png",
      "name": "Monk",
      "type1": "PSYCHIC",
      "type2": "FIGHTING",
      "basestats": [
        200,
        80,
        5,
        50,
        70,
        105
      ],
      "genderrate": "AlwaysMale",
      "growthrate": "Fast",
      "baseexp": "395",
      "effortpoints": [
        2,
        0,
        0,
        0,
        0,
        0
      ],
      "rareness": "30",
      "happiness": "140",
      "abilities": [
        [
          "NATURALCURE",
          "SERENEGRACE"
        ]
      ],
      "hiddenability": "HEALER",
      "moves": [
        [
          "1",
          "DEFENSECURL"
        ],
        [
          "1",
          "POUND"
        ],
        [
          "1",
          "GROWL"
        ],
        [
          "5",
          "TAILWHIP"
        ],
        [
          "9",
          "REFRESH"
        ],
        [
          "12",
          "DOUBLESLAP"
        ],
        [
          "16",
          "SOFTBOILED"
        ],
        [
          "20",
          "BESTOW"
        ],
        [
          "23",
          "MINIMIZE"
        ],
        [
          "25",
          "BRICKBREAK"
        ],
        [
          "26",
          "AURASPHERE"
        ],
        [
          "27",
          "DIZZYPUNCH"
        ],
        [
          "31",
          "PSYCHIC"
        ],
        [
          "32",
          "ZENHEADBUTT"
        ],
        [
          "34",
          "FLING"
        ],
        [
          "38",
          "HEALPULSE"
        ],
        [
          "42",
          "EGGBOMB"
        ],
        [
          "46",
          "AMNESIA"
        ],
        [
          "50",
          "HEALINGWISH"
        ],
        [
          "54",
          "DOUBLEEDGE"
        ]
      ],
      "eggmoves": [
        [
          "AROMATHERAPY",
          "COUNTER"
        ],
        [
          "ENDURE",
          "GRAVITY"
        ],
        [
          "HEALBELL",
          "HELPINGHAND"
        ],
        [
          "METRONOME",
          "MUDBOMB"
        ],
        [
          "NATURALGIFT",
          "PRESENT"
        ]
      ],
      "compatibility": "Fairy",
      "stepstohatch": "10455",
      "height": "1.1",
      "weight": "34.6",
      "habitat": "Urban",
      "pokedex": "Este monje de sumo controla poderes mentales.",
      "wilditemcommon": "LUCKYPUNCH",
      "wilditemuncommon": "LUCKYEGG",
      "evolutions": ""
    },
    {
      "id": 71,
      "image": "fakemonico/071.png",
      "name": "Dientes",
      "type1": "ICE",
      "basestats": [
        55,
        70,
        40,
        40,
        60,
        40
      ],
      "genderrate": "Female50Percent",
      "growthrate": "Medium",
      "baseexp": "61",
      "effortpoints": [
        0,
        1,
        0,
        0,
        0,
        0
      ],
      "rareness": "120",
      "happiness": "70",
      "abilities": [
        [
          "SPEEDBOOST"
        ]
      ],
      "hiddenability": "TECHNICIAN",
      "moves": [
        [
          "1",
          "SCRATCH"
        ],
        [
          "1",
          "LEER"
        ],
        [
          "1",
          "TAUNT"
        ],
        [
          "8",
          "QUICKATTACK"
        ],
        [
          "10",
          "FAINTATTACK"
        ],
        [
          "14",
          "ICYWIND"
        ],
        [
          "16",
          "FURYSWIPES"
        ],
        [
          "20",
          "AGILITY"
        ],
        [
          "22",
          "METALCLAW"
        ],
        [
          "25",
          "HONECLAWS"
        ],
        [
          "28",
          "BEATUP"
        ],
        [
          "32",
          "SCREECH"
        ],
        [
          "35",
          "SLASH"
        ],
        [
          "40",
          "SNATCH"
        ],
        [
          "44",
          "PUNISHMENT"
        ],
        [
          "47",
          "ICESHARD"
        ]
      ],
      "eggmoves": [
        [
          "ASSIST",
          "AVALANCHE"
        ],
        [
          "BITE",
          "COUNTER"
        ],
        [
          "CRUSHCLAW",
          "DOUBLEHIT"
        ],
        [
          "FAKEOUT",
          "FEINT"
        ],
        [
          "FORESIGHT",
          "ICEPUNCH"
        ],
        [
          "ICESHARD",
          "PUNISHMENT"
        ],
        [
          "PURSUIT",
          "SPITE"
        ],
        [
          "ICICLECRASH"
        ]
      ],
      "compatibility": "Field",
      "stepstohatch": "5355",
      "height": "0.5",
      "weight": "8.5",
      "pokedex": "Les gusta el frío y la nieve. Se mueve más rápido en ese entorno.",
      "wilditemcommon": "ASPEARBERRY",
      "evolutions": "CARROT,Level,18"
    },
    {
      "id": 72,
      "image": "fakemonico/072.png",
      "name": "Carrot",
      "type1": "ICE",
      "basestats": [
        55,
        95,
        55,
        80,
        35,
        75
      ],
      "genderrate": "Female50Percent",
      "growthrate": "Parabolic",
      "baseexp": "86",
      "effortpoints": [
        0,
        0,
        0,
        1,
        0,
        0
      ],
      "rareness": "60",
      "happiness": "35",
      "abilities": [
        [
          "SPEEDBOOST"
        ]
      ],
      "hiddenability": "TECHNICIAN",
      "moves": [
        [
          "1",
          "SCRATCH"
        ],
        [
          "1",
          "LEER"
        ],
        [
          "1",
          "TAUNT"
        ],
        [
          "8",
          "QUICKATTACK"
        ],
        [
          "10",
          "FAINTATTACK"
        ],
        [
          "14",
          "ICYWIND"
        ],
        [
          "16",
          "FURYSWIPES"
        ],
        [
          "20",
          "AGILITY"
        ],
        [
          "22",
          "METALCLAW"
        ],
        [
          "25",
          "HONECLAWS"
        ],
        [
          "28",
          "BEATUP"
        ],
        [
          "32",
          "SCREECH"
        ],
        [
          "35",
          "SLASH"
        ],
        [
          "40",
          "SNATCH"
        ],
        [
          "44",
          "PUNISHMENT"
        ],
        [
          "47",
          "ICESHARD"
        ]
      ],
      "compatibility": "Field",
      "stepstohatch": "5355",
      "height": "0.9",
      "weight": "28.0",
      "habitat": "Forest",
      "pokedex": "Es más rápido en climas nevados. Odia el calor.",
      "wilditemcommon": "GRIPCLAW",
      "wilditemuncommon": "QUICKCLAW",
      "evolutions": "RABBICE,Level,36"
    },
    {
      "id": 73,
      "image": "fakemonico/073.png",
      "name": "Rabbice",
      "type1": "ICE",
      "basestats": [
        70,
        120,
        65,
        85,
        45,
        85
      ],
      "genderrate": "Female50Percent",
      "growthrate": "Parabolic",
      "baseexp": "179",
      "effortpoints": [
        0,
        1,
        0,
        1,
        0,
        0
      ],
      "rareness": "45",
      "happiness": "35",
      "abilities": [
        [
          "SPEEDBOOST"
        ]
      ],
      "hiddenability": "TECHNICIAN",
      "moves": [
        [
          "1",
          "SCRATCH"
        ],
        [
          "1",
          "LEER"
        ],
        [
          "1",
          "TAUNT"
        ],
        [
          "8",
          "QUICKATTACK"
        ],
        [
          "10",
          "FAINTATTACK"
        ],
        [
          "14",
          "ICYWIND"
        ],
        [
          "16",
          "FURYSWIPES"
        ],
        [
          "20",
          "AGILITY"
        ],
        [
          "22",
          "METALCLAW"
        ],
        [
          "25",
          "HONECLAWS"
        ],
        [
          "28",
          "BEATUP"
        ],
        [
          "32",
          "SCREECH"
        ],
        [
          "35",
          "SLASH"
        ],
        [
          "37",
          "ICEPUNCH"
        ],
        [
          "38",
          "ICICLESPEAR"
        ],
        [
          "40",
          "SNATCH"
        ],
        [
          "44",
          "PUNISHMENT"
        ],
        [
          "47",
          "ICESHARD"
        ]
      ],
      "compatibility": "Field",
      "stepstohatch": "5355",
      "height": "1.1",
      "weight": "34.0",
      "pokedex": "Le gusta bajar avalanchas en las montañas nevadas. Es muy ágil.",
      "wilditemcommon": "GRIPCLAW",
      "wilditemuncommon": "QUICKCLAW",
      "evolutions": ""
    },
    {
      "id": 74,
      "image": "fakemonico/074.png",
      "name": "Sharkrunch",
      "type1": "WATER",
      "type2": "DARK",
      "basestats": [
        70,
        120,
        40,
        95,
        95,
        40
      ],
      "genderrate": "Female50Percent",
      "growthrate": "Slow",
      "baseexp": "161",
      "effortpoints": [
        0,
        2,
        0,
        0,
        0,
        0
      ],
      "rareness": "60",
      "happiness": "35",
      "abilities": [
        [
          "ROUGHSKIN"
        ]
      ],
      "hiddenability": "SWIFTSWIM",
      "moves": [
        [
          "1",
          "FEINT"
        ],
        [
          "1",
          "LEER"
        ],
        [
          "1",
          "BITE"
        ],
        [
          "1",
          "RAGE"
        ],
        [
          "1",
          "FOCUSENERGY"
        ],
        [
          "6",
          "RAGE"
        ],
        [
          "8",
          "FOCUSENERGY"
        ],
        [
          "11",
          "SCARYFACE"
        ],
        [
          "16",
          "ICEFANG"
        ],
        [
          "18",
          "SCREECH"
        ],
        [
          "21",
          "SWAGGER"
        ],
        [
          "26",
          "ASSURANCE"
        ],
        [
          "28",
          "CRUNCH"
        ],
        [
          "30",
          "SLASH"
        ],
        [
          "34",
          "AQUAJET"
        ],
        [
          "40",
          "AQUATAIL"
        ],
        [
          "45",
          "AGILITY"
        ],
        [
          "50",
          "SKULLBASH"
        ],
        [
          "56",
          "NIGHTSLASH"
        ]
      ],
      "compatibility": "Water2",
      "stepstohatch": "5355",
      "height": "1.8",
      "weight": "88.8",
      "habitat": "Sea",
      "pokedex": "El terror de los mares. Es capaz de moverse también por la tierra, pero el calor y su poca movilidad por ese terreno lo debilitarán.",
      "wilditemuncommon": "DEEPSEATOOTH",
      "evolutions": ""
    },
    {
      "id": 75,
      "image": "fakemonico/075.png",
      "name": "Hua-Hua",
      "type1": "GHOST",
      "type2": "DARK",
      "basestats": [
        90,
        85,
        75,
        115,
        115,
        100
      ],
      "genderrate": "Genderless",
      "growthrate": "Slow",
      "baseexp": "261",
      "effortpoints": [
        0,
        0,
        0,
        2,
        1,
        0
      ],
      "rareness": "15",
      "happiness": "35",
      "abilities": [
        [
          "PRANKSTER",
          "FRISK"
        ]
      ],
      "hiddenability": "SHADOWTAG",
      "moves": [
        [
          "1",
          "LEER"
        ],
        [
          "1",
          "SCRATCH"
        ],
        [
          "4",
          "FORESIGHT"
        ],
        [
          "8",
          "NIGHTSHADE"
        ],
        [
          "11",
          "ASTONISH"
        ],
        [
          "15",
          "FURYSWIPES"
        ],
        [
          "18",
          "FAKEOUT"
        ],
        [
          "22",
          "DETECT"
        ],
        [
          "25",
          "SHADOWSNEAK"
        ],
        [
          "29",
          "KNOCKOFF"
        ],
        [
          "32",
          "FAINTATTACK"
        ],
        [
          "36",
          "PUNISHMENT"
        ],
        [
          "39",
          "SHADOWCLAW"
        ],
        [
          "43",
          "POWERGEM"
        ],
        [
          "46",
          "CONFUSERAY"
        ],
        [
          "50",
          "FOULPLAY"
        ],
        [
          "53",
          "ZENHEADBUTT"
        ],
        [
          "57",
          "SHADOWBALL"
        ],
        [
          "60",
          "MEANLOOK"
        ]
      ],
      "eggmoves": [
        [
          "CAPTIVATE",
          "FEINT"
        ],
        [
          "FLATTER",
          "MEANLOOK"
        ],
        [
          "METALBURST",
          "MOONLIGHT"
        ],
        [
          "NASTYPLOT",
          "RECOVER"
        ],
        [
          "SUCKERPUNCH",
          "TRICK"
        ]
      ],
      "compatibility": "Undiscovered",
      "stepstohatch": "20655",
      "height": "1.9",
      "weight": "178.0",
      "habitat": "Grassland",
      "pokedex": "Sabio de Utopía. Profana a los muertos.",
      "evolutions": ""
    },
    {
      "id": 76,
      "image": "fakemonico/076.png",
      "name": "Bull-Bull",
      "type1": "GHOST",
      "type2": "DARK",
      "basestats": [
        115,
        115,
        85,
        100,
        90,
        75
      ],
      "genderrate": "Genderless",
      "growthrate": "Slow",
      "baseexp": "261",
      "effortpoints": [
        1,
        2,
        0,
        0,
        0,
        0
      ],
      "rareness": "15",
      "happiness": "35",
      "abilities": [
        [
          "PRANKSTER",
          "FRISK"
        ]
      ],
      "hiddenability": "SHADOWTAG",
      "moves": [
        [
          "1",
          "LEER"
        ],
        [
          "1",
          "SCRATCH"
        ],
        [
          "4",
          "FORESIGHT"
        ],
        [
          "8",
          "NIGHTSHADE"
        ],
        [
          "11",
          "ASTONISH"
        ],
        [
          "15",
          "FURYSWIPES"
        ],
        [
          "18",
          "FAKEOUT"
        ],
        [
          "22",
          "DETECT"
        ],
        [
          "25",
          "SHADOWSNEAK"
        ],
        [
          "29",
          "KNOCKOFF"
        ],
        [
          "32",
          "FAINTATTACK"
        ],
        [
          "36",
          "PUNISHMENT"
        ],
        [
          "39",
          "SHADOWCLAW"
        ],
        [
          "43",
          "POWERGEM"
        ],
        [
          "46",
          "CONFUSERAY"
        ],
        [
          "50",
          "FOULPLAY"
        ],
        [
          "53",
          "ZENHEADBUTT"
        ],
        [
          "57",
          "SHADOWBALL"
        ],
        [
          "60",
          "MEANLOOK"
        ]
      ],
      "eggmoves": [
        [
          "CAPTIVATE",
          "FEINT"
        ],
        [
          "FLATTER",
          "MEANLOOK"
        ],
        [
          "METALBURST",
          "MOONLIGHT"
        ],
        [
          "NASTYPLOT",
          "RECOVER"
        ],
        [
          "SUCKERPUNCH",
          "TRICK"
        ]
      ],
      "compatibility": "Undiscovered",
      "stepstohatch": "20655",
      "height": "2.1",
      "weight": "198.0",
      "habitat": "Grassland",
      "pokedex": "Sabio de Utopía. Profana a los muertos.",
      "evolutions": ""
    },
    {
      "id": 77,
      "image": "fakemonico/077.png",
      "name": "Father",
      "type1": "GHOST",
      "type2": "DARK",
      "basestats": [
        100,
        75,
        115,
        85,
        90,
        115
      ],
      "genderrate": "Genderless",
      "growthrate": "Slow",
      "baseexp": "261",
      "effortpoints": [
        0,
        0,
        1,
        0,
        0,
        2
      ],
      "rareness": "15",
      "happiness": "35",
      "abilities": [
        [
          "PRANKSTER",
          "FRISK"
        ]
      ],
      "hiddenability": "SHADOWTAG",
      "moves": [
        [
          "1",
          "LEER"
        ],
        [
          "1",
          "SCRATCH"
        ],
        [
          "4",
          "FORESIGHT"
        ],
        [
          "8",
          "NIGHTSHADE"
        ],
        [
          "11",
          "ASTONISH"
        ],
        [
          "15",
          "FURYSWIPES"
        ],
        [
          "18",
          "FAKEOUT"
        ],
        [
          "22",
          "DETECT"
        ],
        [
          "25",
          "SHADOWSNEAK"
        ],
        [
          "29",
          "KNOCKOFF"
        ],
        [
          "32",
          "FAINTATTACK"
        ],
        [
          "36",
          "PUNISHMENT"
        ],
        [
          "39",
          "SHADOWCLAW"
        ],
        [
          "43",
          "POWERGEM"
        ],
        [
          "46",
          "CONFUSERAY"
        ],
        [
          "50",
          "FOULPLAY"
        ],
        [
          "53",
          "ZENHEADBUTT"
        ],
        [
          "57",
          "SHADOWBALL"
        ],
        [
          "60",
          "MEANLOOK"
        ]
      ],
      "eggmoves": [
        [
          "CAPTIVATE",
          "FEINT"
        ],
        [
          "FLATTER",
          "MEANLOOK"
        ],
        [
          "METALBURST",
          "MOONLIGHT"
        ],
        [
          "NASTYPLOT",
          "RECOVER"
        ],
        [
          "SUCKERPUNCH",
          "TRICK"
        ]
      ],
      "compatibility": "Undiscovered",
      "stepstohatch": "20655",
      "height": "2.0",
      "weight": "187.0",
      "habitat": "Grassland",
      "pokedex": "Sabio de Utopía. Profana a los muertos.",
      "evolutions": ""
    },
    {
      "id": 78,
      "image": "fakemonico/078.png",
      "name": "Sprout",
      "type1": "GRASS",
      "basestats": [
        55,
        68,
        64,
        31,
        45,
        55
      ],
      "genderrate": "FemaleOneEighth",
      "growthrate": "Parabolic",
      "baseexp": "64",
      "effortpoints": [
        0,
        1,
        0,
        0,
        0,
        0
      ],
      "rareness": "45",
      "happiness": "70",
      "abilities": [
        [
          "REGENERATOR"
        ]
      ],
      "hiddenability": "LEAFGUARD",
      "moves": [
        [
          "1",
          "TACKLE"
        ],
        [
          "5",
          "WITHDRAW"
        ],
        [
          "9",
          "ABSORB"
        ],
        [
          "13",
          "RAZORLEAF"
        ],
        [
          "17",
          "CURSE"
        ],
        [
          "21",
          "BITE"
        ],
        [
          "25",
          "MEGADRAIN"
        ],
        [
          "29",
          "LEECHSEED"
        ],
        [
          "33",
          "SYNTHESIS"
        ],
        [
          "37",
          "CRUNCH"
        ],
        [
          "41",
          "GIGADRAIN"
        ],
        [
          "45",
          "LEAFSTORM"
        ]
      ],
      "eggmoves": [
        [
          "AMNESIA",
          "BODYSLAM"
        ],
        [
          "DOUBLEEDGE",
          "EARTHPOWER"
        ],
        [
          "GROWTH",
          "SANDTOMB"
        ],
        [
          "SEEDBOMB",
          "SPITUP"
        ],
        [
          "STOCKPILE",
          "SUPERPOWER"
        ],
        [
          "SWALLOW",
          "THRASH"
        ],
        [
          "TICKLE",
          "WIDEGUARD"
        ],
        [
          "WORRYSEED"
        ]
      ],
      "compatibility": "Monster,Grass",
      "stepstohatch": "5355",
      "height": "0.4",
      "weight": "10.2",
      "pokedex": "Brota desde la tierra.",
      "evolutions": "POT,Level,18"
    },
    {
      "id": 79,
      "image": "fakemonico/079.png",
      "name": "Pot",
      "type1": "GRASS",
      "basestats": [
        75,
        89,
        85,
        36,
        55,
        65
      ],
      "genderrate": "FemaleOneEighth",
      "growthrate": "Parabolic",
      "baseexp": "142",
      "effortpoints": [
        0,
        1,
        1,
        0,
        0,
        0
      ],
      "rareness": "45",
      "happiness": "70",
      "abilities": [
        [
          "REGENERATOR"
        ]
      ],
      "hiddenability": "LEAFGUARD",
      "moves": [
        [
          "1",
          "TACKLE"
        ],
        [
          "1",
          "WITHDRAW"
        ],
        [
          "5",
          "WITHDRAW"
        ],
        [
          "9",
          "ABSORB"
        ],
        [
          "13",
          "RAZORLEAF"
        ],
        [
          "17",
          "CURSE"
        ],
        [
          "22",
          "BITE"
        ],
        [
          "27",
          "MEGADRAIN"
        ],
        [
          "32",
          "LEECHSEED"
        ],
        [
          "37",
          "SYNTHESIS"
        ],
        [
          "42",
          "CRUNCH"
        ],
        [
          "47",
          "GIGADRAIN"
        ],
        [
          "52",
          "LEAFSTORM"
        ]
      ],
      "compatibility": "Monster,Grass",
      "stepstohatch": "5355",
      "height": "1.1",
      "weight": "97.0",
      "pokedex": "Esta pequeña planta adopta una cara adorable.",
      "evolutions": "CRIATURE,Level,32"
    },
    {
      "id": 80,
      "image": "fakemonico/080.png",
      "name": "Criature",
      "type1": "GRASS",
      "type2": "GROUND",
      "basestats": [
        95,
        109,
        105,
        56,
        75,
        85
      ],
      "genderrate": "FemaleOneEighth",
      "growthrate": "Parabolic",
      "baseexp": "236",
      "effortpoints": [
        0,
        2,
        1,
        0,
        0,
        0
      ],
      "rareness": "45",
      "happiness": "70",
      "abilities": [
        [
          "REGENERATOR"
        ]
      ],
      "hiddenability": "LEAFGUARD",
      "moves": [
        [
          "1",
          "WOODHAMMER"
        ],
        [
          "1",
          "TACKLE"
        ],
        [
          "1",
          "WITHDRAW"
        ],
        [
          "1",
          "ABSORB"
        ],
        [
          "1",
          "RAZORLEAF"
        ],
        [
          "5",
          "WITHDRAW"
        ],
        [
          "9",
          "ABSORB"
        ],
        [
          "13",
          "RAZORLEAF"
        ],
        [
          "17",
          "CURSE"
        ],
        [
          "22",
          "BITE"
        ],
        [
          "27",
          "MEGADRAIN"
        ],
        [
          "32",
          "EARTHQUAKE"
        ],
        [
          "33",
          "LEECHSEED"
        ],
        [
          "39",
          "SYNTHESIS"
        ],
        [
          "45",
          "CRUNCH"
        ],
        [
          "51",
          "GIGADRAIN"
        ],
        [
          "57",
          "LEAFSTORM"
        ]
      ],
      "compatibility": "Monster,Grass",
      "stepstohatch": "5355",
      "height": "2.2",
      "weight": "310.0",
      "pokedex": "Sale de sus raíces y es capaz de moverse. \u00c2\u00a1Cuanto ha crecido!",
      "evolutions": ""
    },
    {
      "id": 81,
      "image": "fakemonico/081.png",
      "name": "Enigma",
      "type1": "GHOST",
      "type2": "FAIRY",
      "basestats": [
        55,
        105,
        80,
        95,
        90,
        105
      ],
      "genderrate": "Female50Percent",
      "growthrate": "Medium",
      "baseexp": "167",
      "effortpoints": [
        0,
        0,
        0,
        0,
        2,
        0
      ],
      "rareness": "45",
      "happiness": "35",
      "abilities": [
        [
          "MAGICGUARD",
          "INFILTRATOR"
        ]
      ],
      "moves": [
        [
          "1",
          "WOODHAMMER"
        ],
        [
          "1",
          "SPLASH"
        ],
        [
          "1",
          "SCRATCH"
        ],
        [
          "1",
          "COPYCAT"
        ],
        [
          "5",
          "DOUBLETEAM"
        ],
        [
          "10",
          "BABYDOLLEYES"
        ],
        [
          "14",
          "SHADOWSNEAK"
        ],
        [
          "19",
          "MIMIC"
        ],
        [
          "23",
          "FAINTATTACK"
        ],
        [
          "28",
          "CHARM"
        ],
        [
          "32",
          "SLASH"
        ],
        [
          "37",
          "SHADOWCLAW"
        ],
        [
          "41",
          "HONECLAWS"
        ],
        [
          "46",
          "PLAYROUGH"
        ],
        [
          "50",
          "PAINSPLIT"
        ]
      ],
      "eggmoves": [
        [
          "GRUDGE",
          "DESTINYBOND"
        ],
        [
          "CURSE",
          "NIGHTMARE"
        ]
      ],
      "compatibility": "Amorphous",
      "stepstohatch": "5120",
      "height": "0.2",
      "weight": "0.7",
      "habitat": "Urban",
      "pokedex": "Este doctor es capaz de curar cualquier enfermedad. Siempre trata a través de una cortina negra que nadie puede entrar. Los métodos que usa son desconocidos... y turbios.",
      "wilditemuncommon": "CHESTOBERRY",
      "evolutions": ""
    },
    {
      "id": 82,
      "image": "fakemonico/082.png",
      "name": "Frostbear",
      "type1": "ICE",
      "basestats": [
        50,
        50,
        65,
        44,
        36,
        60
      ],
      "genderrate": "Female50Percent",
      "growthrate": "Slow",
      "baseexp": "61",
      "effortpoints": [
        0,
        0,
        0,
        0,
        1,
        0
      ],
      "rareness": "255",
      "happiness": "70",
      "abilities": [
        [
          "SNOWWARNING"
        ]
      ],
      "hiddenability": "WEAKARMOR",
      "moves": [
        [
          "1",
          "POWDERSNOW"
        ],
        [
          "5",
          "GROWL"
        ],
        [
          "9",
          "TACKLE"
        ],
        [
          "13",
          "ICYWIND"
        ],
        [
          "17",
          "FURYSWIPES"
        ],
        [
          "21",
          "BRINE"
        ],
        [
          "25",
          "ENDURE"
        ],
        [
          "29",
          "CHARM"
        ],
        [
          "33",
          "SLASH"
        ],
        [
          "36",
          "FLAIL"
        ],
        [
          "41",
          "REST"
        ],
        [
          "45",
          "BLIZZARD"
        ],
        [
          "49",
          "HAIL"
        ],
        [
          "53",
          "THRASH"
        ],
        [
          "57",
          "SHEERCOLD"
        ]
      ],
      "eggmoves": [
        [
          "ASSURANCE",
          "AVALANCHE"
        ],
        [
          "ENCORE",
          "FOCUSPUNCH"
        ],
        [
          "ICEPUNCH",
          "NIGHTSLASH"
        ],
        [
          "SLEEPTALK",
          "YAWN"
        ]
      ],
      "compatibility": "Mineral",
      "stepstohatch": "5355",
      "height": "0.4",
      "weight": "5.7",
      "pokedex": "A este adorable oso polar le gusta el frío.",
      "evolutions": "BEARCE,Level,27"
    },
    {
      "id": 83,
      "image": "fakemonico/083.png",
      "name": "Bearce",
      "type1": "ICE",
      "type2": "STEEL",
      "basestats": [
        65,
        80,
        65,
        59,
        51,
        75
      ],
      "genderrate": "Female50Percent",
      "growthrate": "Slow",
      "baseexp": "138",
      "effortpoints": [
        0,
        0,
        0,
        0,
        2,
        0
      ],
      "rareness": "120",
      "happiness": "70",
      "abilities": [
        [
          "SNOWWARNING"
        ]
      ],
      "hiddenability": "WEAKARMOR",
      "moves": [
        [
          "1",
          "SUPERPOWER"
        ],
        [
          "1",
          "AQUAJET"
        ],
        [
          "1",
          "POWDERSNOW"
        ],
        [
          "1",
          "GROWL"
        ],
        [
          "1",
          "TACKLE"
        ],
        [
          "1",
          "ICYWIND"
        ],
        [
          "5",
          "GROWL"
        ],
        [
          "9",
          "TACKLE"
        ],
        [
          "13",
          "ICYWIND"
        ],
        [
          "17",
          "FURYSWIPES"
        ],
        [
          "21",
          "BRINE"
        ],
        [
          "25",
          "ENDURE"
        ],
        [
          "28",
          "AUTOTOMIZE"
        ],
        [
          "29",
          "SWAGGER"
        ],
        [
          "30",
          "IRONDEFENSE"
        ],
        [
          "33",
          "SLASH"
        ],
        [
          "36",
          "FLAIL"
        ],
        [
          "37",
          "ICICLECRASH"
        ],
        [
          "40",
          "IRONHEAD"
        ],
        [
          "41",
          "REST"
        ],
        [
          "45",
          "BLIZZARD"
        ],
        [
          "53",
          "HAIL"
        ],
        [
          "59",
          "THRASH"
        ],
        [
          "66",
          "SHEERCOLD"
        ]
      ],
      "compatibility": "Mineral",
      "stepstohatch": "5355",
      "height": "1.1",
      "weight": "41.0",
      "pokedex": "Tiene una armadura hecha de hielo.",
      "evolutions": "GRIZZLE,Level,38"
    },
    {
      "id": 84,
      "image": "fakemonico/084.png",
      "name": "Grizzle",
      "type1": "ICE",
      "type2": "STEEL",
      "basestats": [
        85,
        110,
        95,
        79,
        71,
        95
      ],
      "genderrate": "Female50Percent",
      "growthrate": "Slow",
      "baseexp": "241",
      "effortpoints": [
        0,
        0,
        0,
        0,
        3,
        0
      ],
      "rareness": "45",
      "happiness": "70",
      "abilities": [
        [
          "SNOWWARNING"
        ]
      ],
      "hiddenability": "WEAKARMOR",
      "moves": [
        [
          "1",
          "SUPERPOWER"
        ],
        [
          "1",
          "AQUAJET"
        ],
        [
          "1",
          "POWDERSNOW"
        ],
        [
          "1",
          "GROWL"
        ],
        [
          "1",
          "TACKLE"
        ],
        [
          "1",
          "ICYWIND"
        ],
        [
          "5",
          "GROWL"
        ],
        [
          "9",
          "TACKLE"
        ],
        [
          "13",
          "ICYWIND"
        ],
        [
          "17",
          "FURYSWIPES"
        ],
        [
          "21",
          "BRINE"
        ],
        [
          "25",
          "ENDURE"
        ],
        [
          "28",
          "AUTOTOMIZE"
        ],
        [
          "29",
          "SWAGGER"
        ],
        [
          "30",
          "IRONDEFENSE"
        ],
        [
          "33",
          "SLASH"
        ],
        [
          "36",
          "FLAIL"
        ],
        [
          "37",
          "ICICLECRASH"
        ],
        [
          "40",
          "IRONHEAD"
        ],
        [
          "41",
          "REST"
        ],
        [
          "45",
          "BLIZZARD"
        ],
        [
          "53",
          "HAIL"
        ],
        [
          "59",
          "THRASH"
        ],
        [
          "66",
          "SHEERCOLD"
        ]
      ],
      "compatibility": "Mineral",
      "stepstohatch": "5355",
      "height": "1.3",
      "weight": "57.5",
      "pokedex": "Su armadura gélida es capaz de aguantar grandes embestidas.",
      "evolutions": ""
    },
    {
      "id": 85,
      "image": "fakemonico/085.png",
      "name": "Grassbit",
      "type1": "GRASS",
      "basestats": [
        100,
        100,
        95,
        80,
        110,
        50
      ],
      "genderrate": "Female50Percent",
      "growthrate": "Medium",
      "baseexp": "187",
      "effortpoints": [
        0,
        0,
        2,
        0,
        0,
        0
      ],
      "rareness": "30",
      "happiness": "70",
      "abilities": [
        [
          "CHLOROPHYLL",
          "LEAFGUARD"
        ]
      ],
      "moves": [
        [
          "1",
          "INGRAIN"
        ],
        [
          "1",
          "CONSTRICT"
        ],
        [
          "4",
          "SLEEPPOWDER"
        ],
        [
          "7",
          "VINEWHIP"
        ],
        [
          "10",
          "ABSORB"
        ],
        [
          "14",
          "POISONPOWDER"
        ],
        [
          "17",
          "BIND"
        ],
        [
          "20",
          "GROWTH"
        ],
        [
          "23",
          "MEGADRAIN"
        ],
        [
          "27",
          "KNOCKOFF"
        ],
        [
          "30",
          "STUNSPORE"
        ],
        [
          "33",
          "NATURALGIFT"
        ],
        [
          "36",
          "GIGADRAIN"
        ],
        [
          "40",
          "ANCIENTPOWER"
        ],
        [
          "43",
          "SLAM"
        ],
        [
          "46",
          "TICKLE"
        ],
        [
          "49",
          "WRINGOUT"
        ],
        [
          "53",
          "POWERWHIP"
        ],
        [
          "56",
          "BLOCK"
        ]
      ],
      "compatibility": "Grass",
      "stepstohatch": "5355",
      "height": "2.0",
      "weight": "128.6",
      "pokedex": "Vive en una guerra constante en los bosques contra los Greensnake.",
      "evolutions": ""
    },
    {
      "id": 86,
      "image": "fakemonico/086.png",
      "name": "Carnival",
      "type1": "GRASS",
      "type2": "DARK",
      "basestats": [
        70,
        115,
        60,
        55,
        115,
        60
      ],
      "genderrate": "Female50Percent",
      "growthrate": "Parabolic",
      "baseexp": "166",
      "effortpoints": [
        0,
        1,
        0,
        0,
        1,
        0
      ],
      "rareness": "60",
      "happiness": "35",
      "abilities": [
        [
          "WATERABSORB",
          "EFFECTSPORE"
        ]
      ],
      "hiddenability": "WATERABSORB",
      "moves": [
        [
          "1",
          "REVENGE"
        ],
        [
          "1",
          "POISONSTING"
        ],
        [
          "1",
          "LEER"
        ],
        [
          "1",
          "ABSORB"
        ],
        [
          "1",
          "GROWTH"
        ],
        [
          "5",
          "ABSORB"
        ],
        [
          "9",
          "GROWTH"
        ],
        [
          "13",
          "LEECHSEED"
        ],
        [
          "17",
          "SANDATTACK"
        ],
        [
          "21",
          "PINMISSILE"
        ],
        [
          "25",
          "INGRAIN"
        ],
        [
          "29",
          "FAINTATTACK"
        ],
        [
          "35",
          "SPIKES"
        ],
        [
          "41",
          "SUCKERPUNCH"
        ],
        [
          "47",
          "PAYBACK"
        ],
        [
          "53",
          "NEEDLEARM"
        ],
        [
          "59",
          "COTTONSPORE"
        ],
        [
          "65",
          "SANDSTORM"
        ],
        [
          "71",
          "DESTINYBOND"
        ]
      ],
      "compatibility": "Grass,Humanlike",
      "stepstohatch": "5355",
      "height": "1.3",
      "weight": "77.4",
      "habitat": "RoughTerrain",
      "pokedex": "Que no te asusten esos temibles colmillos, solo come insectos... pero no acerques tu mano por si acaso.",
      "wilditemuncommon": "STICKYBARB",
      "evolutions": ""
    },
    {
      "id": 87,
      "image": "fakemonico/087.png",
      "name": "Arachne",
      "type1": "BUG",
      "type2": "POISON",
      "basestats": [
        60,
        55,
        50,
        45,
        60,
        55
      ],
      "genderrate": "Female50Percent",
      "growthrate": "Medium",
      "baseexp": "61",
      "effortpoints": [
        0,
        0,
        0,
        0,
        0,
        1
      ],
      "rareness": "190",
      "happiness": "70",
      "abilities": [
        [
          "COMPOUNDEYES",
          "TINTEDLENS"
        ]
      ],
      "hiddenability": "RUNAWAY",
      "moves": [
        [
          "1",
          "TACKLE"
        ],
        [
          "1",
          "DISABLE"
        ],
        [
          "1",
          "FORESIGHT"
        ],
        [
          "5",
          "SUPERSONIC"
        ],
        [
          "11",
          "CONFUSION"
        ],
        [
          "13",
          "POISONPOWDER"
        ],
        [
          "17",
          "LEECHLIFE"
        ],
        [
          "23",
          "STUNSPORE"
        ],
        [
          "25",
          "PSYBEAM"
        ],
        [
          "29",
          "SLEEPPOWDER"
        ],
        [
          "35",
          "SIGNALBEAM"
        ],
        [
          "37",
          "ZENHEADBUTT"
        ],
        [
          "41",
          "POISONFANG"
        ],
        [
          "47",
          "PSYCHIC"
        ]
      ],
      "eggmoves": [
        [
          "AGILITY",
          "BATONPASS"
        ],
        [
          "BUGBITE",
          "GIGADRAIN"
        ],
        [
          "MORNINGSUN",
          "RAGEPOWDER"
        ],
        [
          "SCREECH",
          "SECRETPOWER"
        ],
        [
          "SIGNALBEAM",
          "SKILLSWAP"
        ],
        [
          "TOXICSPIKES"
        ]
      ],
      "compatibility": "Bug",
      "stepstohatch": "5355",
      "height": "1.0",
      "weight": "30.0",
      "habitat": "Forest",
      "pokedex": "Esta pequeña es capaz de flotar para cazar a sus presas.",
      "evolutions": "TARANTULA,Level,16"
    },
    {
      "id": 88,
      "image": "fakemonico/088.png",
      "name": "Tarantula",
      "type1": "BUG",
      "type2": "POISON",
      "basestats": [
        70,
        65,
        60,
        90,
        80,
        90
      ],
      "genderrate": "Female50Percent",
      "growthrate": "Medium",
      "baseexp": "158",
      "effortpoints": [
        0,
        0,
        0,
        1,
        1,
        0
      ],
      "rareness": "75",
      "happiness": "70",
      "abilities": [
        [
          "SHIELDDUST",
          "TINTEDLENS"
        ]
      ],
      "hiddenability": "WONDERSKIN",
      "moves": [
        [
          "1",
          "SILVERWIND"
        ],
        [
          "1",
          "TACKLE"
        ],
        [
          "1",
          "DISABLE"
        ],
        [
          "1",
          "FORESIGHT"
        ],
        [
          "1",
          "SUPERSONIC"
        ],
        [
          "5",
          "SUPERSONIC"
        ],
        [
          "11",
          "CONFUSION"
        ],
        [
          "13",
          "POISONPOWDER"
        ],
        [
          "17",
          "LEECHLIFE"
        ],
        [
          "23",
          "STUNSPORE"
        ],
        [
          "25",
          "PSYBEAM"
        ],
        [
          "29",
          "SLEEPPOWDER"
        ],
        [
          "31",
          "GUST"
        ],
        [
          "37",
          "SIGNALBEAM"
        ],
        [
          "41",
          "ZENHEADBUTT"
        ],
        [
          "47",
          "POISONFANG"
        ],
        [
          "55",
          "PSYCHIC"
        ],
        [
          "59",
          "BUGBUZZ"
        ],
        [
          "63",
          "QUIVERDANCE"
        ]
      ],
      "compatibility": "Bug",
      "stepstohatch": "5355",
      "height": "1.5",
      "weight": "12.5",
      "habitat": "Forest",
      "pokedex": "Crea una red viscosa que envenenará a su presa.",
      "wilditemuncommon": "SHEDSHELL",
      "evolutions": "SPYCHIC,Level,30"
    },
    {
      "id": 89,
      "image": "fakemonico/089.png",
      "name": "Spychic",
      "type1": "BUG",
      "type2": "PSYCHIC",
      "basestats": [
        80,
        75,
        60,
        100,
        110,
        90
      ],
      "genderrate": "Female50Percent",
      "growthrate": "Medium",
      "baseexp": "158",
      "effortpoints": [
        0,
        0,
        0,
        1,
        1,
        0
      ],
      "rareness": "75",
      "happiness": "70",
      "abilities": [
        [
          "TINTEDLENS"
        ]
      ],
      "hiddenability": "SWARM",
      "moves": [
        [
          "1",
          "SILVERWIND"
        ],
        [
          "1",
          "TACKLE"
        ],
        [
          "1",
          "DISABLE"
        ],
        [
          "1",
          "FORESIGHT"
        ],
        [
          "1",
          "SUPERSONIC"
        ],
        [
          "5",
          "SUPERSONIC"
        ],
        [
          "11",
          "CONFUSION"
        ],
        [
          "13",
          "POISONPOWDER"
        ],
        [
          "17",
          "LEECHLIFE"
        ],
        [
          "23",
          "STUNSPORE"
        ],
        [
          "25",
          "PSYBEAM"
        ],
        [
          "29",
          "SLEEPPOWDER"
        ],
        [
          "31",
          "GUST"
        ],
        [
          "37",
          "SIGNALBEAM"
        ],
        [
          "41",
          "ZENHEADBUTT"
        ],
        [
          "47",
          "POISONFANG"
        ],
        [
          "55",
          "PSYCHIC"
        ],
        [
          "59",
          "BUGBUZZ"
        ],
        [
          "63",
          "QUIVERDANCE"
        ]
      ],
      "compatibility": "Bug",
      "stepstohatch": "5355",
      "height": "1.5",
      "weight": "12.5",
      "habitat": "Forest",
      "pokedex": "Su red viscosa hipnotiza y atrae a sus presas.",
      "wilditemuncommon": "SHEDSHELL",
      "evolutions": ""
    },
    {
      "id": 90,
      "image": "fakemonico/090.png",
      "name": "Vulcoise",
      "type1": "FIRE",
      "type2": "ROCK",
      "basestats": [
        70,
        85,
        140,
        20,
        95,
        70
      ],
      "genderrate": "Female50Percent",
      "growthrate": "Medium",
      "baseexp": "165",
      "effortpoints": [
        0,
        0,
        2,
        0,
        0,
        0
      ],
      "rareness": "90",
      "happiness": "70",
      "abilities": [
        [
          "DROUGHT"
        ]
      ],
      "hiddenability": "SHELLARMOR",
      "moves": [
        [
          "1",
          "EMBER"
        ],
        [
          "4",
          "SMOG"
        ],
        [
          "7",
          "WITHDRAW"
        ],
        [
          "12",
          "CURSE"
        ],
        [
          "17",
          "FIRESPIN"
        ],
        [
          "20",
          "SMOKESCREEN"
        ],
        [
          "23",
          "RAPIDSPIN"
        ],
        [
          "28",
          "FLAMETHROWER"
        ],
        [
          "30",
          "ROCKSLIDE"
        ],
        [
          "32",
          "ANCIENTPOWER"
        ],
        [
          "33",
          "BODYSLAM"
        ],
        [
          "36",
          "PROTECT"
        ],
        [
          "39",
          "LAVAPLUME"
        ],
        [
          "44",
          "IRONDEFENSE"
        ],
        [
          "49",
          "AMNESIA"
        ],
        [
          "52",
          "FLAIL"
        ],
        [
          "55",
          "HEATWAVE"
        ],
        [
          "60",
          "INFERNO"
        ],
        [
          "65",
          "SHELLSMASH"
        ]
      ],
      "eggmoves": [
        [
          "CLEARSMOG",
          "ENDURE"
        ],
        [
          "ERUPTION",
          "FISSURE"
        ],
        [
          "FLAMEBURST",
          "SKULLBASH"
        ],
        [
          "SLEEPTALK",
          "YAWN"
        ]
      ],
      "compatibility": "Field",
      "stepstohatch": "5355",
      "height": "0.5",
      "weight": "80.4",
      "habitat": "Mountain",
      "pokedex": "Habita en las montañas. Su caparazón es capaz de emanar altas temperaturas de calor.",
      "evolutions": ""
    },
    {
      "id": 91,
      "image": "fakemonico/091.png",
      "name": "Empeng",
      "type1": "ICE",
      "type2": "WATER",
      "basestats": [
        110,
        80,
        90,
        65,
        95,
        90
      ],
      "genderrate": "Female50Percent",
      "growthrate": "Parabolic",
      "baseexp": "239",
      "effortpoints": [
        3,
        0,
        0,
        0,
        0,
        0
      ],
      "rareness": "45",
      "happiness": "70",
      "abilities": [
        [
          "THICKFAT",
          "COMPETITIVE"
        ]
      ],
      "hiddenability": "OBLIVIOUS",
      "moves": [
        [
          "1",
          "CRUNCH"
        ],
        [
          "1",
          "POWDERSNOW"
        ],
        [
          "1",
          "GROWL"
        ],
        [
          "1",
          "WATERGUN"
        ],
        [
          "1",
          "ENCORE"
        ],
        [
          "7",
          "ENCORE"
        ],
        [
          "13",
          "ICEBALL"
        ],
        [
          "19",
          "BODYSLAM"
        ],
        [
          "25",
          "AURORABEAM"
        ],
        [
          "31",
          "HAIL"
        ],
        [
          "32",
          "SWAGGER"
        ],
        [
          "39",
          "REST"
        ],
        [
          "39",
          "SNORE"
        ],
        [
          "44",
          "ICEFANG"
        ],
        [
          "52",
          "BLIZZARD"
        ],
        [
          "65",
          "SHEERCOLD"
        ]
      ],
      "eggmoves": [
        [
          "AQUARING",
          "CURSE"
        ],
        [
          "FISSURE",
          "ROLLOUT"
        ],
        [
          "SIGNALBEAM",
          "SLEEPTALK"
        ],
        [
          "SPITUP",
          "STOCKPILE"
        ],
        [
          "SWALLOW",
          "WATERPULSE"
        ],
        [
          "WATERSPORT",
          "YAWN"
        ]
      ],
      "compatibility": "Water1,Field",
      "stepstohatch": "5355",
      "height": "1.4",
      "weight": "150.6",
      "habitat": "Sea",
      "pokedex": "El emperador del glacial. Procura que sus crías no sean devoradas por los Walruss.",
      "evolutions": ""
    },
    {
      "id": 92,
      "image": "fakemonico/092.png",
      "name": "Walruss",
      "type1": "WATER",
      "type2": "ICE",
      "basestats": [
        50,
        95,
        180,
        70,
        85,
        45
      ],
      "genderrate": "Female50Percent",
      "growthrate": "Slow",
      "baseexp": "184",
      "effortpoints": [
        0,
        0,
        2,
        0,
        0,
        0
      ],
      "rareness": "60",
      "happiness": "70",
      "abilities": [
        [
          "SKILLLINK"
        ]
      ],
      "hiddenability": "OVERCOAT",
      "moves": [
        [
          "1",
          "TACKLE"
        ],
        [
          "4",
          "BUBBLE"
        ],
        [
          "8",
          "SUPERSONIC"
        ],
        [
          "12",
          "ICICLESPEAR"
        ],
        [
          "16",
          "BUBBLEBEAM"
        ],
        [
          "20",
          "LEER"
        ],
        [
          "25",
          "CLAMP"
        ],
        [
          "28",
          "ICESHARD"
        ],
        [
          "32",
          "RAZORSHELL"
        ],
        [
          "37",
          "AURORABEAM"
        ],
        [
          "40",
          "WHIRLPOOL"
        ],
        [
          "44",
          "BRINE"
        ],
        [
          "49",
          "IRONDEFENSE"
        ],
        [
          "52",
          "ICEBEAM"
        ],
        [
          "56",
          "SHELLSMASH"
        ],
        [
          "61",
          "HYDROPUMP"
        ]
      ],
      "eggmoves": [
        [
          "AQUARING",
          "AVALANCHE"
        ],
        [
          "BARRIER",
          "BUBBLEBEAM"
        ],
        [
          "ICICLESPEAR",
          "MUDSHOT"
        ],
        [
          "RAPIDSPIN",
          "ROCKBLAST"
        ],
        [
          "SCREECH",
          "TAKEDOWN"
        ],
        [
          "TWINEEDLE",
          "WATERPULSE"
        ]
      ],
      "compatibility": "Water3",
      "stepstohatch": "5355",
      "height": "1.5",
      "weight": "132.5",
      "habitat": "Sea",
      "pokedex": "Siempre van acompañados de sus crías. Se alimentan de crías de Empeng. Temen a los Sharkrunch.",
      "wilditemcommon": "PEARL",
      "wilditemuncommon": "BIGPEARL",
      "evolutions": ""
    },
    {
      "id": 93,
      "image": "fakemonico/093.png",
      "name": "Hippire",
      "type1": "FIRE",
      "basestats": [
        55,
        70,
        45,
        60,
        70,
        50
      ],
      "genderrate": "Female25Percent",
      "growthrate": "Slow",
      "baseexp": "70",
      "effortpoints": [
        0,
        1,
        0,
        0,
        0,
        0
      ],
      "rareness": "190",
      "happiness": "70",
      "abilities": [
        [
          "INTIMIDATE",
          "FLASHFIRE"
        ]
      ],
      "hiddenability": "FLAMEBODY",
      "moves": [
        [
          "1",
          "BITE"
        ],
        [
          "1",
          "ROAR"
        ],
        [
          "6",
          "EMBER"
        ],
        [
          "8",
          "LEER"
        ],
        [
          "10",
          "ODORSLEUTH"
        ],
        [
          "12",
          "HELPINGHAND"
        ],
        [
          "17",
          "FLAMEWHEEL"
        ],
        [
          "19",
          "REVERSAL"
        ],
        [
          "21",
          "FIREFANG"
        ],
        [
          "23",
          "TAKEDOWN"
        ],
        [
          "28",
          "FLAMEBURST"
        ],
        [
          "30",
          "AGILITY"
        ],
        [
          "32",
          "RETALIATE"
        ],
        [
          "34",
          "FLAMETHROWER"
        ],
        [
          "39",
          "CRUNCH"
        ],
        [
          "41",
          "HEATWAVE"
        ],
        [
          "43",
          "OUTRAGE"
        ],
        [
          "45",
          "FLAREBLITZ"
        ]
      ],
      "eggmoves": [
        [
          "BODYSLAM",
          "CLOSECOMBAT"
        ],
        [
          "COVET",
          "CRUNCH"
        ],
        [
          "DOUBLEKICK",
          "DOUBLEEDGE"
        ],
        [
          "FIRESPIN",
          "FLAREBLITZ"
        ],
        [
          "HEATWAVE",
          "HOWL"
        ],
        [
          "IRONTAIL",
          "MORNINGSUN"
        ],
        [
          "THRASH"
        ]
      ],
      "compatibility": "Field",
      "stepstohatch": "5355",
      "height": "0.7",
      "weight": "19.0",
      "habitat": "Grassland",
      "pokedex": "Les gusta el calor y su cuerpo puede llegar a alcanzar temperaturas muy altas.",
      "wilditemcommon": "RAWSTBERRY",
      "wilditemuncommon": "RAWSTBERRY",
      "wilditemrare": "RAWSTBERRY",
      "evolutions": "MAGMATAMUS,Item,FIRESTONE"
    },
    {
      "id": 94,
      "image": "fakemonico/094.png",
      "name": "Magmatamus",
      "type1": "FIRE",
      "basestats": [
        90,
        110,
        80,
        95,
        100,
        80
      ],
      "genderrate": "Female25Percent",
      "growthrate": "Slow",
      "baseexp": "194",
      "effortpoints": [
        0,
        2,
        0,
        0,
        0,
        0
      ],
      "rareness": "75",
      "happiness": "70",
      "abilities": [
        [
          "INTIMIDATE",
          "FLASHFIRE"
        ]
      ],
      "hiddenability": "FLAMEBODY",
      "moves": [
        [
          "1",
          "THUNDERFANG"
        ],
        [
          "1",
          "BITE"
        ],
        [
          "1",
          "ROAR"
        ],
        [
          "1",
          "FIREFANG"
        ],
        [
          "1",
          "ODORSLEUTH"
        ],
        [
          "34",
          "EXTREMESPEED"
        ]
      ],
      "compatibility": "Field",
      "stepstohatch": "5355",
      "height": "1.9",
      "weight": "155.0",
      "habitat": "Grassland",
      "pokedex": "Les gusta bañarse en la lava. Aunque parezca tranquilo, es muy territorial.",
      "wilditemcommon": "RAWSTBERRY",
      "wilditemuncommon": "RAWSTBERRY",
      "wilditemrare": "RAWSTBERRY",
      "evolutions": ""
    },
    {
      "id": 95,
      "image": "fakemonico/095.png",
      "name": "Mantislash",
      "type1": "BUG",
      "type2": "STEEL",
      "basestats": [
        70,
        130,
        100,
        65,
        55,
        80
      ],
      "genderrate": "Female50Percent",
      "growthrate": "Medium",
      "baseexp": "100",
      "effortpoints": [
        0,
        1,
        0,
        0,
        0,
        0
      ],
      "rareness": "45",
      "happiness": "70",
      "abilities": [
        [
          "SWARM",
          "TECHNICIAN"
        ]
      ],
      "hiddenability": "LIGHTMETAL",
      "moves": [
        [
          "1",
          "BULLETPUNCH"
        ],
        [
          "1",
          "QUICKATTACK"
        ],
        [
          "1",
          "LEER"
        ],
        [
          "5",
          "FOCUSENERGY"
        ],
        [
          "9",
          "PURSUIT"
        ],
        [
          "13",
          "FALSESWIPE"
        ],
        [
          "17",
          "AGILITY"
        ],
        [
          "21",
          "METALCLAW"
        ],
        [
          "25",
          "FURYCUTTER"
        ],
        [
          "29",
          "SLASH"
        ],
        [
          "33",
          "RAZORWIND"
        ],
        [
          "37",
          "IRONDEFENSE"
        ],
        [
          "41",
          "XSCISSOR"
        ],
        [
          "45",
          "NIGHTSLASH"
        ],
        [
          "49",
          "DOUBLEHIT"
        ],
        [
          "53",
          "IRONHEAD"
        ],
        [
          "57",
          "SWORDSDANCE"
        ],
        [
          "61",
          "FEINT"
        ]
      ],
      "eggmoves": [
        [
          "BATONPASS",
          "BUGBUZZ"
        ],
        [
          "COUNTER",
          "DEFOG"
        ],
        [
          "ENDURE",
          "NIGHTSLASH"
        ],
        [
          "RAZORWIND",
          "REVERSAL"
        ],
        [
          "SILVERWIND",
          "STEELWING"
        ]
      ],
      "compatibility": "Bug",
      "stepstohatch": "6630",
      "height": "1.5",
      "weight": "56.0",
      "habitat": "Grassland",
      "pokedex": "Este insecto podría ser un maestro espadachín. Es capaz de rebanar el cuello de sus presas de un solo corte.",
      "evolutions": ""
    },
    {
      "id": 96,
      "image": "fakemonico/096.png",
      "name": "Gargar",
      "type1": "ROCK",
      "type2": "FLYING",
      "basestats": [
        80,
        65,
        75,
        45,
        30,
        50
      ],
      "genderrate": "FemaleOneEighth",
      "growthrate": "Medium",
      "baseexp": "71",
      "effortpoints": [
        0,
        1,
        0,
        0,
        0,
        0
      ],
      "rareness": "45",
      "happiness": "70",
      "abilities": [
        [
          "RECKLESS",
          "UNBURDEN"
        ]
      ],
      "moves": [
        [
          "1",
          "QUICKATTACK"
        ],
        [
          "1",
          "LEER"
        ],
        [
          "1",
          "WINGATTACK"
        ],
        [
          "5",
          "ROCKTHROW"
        ],
        [
          "8",
          "DOUBLETEAM"
        ],
        [
          "11",
          "SCARYFACE"
        ],
        [
          "15",
          "PLUCK"
        ],
        [
          "18",
          "ANCIENTPOWER"
        ],
        [
          "21",
          "AGILITY"
        ],
        [
          "25",
          "QUICKGUARD"
        ],
        [
          "28",
          "ACROBATICS"
        ],
        [
          "31",
          "DRAGONBREATH"
        ],
        [
          "35",
          "CRUNCH"
        ],
        [
          "38",
          "ENDEAVOR"
        ],
        [
          "41",
          "UTURN"
        ],
        [
          "45",
          "ROCKSLIDE"
        ],
        [
          "48",
          "DRAGONCLAW"
        ],
        [
          "51",
          "THRASH"
        ]
      ],
      "eggmoves": [
        [
          "BITE",
          "DEFOG"
        ],
        [
          "DRAGONPULSE",
          "EARTHPOWER"
        ],
        [
          "HEADSMASH",
          "KNOCKOFF"
        ],
        [
          "STEELWING"
        ]
      ],
      "compatibility": "Flying,Water3",
      "stepstohatch": "7905",
      "height": "0.5",
      "weight": "9.5",
      "pokedex": "Son las estatuas del Palacio de Utopía.",
      "evolutions": "GARGAROCK,Level,30"
    },
    {
      "id": 97,
      "image": "fakemonico/097.png",
      "name": "Gargarock",
      "type1": "ROCK",
      "type2": "FLYING",
      "basestats": [
        105,
        110,
        100,
        60,
        45,
        65
      ],
      "genderrate": "FemaleOneEighth",
      "growthrate": "Medium",
      "baseexp": "177",
      "effortpoints": [
        0,
        2,
        0,
        0,
        0,
        0
      ],
      "rareness": "45",
      "happiness": "70",
      "abilities": [
        [
          "RECKLESS",
          "UNBURDEN"
        ]
      ],
      "moves": [
        [
          "1",
          "QUICKATTACK"
        ],
        [
          "1",
          "LEER"
        ],
        [
          "1",
          "WINGATTACK"
        ],
        [
          "1",
          "ROCKTHROW"
        ],
        [
          "5",
          "ROCKTHROW"
        ],
        [
          "8",
          "DOUBLETEAM"
        ],
        [
          "11",
          "SCARYFACE"
        ],
        [
          "15",
          "PLUCK"
        ],
        [
          "18",
          "ANCIENTPOWER"
        ],
        [
          "21",
          "AGILITY"
        ],
        [
          "25",
          "QUICKGUARD"
        ],
        [
          "28",
          "ACROBATICS"
        ],
        [
          "31",
          "DRAGONBREATH"
        ],
        [
          "35",
          "CRUNCH"
        ],
        [
          "40",
          "ENDEAVOR"
        ],
        [
          "45",
          "UTURN"
        ],
        [
          "51",
          "ROCKSLIDE"
        ],
        [
          "56",
          "DRAGONCLAW"
        ],
        [
          "61",
          "THRASH"
        ]
      ],
      "compatibility": "Flying,Water3",
      "stepstohatch": "7905",
      "height": "1.4",
      "weight": "32.0",
      "pokedex": "Estatuas del Palacio de Utopía. Si alguien daña el Palacio, atacarán sin piedad.",
      "evolutions": "MOONLORD,Item,MOONSTONE"
    },
    {
      "id": 98,
      "image": "fakemonico/098.png",
      "name": "Moonlord",
      "type1": "FAIRY",
      "type2": "DRAGON",
      "basestats": [
        105,
        110,
        100,
        60,
        95,
        65
      ],
      "genderrate": "Female50Percent",
      "growthrate": "Erratic",
      "baseexp": "172",
      "effortpoints": [
        0,
        0,
        0,
        0,
        0,
        2
      ],
      "rareness": "45",
      "happiness": "70",
      "abilities": [
        [
          "DEFEATIST"
        ]
      ],
      "moves": [
        [
          "1",
          "PLUCK"
        ],
        [
          "1",
          "PECK"
        ],
        [
          "1",
          "GROWL"
        ],
        [
          "1",
          "ASTONISH"
        ],
        [
          "1",
          "SING"
        ],
        [
          "4",
          "ASTONISH"
        ],
        [
          "8",
          "SING"
        ],
        [
          "10",
          "FURYATTACK"
        ],
        [
          "13",
          "SAFEGUARD"
        ],
        [
          "15",
          "MIST"
        ],
        [
          "18",
          "ROUND"
        ],
        [
          "21",
          "NATURALGIFT"
        ],
        [
          "25",
          "TAKEDOWN"
        ],
        [
          "29",
          "REFRESH"
        ],
        [
          "34",
          "DRAGONDANCE"
        ],
        [
          "35",
          "MOONBLAST"
        ],
        [
          "42",
          "COTTONGUARD"
        ],
        [
          "48",
          "DRAGONPULSE"
        ],
        [
          "57",
          "PERISHSONG"
        ],
        [
          "64",
          "SKYATTACK"
        ]
      ],
      "compatibility": "Flying,Dragon",
      "stepstohatch": "5355",
      "height": "1.1",
      "weight": "20.6",
      "habitat": "Forest",
      "pokedex": "En luna llena, existen muy pocos Gargarock que pueden evolucionar a esta especie. Si ves a uno de estos, pide un deseo.",
      "evolutions": ""
    },
    {
      "id": 99,
      "image": "fakemonico/099.png",
      "name": "Dophin",
      "type1": "WATER",
      "basestats": [
        55,
        84,
        105,
        114,
        52,
        75
      ],
      "genderrate": "Female50Percent",
      "growthrate": "Erratic",
      "baseexp": "170",
      "effortpoints": [
        0,
        0,
        0,
        0,
        2,
        0
      ],
      "rareness": "60",
      "happiness": "70",
      "abilities": [
        [
          "GUTS"
        ]
      ],
      "hiddenability": "HYDRATION",
      "moves": [
        [
          "1",
          "WHIRLPOOL"
        ],
        [
          "6",
          "FACADE"
        ],
        [
          "10",
          "AGILITY"
        ],
        [
          "15",
          "AQUAJET"
        ],
        [
          "19",
          "AMNESIA"
        ],
        [
          "24",
          "AQUARING"
        ],
        [
          "28",
          "CAPTIVATE"
        ],
        [
          "33",
          "BATONPASS"
        ],
        [
          "37",
          "DIVE"
        ],
        [
          "42",
          "WORKUP"
        ],
        [
          "46",
          "AQUATAIL"
        ],
        [
          "51",
          "HYDROPUMP"
        ]
      ],
      "eggmoves": [
        [
          "AQUARING",
          "BARRIER"
        ],
        [
          "BODYSLAM",
          "BRINE"
        ],
        [
          "CONFUSERAY",
          "ENDURE"
        ],
        [
          "MUDSPORT",
          "MUDDYWATER"
        ],
        [
          "REFRESH",
          "SUPERSONIC"
        ],
        [
          "WATERPULSE"
        ]
      ],
      "compatibility": "Water1",
      "stepstohatch": "5355",
      "height": "1.8",
      "weight": "22.6",
      "habitat": "Sea",
      "pokedex": "Se emborrachan con las toxinas de los Toxibian. Parecen adorables pero son unos psicópatas.",
      "wilditemuncommon": "DEEPSEASCALE",
      "evolutions": ""
    },
    {
      "id": 100,
      "image": "fakemonico/100.png",
      "name": "Rhyquake",
      "type1": "GROUND",
      "basestats": [
        90,
        60,
        60,
        40,
        40,
        40
      ],
      "genderrate": "Female50Percent",
      "growthrate": "Medium",
      "baseexp": "66",
      "effortpoints": [
        1,
        0,
        0,
        0,
        0,
        0
      ],
      "rareness": "120",
      "happiness": "70",
      "abilities": [
        [
          "PICKUP"
        ]
      ],
      "hiddenability": "SANDVEIL",
      "moves": [
        [
          "1",
          "ODORSLEUTH"
        ],
        [
          "1",
          "TACKLE"
        ],
        [
          "1",
          "GROWL"
        ],
        [
          "1",
          "DEFENSECURL"
        ],
        [
          "6",
          "FLAIL"
        ],
        [
          "10",
          "TAKEDOWN"
        ],
        [
          "15",
          "ROLLOUT"
        ],
        [
          "19",
          "SLAM"
        ],
        [
          "24",
          "MAGNITUDE"
        ],
        [
          "28",
          "ENDURE"
        ],
        [
          "33",
          "CHARM"
        ],
        [
          "37",
          "EARTHQUAKE"
        ],
        [
          "42",
          "DOUBLEEDGE"
        ]
      ],
      "eggmoves": [
        [
          "ANCIENTPOWER",
          "BODYSLAM"
        ],
        [
          "COUNTER",
          "ENDEAVOR"
        ],
        [
          "FISSURE",
          "FOCUSENERGY"
        ],
        [
          "HEADSMASH",
          "HEAVYSLAM"
        ],
        [
          "ICESHARD",
          "MUDSLAP"
        ],
        [
          "SNORE"
        ]
      ],
      "compatibility": "Field",
      "stepstohatch": "5355",
      "height": "0.5",
      "weight": "33.5",
      "habitat": "RoughTerrain",
      "pokedex": "Estos pequeños viven en las montañas. Su arma es su cuerno.",
      "wilditemuncommon": "PASSHOBERRY",
      "evolutions": "RHYKING,Level,25"
    },
    {
      "id": 101,
      "image": "fakemonico/101.png",
      "name": "Rhyking",
      "type1": "GROUND",
      "basestats": [
        90,
        120,
        120,
        50,
        60,
        60
      ],
      "genderrate": "Female50Percent",
      "growthrate": "Medium",
      "baseexp": "175",
      "effortpoints": [
        0,
        1,
        1,
        0,
        0,
        0
      ],
      "rareness": "60",
      "happiness": "70",
      "abilities": [
        [
          "STURDY"
        ]
      ],
      "hiddenability": "SANDVEIL",
      "moves": [
        [
          "1",
          "FIREFANG"
        ],
        [
          "1",
          "THUNDERFANG"
        ],
        [
          "1",
          "HORNATTACK"
        ],
        [
          "1",
          "GROWL"
        ],
        [
          "1",
          "DEFENSECURL"
        ],
        [
          "1",
          "BULLDOZE"
        ],
        [
          "6",
          "RAPIDSPIN"
        ],
        [
          "10",
          "KNOCKOFF"
        ],
        [
          "15",
          "ROLLOUT"
        ],
        [
          "19",
          "MAGNITUDE"
        ],
        [
          "24",
          "SLAM"
        ],
        [
          "25",
          "FURYATTACK"
        ],
        [
          "31",
          "ASSURANCE"
        ],
        [
          "39",
          "SCARYFACE"
        ],
        [
          "46",
          "EARTHQUAKE"
        ],
        [
          "54",
          "GIGAIMPACT"
        ]
      ],
      "compatibility": "Field",
      "stepstohatch": "5355",
      "height": "1.1",
      "weight": "120.0",
      "habitat": "RoughTerrain",
      "pokedex": "Son capaces de causar terremotos cuando se sienten amenazados.",
      "wilditemuncommon": "PASSHOBERRY",
      "evolutions": ""
    },
    {
      "id": 102,
      "image": "fakemonico/102.png",
      "name": "Mushi",
      "type1": "GRASS",
      "type2": "FAIRY",
      "basestats": [
        55,
        35,
        55,
        15,
        65,
        75
      ],
      "genderrate": "Female50Percent",
      "growthrate": "Medium",
      "baseexp": "57",
      "effortpoints": [
        0,
        0,
        0,
        0,
        1,
        0
      ],
      "rareness": "190",
      "happiness": "70",
      "abilities": [
        [
          "ILLUMINATE",
          "EFFECTSPORE"
        ]
      ],
      "hiddenability": "RAINDISH",
      "moves": [
        [
          "1",
          "ABSORB"
        ],
        [
          "4",
          "ASTONISH"
        ],
        [
          "8",
          "FLASH"
        ],
        [
          "11",
          "MOONLIGHT"
        ],
        [
          "15",
          "MEGADRAIN"
        ],
        [
          "18",
          "SLEEPPOWDER"
        ],
        [
          "22",
          "INGRAIN"
        ],
        [
          "25",
          "CONFUSERAY"
        ],
        [
          "29",
          "GIGADRAIN"
        ],
        [
          "32",
          "BULKUP"
        ],
        [
          "36",
          "SPORE"
        ],
        [
          "39",
          "MOONBLAST"
        ],
        [
          "43",
          "DREAMEATER"
        ]
      ],
      "eggmoves": [
        [
          "AMNESIA",
          "POISONPOWDER"
        ],
        [
          "STUNSPORE",
          "GROWTH"
        ],
        [
          "LEECHSEED"
        ]
      ],
      "compatibility": "Grass",
      "stepstohatch": "5120",
      "height": "0.2",
      "weight": "1.5",
      "habitat": "Grassland",
      "pokedex": "Se dice que guían a los perdidos en el bosque con su luz.",
      "wilditemcommon": "TINYMUSHROOM",
      "wilditemuncommon": "BIGMUSHROOM",
      "evolutions": "MOOSHI,Level,24"
    },
    {
      "id": 103,
      "image": "fakemonico/103.png",
      "name": "Mooshi",
      "type1": "GRASS",
      "type2": "FAIRY",
      "basestats": [
        125,
        45,
        105,
        30,
        95,
        120
      ],
      "genderrate": "Female50Percent",
      "growthrate": "Medium",
      "baseexp": "142",
      "effortpoints": [
        0,
        0,
        0,
        0,
        2,
        0
      ],
      "rareness": "75",
      "happiness": "70",
      "abilities": [
        [
          "ILLUMINATE",
          "EFFECTSPORE"
        ]
      ],
      "hiddenability": "RAINDISH",
      "moves": [
        [
          "1",
          "ABSORB"
        ],
        [
          "4",
          "ASTONISH"
        ],
        [
          "8",
          "FLASH"
        ],
        [
          "11",
          "MOONLIGHT"
        ],
        [
          "15",
          "MEGADRAIN"
        ],
        [
          "18",
          "SLEEPPOWDER"
        ],
        [
          "22",
          "INGRAIN"
        ],
        [
          "26",
          "CONFUSERAY"
        ],
        [
          "31",
          "GIGADRAIN"
        ],
        [
          "35",
          "BULKUP"
        ],
        [
          "40",
          "SPORE"
        ],
        [
          "44",
          "MOONBLAST"
        ],
        [
          "49",
          "DREAMEATER"
        ]
      ],
      "compatibility": "Grass",
      "stepstohatch": "5120",
      "height": "1.0",
      "weight": "11.5",
      "habitat": "Grassland",
      "pokedex": "Duerme a los que lo amenazan en el bosque y los lleva a un mundo de sueños.",
      "wilditemcommon": "TINYMUSHROOM",
      "wilditemuncommon": "BIGMUSHROOM",
      "evolutions": ""
    },
    {
      "id": 104,
      "image": "fakemonico/104.png",
      "name": "Diamondile",
      "type1": "ROCK",
      "type2": "DRAGON",
      "basestats": [
        82,
        121,
        119,
        71,
        69,
        59
      ],
      "genderrate": "FemaleOneEighth",
      "growthrate": "Medium",
      "baseexp": "182",
      "effortpoints": [
        0,
        3,
        0,
        0,
        0,
        0
      ],
      "rareness": "45",
      "happiness": "70",
      "abilities": [
        [
          "SHEERFORCE",
          "ROCKHEAD"
        ]
      ],
      "moves": [
        [
          "1",
          "HEADSMASH"
        ],
        [
          "1",
          "TAILWHIP"
        ],
        [
          "1",
          "TACKLE"
        ],
        [
          "6",
          "ROAR"
        ],
        [
          "10",
          "STOMP"
        ],
        [
          "12",
          "TACKLE"
        ],
        [
          "15",
          "STEALTHROCK"
        ],
        [
          "17",
          "BITE"
        ],
        [
          "20",
          "CHARM"
        ],
        [
          "26",
          "ANCIENTPOWER"
        ],
        [
          "30",
          "DRAGONTAIL"
        ],
        [
          "34",
          "CRUNCH"
        ],
        [
          "37",
          "DRAGONCLAW"
        ],
        [
          "42",
          "THRASH"
        ],
        [
          "47",
          "EARTHQUAKE"
        ],
        [
          "53",
          "HORNDRILL"
        ],
        [
          "58",
          "HEADSMASH"
        ],
        [
          "68",
          "ROCKSLIDE"
        ],
        [
          "75",
          "GIGAIMPACT"
        ]
      ],
      "eggmoves": [
        [
          "CURSE",
          "DRAGONDANCE"
        ],
        [
          "FIREFANG",
          "ICEFANG"
        ],
        [
          "POISONFANG",
          "ROCKPOLISH"
        ],
        [
          "THUNDERFANG"
        ]
      ],
      "compatibility": "Monster,Dragon",
      "stepstohatch": "7680",
      "height": "2.5",
      "weight": "270.0",
      "pokedex": "100 años atrás dominaban las montañas y cuevas. Puede ser revivido por un fósil.",
      "evolutions": ""
    },
    {
      "id": 105,
      "image": "fakemonico/105.png",
      "name": "Doddo",
      "type1": "ROCK",
      "type2": "FLYING",
      "basestats": [
        80,
        105,
        65,
        130,
        60,
        75
      ],
      "genderrate": "FemaleOneEighth",
      "growthrate": "Slow",
      "baseexp": "180",
      "effortpoints": [
        0,
        0,
        0,
        2,
        0,
        0
      ],
      "rareness": "45",
      "happiness": "70",
      "abilities": [
        [
          "ROCKHEAD",
          "PRESSURE"
        ]
      ],
      "hiddenability": "UNNERVE",
      "moves": [
        [
          "1",
          "ICEFANG"
        ],
        [
          "1",
          "FIREFANG"
        ],
        [
          "1",
          "THUNDERFANG"
        ],
        [
          "1",
          "WINGATTACK"
        ],
        [
          "1",
          "SUPERSONIC"
        ],
        [
          "1",
          "BITE"
        ],
        [
          "1",
          "SCARYFACE"
        ],
        [
          "9",
          "ROAR"
        ],
        [
          "17",
          "AGILITY"
        ],
        [
          "25",
          "ANCIENTPOWER"
        ],
        [
          "33",
          "CRUNCH"
        ],
        [
          "41",
          "TAKEDOWN"
        ],
        [
          "49",
          "SKYDROP"
        ],
        [
          "57",
          "IRONHEAD"
        ],
        [
          "65",
          "HYPERBEAM"
        ],
        [
          "73",
          "ROCKSLIDE"
        ],
        [
          "81",
          "GIGAIMPACT"
        ]
      ],
      "eggmoves": [
        [
          "ASSURANCE",
          "CURSE"
        ],
        [
          "DRAGONBREATH",
          "FORESIGHT"
        ],
        [
          "PURSUIT",
          "ROOST"
        ],
        [
          "STEELWING",
          "TAILWIND"
        ],
        [
          "WHIRLWIND"
        ]
      ],
      "compatibility": "Flying",
      "stepstohatch": "9180",
      "height": "1.8",
      "weight": "59.0",
      "habitat": "Mountain",
      "pokedex": "Se extinguió debido a su incapacidad de reproducción. Puede ser revivido por un fósil.",
      "evolutions": ""
    },
    {
      "id": 106,
      "image": "fakemonico/106.png",
      "name": "Buttery",
      "type1": "BUG",
      "type2": "FAIRY",
      "basestats": [
        40,
        45,
        40,
        84,
        55,
        40
      ],
      "genderrate": "Female50Percent",
      "growthrate": "Medium",
      "baseexp": "61",
      "effortpoints": [
        0,
        0,
        0,
        0,
        0,
        1
      ],
      "rareness": "190",
      "happiness": "70",
      "abilities": [
        [
          "TINTEDLENS"
        ]
      ],
      "hiddenability": "SWEETVEIL",
      "moves": [
        [
          "1",
          "ABSORB"
        ],
        [
          "4",
          "FAIRYWIND"
        ],
        [
          "7",
          "STUNSPORE"
        ],
        [
          "10",
          "STRUGGLEBUG"
        ],
        [
          "13",
          "SILVERWIND"
        ],
        [
          "16",
          "DRAININGKISS"
        ],
        [
          "21",
          "SWEETSCENT"
        ],
        [
          "26",
          "BUGBUZZ"
        ],
        [
          "31",
          "DAZZLINGGLEAM"
        ],
        [
          "36",
          "AROMATHERAPY"
        ],
        [
          "41",
          "QUIVERDANCE"
        ]
      ],
      "eggmoves": [
        [
          "BATONPASS",
          "SKILLSWAP"
        ],
        [
          "CALMMIND",
          "BESTOW"
        ],
        [
          "MOONBLAST"
        ]
      ],
      "compatibility": "Bug,Fairy",
      "stepstohatch": "5120",
      "height": "0.1",
      "weight": "0.2",
      "habitat": "Grassland",
      "pokedex": "Esta pequeña es capaz de producir miel.",
      "wilditemuncommon": "HONEY",
      "evolutions": "FAIRYLIGHT,Level,12"
    },
    {
      "id": 107,
      "image": "fakemonico/107.png",
      "name": "Fairylight",
      "type1": "BUG",
      "type2": "FAIRY",
      "basestats": [
        60,
        45,
        40,
        84,
        75,
        50
      ],
      "genderrate": "Female50Percent",
      "growthrate": "Medium",
      "baseexp": "61",
      "effortpoints": [
        0,
        0,
        0,
        0,
        0,
        1
      ],
      "rareness": "190",
      "happiness": "70",
      "abilities": [
        [
          "TINTEDLENS"
        ]
      ],
      "hiddenability": "SWEETVEIL",
      "moves": [
        [
          "1",
          "ABSORB"
        ],
        [
          "4",
          "FAIRYWIND"
        ],
        [
          "7",
          "STUNSPORE"
        ],
        [
          "10",
          "STRUGGLEBUG"
        ],
        [
          "13",
          "SILVERWIND"
        ],
        [
          "16",
          "DRAININGKISS"
        ],
        [
          "21",
          "SWEETSCENT"
        ],
        [
          "26",
          "BUGBUZZ"
        ],
        [
          "31",
          "DAZZLINGGLEAM"
        ],
        [
          "36",
          "AROMATHERAPY"
        ],
        [
          "41",
          "QUIVERDANCE"
        ]
      ],
      "compatibility": "Bug,Fairy",
      "stepstohatch": "5120",
      "height": "0.1",
      "weight": "0.2",
      "habitat": "Grassland",
      "pokedex": "Producen la mejor miel de la región.",
      "wilditemuncommon": "HONEY",
      "evolutions": "BEEFY,Level,25"
    },
    {
      "id": 108,
      "image": "fakemonico/108.png",
      "name": "Beefy",
      "type1": "BUG",
      "type2": "FAIRY",
      "basestats": [
        70,
        55,
        60,
        124,
        95,
        75
      ],
      "genderrate": "Female50Percent",
      "growthrate": "Medium",
      "baseexp": "162",
      "effortpoints": [
        0,
        0,
        0,
        0,
        0,
        2
      ],
      "rareness": "30",
      "happiness": "70",
      "abilities": [
        [
          "TINTEDLENS"
        ]
      ],
      "hiddenability": "SWEETVEIL",
      "moves": [
        [
          "1",
          "ABSORB"
        ],
        [
          "4",
          "FAIRYWIND"
        ],
        [
          "7",
          "STUNSPORE"
        ],
        [
          "10",
          "STRUGGLEBUG"
        ],
        [
          "13",
          "SILVERWIND"
        ],
        [
          "16",
          "DRAININGKISS"
        ],
        [
          "21",
          "SWEETSCENT"
        ],
        [
          "28",
          "BUGBUZZ"
        ],
        [
          "35",
          "DAZZLINGGLEAM"
        ],
        [
          "42",
          "AROMATHERAPY"
        ],
        [
          "49",
          "QUIVERDANCE"
        ]
      ],
      "compatibility": "Bug,Fairy",
      "stepstohatch": "5120",
      "height": "0.2",
      "weight": "0.5",
      "habitat": "Grassland",
      "pokedex": "La reina del panal. Su miel está muy cotizada.",
      "wilditemuncommon": "HONEY",
      "evolutions": ""
    },
    {
      "id": 109,
      "image": "fakemonico/109.png",
      "name": "Lobster",
      "type1": "WATER",
      "type2": "FIRE",
      "basestats": [
        35,
        65,
        35,
        65,
        65,
        35
      ],
      "genderrate": "Female50Percent",
      "growthrate": "Medium",
      "baseexp": "60",
      "effortpoints": [
        0,
        0,
        0,
        0,
        1,
        0
      ],
      "rareness": "190",
      "happiness": "70",
      "abilities": [
        [
          "SNIPER"
        ]
      ],
      "hiddenability": "MOODY",
      "moves": [
        [
          "1",
          "WATERGUN"
        ],
        [
          "6",
          "LOCKON"
        ],
        [
          "10",
          "PSYBEAM"
        ],
        [
          "14",
          "AURORABEAM"
        ],
        [
          "18",
          "BUBBLEBEAM"
        ],
        [
          "22",
          "FOCUSENERGY"
        ],
        [
          "26",
          "WATERPULSE"
        ],
        [
          "30",
          "SIGNALBEAM"
        ],
        [
          "34",
          "ICEBEAM"
        ],
        [
          "38",
          "BULLETSEED"
        ],
        [
          "42",
          "HYDROPUMP"
        ],
        [
          "46",
          "HYPERBEAM"
        ],
        [
          "50",
          "SOAK"
        ]
      ],
      "eggmoves": [
        [
          "ACIDSPRAY",
          "AURORABEAM"
        ],
        [
          "FLAIL",
          "HAZE"
        ],
        [
          "MUDSHOT",
          "OCTAZOOKA"
        ],
        [
          "ROCKBLAST",
          "SCREECH"
        ],
        [
          "SNORE",
          "SUPERSONIC"
        ],
        [
          "SWIFT",
          "WATERPULSE"
        ],
        [
          "WATERSPOUT"
        ]
      ],
      "compatibility": "Water1,Water2",
      "stepstohatch": "5355",
      "height": "0.6",
      "weight": "12.0",
      "habitat": "Sea",
      "pokedex": "No usa sus pinzas como arma, si no para sostener un arma.",
      "evolutions": "GUNSTER,Level,25"
    },
    {
      "id": 110,
      "image": "fakemonico/110.png",
      "name": "Gunster",
      "type1": "WATER",
      "type2": "FIRE",
      "basestats": [
        75,
        45,
        75,
        75,
        155,
        75
      ],
      "genderrate": "Female50Percent",
      "growthrate": "Medium",
      "baseexp": "168",
      "effortpoints": [
        0,
        1,
        0,
        0,
        1,
        0
      ],
      "rareness": "75",
      "happiness": "70",
      "abilities": [
        [
          "SNIPER"
        ]
      ],
      "hiddenability": "MOODY",
      "moves": [
        [
          "1",
          "GUNKSHOT"
        ],
        [
          "1",
          "ROCKBLAST"
        ],
        [
          "1",
          "WATERGUN"
        ],
        [
          "1",
          "CONSTRICT"
        ],
        [
          "1",
          "PSYBEAM"
        ],
        [
          "1",
          "AURORABEAM"
        ],
        [
          "6",
          "CONSTRICT"
        ],
        [
          "10",
          "PSYBEAM"
        ],
        [
          "14",
          "AURORABEAM"
        ],
        [
          "18",
          "BUBBLEBEAM"
        ],
        [
          "22",
          "FOCUSENERGY"
        ],
        [
          "25",
          "OCTAZOOKA"
        ],
        [
          "28",
          "WRINGOUT"
        ],
        [
          "34",
          "SIGNALBEAM"
        ],
        [
          "35",
          "NASTYPLOT"
        ],
        [
          "36",
          "FLAMETHROWER"
        ],
        [
          "40",
          "ICEBEAM"
        ],
        [
          "46",
          "BULLETSEED"
        ],
        [
          "52",
          "HYDROPUMP"
        ],
        [
          "58",
          "HYPERBEAM"
        ],
        [
          "64",
          "SOAK"
        ]
      ],
      "compatibility": "Water1,Water2",
      "stepstohatch": "5355",
      "height": "0.9",
      "weight": "28.5",
      "habitat": "Sea",
      "pokedex": "Le llaman el tirador del mar, por su gran puntería con armas de fuego.",
      "evolutions": ""
    },
    {
      "id": 111,
      "image": "fakemonico/111.png",
      "name": "Foe",
      "type1": "GHOST",
      "type2": "DRAGON",
      "basestats": [
        28,
        40,
        30,
        82,
        60,
        30
      ],
      "genderrate": "Female50Percent",
      "growthrate": "Slow",
      "baseexp": "60",
      "effortpoints": [
        0,
        1,
        0,
        0,
        0,
        0
      ],
      "rareness": "45",
      "happiness": "35",
      "abilities": [
        [
          "MULTISCALE",
          "LEVITATE"
        ]
      ],
      "moves": [
        [
          "1",
          "TACKLE"
        ],
        [
          "1",
          "DRAGONRAGE"
        ],
        [
          "4",
          "WILLOWISP"
        ],
        [
          "6",
          "OMINOUSWIND"
        ],
        [
          "9",
          "BITE"
        ],
        [
          "12",
          "HEADBUTT"
        ],
        [
          "17",
          "DRAGONBREATH"
        ],
        [
          "19",
          "SHADOWSNEAK"
        ],
        [
          "20",
          "HEX"
        ],
        [
          "25",
          "CRUNCH"
        ],
        [
          "28",
          "SLAM"
        ],
        [
          "32",
          "DRAGONPULSE"
        ],
        [
          "34",
          "NASTYPLOT"
        ],
        [
          "38",
          "WORKUP"
        ],
        [
          "40",
          "SHADOWBALL"
        ],
        [
          "42",
          "DRAGONRUSH"
        ],
        [
          "48",
          "BODYSLAM"
        ],
        [
          "52",
          "SCARYFACE"
        ],
        [
          "58",
          "HYPERVOICE"
        ],
        [
          "62",
          "OUTRAGE"
        ]
      ],
      "eggmoves": [
        [
          "ASSURANCE",
          "ASTONISH"
        ],
        [
          "DARKPULSE",
          "DOUBLEHIT"
        ],
        [
          "EARTHPOWER",
          "FIREFANG"
        ],
        [
          "HEADSMASH",
          "ICEFANG"
        ],
        [
          "SCREECH",
          "THUNDERFANG"
        ]
      ],
      "compatibility": "Dragon",
      "stepstohatch": "10455",
      "height": "0.8",
      "weight": "17.3",
      "pokedex": "Se dice que son las almas de los muertos que no han podido descansar en paz. Vagan por los cementerios.",
      "evolutions": "DRAPHOUS,Level,36"
    },
    {
      "id": 112,
      "image": "fakemonico/112.png",
      "name": "Draphous",
      "type1": "GHOST",
      "type2": "DRAGON",
      "basestats": [
        68,
        60,
        50,
        102,
        80,
        50
      ],
      "genderrate": "Female50Percent",
      "growthrate": "Slow",
      "baseexp": "147",
      "effortpoints": [
        0,
        2,
        0,
        0,
        0,
        0
      ],
      "rareness": "45",
      "happiness": "35",
      "abilities": [
        [
          "MULTISCALE",
          "LEVITATE"
        ]
      ],
      "moves": [
        [
          "1",
          "TACKLE"
        ],
        [
          "1",
          "DRAGONRAGE"
        ],
        [
          "4",
          "WILLOWISP"
        ],
        [
          "6",
          "OMINOUSWIND"
        ],
        [
          "9",
          "BITE"
        ],
        [
          "12",
          "HEADBUTT"
        ],
        [
          "17",
          "DRAGONBREATH"
        ],
        [
          "19",
          "SHADOWSNEAK"
        ],
        [
          "20",
          "HEX"
        ],
        [
          "25",
          "CRUNCH"
        ],
        [
          "28",
          "SLAM"
        ],
        [
          "32",
          "DRAGONPULSE"
        ],
        [
          "34",
          "NASTYPLOT"
        ],
        [
          "38",
          "WORKUP"
        ],
        [
          "40",
          "SHADOWBALL"
        ],
        [
          "42",
          "DRAGONRUSH"
        ],
        [
          "48",
          "BODYSLAM"
        ],
        [
          "52",
          "SCARYFACE"
        ],
        [
          "58",
          "HYPERVOICE"
        ],
        [
          "62",
          "OUTRAGE"
        ]
      ],
      "compatibility": "Dragon",
      "stepstohatch": "10455",
      "height": "1.4",
      "weight": "50.0",
      "pokedex": "Atormentan a las almas que son vistas en el lugar donde murieron. Buscan un motivo para descansar en paz.",
      "evolutions": "YUREIGON,Level,55"
    },
    {
      "id": 113,
      "image": "fakemonico/113.png",
      "name": "Yureigon",
      "type1": "GHOST",
      "type2": "DRAGON",
      "basestats": [
        92,
        105,
        90,
        98,
        125,
        90
      ],
      "genderrate": "Female50Percent",
      "growthrate": "Slow",
      "baseexp": "14",
      "effortpoints": [
        0,
        0,
        0,
        0,
        3,
        0
      ],
      "rareness": "45",
      "happiness": "35",
      "abilities": [
        [
          "MULTISCALE",
          "LEVITATE"
        ]
      ],
      "moves": [
        [
          "1",
          "TRIATTACK"
        ],
        [
          "1",
          "DRAGONRAGE"
        ],
        [
          "4",
          "WILLOWISP"
        ],
        [
          "6",
          "OMINOUSWIND"
        ],
        [
          "9",
          "BITE"
        ],
        [
          "12",
          "HEADBUTT"
        ],
        [
          "17",
          "DRAGONBREATH"
        ],
        [
          "19",
          "SHADOWSNEAK"
        ],
        [
          "20",
          "HEX"
        ],
        [
          "25",
          "CRUNCH"
        ],
        [
          "28",
          "SLAM"
        ],
        [
          "32",
          "DRAGONPULSE"
        ],
        [
          "34",
          "NASTYPLOT"
        ],
        [
          "38",
          "WORKUP"
        ],
        [
          "40",
          "SHADOWBALL"
        ],
        [
          "42",
          "DRAGONRUSH"
        ],
        [
          "48",
          "BODYSLAM"
        ],
        [
          "52",
          "SCARYFACE"
        ],
        [
          "58",
          "FLAMETHROWER"
        ],
        [
          "62",
          "OUTRAGE"
        ]
      ],
      "compatibility": "Dragon",
      "stepstohatch": "10455",
      "height": "1.8",
      "weight": "160.0",
      "pokedex": "Fue sellado mediante rituales por los ancestros por ser un demonio muy peligroso. Será mejor no liberarlo.",
      "formnames": "Death Forme,Revenge Forme",
      "evolutions": ""
    },
    {
      "id": 114,
      "image": "fakemonico/114.png",
      "name": "Psyphomind",
      "type1": "PSYCHIC",
      "type2": "POISON",
      "basestats": [
        100,
        100,
        100,
        100,
        100,
        100
      ],
      "genderrate": "Female50Percent",
      "growthrate": "Medium",
      "baseexp": "158",
      "effortpoints": [
        0,
        0,
        0,
        1,
        1,
        0
      ],
      "rareness": "75",
      "happiness": "70",
      "abilities": [
        [
          "CLEARBODY",
          "LIQUIDOOZE"
        ]
      ],
      "hiddenability": "RAINDISH",
      "moves": [
        [
          "1",
          "SILVERWIND"
        ],
        [
          "1",
          "TACKLE"
        ],
        [
          "1",
          "DISABLE"
        ],
        [
          "1",
          "FORESIGHT"
        ],
        [
          "1",
          "SUPERSONIC"
        ],
        [
          "5",
          "SUPERSONIC"
        ],
        [
          "10",
          "HYPNOSIS"
        ],
        [
          "11",
          "CONFUSION"
        ],
        [
          "13",
          "POISONPOWDER"
        ],
        [
          "17",
          "LEECHLIFE"
        ],
        [
          "23",
          "STUNSPORE"
        ],
        [
          "25",
          "PSYBEAM"
        ],
        [
          "29",
          "SLEEPPOWDER"
        ],
        [
          "31",
          "GUST"
        ],
        [
          "37",
          "SIGNALBEAM"
        ],
        [
          "41",
          "ZENHEADBUTT"
        ],
        [
          "47",
          "POISONFANG"
        ],
        [
          "55",
          "PSYCHIC"
        ],
        [
          "59",
          "BUGBUZZ"
        ],
        [
          "63",
          "QUIVERDANCE"
        ]
      ],
      "compatibility": "Undiscovered",
      "stepstohatch": "5355",
      "height": "1.5",
      "weight": "12.5",
      "habitat": "Forest",
      "pokedex": "Es capaz de almacenar y borrar mentes de la gente a través de sus tentáculos.",
      "wilditemuncommon": "SHEDSHELL",
      "evolutions": ""
    },
    {
      "id": 115,
      "image": "fakemonico/115.png",
      "name": "Bones",
      "type1": "WATER",
      "type2": "GHOST",
      "basestats": [
        1,
        79,
        150,
        80,
        80,
        150
      ],
      "genderrate": "Genderless",
      "growthrate": "Erratic",
      "baseexp": "83",
      "effortpoints": [
        2,
        0,
        0,
        0,
        0,
        0
      ],
      "rareness": "45",
      "happiness": "70",
      "abilities": [
        [
          "WONDERGUARD"
        ]
      ],
      "moves": [
        [
          "1",
          "SCRATCH"
        ],
        [
          "1",
          "HARDEN"
        ],
        [
          "5",
          "LEECHLIFE"
        ],
        [
          "9",
          "SANDATTACK"
        ],
        [
          "14",
          "FURYSWIPES"
        ],
        [
          "19",
          "MINDREADER"
        ],
        [
          "20",
          "SCALD"
        ],
        [
          "31",
          "CONFUSERAY"
        ],
        [
          "38",
          "SHADOWSNEAK"
        ],
        [
          "45",
          "GRUDGE"
        ],
        [
          "52",
          "HEALBLOCK"
        ],
        [
          "59",
          "SHADOWBALL"
        ]
      ],
      "compatibility": "Undiscovered",
      "stepstohatch": "4080",
      "height": "0.8",
      "weight": "1.2",
      "habitat": "Forest",
      "pokedex": "Bucanero de la tripulación de Dawes. Hay que descubrir su punto débil.",
      "evolutions": "CAPTAINDAWES,Level,50"
    },
    {
      "id": 116,
      "image": "fakemonico/116.png",
      "name": "Captain Dawes",
      "type1": "WATER",
      "type2": "GHOST",
      "basestats": [
        1,
        99,
        150,
        100,
        100,
        150
      ],
      "genderrate": "Genderless",
      "growthrate": "Erratic",
      "baseexp": "83",
      "effortpoints": [
        2,
        0,
        0,
        0,
        0,
        0
      ],
      "rareness": "45",
      "happiness": "70",
      "abilities": [
        [
          "WONDERGUARD"
        ]
      ],
      "moves": [
        [
          "1",
          "SCRATCH"
        ],
        [
          "1",
          "HARDEN"
        ],
        [
          "5",
          "LEECHLIFE"
        ],
        [
          "9",
          "SANDATTACK"
        ],
        [
          "14",
          "FURYSWIPES"
        ],
        [
          "19",
          "MINDREADER"
        ],
        [
          "20",
          "SCALD"
        ],
        [
          "31",
          "CONFUSERAY"
        ],
        [
          "38",
          "SHADOWSNEAK"
        ],
        [
          "45",
          "GRUDGE"
        ],
        [
          "52",
          "HEALBLOCK"
        ],
        [
          "59",
          "SHADOWBALL"
        ]
      ],
      "compatibility": "Undiscovered",
      "stepstohatch": "4080",
      "height": "0.8",
      "weight": "1.2",
      "habitat": "Forest",
      "pokedex": "Bucanero de la tripulación de Dawes. Hay que descubrir su punto débil.",
      "evolutions": ""
    },
    {
      "id": 117,
      "image": "fakemonico/117.png",
      "name": "Dracone",
      "type1": "FIRE",
      "type2": "DRAGON",
      "basestats": [
        95,
        90,
        79,
        81,
        130,
        125
      ],
      "genderrate": "Female50Percent",
      "growthrate": "Erratic",
      "baseexp": "189",
      "effortpoints": [
        0,
        0,
        0,
        0,
        0,
        2
      ],
      "rareness": "60",
      "happiness": "70",
      "abilities": [
        [
          "MARVELSCALE"
        ]
      ],
      "hiddenability": "CUTECHARM",
      "moves": [
        [
          "1",
          "FIREFANG"
        ],
        [
          "1",
          "DRAGONRAGE"
        ],
        [
          "8",
          "IMPRISON"
        ],
        [
          "15",
          "ANCIENTPOWER"
        ],
        [
          "22",
          "FLAMETHROWER"
        ],
        [
          "29",
          "DRAGONBREATH"
        ],
        [
          "36",
          "SLASH"
        ],
        [
          "43",
          "EXTRASENSORY"
        ],
        [
          "50",
          "FUSIONFLARE"
        ],
        [
          "54",
          "DRAGONPULSE"
        ],
        [
          "64",
          "IMPRISON"
        ],
        [
          "71",
          "CRUNCH"
        ],
        [
          "78",
          "FIREBLAST"
        ],
        [
          "85",
          "OUTRAGE"
        ],
        [
          "92",
          "HYPERVOICE"
        ]
      ],
      "compatibility": "Undiscovered",
      "stepstohatch": "5355",
      "height": "6.2",
      "weight": "162.0",
      "pokedex": "Este ser mitológico solo hace presencia cuando emana una gran cantidad de energía de felicidad en su entorno.",
      "evolutions": ""
    },
    {
      "id": 118,
      "image": "fakemonico/118.png",
      "name": "Drums",
      "type1": "DARK",
      "type2": "FAIRY",
      "basestats": [
        50,
        90,
        90,
        100,
        105,
        90
      ],
      "genderrate": "Genderless",
      "growthrate": "Slow",
      "baseexp": "270",
      "effortpoints": [
        0,
        0,
        0,
        1,
        2,
        0
      ],
      "rareness": "10",
      "happiness": "0",
      "abilities": [
        [
          "BADDREAMS"
        ]
      ],
      "moves": [
        [
          "1",
          "DISARMINGVOICE"
        ],
        [
          "1",
          "OMINOUSWIND"
        ],
        [
          "1",
          "DISABLE"
        ],
        [
          "11",
          "QUICKATTACK"
        ],
        [
          "20",
          "HYPNOSIS"
        ],
        [
          "29",
          "FAINTATTACK"
        ],
        [
          "38",
          "NIGHTMARE"
        ],
        [
          "47",
          "DOUBLETEAM"
        ],
        [
          "50",
          "DAZZLINGGLEAM"
        ],
        [
          "57",
          "HAZE"
        ],
        [
          "66",
          "DARKVOID"
        ],
        [
          "75",
          "NASTYPLOT"
        ],
        [
          "84",
          "DREAMEATER"
        ],
        [
          "93",
          "DARKPULSE"
        ]
      ],
      "compatibility": "Undiscovered",
      "stepstohatch": "30855",
      "height": "1.5",
      "weight": "50.5",
      "pokedex": "Las historias populares cuentan que anuncian la muerte de un ser querido, a través de pesadillas.",
      "evolutions": "FAIRDEATH,Level,60"
    },
    {
      "id": 119,
      "image": "fakemonico/119.png",
      "name": "Fairdeath",
      "type1": "DARK",
      "type2": "FAIRY",
      "basestats": [
        70,
        90,
        90,
        125,
        135,
        90
      ],
      "genderrate": "Genderless",
      "growthrate": "Slow",
      "baseexp": "270",
      "effortpoints": [
        0,
        0,
        0,
        1,
        2,
        0
      ],
      "rareness": "10",
      "happiness": "0",
      "abilities": [
        [
          "BADDREAMS"
        ]
      ],
      "moves": [
        [
          "1",
          "DISARMINGVOICE"
        ],
        [
          "1",
          "OMINOUSWIND"
        ],
        [
          "1",
          "DISABLE"
        ],
        [
          "11",
          "QUICKATTACK"
        ],
        [
          "20",
          "HYPNOSIS"
        ],
        [
          "29",
          "FAINTATTACK"
        ],
        [
          "38",
          "NIGHTMARE"
        ],
        [
          "47",
          "DOUBLETEAM"
        ],
        [
          "50",
          "DAZZLINGGLEAM"
        ],
        [
          "57",
          "HAZE"
        ],
        [
          "66",
          "DARKVOID"
        ],
        [
          "75",
          "NASTYPLOT"
        ],
        [
          "84",
          "DREAMEATER"
        ],
        [
          "93",
          "DARKPULSE"
        ]
      ],
      "compatibility": "Undiscovered",
      "stepstohatch": "30855",
      "height": "1.5",
      "weight": "50.5",
      "pokedex": "Las historias populares cuentan que anuncian la muerte de un ser querido, a través de pesadillas.",
      "evolutions": ""
    },
    {
      "id": 120,
      "image": "fakemonico/120.png",
      "name": "Icetang",
      "type1": "ELECTRIC",
      "type2": "ICE",
      "basestats": [
        145,
        120,
        120,
        95,
        95,
        105
      ],
      "genderrate": "Female25Percent",
      "growthrate": "Medium",
      "baseexp": "243",
      "effortpoints": [
        0,
        3,
        0,
        0,
        0,
        0
      ],
      "rareness": "30",
      "happiness": "70",
      "abilities": [
        [
          "MOTORDRIVE",
          "SNOWWARNING"
        ]
      ],
      "moves": [
        [
          "1",
          "ICEPUNCH"
        ],
        [
          "1",
          "ICICLESPEAR"
        ],
        [
          "1",
          "QUICKATTACK"
        ],
        [
          "1",
          "LEER"
        ],
        [
          "1",
          "THUNDERSHOCK"
        ],
        [
          "1",
          "LOWKICK"
        ],
        [
          "5",
          "THUNDERSHOCK"
        ],
        [
          "8",
          "LOWKICK"
        ],
        [
          "10",
          "ICEBEAM"
        ],
        [
          "12",
          "SWIFT"
        ],
        [
          "15",
          "SHOCKWAVE"
        ],
        [
          "19",
          "THUNDERWAVE"
        ],
        [
          "22",
          "ELECTROBALL"
        ],
        [
          "26",
          "AMNESIA"
        ],
        [
          "29",
          "THUNDERPUNCH"
        ],
        [
          "36",
          "DISCHARGE"
        ],
        [
          "42",
          "SCREECH"
        ],
        [
          "49",
          "THUNDERBOLT"
        ],
        [
          "55",
          "THUNDER"
        ],
        [
          "62",
          "GIGAIMPACT"
        ]
      ],
      "compatibility": "Undiscovered",
      "stepstohatch": "6630",
      "height": "1.8",
      "weight": "138.6",
      "pokedex": "Titán protector de las montañas. Protege las montañas y cuevas heladas.",
      "wilditemuncommon": "ELECTIRIZER",
      "evolutions": ""
    },
    {
      "id": 121,
      "image": "fakemonico/121.png",
      "name": "Mountang",
      "type1": "ELECTRIC",
      "type2": "GROUND",
      "basestats": [
        145,
        120,
        120,
        95,
        95,
        105
      ],
      "genderrate": "Female25Percent",
      "growthrate": "Medium",
      "baseexp": "243",
      "effortpoints": [
        0,
        3,
        0,
        0,
        0,
        0
      ],
      "rareness": "30",
      "happiness": "70",
      "abilities": [
        [
          "MOTORDRIVE",
          "SANDSTREAM"
        ]
      ],
      "moves": [
        [
          "1",
          "EARTHQUAKE"
        ],
        [
          "1",
          "BONERUSH"
        ],
        [
          "1",
          "QUICKATTACK"
        ],
        [
          "1",
          "LEER"
        ],
        [
          "1",
          "THUNDERSHOCK"
        ],
        [
          "1",
          "LOWKICK"
        ],
        [
          "5",
          "THUNDERSHOCK"
        ],
        [
          "8",
          "LOWKICK"
        ],
        [
          "10",
          "EARTHPOWER"
        ],
        [
          "12",
          "SWIFT"
        ],
        [
          "15",
          "SHOCKWAVE"
        ],
        [
          "19",
          "THUNDERWAVE"
        ],
        [
          "22",
          "ELECTROBALL"
        ],
        [
          "26",
          "AMNESIA"
        ],
        [
          "29",
          "THUNDERPUNCH"
        ],
        [
          "36",
          "DISCHARGE"
        ],
        [
          "42",
          "SCREECH"
        ],
        [
          "49",
          "THUNDERBOLT"
        ],
        [
          "55",
          "THUNDER"
        ],
        [
          "62",
          "GIGAIMPACT"
        ]
      ],
      "compatibility": "Undiscovered",
      "stepstohatch": "6630",
      "height": "1.8",
      "weight": "138.6",
      "pokedex": "Titán protector de los desiertos. Protege los desiertos y senderos.",
      "wilditemuncommon": "ELECTIRIZER",
      "evolutions": ""
    },
    {
      "id": 122,
      "image": "fakemonico/122.png",
      "name": "Forestang",
      "type1": "ELECTRIC",
      "type2": "GRASS",
      "basestats": [
        145,
        120,
        120,
        95,
        95,
        105
      ],
      "genderrate": "Female25Percent",
      "growthrate": "Medium",
      "baseexp": "243",
      "effortpoints": [
        0,
        3,
        0,
        0,
        0,
        0
      ],
      "rareness": "30",
      "happiness": "70",
      "abilities": [
        [
          "MOTORDRIVE",
          "DROUGHT"
        ]
      ],
      "moves": [
        [
          "1",
          "WOODHAMMER"
        ],
        [
          "1",
          "BULLETSEED"
        ],
        [
          "1",
          "QUICKATTACK"
        ],
        [
          "1",
          "LEER"
        ],
        [
          "1",
          "THUNDERSHOCK"
        ],
        [
          "1",
          "LOWKICK"
        ],
        [
          "5",
          "THUNDERSHOCK"
        ],
        [
          "8",
          "LOWKICK"
        ],
        [
          "10",
          "GIGADRAIN"
        ],
        [
          "12",
          "SWIFT"
        ],
        [
          "15",
          "SHOCKWAVE"
        ],
        [
          "19",
          "THUNDERWAVE"
        ],
        [
          "22",
          "ELECTROBALL"
        ],
        [
          "26",
          "AMNESIA"
        ],
        [
          "29",
          "THUNDERPUNCH"
        ],
        [
          "36",
          "DISCHARGE"
        ],
        [
          "42",
          "SCREECH"
        ],
        [
          "49",
          "THUNDERBOLT"
        ],
        [
          "55",
          "THUNDER"
        ],
        [
          "62",
          "GIGAIMPACT"
        ]
      ],
      "compatibility": "Undiscovered",
      "stepstohatch": "6630",
      "height": "1.8",
      "weight": "138.6",
      "pokedex": "Titán protector de los bosques. Protege los bosques.",
      "wilditemuncommon": "ELECTIRIZER",
      "evolutions": ""
    },
    {
      "id": 123,
      "image": "fakemonico/123.png",
      "name": "King Taurus",
      "type1": "STEEL",
      "type2": "FIGHTING",
      "basestats": [
        91,
        120,
        129,
        108,
        80,
        72
      ],
      "genderrate": "Genderless",
      "growthrate": "Slow",
      "baseexp": "5",
      "effortpoints": [
        0,
        0,
        3,
        0,
        0,
        0
      ],
      "rareness": "15",
      "happiness": "35",
      "abilities": [
        [
          "JUSTIFIED"
        ]
      ],
      "moves": [
        [
          "1",
          "QUICKATTACK"
        ],
        [
          "1",
          "LEER"
        ],
        [
          "7",
          "DOUBLEKICK"
        ],
        [
          "13",
          "METALCLAW"
        ],
        [
          "19",
          "TAKEDOWN"
        ],
        [
          "25",
          "HELPINGHAND"
        ],
        [
          "31",
          "RETALIATE"
        ],
        [
          "37",
          "IRONHEAD"
        ],
        [
          "42",
          "SACREDSWORD"
        ],
        [
          "49",
          "SWORDSDANCE"
        ],
        [
          "55",
          "QUICKGUARD"
        ],
        [
          "61",
          "WORKUP"
        ],
        [
          "67",
          "METALBURST"
        ],
        [
          "73",
          "CLOSECOMBAT"
        ]
      ],
      "compatibility": "Undiscovered",
      "stepstohatch": "20655",
      "height": "2.1",
      "weight": "250.0",
      "pokedex": "Mano derecha del Rey de Utopía. Lo defenderá hasta que le cueste la vida.",
      "evolutions": ""
    },
    {
      "id": 124,
      "image": "fakemonico/124.png",
      "name": "Fara-Oh",
      "type1": "ELECTRIC",
      "type2": "PSYCHIC",
      "basestats": [
        120,
        120,
        120,
        120,
        120,
        120
      ],
      "genderrate": "Genderless",
      "growthrate": "Slow",
      "baseexp": "324",
      "effortpoints": [
        3,
        0,
        0,
        0,
        0,
        0
      ],
      "rareness": "3",
      "happiness": "0",
      "abilities": [
        [
          "STEADFAST"
        ]
      ],
      "moves": [
        [
          "1",
          "UPROAR"
        ],
        [
          "1",
          "ASTONISH"
        ],
        [
          "1",
          "THUNDERSHOCK"
        ],
        [
          "7",
          "SWAGGER"
        ],
        [
          "13",
          "BITE"
        ],
        [
          "19",
          "REVENGE"
        ],
        [
          "25",
          "SHOCKWAVE"
        ],
        [
          "31",
          "HEALBLOCK"
        ],
        [
          "37",
          "AGILITY"
        ],
        [
          "43",
          "DISCHARGE"
        ],
        [
          "49",
          "CRUNCH"
        ],
        [
          "55",
          "CHARGE"
        ],
        [
          "61",
          "NASTYPLOT"
        ],
        [
          "62",
          "THUNDER"
        ],
        [
          "63",
          "DARKPULSE"
        ],
        [
          "70",
          "FUTURESIGHT"
        ],
        [
          "70",
          "RECOVER"
        ],
        [
          "80",
          "HYPERBEAM"
        ],
        [
          "90",
          "PERISHSONG"
        ]
      ],
      "compatibility": "Undiscovered",
      "stepstohatch": "30855",
      "height": "3.2",
      "weight": "320.0",
      "pokedex": "It is described in mythology as the Pokémon that shaped the universe with its 1,000 arms.",
      "evolutions": ""
    }
  ];
  
  module.exports = fakemonData;