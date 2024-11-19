const cards = document.querySelector('.card__container');
const cardArrows = document.querySelectorAll('.block__content-pin');
const cardBlock = document.querySelectorAll('.block');
const cardTitle = document.querySelectorAll('.block__content-title');
const cardPin = document.querySelectorAll('.block__content-pin');
console.log(cardBlock.length)
function OpenCard(el){
    if(!el.target.classList.contains('card__container')){
        const currentCard = [...cardTitle].indexOf(el.target);
        cardBlock[currentCard].classList.toggle('block--open');
        cardPin[currentCard].classList.toggle('block__content-pin--open');
        console.log(currentCard)

    }
}
cards.addEventListener('click', OpenCard);