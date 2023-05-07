import { Header } from './Header/index.js';
import { Intro } from './Intro/index.js';
import { Pose } from './Pose/index.js';

const header = [
    {
        title: 'Jogíni',
        links: ['domů', 'lekce', 'náš tým', 'události', 'kontakt'],
    }
]

const renderHeader = (items) => {

    const appElm = document.querySelector('#app');

    appElm.innerHTML = items
        .map(oneHeader => Header(oneHeader))
        .join('');
}

renderHeader(header);

const intro = [
    {
        heading: 'Vítejte mezi Jogíny',
        text: `Naše lekce jsou zaměřeny na potřeby klientů, kteří mají odvahu zkusit
            něco nového. Cvičíme v pomalém tempu s podrobným slovním doprovodem.
            Postupně se seznámíte se základními principy jógy, jak přístupovat k
            sobě i ostatním. Krok za krokem objevíte a dostanete pod kontrolu
            svoje tělo, pocity a emoce.`,
    }
]

const renderIntro = (items) => {

    const appElm = document.querySelector('#app');

    appElm.innerHTML += items
        .map(oneIntro => Intro(oneIntro))
        .join('');
}

renderIntro(intro);

const pose = [
    {
        src: 'img/yoga-pose.jpg',
    }
]

const renderPose = (items) => {

    const appElm = document.querySelector('#app');

    appElm.innerHTML += items
        .map(onePose => Pose(onePose))
        .join('');
}

renderPose(pose);