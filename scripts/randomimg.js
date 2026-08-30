const images = [
    'https://cdnb.artstation.com/p/assets/images/images/099/262/195/large/wezley-mitchell-vrchat-2026-05-15-04-54-11-587-3840x2160-large.jpg?1779403049',
    'https://d.furaffinity.net/art/blizzyfoxo/1784861561/1784861561.blizzyfoxo_poolparty__medium_.png',
    'https://d.furaffinity.net/art/blizzyfoxo/1731535826/1731535826.blizzyfoxo_theagent.png',
    'https://d.furaffinity.net/art/blizzyfoxo/1788112186/1788112186.blizzyfoxo_newfacerenderw.jpg'
];

document.addEventListener('DOMContentLoaded', () => {
    const randomIndex = Math.floor(Math.random() * images.length);
    const imageElement = document.getElementById('randomImage');
    imageElement.src = images[randomIndex];
})