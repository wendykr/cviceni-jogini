import { Header } from './Header/index.js';
import { Intro } from './Intro/index.js';
import { Pose } from './Pose/index.js';

const appElm = document.querySelector('#app');

const header = [
    {
        title: 'Jogíni',
        links: ['domů', 'lekce', 'náš tým', 'události', 'kontakt'],
    }
]

// const renderHeader = (items) => {
//     appElm.innerHTML = items
//         .map(oneHeader => Header(oneHeader))
//         .join('');
// }

const renderHeader = (items) => {
    appElm.innerHTML = Header({
        title: items[0].title,
        links: items[0].links,
    })
    console.log(items);
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

// const renderIntro = (items) => {
//     appElm.innerHTML += items
//         .map(oneIntro => Intro(oneIntro))
//         .join('');
// }

const renderIntro = (items) => {
    appElm.innerHTML += Intro({
        heading: items[0].heading,
        text: items[0].text,
    })
    console.log(items);
    console.log(items[0].heading);
}

renderIntro(intro);

const pose = [
    {
        src: 'img/yoga-pose.jpg',
    }
]

// const renderPose = (items) => {
//     appElm.innerHTML += items
//         .map(onePose => Pose(onePose))
//         .join('');
// }

const renderPose = (items) => {
    appElm.innerHTML += Pose({
        src: items[0].src,
    })
    console.log(items[0].src);
}

renderPose(pose);