'use strict;'

const showModal = document.querySelectorAll('.show-modal')
const hidden = document.querySelector('.hidden')
const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const closeBtn = document.querySelector('.close-modal')

const closeModal = function(){
    modal.classList.add("hidden")
    overlay.classList.add('hidden')
}
const openModals = function(){
    modal.classList.remove("hidden")
    overlay.classList.remove('hidden')
}
for(let i = 0;i<showModal.length;i++){
    showModal[i].addEventListener('click',openModals)

    document.addEventListener('keydown',function(e){
        if(e.key == "Escape" && !modal.classList.contains('hidden')){
            closeModal();
        }
    })
}

closeBtn.addEventListener('click',closeModal)
overlay.addEventListener('click',closeModal)