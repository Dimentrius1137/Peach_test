import './src/scss/style.scss';
import './src/js/slider.js'
import './src/js/tabs.js'
import './src/js/menu.js'
import './src/js/card.js'
import '@splidejs/splide/css';
import '@splidejs/splide/css/skyblue';
import '@splidejs/splide/css/sea-green';
import '@splidejs/splide/css/core';
import Splide from "@splidejs/splide";

const slider = new Splide('#slider', {
    type   : 'loop',
    perPage: 1,
    pagination: true});

slider.mount();