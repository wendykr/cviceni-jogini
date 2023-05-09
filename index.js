import { Header } from './Header/index.js';
import { Intro } from './Intro/index.js';
import { Pose } from './Pose/index.js';

const appElm = document.querySelector('#app');

const header = {
    title: 'Jogíni',
    links: ['domů', 'lekce', 'náš tým', 'události', 'kontakt'],
}

const renderHeader = (items) => {
    appElm.innerHTML = Header({
        title: items.title,
        links: items.links,
    })
}

renderHeader(header);

const intro = {
    heading: 'Vítejte mezi Jogíny',
    text: `Naše lekce jsou zaměřeny na potřeby klientů, kteří mají odvahu zkusit
            něco nového. Cvičíme v pomalém tempu s podrobným slovním doprovodem.
            Postupně se seznámíte se základními principy jógy, jak přístupovat k
            sobě i ostatním. Krok za krokem objevíte a dostanete pod kontrolu
            svoje tělo, pocity a emoce.`,
}

const renderIntro = (items) => {
    appElm.innerHTML += Intro({
        heading: items.heading,
        text: items.text,
    })
}

renderIntro(intro);

const pose = {
    src: 'img/yoga-pose.jpg',
}

const renderPose = (items) => {
    appElm.innerHTML += Pose({
        src: items.src,
    })
}

renderPose(pose);