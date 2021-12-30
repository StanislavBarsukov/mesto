const overlay = document.querySelector(".overlay");
const overlayOpen = "overlay_active"
const popup = document.querySelector(".popup");
const profileEdit = document.querySelector(".profile__edit");
const popupClose = document.querySelector(".popup__close");


let profileName = document.querySelector(".profile__name");
let profileJob = document.querySelector(".profile__job");
let popupName = document.querySelector(".popup__name");
let popupDescription = document.querySelector(".popup__description");

document.addEventListener("keydown", function (event){
    if (event.code === "Escape") {
    overlay.classList.remove(overlayOpen);
    }
});

profileEdit.addEventListener("click", function (event){
    event.preventDefault();
    overlay.classList.add(overlayOpen);
});

popupClose.addEventListener("click", function(){
    overlay.classList.remove(overlayOpen);
});

function formSubmitHandler (event) {
    event.preventDefault();
    profileName.textContent = popupName.value;
    profileJob.textContent = popupDescription.value;
    overlay.classList.remove(overlayOpen);
    
}

popup.addEventListener("submit", formSubmitHandler); 

