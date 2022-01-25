//Объявление переменных Popup Profile
const popup = document.querySelector("#popup-profile");
const popupOpen = "popup_active"
const popupProfile = document.querySelector(".popup__container");
const profileEdit = document.querySelector(".profile__edit");
const popupCloseBtn = document.querySelector("#close-profile");
let profileName = document.querySelector(".profile__name");
let profileJob = document.querySelector(".profile__job");
let popupName = document.querySelector("#name-form");
let popupDescription = document.querySelector("#job-form");
//Объявление переменных Popup Photo
const popupPhotoOpen = document.querySelector(".profile__add-photo");
const popupPhotoClose= document.querySelector("#close-photo");
const popupPhoto = document.querySelector("#popup-photo");
const nameInput = document.querySelector("#name-place");
const linkInput = document.querySelector("#name-link");
//Объявление переменных Popup view photo
const modalOpen = document.querySelector(".modal");
const modalClose = document.querySelector(".modal__button");
const modalActive ="modal_active";
const modalImg = document.querySelector(".modal__container");
// Массив с фото
const initialCards = [
    {
        title: "Рязань",
        link: "https://images.unsplash.com/photo-1613411278232-e29e3506f4fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3111&q=80"
    },
    {
        title: "Санкт-Петербург",
        link: "https://images.unsplash.com/photo-1551709076-89f2499d383b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
    },
    {
        title: "Иваново",
        link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"
    },
    {
        title: "Москва",
        link: "https://images.unsplash.com/photo-1531168738274-aa9955d5033f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
    },
    {
        title: "Холмогорский район",
        link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"
    },
    {
        title: "Карелия",
        link: "https://images.unsplash.com/photo-1559029884-4e34093db5b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80"
    }
];
//Переменные Card Photo
const cardContainer = document.querySelector(".gallery");
const cardTemplate = document.querySelector("#card-template")
    .content.querySelector(".card")

// Popup Profile
function openPopup (evt) {
    evt.preventDefault();
    popupName.value = profileName.textContent;
    popupDescription.value = profileJob.textContent;
    popup.classList.add(popupOpen);
}

function closePopup() {
    popup.classList.remove(popupOpen);
}

function formSubmitHandler (event) {
    event.preventDefault();
    profileName.textContent = popupName.value;
    profileJob.textContent = popupDescription.value;
    popup.classList.remove(popupOpen);
}
// Добавление фото в разметку
const createCardElement = (item) => {
    const card = cardTemplate.cloneNode(true);
    const cardPhoto = card.querySelector(".card__photo");
    const cardTitle = card.querySelector(".card__title");
    const cardLikeButton = card.querySelector(".card__like");
    const cardDeleteButton = card.querySelector(".card__delete-btn");
    const cardModalPhoto = card.querySelector(".card__photo");
    cardPhoto.src = item.link;
    cardTitle.textContent = item.title;
    cardPhoto.alt = item.title;
    cardModalPhoto.addEventListener("click", handelModalPhoto);
    cardLikeButton.addEventListener("click",handelLikeButton);
    cardDeleteButton.addEventListener("click",handelDeleteButton);

    return card;
}

const renderCard = (item, photo) => {
    const card = createCardElement(item)
    photo.prepend(card)
}

const handelLikeButton = (e) =>{
    e.target.classList.toggle("card__like_active");
}

const handelDeleteButton = (e) => {
    e.target.closest(".card").remove();
}

initialCards.forEach(item => {
    renderCard(item, cardContainer)
});
// Popup Photo
const handlerPhotoFormSubmit = (e) => {
    e.preventDefault()
    const newCard = {
        link: linkInput.value,
        title: nameInput.value
    }
    popupPhoto.classList.remove(popupOpen);
    renderCard(newCard,cardContainer);
}
const handlerCardPhoto = (e) =>{
    e.preventDefault()
    linkInput.value = ""
    nameInput.value = ""
    popupPhoto.classList.add(popupOpen);
}
//Popup view photo
function handelModalPhoto(item) {
    item.preventDefault();
    openPopupModal()
    if(item.target.nodeName === 'IMG') {
        modalImg.querySelector('.modal__photo').src = item.target.src;
        modalImg.querySelector('.modal__photo').alt = item.target.alt;
        modalImg.querySelector('.modal__title').textContent = item.target.alt;
    }
}

const  handlerClosePhoto = (e) =>{
    e.preventDefault()
    popupPhoto.classList.remove(popupOpen);
}

//Popup view photo
const openPopupModal = () => {
    modalOpen.classList.add(modalActive);
}
const closePopupModal = () => {
    modalOpen.classList.remove(modalActive);
}

//Вызовы функций
modalClose.addEventListener("click",closePopupModal);
popupPhoto.addEventListener("submit",handlerPhotoFormSubmit);
popupPhotoOpen.addEventListener("click", handlerCardPhoto);
popupPhotoClose.addEventListener("click",handlerClosePhoto);
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