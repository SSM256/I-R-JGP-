console.log('JavaScript is connected!');
const stajalista = [
    // STAJALISTE VIJECNICA
    { naziv: "Vijećnica", 
        linije: [
            { id: 1, naziv: "27E" }, 
            { id: 2, naziv: "T3" }, 
            { id: 5, naziv: "Linija 5" }
        ] 
    },
    { naziv: "Park", 
        linije: [
            { id: 1, naziv: "27E" }, 
            { id: 2, naziv: "T3" }, 
            { id:4 , naziv: "14" }
        ] 
    },
    { naziv: "Ilidža", linije: [{ id: 3, naziv: "27" }, { id: 4, naziv: "Linija 4" }] },
    { naziv: "Pofalići", linije: [{ id: 1, naziv: "Linija 1" }, { id: 3, naziv: "Linija 3" }] },
    { naziv: "Avijatičarski Most", linije: [{ id: 7, naziv: "Linija 7" }, { id: 8, naziv: "Linija 8" }] },
    { naziv: "Španjolski Trg", linije: [{ id: 2, naziv: "Linija 2" }, { id: 6, naziv: "Linija 6" }] }
];

const lines = [
    { id:'1', number: '27E', name: 'Baščaršija - Hrasnica' },
    { id:'2', number: 'T3', name: 'Baščaršija - Ilidža' },
    { id:'3', number: '27', name: 'Ilidža - Hrasnica' },
    { id:'4', number: '14', name: 'Dom Armije - Podhrastovi' },
    { id:'5', number: '23a', name: 'Park - Jagomir' },
    { id:'6', number: '23b', name: 'Dom Armije-Koševsko brdo' },
    { id:'7', number: '23c', name: 'Dom Armije-Koševsko brdo' },
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


};

