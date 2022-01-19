//Объявление переменных const
const popup = document.querySelector("#popup-profile");
const popupOpen = "popup_active"
const popupProfile = document.querySelector(".popup__container");
const profileEdit = document.querySelector(".profile__edit");
const popupCloseBtn = document.querySelector("#close-profile");
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
profileEdit.addEventListener("click", openPopup);
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

// Добавление фото в разметку

const initialCards = [
  {
      name: "Архыз",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"
  }
];

const cardContainer = document.querySelector(".gallery");
const cardTemplate = document.querySelector("#card-template").content;
const popupPhotoOpen = document.querySelector(".profile__add-photo");
const popupPhotoClose= document.querySelector("#close-photo");
const popupPhoto = document.querySelector("#popup-photo");
const photoName = document.querySelector("#name-place");
const photoLink = document.querySelector("#name-link");
const photoCont = document.querySelector("#photo-container");

function closePhoto(){
    popupPhoto.classList.remove(popupOpen);
}
function openPhoto(){
    popupPhoto.classList.add(popupOpen);
}
popupPhotoOpen.addEventListener("click", openPhoto);
popupPhotoClose.addEventListener("click",closePhoto);

initialCards.forEach(function(element) {
    const cardElement = cardTemplate.cloneNode(true);
    cardElement.querySelector(".card__title").textContent = element.name
    cardElement.querySelector(".card__photo").src = element.link
    cardElement.querySelector(".card__like").addEventListener("click", function (e) {
        e.target.classList.toggle("card__like_active");
    });
    cardElement.querySelector(".card__delete-btn").addEventListener('click', function () {
    const cardItem =  document.querySelectorAll('.card');
    for (let i = 0; i < cardItem.length; i--) {
        cardItem[i].remove()
    }
        });
    cardContainer.append(cardElement)
});
