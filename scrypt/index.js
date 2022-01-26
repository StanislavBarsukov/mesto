//Объявление переменных Popup Profile
const profilePopup = document.querySelector(".popup_profile");
const profileContainer = document.querySelector(".popup__container");
const profileButtonEdit = document.querySelector(".profile__edit");
const profileButtonClose = document.querySelector("#close-profile");
const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__job");
const popupName = document.querySelector("#name-form");
const popupDescription = document.querySelector("#job-form");
//Объявление переменных Popup view photo
const modalPopup = document.querySelector(".popup_modal");
const modalButtonClose = document.querySelector("#delete-modal");
const modalPhoto = document.querySelector(".popup__photo");
const modalTitle = document.querySelector(".popup__desc");
//Объявление переменных Popup Photo
const photoButtonAdd = document.querySelector(".profile__add-photo");
const photoButtonClose = document.querySelector("#close-photo");
const photoPopup = document.querySelector(".popup_photo");
const nameInput = document.querySelector("#name-place");
const linkInput = document.querySelector("#name-link");
//Переменные Card Photo
const cardContainer = document.querySelector(".gallery");
const cardTemplate = document.querySelector("#card-template")
    .content.querySelector(".card");
//

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
//Открытие Popup
const openPopup = (item) => {
    item.classList.add("popup_active");
    document.addEventListener("keydown", handlerClickEscape);
    document.addEventListener("click", handlerClickWindow);
};
//Закрытие Popup
const closePopup = (item) => {
    item.classList.remove("popup_active");
    document.removeEventListener("keydown", handlerClickEscape);
    document.removeEventListener("click", handlerClickWindow);
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
    cardModalPhoto.addEventListener("click", () => {
        handleClickCard(item)
    });
    cardLikeButton.addEventListener("click",handelLikeButton);
    cardDeleteButton.addEventListener("click",handelDeleteButton);
    return card;
}

const handleClickCard = (item) => {
    openPopup(modalPopup);
    modalPhoto.src = item.link;
    modalPhoto.alt = item.title;
    modalTitle.textContent = item.title;
};
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
    closePopup(photoPopup);
    renderCard(newCard,cardContainer);
}
const handlerCardPhoto = (e) =>{
    e.preventDefault()
    linkInput.value = ""
    nameInput.value = ""
    openPopup(photoPopup);
}

//Закрытие Popup
function handlerClickEscape(e) {
    const activePopup = document.querySelector(".popup_active");
    if (activePopup && e.key === "Escape") {
        closePopup(activePopup);
    }
}
function handlerClickWindow (e) {
    const activePopup = document.querySelector(".popup_active");
    if (activePopup && e.target === activePopup) {
        closePopup(activePopup);
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
});



