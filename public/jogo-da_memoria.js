const grid = document.querySelector('.grid');

const fotos = [
    'foto1',
    'foto1',
    'foto1',
    'foto1',
    'foto1',
    'foto1',
    'foto1',
    'foto1',
];

const createElement = (tag, className) => {
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

const checkEndGame = () => {
    const disabledCards = document.querySelectorAll('.disabled-card');

    if(disabledCards.length == 20){
        alert("E mais uma vez o quarto foi arrumado por você e pelas Meninas SuperPoderosas");
    }
}

const checkCards = () => {
    const firstFoto = firstCard.getAttribute('data-fotos');
    const secondFoto = secondCard.getAttribute('data-fotos');

    if(firstFoto == secondFoto) {
        firstCard.firstChild.classList.add('disabled-card');
        secondCard.firstChild.classList.add('disabled-card');

        firstCard = '';
        secondCard = '';

        checkEndGame();

    } else {
        setTimeout(() => {firstCard.classList.remove('reveal-card');
        secondCard.classList.remove('reveal-card');
        firstCard = '';
        secondCard = '';
}, 500)
    }

}

let firstCard = '';
let secondCard = '';

const reavealcard = ({target}) => {

    if(target.parentNode.className.includes('reveal-card')) {
        return;
    }

    if(firstCard == '') {
    target.parentNode.classList.add('reveal-card');
    firstCard = target.parentNode;
    } else if (secondCard == '') {
    target.parentNode.classList.add('reveal-card');
    secondCard = target.parentNode;

    checkCards();
    }

    target.parentNode.classList.add('reveal-card');
}

const createCard = (foto) => {
    const card = createElement('div', 'card');
    const front = createElement('div', 'face front');
    const back = createElement('div', 'face back');

    front.style.backgroundImage = `url(../fotos/${foto})`

    card.appendChild(front);
    card.appendChild(back);

    card.addEventListener('click', reavealcard);
    card.setAttribute('data-fotos', fotos);

   return card;
}

const loadGame = () => {
    const duplicateFotos = [...fotos, ...fotos];

    const shufledArray = duplicateFotos.sort(() => Math.random() - 0.5);


    shufledArray.forEach((foto) => {

        const card = createCard(foto);
        grid.appendChild(card);
    });
}

loadGame();