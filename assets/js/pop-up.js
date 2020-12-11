const openButton = document.querySelector('#btn-open');
const closeButton = document.querySelector('#btn-close');
const popUp = document.querySelector("#pop-up-discord");
/* Bouton de Google Classroom */
const openButtonClassroom = document.querySelector('#btn-open-classroom');
const closeButtonClassroom = document.querySelector('#btn-close-classroom');
const popUpClassroom = document.querySelector('#pop-up-classroom');
/* Bouton de Google Meet */
const openButtonMeet = document.querySelector('#btn-open-meet');
const closeButtonMeet = document.querySelector('#btn-close-meet');
const popUpMeet = document.querySelector('#pop-up-meet');
/* Bouton de Zoom*/
const openButtonZoom = document.querySelector('#btn-open-zoom');
const closeButtonZoom = document.querySelector('#btn-close-zoom');
const popUpZoom = document.querySelector('#pop-up-zoom');
/* Bouton de Microsoft Teams*/
const openButtonTeams = document.querySelector('#btn-open-microsoft-teams');
const closeButtonTeams = document.querySelector('#btn-close-microsoft-teams');
const popUpTeams= document.querySelector('#pop-up-microsoft-teams');
/* Bouton de Kahoot*/
const openButtonKahoot = document.querySelector('#btn-open-kahoot');
const closeButtonKahoot = document.querySelector('#btn-close-kahoot');
const popUpKahoot= document.querySelector('#pop-up-kahoot');

function onclickOpenButton() {
    popUp.classList.remove('display-discord');
}
openButton.addEventListener('click', onclickOpenButton);

function onclickCloseButton() {
    popUp.classList.add('display-discord');
}
closeButton.addEventListener('click', onclickCloseButton);

/* Function pour Google Classroom */
function onclickOpenButtonClassroom() {
    popUpClassroom.classList.remove('display-classroom');
}
openButtonClassroom.addEventListener('click', onclickOpenButtonClassroom);

function onclickCloseButtonClassroom() {
    popUpClassroom.classList.add('display-classroom');
}
closeButtonClassroom.addEventListener('click', onclickCloseButtonClassroom);

/* Fonction pour Google Meet */
function onclickOpenButtonMeet() {
    popUpMeet.classList.remove('display-meet');
}
openButtonMeet.addEventListener('click', onclickOpenButtonMeet);

function onclickCloseButtonMeet() {
    popUpMeet.classList.add('display-meet');
}
closeButtonMeet.addEventListener('click', onclickCloseButtonMeet);

/* Fonction pour Zoom */
function onclickOpenButtonZoom() {
    popUpZoom.classList.remove('display-zoom');
}
openButtonZoom.addEventListener('click', onclickOpenButtonZoom);

function onclickCloseButtonZoom() {
    popUpZoom.classList.add('display-zoom');
}
closeButtonZoom.addEventListener('click', onclickCloseButtonZoom);
/* Fonction pour Teams */
function onclickOpenButtonTeams() {
    popUpTeams.classList.remove('display-microsoft-teams');
}
openButtonTeams.addEventListener('click', onclickOpenButtonTeams);

function onclickCloseButtonTeams() {
    popUpTeams.classList.add('display-microsoft-teams');
}
closeButtonTeams.addEventListener('click', onclickCloseButtonTeams);
/* Fonction pour Kahoot */
function onclickOpenButtonKahoot() {
    popUpKahoot.classList.remove('display-kahoot');
}
openButtonKahoot.addEventListener('click', onclickOpenButtonKahoot);

function onclickCloseButtonKahoot() {
    popUpKahoot.classList.add('display-kahoot');
}
closeButtonKahoot.addEventListener('click', onclickCloseButtonKahoot);

