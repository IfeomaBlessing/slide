let leftArrow = document.querySelector(" .fa-arrow-left");
let rightArrow = document.querySelector(" .fa-arrow-right");
let card = document.querySelectorAll(".card");


let X = 0;

leftArrow.addEventListener('click', function(){
    card[X].classList.remove('active');
    X = (X - 1 + card.length) % card.length; 
    card[X].classList.add('active');

    }

)


rightArrow.addEventListener('click', function(){
    card[X].classList.remove('active');
    X = (X + 1) % card.length; 
    card[X].classList.add('active');
  
    }
)