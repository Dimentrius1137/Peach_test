const dropDownBtn = document.querySelector('.dropdown-btn');
const menu = document.querySelector('.tabs__cities-container');
const btnArrow = document.querySelector('.dropdown-btn__img');
const mask = document.querySelector('.tabs__layer-outer');
const listContainer = document.querySelector('.tabs__cities-container');
const titles = document.querySelectorAll('.tabs__cities-title');
const lists = document.querySelectorAll('.tabs__cities-list');
function OpenMenu(){
    menu.classList.toggle('tabs__cities-container--open');
    mask.classList.toggle('tabs__layer-outer--open');
    btnArrow.classList.toggle('dropdown-btn__img--open');
}
dropDownBtn.addEventListener('click', OpenMenu);

function OpenList(el){
    if(el.target.classList.contains('tabs__cities-title--open')){
        el.target.classList.toggle('tabs__cities-title--open');
        lists.forEach((el) => el.classList.remove('tabs__cities-list--open'))
        return
    }
    if(el.target.classList.contains('tabs__cities-title')){
        el.target.classList.toggle('tabs__cities-title--open');
        const currentList = [...titles].indexOf(el.target) - 1;
        lists.forEach((el) => el.classList.remove('tabs__cities-list--open'))
        lists[currentList].classList.add('tabs__cities-list--open');
        return
    }

}
listContainer.addEventListener('click', OpenList);
