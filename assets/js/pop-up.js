const openButton = document.querySelector('#btn-open');
const closeButton = document.querySelector('#btn-close');
const popUp = document.querySelector("#pop-up-discord");
console.log("Salut");
function onclickButton (){
    popUp.classList.remove('display-discord');
}

openButton.addEventListener('click', onclickButton);