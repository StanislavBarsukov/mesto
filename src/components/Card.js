class Card {
    constructor(data, cardSelector, handleShowPhoto,) {
        this._name = data.name;
        this._link = data.link;
        this._cardSelector = cardSelector;
        this._handleShowPhoto =  handleShowPhoto;
    };
    _getTemplate() {
        const cardElement = document
            .querySelector(this._cardSelector)
            .content
            .querySelector('.card')
            .cloneNode(true);
        return cardElement;
    };

    _handleCardLike() {
        this._likeButton.classList.toggle("card__like_active");
    };

    _handleCardRemove() {
        this._element.remove();
    };

    _setEventListeners() {
        this._likeButton.addEventListener('click', () => {
            this._handleCardLike();
        });
        this._element.querySelector(".card__delete-btn").addEventListener('click', () => {
            this._handleCardRemove();
        });
        this._cardImage.addEventListener('click', () => {
            this._handleShowPhoto(this._link, this._name);
        });
    };

    generateCard() {
        this._element = this._getTemplate();
        this._cardImage = this._element.querySelector(".card__photo");
        this._likeButton = this._element.querySelector(".card__like");
        this._cardImage.src = this._link;
        this._cardImage.alt = this._name;
        this._element.querySelector(".card__title").textContent = this._name;
        this._setEventListeners();
        return this._element;
    };
}
export default Card

