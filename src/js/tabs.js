const tabsList = document.querySelector('.tabs__menu-list');
const tabContent = document.querySelector('.tabs-content__image');
const tabBtns = document.querySelectorAll('.tabs__menu-button');
const tabImages = document.querySelectorAll('.tabs__content-image');
function ChooseMap(el){
    const currentTabIdx = [...tabBtns].indexOf(el.target); 
    if(el.target.classList.contains('tabs__menu-button')){
        tabBtns.forEach((tab) => {
            tab.classList.remove('tabs__menu-button--active');
        })
        el.target.classList.add('tabs__menu-button--active');

        tabImages.forEach((image) => {
            image.classList.remove('tabs__content-image--visible');
        })
        tabImages[currentTabIdx].classList.add('tabs__content-image--visible');
    }
    
}
tabsList.addEventListener('click', ChooseMap);


//альтернативный способ без замены картинок
// function ChooseMap(el){
//     if(el.target.classList.contains('tabs__menu-button')){
//         tabBtns.forEach((tab) => {
//             tab.classList.remove('button--active');
//         })
//         el.target.classList.add('button--active');
//         const currentMap = [...tabBtns].indexOf(el.target) + 1;
//         tabContent.src = `/images/map${currentMap}.png`;
//     }
// }

