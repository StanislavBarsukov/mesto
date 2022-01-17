//Объявление переменных const
const popup = document.querySelector(".popup");
const popupOpen = "popup_active"
const popupProfile = document.querySelector(".popup__container");
const profileEdit = document.querySelector(".profile__edit");
const popupCloseBtn = document.querySelector(".popup__close");
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
    popup.classList.add(popupOpen);
}
//Функция для его закрытия
function closePopup() {
    popup.classList.remove(popupOpen);
}
//Отправка и сохранение данных формы
function formSubmitHandler (event) {
    event.preventDefault();
    profileName.textContent = popupName.value;
    profileJob.textContent = popupDescription.value;
    popup.classList.remove(popupOpen);
}
//Вызовы функций
popupProfile.addEventListener("submit", formSubmitHandler);
profileEdit.addEventListener('click', openPopup);
popupCloseBtn.addEventListener("click", closePopup);
document.addEventListener("keydown", function (event){
    if (event.code === "Escape") {
        closePopup();
    }
});
document.addEventListener("mousedown", function (event){
    if (event.target === popup) {
        closePopup();
    }
});