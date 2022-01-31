const locations = [
    "advokaadi kontor",
    "aerupaat",
    "ahvipuur",
    "akvaarium",
    "allveelaev",
    "ämblikuvõrk",
    "antiigipood",
    "arsti kabinet",
    "asteroid",
    "ateljee",
    "aurik",
    "auto pakiruum",
    "autokool",
    "autopesula",
    "autoregister",
    "autoremonditöökoda",
    "avakosmos",
    "avatud kontor",
    "ballisaal",
    "bensiinijaam",
    "bordell",
    "buss",
    "bussipeatus",
    "demilitariseeritud tsoon",
    "direktori kabinet",
    "disko",
    "draakoni koobas",
    "džungel",
    "eeslite varjupaik",
    "eralennuk",
    "finišijoon",
    "füüsikaklass",
    "füüsikalabor",
    "garaaz",
    "geenilabor",
    "golfiväljak",
    "hambaarsti kabinet",
    "hamstripuur",
    "heegeldamisklubi",
    "heinakuhi",
    "heinamaa",
    "helikopter",
    "helistuudio",
    "iglu",
    "ilusalong",
    "india restoran",
    "jäämägi",
    "jäätisekiosk",
    "jalgrattapood",
    "joogaklass",
    "juustuvabrik",
    "juveelipood",
    "kaevik",
    "kahekorruseline buss",
    "kainestusmaja",
    "kaltsukas",
    "kambüüs",
    "kanala",
    "kanalisatsioon",
    "känguru paun",
    "kaptenisild",
    "karaokebaar",
    "kartulikelder",
    "kartulipõld",
    "karukoobas",
    "karussell",
    "kasarm",
    "kasiino",
    "kassajärjekord",
    "kasvuhoone",
    "kaubanduskeskus",
    "kaubik",
    "keeglisaal",
    "keemiaklass",
    "keemialabor",
    "kelder",
    "kellaparandus",
    "kellatorn",
    "kihlveokontor",
    "kiirabiauto",
    "kingapood",
    "kingsepatöökoda",
    "kirbuturg",
    "kirik",
    "klooster",
    "kohtusaal",
    "kohvik",
    "kommipood",
    "kong",
    "kontor",
    "kontsert",
    "koobas",
    "köök",
    "koosolekuruum",
    "kõrb",
    "kõrts",
    "kosk",
    "kosmoselaev",
    "kraav",
    "krokodilliaedik",
    "kullakaevandus",
    "külmik",
    "kummitav maja",
    "kunstigalerii",
    "kuu peal",
    "küün",
    "laboratoorium",
    "labürint",
    "ladu",
    "lahinguväli",
    "langevarjurite hüppelennuk",
    "lasketiir",
    "lasteaed",
    "laut",
    "lemmikloomapood",
    "lennujaam",
    "lennujaama turvakontroll",
    "lennuk",
    "lennuki wc",
    "lift",
    "lihaleti järjekord",
    "lillepood",
    "limusiin",
    "linnavalitsus",
    "liustik",
    "lõbustuspark",
    "lõkkeplats",
    "loomaaed",
    "loomaarsti kabinet",
    "loss",
    "lõvipuur",
    "maasikapõld",
    "magamistuba",
    "majakas",
    "malelaud",
    "mänguväljak",
    "massaažisalong",
    "matkarada",
    "matused",
    "meeste riietusruum",
    "meeste wc",
    "mets",
    "mööblipood",
    "mudaauk",
    "mullivann",
    "mungaklooster",
    "mustlaste laager",
    "muuseum",
    "muusikakool",
    "naiste riietusruum",
    "naiste wc",
    "nõiamaja",
    "nunnaklooster",
    "observatoorium",
    "õhulüüs",
    "õlletehas",
    "ookeanipõhi",
    "ööklubi",
    "ooperiteater",
    "operatsiooniruum",
    "paadi all",
    "paadikuur",
    "paadisild",
    "päästepaat",
    "palee",
    "pallimeri",
    "palmi all",
    "pank",
    "parditiik",
    "park",
    "parukapood",
    "perekonnaseisuamet",
    "pesumaja",
    "piinakamber",
    "piljardisaal",
    "pilvelõhkuja",
    "piraadilaev",
    "pizzarestoran",
    "poksiring",
    "politseijaoskond",
    "pööning",
    "proovikabiin",
    "prügiauto",
    "prügimägi",
    "psühholoogi kabinet",
    "pulmad",
    "punasel vaibal",
    "püramiid",
    "puukuur",
    "raadiostuudio",
    "raamatukogu",
    "raamatupood",
    "raketibaas",
    "rätsepatöökoda",
    "raudteeülesõit",
    "reisiagentuur",
    "reklaamiagentuur",
    "relvaeksam",
    "restorani avamine",
    "riidekapp",
    "riietusruum",
    "ristimine",
    "rõdu",
    "Saaremaa praam",
    "safari",
    "sahver",
    "saun",
    "saunalava",
    "sepikoda",
    "sigala",
    "silla all",
    "silmaarst",
    "soo",
    "söökla",
    "spordisaal",
    "staadion",
    "suguvõsa kokkutulek",
    "sularahaautomaat",
    "surnuaed",
    "surnukuur",
    "suusahüppetorn",
    "suvila",
    "taaraautomaat",
    "taksidermisti töökoda",
    "tall",
    "tantsusaal",
    "telestuudio",
    "teletorn",
    "telk",
    "tenniseväljak",
    "toasuurune seif",
    "toidupoe turvaruum",
    "toidupood",
    "tööriistapood",
    "tornkraana",
    "tramm",
    "trammipeatus",
    "troll",
    "trollipeatus",
    "trooniruum",
    "troopiline saar",
    "tsirkus",
    "tuletõrjeauto",
    "tuletõrjedepoo",
    "turg",
    "ühiselamu",
    "ülikool",
    "unenäomaailm",
    "vangla",
    "varjend",
    "veinikelder",
    "veranda",
    "viietärnirestoran",
    "viinamarjakasvatus",
    "viinapood",
    "virtuaalne reaalsus",
    "vulkaan"
];
const relations = [
    "ajakirjanik ja intervjueeritav",
    "ajakirjanik ja vilepuhuja",
    "ämmaemand ja isa",
    "arvutinohik ja konn",
    "baarman ja püsiklient",
    "deemon ja eksortsist",
    "detektiiv ja tunnistaja",
    "diktaator ja kindral",
    "direktor ja sekretär",
    "ehitaja ja tellija",
    "filmitäht ja raamatupidaja",
    "filosoof ja õpilane",
    "igavlevad aristokraadid",
    "itimees ja abivajaja",
    "jalgpallur ja kohtunik",
    "kass ja hiir",
    "kindral ja reamees",
    "kirurg ja palgamõrvar",
    "kohtunik ja taskuvaras",
    "konn ja kärbes",
    "kuldmedalist ja hõbemedalist",
    "kuningas ja rüütel",
    "kunstikriitik ja koristaja",
    "kunstnik ja poliitik",
    "laulja ja armunud fänn",
    "lemmikloom ja omanik",
    "maadeavastajad",
    "meeleavaldajad",
    "meister ja õpipoiss",
    "metsavaht ja öökull",
    "mõisnik ja kubjas",
    "mustkunstnik ja hasartmängur",
    "nälgivad kunstnikud",
    "õde ja vend",
    "palgamõrvar ja taskuvaras",
    "pantvang ja röövel",
    "parimad sõbrad",
    "piloot ja kaaspiloot",
    "poemüüja ja klient",
    "poliitik ja kinnisvaraarendaja",
    "politseinik ja kurjategija",
    "preester ja jumal",
    "prints ja tallipoiss",
    "pruut ja pulmaplaneerija",
    "ralliauto juht ja kaardilugeja",
    "sepp ja õpipoiss",
    "silmaarst ja patsient",
    "skulptor ja modell",
    "superagent ja kurikael",
    "supermodell ja vampiir",
    "taksojuht ja reisija",
    "terapeut ja patsient",
    "timukas ja narr",
    "tulnukas ja president",
    "turvamees ja pätt",
    "ülekuulaja ja kahtlusalune"
];
