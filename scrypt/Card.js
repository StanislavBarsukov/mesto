class Card {
    constructor(data, cardSelector, handleShowPhoto) {
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
        this._element.querySelector(".card__like").classList.toggle("card__like_active");
    };

    _handleCardRemove() {
        this._element.remove();
    };

    _setEventListeners() {
        this._element.querySelector(".card__like").addEventListener('click', () => {
            this._handleCardLike();
        });
        this._element.querySelector(".card__delete-btn").addEventListener('click', () => {
            this._handleCardRemove();
        });
        this._element.querySelector(".card__photo").addEventListener('click', () => {
            this._handleShowPhoto();
        });
    };

    generateCard() {
        this._element = this._getTemplate();
        this._setEventListeners();
        this._element.querySelector('.card__photo').src = this._link;
        this._element.querySelector('.card__photo').alt = this._name;
        this._element.querySelector('.card__title').textContent = this._name;
        return this._element;
    };
}
export default Card

