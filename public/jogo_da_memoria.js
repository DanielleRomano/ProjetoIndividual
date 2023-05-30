const grid = document.querySelector('.grid');

const itens = [
    'crayon',
    'oculos',
    'patinho',
    'polvi',
    'radio',
    'telefone',
    'trofeu',
    'videogame',
];

const createElement = (tag, className) => {
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

let firstCard = '';
let secondCard = '';

const checkEndGame = () => {
    const disabledCards = document.querySelectorAll('.disabled-card');

    if(disabledCards.length === 16){
        alert("E mais uma vez o quarto foi arrumado por você e pelas Meninas SuperPoderosas");
    }
}

const checkCards = () => {
    const firstItem = firstCard.getAttribute('data-fotos');
    const secondItem = secondCard.getAttribute('data-fotos');

    if(firstItem === secondItem) {
        firstCard.firstChild.classList.add('disabled-card');
        secondCard.firstChild.classList.add('disabled-card');

        firstCard = '';
        secondCard = '';

        checkEndGame();

    } else {
        setTimeout(() => {

        firstCard.classList.remove('reveal-card');
        secondCard.classList.remove('reveal-card');

        firstCard = '';
        secondCard = '';

        }, 500)
    }

}

const revealCard = ({target}) => {

    if(target.parentNode.className.includes('reveal-card')) {
        return;
    }

    if(firstCard === '') {

    target.parentNode.classList.add('reveal-card');
    firstCard = target.parentNode;

    } else if (secondCard === '') {

    target.parentNode.classList.add('reveal-card');
    secondCard = target.parentNode;

    checkCards();
    }
}

const createCard = (item) => {
    const card = createElement('div', 'card');
    const front = createElement('div', 'face front');
    const back = createElement('div', 'face back');

    front.style.backgroundImage = `url(./jogo/${item}.jpeg)`

    card.appendChild(front);
    card.appendChild(back);

    card.addEventListener('click', revealCard);
    card.setAttribute('data-fotos', item);

   return card;
}

const loadGame = () => {
    const duplicateItens = [...itens, ...itens];

    const shufledArray = duplicateItens.sort(() => Math.random() - 0.5);


    shufledArray.forEach((item) => {

        const card = createCard(item);
        grid.appendChild(card);
    });
}

loadGame();