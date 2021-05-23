const hamburger = document.getElementById('hamburger');
const mobileMenue = document.getElementById('mobile-menue');

const changeBurger = ()=> {
    if(hamburger.classList.contains('change')) {
        hamburger.classList.remove('change');
        mobileMenue.classList.remove('active');
    } else {
        hamburger.classList.add('change');
        mobileMenue.classList.add('active');
    }   
}

hamburger.addEventListener('click', changeBurger);