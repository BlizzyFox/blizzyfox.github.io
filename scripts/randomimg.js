const images = [
    'homeimages/vrchat-2026-05-15-04-54-11-587-3840x2160-large.webp',
    'homeimages/1788112186.blizzyfoxo_newfacerenderw.jpg',
    'homeimages/FireworksLandscape.jpg',
    'homeimages/1784907746.blizzyfoxo_screenwaveneorender.jpg',
    'homeimages/1784861561.blizzyfoxo_poolparty__medium_.webp',
    'homeimages/1784856197.blizzyfoxo_thebrainismadeofwater.webp',
    'homeimages/1784856963.blizzyfoxo_blizzysroom2023watermark.webp'
];

document.addEventListener('DOMContentLoaded', () => {
    const randomIndex = Math.floor(Math.random() * images.length);
    const imageElement = document.getElementById('randomImage');
    imageElement.src = images[randomIndex];
})