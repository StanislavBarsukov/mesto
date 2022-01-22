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
        title: "Архыз",
        link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"
    },
    {
        title: "Челябинская область",
        link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"
    },
    {
        title: "Иваново",
        link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"
    },
    {
        title: "Камчатка",
        link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"
    },
    {
        title: "Холмогорский район",
        link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"
    },
    {
        title: "Байкал",
        link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"
    }
];
//
const popupPhotoOpen = document.querySelector(".profile__add-photo");
const popupPhotoClose= document.querySelector("#close-photo");
const popupPhoto = document.querySelector("#popup-photo");
const nameInput = document.querySelector("#name-place");
const linkInput = document.querySelector("#name-link");

const handlerOpenPhoto = (e) =>{
    e.preventDefault()
    popupPhoto.classList.add(popupOpen);
}
popupPhotoOpen.addEventListener("click", handlerOpenPhoto);

const  handlerClosePhoto = (e) =>{
    e.preventDefault()
    popupPhoto.classList.remove(popupOpen);
}
popupPhotoClose.addEventListener("click",handlerClosePhoto);
//Переменные
const cardContainer = document.querySelector(".gallery");
const cardTemplate = document.querySelector("#card-template")
    .content.querySelector(".card")



const renderCard = (item, photo) =>{
    const card = cardTemplate.cloneNode(true);
    const cardPhoto = card.querySelector(".card__photo");
    const cardTitle = card.querySelector(".card__title");
    const cardLikeButton = card.querySelector(".card__like");
    const cardDeleteButton = card.querySelector(".card__delete-btn");
    cardPhoto.src = item.link;
    cardTitle.textContent = item.title;
    cardLikeButton.addEventListener("click",handelLikeButton);
    cardDeleteButton.addEventListener("click",handelDeleteButton);
    photo.prepend(card);
}
const handelLikeButton = (e) =>{
    e.target.classList.toggle("card__like_active");
}
const handelDeleteButton = (e) => {
    e.target.closest(".card").remove();
}
const handlerPhotoFormSubmit = (e) => {
    e.preventDefault()
    const newCard = {
        link: linkInput.value,
        title: nameInput.value
    }
    popupPhoto.classList.remove(popupOpen);
   renderCard(newCard,cardContainer);
}

initialCards.forEach(item => {
    renderCard(item, cardContainer)
});

popupPhoto.addEventListener("submit",handlerPhotoFormSubmit);









