import Api from "../components/Api";
import Card from "../components/Card.js";
import Section from "../components/Section.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithConform from "../components/PopupWithConform.js";
import UserInfo from "../components/UserInfo.js";

import "./index.css"

import {
    buttonAvatar,
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
    popupProfileSelector,
    avatarProfile,
    popupAvatarSelector,
    popupDeleteSelector
} from "../utils/constants.js";

let userId;
const formValidators = {}

const api = new Api({
    url: 'https://mesto.nomoreparties.co/v1/cohort-41',
    headers: {
        authorization: 'edbcfffa-fd7f-40f5-bcf0-f7031d29761f',
        'Content-Type': 'application/json'
    }
});

const userInfo = new UserInfo({
    nameElement: profileName,
    infoElement: profileJob,
    avatarElement: avatarProfile
});

const cardSection = new Section({
        renderer: (card) => {
            cardSection.addItem(renderCard(card)
            )}
    },
    cardContainer);

function renderCard(item) {
    const card = new Card({
        data:item,
        userId: userId,
        cardSelector: "#card-template",
        handleShowPhoto: () => {
            imagePopup.open(item.link,item.name)
        },
        handleCardRemove:(cardId) => {
            popupConform.deleteLoading(true)
            popupConform.open()
            popupConform.submitCallback(() =>{
                api.deleteCard(cardId)
                    .then(() => {
                        popupConform.close()
                        card.deleteCard()
                    })
                    .catch((err) => {
                        console.log(`Ошибка: ${err}`)
                    })
                    .finally(() => {
                        popupConform.deleteLoading(false)
                    });
            })
        },
        handleCardAddLike: (cardId) => {
                api.addLike(cardId)
                    .then((res) => {
                        card.handleLikesCard(res)
                    })
                    .catch((err) => {
                        console.log(`Ошибка: ${err}`)
                    })
        },
        handleCardRemoveLike:(cardId) =>{
            api.deleteLike(cardId)
                .then((res) => {
                    card.handleLikesCard(res)
                })
                .catch((err) => {
                    console.log(`Ошибка: ${err}`)
                })
        },
    })
     return card.generateCard();
}

const enableValidation = (config) => {
    const formList = Array.from(document.querySelectorAll(config.formSelector))
    formList.forEach((formElement) => {
        const validator = new FormValidator(config, formElement)
        const formName = formElement.getAttribute('name')
        formValidators[formName] = validator;
        validator.enableValidation();
    });
};

const imagePopup = new PopupWithImage(popupPreviewSelector);

const popupConform = new PopupWithConform(popupDeleteSelector)

const profilePopup = new PopupWithForm(popupProfileSelector, item => {
    profilePopup.renderLoading(true)
    api.getUpdateUser(item)
        .then((res) => {
            userInfo.setUserInfo(res)
            profilePopup.close()
        })
        .catch((err) => {
            console.log(`Ошибка: ${err}`)
        })
        .finally(() => {
            profilePopup.renderLoading(false)
        });
});

const addCardPopup = new PopupWithForm(popupPhotoSelector,item => {
    addCardPopup.renderLoading(true)
    api.getUpdateCard(item)
        .then((res) => {
            cardSection.addItem(renderCard(res));
            addCardPopup.close()
        })
        .catch((err) => {
            console.log(`Ошибка: ${err}`)
        })
        .finally(() => {
            addCardPopup.renderLoading(false)
        });
});

const avatarPopup = new PopupWithForm (popupAvatarSelector, item => {
        avatarPopup.renderLoading(true)
        api.updateAvatar(item.avatar)
            .then((res) => {
                userInfo.setUserInfo(res)
                avatarPopup.close();
            })
            .catch((err) => {
                console.log(`Ошибка: ${err}`)
            })
            .finally(() => {
                avatarPopup.renderLoading(false)
            });
});

enableValidation(config);
imagePopup.setEventListeners();
popupConform.setEventListeners();
profilePopup.setEventListeners();
addCardPopup.setEventListeners();
avatarPopup.setEventListeners();

photoButtonAdd.addEventListener("click", () => {
    formValidators["popup-photo"].resetValidation()
    addCardPopup.open()
});

buttonAvatar.addEventListener("click", () => {
    formValidators["popup-avatar"].resetValidation()
    avatarPopup.open();
});

profileButtonEdit.addEventListener("click", () => {
    formValidators["popup-profile"].resetValidation()
    const {name, about} = userInfo.getUserInfo()
    nameInput.value = name;
    infoInput.value = about;
    profilePopup.open()
});

Promise.all([api.getInitialCards(), api.getInitialUser()])
    .then(([card, userData]) => {
        userInfo.setUserInfo(userData);
        cardSection.renderItems(card);
        userId = userData._id;
    })
    .catch((err) => {
        console.log(`Ошибка: ${err}`);
    });