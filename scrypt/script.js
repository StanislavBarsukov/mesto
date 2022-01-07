//Объявление переменных const
const overlay = document.querySelector(".overlay");
const overlayOpen = "overlay_active"
const popup = document.querySelector(".popup");
const profileEdit = document.querySelector(".profile__edit");
const popupClose = document.querySelector(".popup__close");
//Объявление переменных let
let profileName = document.querySelector(".profile__name");
let profileJob = document.querySelector(".profile__job");
let popupName = document.querySelector("#name-form");
let popupDescription = document.querySelector("#job-form");
//Функция открытия Popup
function openPopup (evt) {
    evt.preventDefault();
    popupName.value = profileName.textContent;
    popupDescription.value = profileJob.textContent;
    overlay.classList.add(overlayOpen);
}
//Функция для его закрытия
function closePopup() {
    overlay.classList.remove(overlayOpen);
}
//Отправка и сохранение данных формы
function formSubmitHandler (event) {
    event.preventDefault();
    profileName.textContent = popupName.value;
    profileJob.textContent = popupDescription.value;
    overlay.classList.remove(overlayOpen);
}
//Вызовы функций
popup.addEventListener("submit", formSubmitHandler);
profileEdit.addEventListener('click', openPopup);
popupClose.addEventListener("click", closePopup);
document.addEventListener("keydown", function (event){
    if (event.code === "Escape") {
        closePopup();
    }
});
document.addEventListener("mousedown", function (event){
    if (event.target ===overlay) {
        closePopup();
    }
});