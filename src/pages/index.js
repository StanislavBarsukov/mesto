import Card from "../components/Card.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import "./index.css"
import {
    initialCards,
    config,
    cardContainer,
    profileButtonEdit,
    profileName,
    profileJob,
    photoButtonAdd,
    nameInput,
    infoInput,
    popupPreviewSelector,
    popupPhotoSelector,
    popupProfileSelector
} from "../utils/constants.js";
const formValidators = {}
// Включение валидации
const enableValidation = (config) => {
    const formList = Array.from(document.querySelectorAll(config.formSelector))
    formList.forEach((formElement) => {
        const validator = new FormValidator(config, formElement)
        const formName = formElement.getAttribute('name')
        formValidators[formName] = validator;
        validator.enableValidation();
    });
};
enableValidation(config)

function addCard(item) {
    const card = new Card(item, "#card-template", handleShowPhoto);
    return card.generateCard();
}

const cardSection = new Section({
    items: initialCards,
    renderer: addCard
    },
    cardContainer);

const userInfo = new UserInfo({
    nameElement: profileName,
    infoElement: profileJob
});

function handleShowPhoto(link, name) {
    imagePopup.open(link,name)
}

const profilePopup = new PopupWithForm(popupProfileSelector, item => {
    userInfo.setUserInfo(item)
    profilePopup.close()
});

const addCardPopup = new PopupWithForm(popupPhotoSelector,item => {
    cardSection.addItem(addCard(item));
    addCardPopup.close()
});

const imagePopup = new PopupWithImage(popupPreviewSelector);

cardSection.renderItems();
profilePopup.setEventListeners();
addCardPopup.setEventListeners();
imagePopup.setEventListeners();

photoButtonAdd.addEventListener("click", () => {
    formValidators["popup-photo"].resetValidation()
    addCardPopup.open()
});

profileButtonEdit.addEventListener("click", () => {
    formValidators["popup-profile"].resetValidation()
    const {name, info} = userInfo.getUserInfo()
    nameInput.value = name;
    infoInput.value = info;
    profilePopup.open()
});
