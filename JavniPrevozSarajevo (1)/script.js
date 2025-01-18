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
    { naziv: "Ilidža", linije: [{ id: 3, naziv: "27" }, { id: 4, naziv: "Linija 4" }] },
    { naziv: "Rondoa", linije: [{ id: 1, naziv: "Linija 1" }, { id: 3, naziv: "Linija 3" }] },
    { naziv: "Avijatičarski Most", linije: [{ id: 7, naziv: "Linija 7" }, { id: 8, naziv: "Linija 8" }] },
    { naziv: "Španjolski Trg", linije: [{ id: 2, naziv: "Linija 2" }, { id: 6, naziv: "Linija 6" }] }
];

const lines = [
    { id:'1', number: '27E', name: 'Baščaršija - Hrasnica' },
    { id:'2', number: 'T3', name: 'Baščaršija - Ilidža' },
    { id:'3', number: '27', name: 'Ilidža - Hrasnica' },
    { id:'4', number: 'T3', name: 'Baščaršija - Ilidža' },
    { id:'5', number: '23a', name: 'Dom Armije - Koševsko brdo' },
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
};

