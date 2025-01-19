const stajalista = [
    // STAJALISTE VIJECNICA
    { naziv: "Vijećnica", 
        linije: [
            { id: 1, naziv: "27E" }, 
            { id: 2, naziv: "T3" }, 
           
        ] 
    },
    { naziv: "Park", 
        linije: [
            { id: 1, naziv: "27E" }, 
            { id: 2, naziv: "T3" }, 
            { id:4 , naziv: "14" },
            { id:5 , naziv: "20" }
        ] 
    },

    { naziv: "Alipašina",
         linije: [
            { id: 4, naziv: "14" },
             { id: 6, naziv: "107" }
            ]
     },

    { naziv: "Otoka", 
        linije: [
        { id: 1, naziv: "27E" },
        { id: 2 , naziv: "T3" },
        {id:8, naziv:"102"}
        ] 
    },

    { naziv: "Nedžarići", 
        linije: [
            { id: 2, naziv: "T3" },
            { id: 1, naziv: "27E"}
        ] 
    },

    { naziv: "Ilidža", linije: [{ id: 3, naziv: "27" },] },
    { naziv: "Ekonomska škola", linije: [{ id: 7, naziv: "18" },{ id: 9, naziv: "23" },] },
    { naziv: "Kampus", linije: [{ id: 1, naziv: "27E" },{ id: 2, naziv: "T3" },{ id: 9, naziv: "23" },]},

    


];

const lines = [
    { id:'1', number: '27E', name: 'Baščaršija - Hrasnica' },
    { id:'2', number: 'T3', name: 'Baščaršija - Ilidža' },
    { id:'3', number: '27', name: 'Ilidža - Hrasnica' },
    { id:'4', number: '14', name: 'Dom Armije - Podhrastovi' },
    { id:'5', number: '23a', name: 'Park - Jagomir' },
    { id:'6', number: '107', name: 'Dobrinja - Jezero' },
    { id:'7', number: '18', name: 'Drvenija - Pofalići' },
    {id:'8',number:'102',name:'Otoka - Jezero'},
    {id:'9',number:'23',name:'Ž.Stanica - Rajlovac'}

   
];

const routes = {
    1: [
        { lat: 43.8599, lng: 18.4328, name: 'Vijećnica' },
        { lat: 43.860001, lng: 18.431400, name: 'Baščaršija' },
        { lat: 43.859734, lng: 18.425302, name: 'Katedrala' },
        { lat: 43.858907, lng: 18.419840, name: 'Banka' },
        { lat: 43.858635, lng: 18.413778, name: 'Park' },
        { lat: 43.8556094, lng: 18.408310, name: 'Marijin dvor' },
        { lat: 43.855615, lng: 18.397652, name: 'Kampus' },
        { lat: 43.854128, lng: 18.391920, name: 'Pofalići' },
        { lat: 43.852613, lng: 18.384698, name: 'Socijalno' },
        { lat: 43.8515551, lng: 18.378341, name: 'Dolac Malta' },
        { lat: 43.850493, lng: 18.372020, name: 'Čengić Vila' },
        { lat: 43.849267, lng: 18.366295, name: 'Otoka Okretnica' },
        { lat: 43.848230, lng: 18.359318, name: 'Alipašin most' },
        { lat: 43.847342, lng: 18.353487, name: 'RTV' },
        { lat: 43.846330, lng: 18.346802, name: 'Alipašino polje' },
        { lat: 43.845258, lng: 18.339821, name: 'Nedžarići' },
        { lat: 43.844268, lng: 18.333858, name: 'Avaz' },
        { lat: 43.842963, lng: 18.328576, name: 'Stup' },
        { lat: 43.837633, lng: 18.317305, name: 'Energoinvest' },
        { lat: 43.831239, lng: 18.308269, name: 'Terminal Ilidža' },
        { lat: 43.824568, lng: 18.318494, name: 'Butmirska cesta A' },
        { lat: 43.821070, lng: 18.315044, name: 'Stadion Butmir' },
        { lat: 43.819747, lng: 18.308397, name: 'Koledž' },
        { lat: 43.816116, lng: 18.308296, name: 'Sokolovići' },
        { lat: 43.811309, lng: 18.309784, name: 'Cvjećara' },
        { lat: 43.798712, lng: 18.313697, name: 'Dom kulture' },
        { lat: 43.796482, lng: 18.319327, name: 'Obdanište' },
        { lat: 43.794119, lng: 18.325045, name: 'Okretnica Famos' },
    ],
    
    2: [
       
        { lat: 43.860001, lng: 18.431400, name: 'Baščaršija' },
        { lat: 43.859734, lng: 18.425302, name: 'Katedrala' },
        { lat: 43.858907, lng: 18.419840, name: 'Banka' },
        { lat: 43.858635, lng: 18.413778, name: 'Park' },
        { lat: 43.8556094, lng: 18.408310, name: 'Marijin dvor' },
        { lat: 43.855615, lng: 18.397652, name: 'Kampus' },
        { lat: 43.854128, lng: 18.391920, name: 'Pofalići' },
        { lat: 43.852613, lng: 18.384698, name: 'Socijalno' },
        { lat: 43.8515551, lng: 18.378341, name: 'Dolac Malta' },
        { lat: 43.850493, lng: 18.372020, name: 'Čengić Vila' },
        { lat: 43.849267, lng: 18.366295, name: 'Otoka Okretnica' },
        { lat: 43.848230, lng: 18.359318, name: 'Alipašin most' },
        { lat: 43.847342, lng: 18.353487, name: 'RTV' },
        { lat: 43.846330, lng: 18.346802, name: 'Alipašino polje' },
        { lat: 43.845258, lng: 18.339821, name: 'Nedžarići' },
        { lat: 43.844268, lng: 18.333858, name: 'Avaz' },
        { lat: 43.842963, lng: 18.328576, name: 'Stup' },
        { lat: 43.837633, lng: 18.317305, name: 'Energoinvest' },
        { lat: 43.831239, lng: 18.308269, name: 'Terminal Ilidža' },
       
    ],
    
    3: [
        { lat: 43.831239, lng: 18.308269, name: 'Terminal Ilidža' },
        { lat: 43.824568, lng: 18.318494, name: 'Butmirska cesta A' },
        { lat: 43.821070, lng: 18.315044, name: 'Stadion Butmir' },
        { lat: 43.819747, lng: 18.308397, name: 'Koledž' },
        { lat: 43.816116, lng: 18.308296, name: 'Sokolovići' },
        { lat: 43.811309, lng: 18.309784, name: 'Cvjećara' },
        { lat: 43.798712, lng: 18.313697, name: 'Dom kulture' },
        { lat: 43.796482, lng: 18.319327, name: 'Obdanište' },
        { lat: 43.794119, lng: 18.325045, name: 'Okretnica Famos' },
    ],

    4: [
        { lat: 43.857975, lng: 18.424441, name: 'Dom armije' },
        { lat: 43.857689, lng: 18.419937, name: 'Pozorište' },
        { lat: 43.856582, lng: 18.420216, name: 'Pošta' },
        { lat: 43.859868, lng: 18.411959, name: 'Alipašina' },
        { lat: 43.858648, lng: 18.413651, name: 'Park' },
        { lat: 43.865083, lng: 18.413145, name: 'Medicinski Fakultet' },
        { lat: 43.867143, lng: 18.416638, name: 'Bolnica Koševo' },
        { lat: 43.866332, lng: 18.418107, name: 'Višnjik' },
        { lat: 43.867155, lng: 18.421809, name: 'Studentski dom' },
        { lat: 43.868645, lng: 18.423469, name: 'Podhrastovi' },
    ],
    5: [
        { lat: 43.859151, lng: 18.414759, name: 'Park' },
        { lat: 43.858883, lng: 18.414877, name: '' },
        { lat: 43.858356, lng: 18.412138, name: '' },
        { lat: 43.866565, lng: 18.412342 , name: 'Ciglane M' },
        { lat: 43.872479, lng: 18.412067, name: 'Stadion Koševo' },
        { lat: 43.876210, lng: 18.412754, name: 'Jezero' },
        { lat: 43.880840, lng: 18.413918, name: 'Brekin potok' },
        { lat: 43.884819, lng: 18.415899, name: 'D. Jagomir' },
        { lat: 43.887554, lng: 18.416209, name: 'Jagomir' },
       
    ],
    6: [
        { lat: 43.825442, lng: 18.351244, name: 'Dobrinja okretaljka' },
        { lat: 43.825876, lng: 18.349998, name: 'Dobrinja trafo' },
        { lat: 43.828997, lng: 18.342465, name: 'Dobrinja škola' },
        { lat: 43.833575, lng: 18.345739, name: 'Dobrinja III' },
        { lat: 43.835587, lng: 18.343965, name: 'Dobnrinja 5' },
        { lat: 43.838830, lng: 18.343119, name: 'Alipašino polje II' },
        { lat: 43.841711, lng: 18.354246, name: 'Alipašino polje' },
        { lat: 43.844876, lng: 18.370212, name: 'Aneks' },
        { lat: 43.846107, lng: 18.374592, name: 'Hrasno I' },
        { lat: 43.846970, lng: 18.380800, name: 'A. Šačirbegović' },
        { lat: 43.847380, lng: 18.386357, name: 'Stadion Grbavica' },
        { lat: 43.850104, lng: 18.399580, name: 'Zagrebačka' },
        { lat: 43.852455, lng: 18.404334, name: 'Kovačići' },
        { lat: 43.855822, lng: 18.413311, name: 'Skenderija' },
        { lat: 43.857044, lng: 18.412727, name: 'Hamze Hume' },
        { lat: 43.866565, lng: 18.412342, name: 'Ciglane M' },
        { lat: 43.872479, lng: 18.412067, name: 'Stadion Koševo' },
        { lat: 43.876210, lng: 18.412754, name: 'Jezero' },
    ],

    7: [
       
        { lat: 43.856166, lng:  18.423605, name: 'Drvenija' },
        { lat: 43.855632,  lng:  18.419459, name: 'Čobanija' },
        { lat: 43.855421,  lng:  18.412743, name: 'Terazija' },
        { lat:43.852509,  lng: 18.404274, name: 'Kovačići' },
        { lat: 43.849837,  lng:  18.396203, name: 'Zagrebačka' },
        { lat:43.849233, lng: 18.394359, name: 'Grbavička' },
        { lat: 43.855658,   lng:  18.392129, name: 'Ekonomska škola' },
        { lat: 43.859717,  lng:  18.390719, name: 'Fabrika duhana' },

        { lat:43.862150,  lng: 18.388144, name: 'Varnica' },

        { lat: 43.861171,   lng:  18.387919, name: 'Humska' },
        { lat: 43.862492,  lng:  18.386689, name: 'Donji Pofalići' },
        { lat: 43.862146,  lng:  18.385337, name: 'Gornji Pofalići' },        
    ],

    8: [

        { lat: 43.847861,  lng: 18.367592, name: 'Otoka okretaljka' },
        { lat: 43.848341,  lng: 18.373042, name: 'Čengić vila 2' },
        { lat: 43.847194, lng:  18.373580, name: 'Bosmal' },
        { lat: 43.848368,  lng: 18.380006, name: '' },
        { lat: 43.846970, lng: 18.380800, name: 'A. Šačirbegović' },
        { lat: 43.847380, lng: 18.386357, name: 'Stadion Grbavica' },
        { lat: 43.850104, lng: 18.399580, name: 'Zagrebačka' },
        { lat: 43.852455, lng: 18.404334, name: 'Kovačići' },
        { lat: 43.855822, lng: 18.413311, name: 'Skenderija' },
        { lat: 43.857044, lng: 18.412727, name: 'Hamze Hume' },
        { lat: 43.866565, lng: 18.412342, name: 'Ciglane M' },
        { lat: 43.872479, lng: 18.412067, name: 'Stadion Koševo' },
        { lat: 43.876210, lng: 18.412754, name: 'Jezero' },     
    ],
    
    9: [
       
        { lat:43.859205, lng:  18.423605, name: 'Ž.stanica' },
        { lat: 43.855808,   lng:  18.4010949, name: '' },
        { lat: 43.855615, lng: 18.397652, name: 'Kampus' },
        { lat: 43.855658,   lng:  18.392129, name: 'Ekonomska škola' },
        { lat: 43.859717,  lng:  18.390719, name: 'Fabrika duhana' },
        { lat: 43.856453,  lng:  18.377840, name: 'Drinska' },
        { lat:43.854301, lng: 18.366869, name: 'Rampa' },
        { lat: 43.852998,   lng:  18.362361, name: 'Elektrotehnička' },
        { lat: 43.852063,  lng:  18.355742, name: 'Dolačka' },
        { lat: 43.851987, lng:  18.353010, name: 'Klesar' },  
        { lat: 43.852069,  lng:  18.345000, name: 'Boljakov potok' },     
        { lat: 43.852721, lng:  18.333987, name: 'Elektrotehna' },  
        { lat: 43.854401,  lng:  18.328828, name: 'Briješće I' },     
        { lat:43.862707,  lng: 18.316873, name: 'Sokolje' },     
        { lat:43.868633,  lng:  18.311394, name: 'Rajlovac' },     



    ],
};

