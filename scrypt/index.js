import Card from "./Card.js";
import {initialCards} from "./const.js";
//Объявление переменных Popup Profile
const profilePopup = document.querySelector(".popup_type_profile");
const profileContainer = document.querySelector(".popup__container");
const profileButtonEdit = document.querySelector(".profile__edit");
const profileButtonClose = document.querySelector("#close-profile");
const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__job");
const popupName = document.querySelector("#name-form");
const popupDescription = document.querySelector("#job-form");
//Объявление переменных Popup view photo
const modalButtonClose = document.querySelector("#delete-modal");
const modalPopup = document.querySelector(".popup_type_modal");
const modalPhoto = document.querySelector(".modal__photo");
const modalTitle = document.querySelector(".modal__desc");
//Объявление переменных Popup Photo
const photoButtonAdd = document.querySelector(".profile__add-photo");
const photoButtonClose = document.querySelector("#close-photo");
const photoPopup = document.querySelector(".popup_type_photo");
const nameInput = document.querySelector("#name-place");
const linkInput = document.querySelector("#name-link");
//Переменные Card Photo
const cardContainer = document.querySelector(".gallery");

function addCard(item) {
    const card = new Card(item, "#card-template", handleShowPhoto);
    return card.generateCard();
}

initialCards.forEach(item => {
    const cardElement = addCard(item);
    cardContainer.append(cardElement);
});

function handleShowPhoto() {
    modalPhoto.src = this._link;
    modalPhoto.alt = this._name;
    modalTitle.textContent = this._name;
    openPopup(modalPopup);
}
// Popup Profile
function handlerOpenProfile (e) {
    e.preventDefault();
    popupName.value = profileName.textContent;
    popupDescription.value = profileJob.textContent;
    openPopup(profilePopup);
}

function handlerFormSubmitProfile (e) {
    e.preventDefault();
    profileName.textContent = popupName.value;
    profileJob.textContent = popupDescription.value;
    closePopup(profilePopup);
}
// Удаляем ошибки без сохранения валидации
const resetFormInput = (item) => {
    item.querySelector('form').reset();
};

//Открытие Popup
export const openPopup = (item) => {
    item.classList.add("popup_active");
    document.addEventListener("keydown", handlerClickEscape);
    document.addEventListener("click", handlerClickWindow);
};
//Закрытие Popup
const closePopup = (item) => {
    item.classList.remove("popup_active");
    document.removeEventListener("keydown", handlerClickEscape);
    document.removeEventListener("click", handlerClickWindow);
};
// Popup Photo
const handlerPhotoFormSubmit = (e) => {
    e.preventDefault()
    const item = {
        link: linkInput.value,
        name: nameInput.value
    }
    const newCard = addCard(item);
    cardContainer.prepend(newCard);
    closePopup(photoPopup);
};

const handlerCardPhoto = (e) =>{
    e.preventDefault()
    linkInput.value = ""
    nameInput.value = ""
    openPopup(photoPopup)
    resetFormInput(photoPopup)
};
//Закрытие Popup
function handlerClickEscape(e) {
    const removePopup = document.querySelector(".popup_active");
    if (removePopup && e.key === "Escape") {
        closePopup(removePopup);
    }
}

function handlerClickWindow (e) {
    if (e.target.classList.contains("popup")) {
        closePopup(e.target);
    }
}
//Вызовы функций
modalButtonClose.addEventListener("click", () => {
    closePopup(modalPopup);
});

photoPopup.addEventListener("submit",handlerPhotoFormSubmit);
photoButtonAdd.addEventListener("click", handlerCardPhoto);
photoButtonClose.addEventListener("click", () => {
    closePopup(photoPopup);
});
profileContainer.addEventListener("submit", handlerFormSubmitProfile);
profileButtonEdit.addEventListener("click", handlerOpenProfile);
profileButtonClose.addEventListener("click", () => {
    closePopup(profilePopup);
    resetFormInput(profilePopup);
});
