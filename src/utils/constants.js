//Объявление переменных Popup Profile
export const popupProfileSelector = ".popup_type_profile";
export const profileButtonEdit = document.querySelector(".profile__edit");
export const profileName = document.querySelector(".profile__name");
export const profileJob = document.querySelector(".profile__job");
export const avatar = document.querySelector(".popup__line_type_avatar")
export const popupDeleteSelector = ".popup_type_delete"
export const popupAvatarSelector = ".popup_type_avatar"
export const buttonAvatar =document.querySelector(".profile__avatar-button")
//Объявление переменных Popup view photo
export const popupPreviewSelector = ".popup_type_modal";
//Объявление переменных Popup Photo
export const photoButtonAdd = document.querySelector(".profile__add-photo");
export const popupPhotoSelector = ".popup_type_photo";
export const nameInput = document.querySelector(".popup__line_type_name");
export const infoInput = document.querySelector(".popup__line_type_info");
//Переменные Card Photo
export const cardContainer = ".gallery";
//
export const config = {
    formSelector: ".popup__form",
    inputSelector: ".popup__line",
    inputErrorClass: "popup__line_error",
    errorClassActive: "error_active",
    submitButtonSelector: ".popup__save",
    submitButtonErrorClass: "popup__save_disabled"
};
//
export const initialCards = [
    {
        name: "Пенза",
        link: "https://images.unsplash.com/photo-1605901736397-bbef565f967c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
    },
    {
        name: "Владивосток",
        link: "https://images.unsplash.com/photo-1529111017668-af85a7fc9bab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=888&q=80"
    },
    {
        name: "Кисловодск",
        link: "https://images.unsplash.com/photo-1638723973818-6e5109bb9ed9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1828&q=80"
    },
    {
        name: "Москва",
        link: "https://images.unsplash.com/photo-1531168738274-aa9955d5033f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
    },
    {
        name: "Санкт-Петербург",
        link: "https://images.unsplash.com/photo-1551709076-89f2499d383b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
    },
    {
        name: "Карелия",
        link: "https://images.unsplash.com/photo-1559029884-4e34093db5b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80"
    }
];
