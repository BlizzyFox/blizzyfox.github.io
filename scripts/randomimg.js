const images = [
    'https://cdnb.artstation.com/p/assets/images/images/099/262/195/large/wezley-mitchell-vrchat-2026-05-15-04-54-11-587-3840x2160-large.jpg?1779403049',
    'homeimages/1788112186.blizzyfoxo_newfacerenderw.jpg',
    'homeimages/1787121825.blizzyfoxo_fireworkswatermark.jpg',
    'homeimages/1784907746.blizzyfoxo_screenwaveneorender.jpg',
    'homeimages/1784861561.blizzyfoxo_poolparty__medium_.webp'
];

document.addEventListener('DOMContentLoaded', () => {
    const randomIndex = Math.floor(Math.random() * images.length);
    const imageElement = document.getElementById('randomImage');
    imageElement.src = images[randomIndex];
})