import Card from "./Card.js";
import {FormValidator} from "./FormValidator.js"
import {initialCards,config,
    cardContainer,profilePopup,profileContainer,profileButtonEdit,
    profileButtonClose,profileName, profileJob,popupName,popupDescription,
    modalButtonClose, modalPopup,modalPhoto,modalTitle,photoButtonAdd,
    photoButtonClose,photoPopup,nameInput,linkInput,} from "./const.js";
//
const validateProfile = new FormValidator(config,profilePopup);
const validatePhoto = new FormValidator(config,photoPopup);
validatePhoto.enableValidation()
validateProfile.enableValidation();

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
// Popup Photo
const handlerPhotoFormSubmit = (e) => {
    e.preventDefault()
    const item = {
        link: linkInput.value,
        name: nameInput.value
    }
    const newCard = addCard(item);
    cardContainer.prepend(newCard);
    validatePhoto.hideValidation()
    closePopup(photoPopup);
};
// Popup Profile
function handlerOpenProfile (e) {
    e.preventDefault();
    validateProfile.hideValidation()
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
//Открытие Popup
export const openPopup = (item) => {
    item.classList.add("popup_active");
    document.addEventListener("keydown", handlerClickEscape);
    document.addEventListener("mousedown", handlerClickWindow);
};
//Закрытие Popup
const closePopup = (item) => {
    item.classList.remove("popup_active");
    document.removeEventListener("keydown", handlerClickEscape);
    document.removeEventListener("click", handlerClickWindow);
};
const handlerCardPhoto = (e) =>{
    e.preventDefault()
    linkInput.value = ""
    nameInput.value = ""
    validatePhoto.hideValidation()
    openPopup(photoPopup)
};
//Закрытие Popup
function handlerClickEscape(e) {
    if (e.key === "Escape") {
        const removePopup = document.querySelector(".popup_active");
        closePopup(removePopup);
    }
}

function handlerClickWindow (e) {
    if (e.target.classList.contains("popup")) {
        closePopup(e.target);
    }
}
//Вызовы функций
photoPopup.addEventListener("submit",handlerPhotoFormSubmit);
photoButtonAdd.addEventListener("click", handlerCardPhoto);
profileContainer.addEventListener("submit", handlerFormSubmitProfile);
profileButtonEdit.addEventListener("click", handlerOpenProfile);
profileButtonClose.addEventListener("click", () => {
    closePopup(profilePopup);
});
modalButtonClose.addEventListener("click", () => {
    closePopup(modalPopup);
});
photoButtonClose.addEventListener("click", () => {
    closePopup(photoPopup);
});