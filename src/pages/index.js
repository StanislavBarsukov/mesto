import Card from "../components/Card.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import "./index.css"
import { initialCards,
    config,
    cardContainer,
    profileTypePopup,
    profileButtonEdit,
    profileName,
    profileJob,
    modalPopup,
    photoButtonAdd,
    nameInput,
    linkInput,
    photoPopup} from "../utils/constants.js";
const validateProfile = new FormValidator(config,profileTypePopup);
const validatePhoto = new FormValidator(config,photoPopup);
const validateModal = new FormValidator(config,modalPopup);
validatePhoto.enableValidation();
validateProfile.enableValidation();
validateModal.enableValidation();

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

const profilePopup = new PopupWithForm(profileTypePopup, item => {
    userInfo.setUserInfo(item)
    profilePopup.close()
});

const addCardPopup = new PopupWithForm(photoPopup,item => {
    cardSection.addItem(addCard(item));
    addCardPopup.close()
});

const imagePopup = new PopupWithImage(modalPopup);

cardSection.renderItems();
profilePopup.setEventListeners();
addCardPopup.setEventListeners();
imagePopup.setEventListeners();

photoButtonAdd.addEventListener("click", () => {
    addCardPopup.open()
    validatePhoto.hideValidation()
});

profileButtonEdit.addEventListener("click", () => {
    profilePopup.open()
    validateProfile.hideValidation();
    linkInput.value = userInfo.getUserInfo().infoElement;
    nameInput.value = userInfo.getUserInfo().nameElement;
});
