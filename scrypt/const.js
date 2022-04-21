//Объявление переменных Popup Profile
export const profilePopup = document.querySelector(".popup_type_profile");
export const profileContainer = document.querySelector(".popup__container");
export const profileButtonEdit = document.querySelector(".profile__edit");
export const profileButtonClose = document.querySelector("#close-profile");
export const profileName = document.querySelector(".profile__name");
export const profileJob = document.querySelector(".profile__job");
export const popupName = document.querySelector("#name-form");
export const popupDescription = document.querySelector("#job-form");
//Объявление переменных Popup view photo
export const modalButtonClose = document.querySelector("#delete-modal");
export const modalPopup = document.querySelector(".popup_type_modal");
export const modalPhoto = document.querySelector(".modal__photo");
export const modalTitle = document.querySelector(".modal__desc");
//Объявление переменных Popup Photo
export const photoButtonAdd = document.querySelector(".profile__add-photo");
export const photoButtonClose = document.querySelector("#close-photo");
export const photoPopup = document.querySelector(".popup_type_photo");
export const nameInput = document.querySelector("#name-place");
export const linkInput = document.querySelector("#name-link");
//Переменные Card Photo
export const cardContainer = document.querySelector(".gallery");
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
