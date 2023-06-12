'use strict';

// Variables
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');

// To open the pop up window we remove the hidden class in
// HTML, which will make the overlay visible.
const OpenModal = function(){
    console.log(modal.classList.remove('hidden'));
    console.log(overlay.classList.remove('hidden'));
}

// To close the pop up window, we add the hidden class in 
// HTML, to make the overlay hidden.
const CloseModal = function(){
    console.log(modal.classList.add('hidden'));
    console.log(overlay.classList.add('hidden'));
}

// This will listen for the click event, that is this will
// listen to when the button is clicked.
for (let i = 0; i < btnOpenModal.length; i++)
    btnOpenModal[i].addEventListener('click', OpenModal)

btnCloseModal.addEventListener('click', CloseModal);
overlay.addEventListener('click', CloseModal);

// To close the popup window even if the escape key is pressed.
document.addEventListener('keydown', function(e){
    if (e.key === 'Escape'){
        if (!modal.classList.contains('hidden')){
            CloseModal();
        }
    }
} 
)


