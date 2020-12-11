const cookieContainer = document.querySelector(".cookies-container")
const cookieButtonAccept = document.querySelector(".boutons")

cookieButtonAccept.addEventListener("click", () => {
    cookieContainer.classList.remove("active");
    localStorage.setItem("cookieBannerDisplayed", "true")
});

setTimeout( () => {
    cookieContainer.classList.add("active");
}, 1750 );