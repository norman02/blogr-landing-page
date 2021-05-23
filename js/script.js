const hamburger = document.getElementById('hamburger');

const changeBurger = ()=> {
    if(hamburger.classList.contains('change')) {
        hamburger.classList.remove('change');
    } else {
        hamburger.classList.add('change');
    }   
}

hamburger.addEventListener('click', changeBurger);