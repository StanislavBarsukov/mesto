const overlay = document.querySelector(".overlay");
const overlayOpen = "overlay_active"
const popup = document.querySelector(".popup");
const profileEdit = document.querySelector(".profile__edit");
const popupClose = document.querySelector(".popup__close");


let profileName = document.querySelector(".profile__name");
let profileJob = document.querySelector(".profile__job");
let popupName = document.querySelector("#name-form");
let popupDescription = document.querySelector("#job-form");

document.addEventListener("keydown", function (event){
    if (event.code === "Escape") {
    overlay.classList.remove(overlayOpen);
    }
});

function openPopup (evt) {
    evt.preventDefault();
    popupName.value = profileName.textContent;
    popupDescription.value = profileJob.textContent;
    overlay.classList.add(overlayOpen);
}

function formSubmitHandler (event) {
    event.preventDefault();
    profileName.textContent = popupName.value;
    profileJob.textContent = popupDescription.value;
    overlay.classList.remove(overlayOpen);
    
}

popup.addEventListener("submit", formSubmitHandler);
popupClose.addEventListener("click", formSubmitHandler);
profileEdit.addEventListener('click', openPopup);
