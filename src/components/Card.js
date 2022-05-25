class Card {
    constructor({data, userId, cardSelector,handleShowPhoto,handleCardRemove,handleCardLike}) {
        this._name = data.name;
        this._link = data.link;
        this._likes = data.likes;
        this._id = data._id;
        this._owner = data.owner;
        this._userId = userId;
        this._cardSelector = cardSelector;
        this._handleShowPhoto =  handleShowPhoto;
        this._handleCardRemove = handleCardRemove;
        this._handleCardLike = handleCardLike;
    };

    _getTemplate() {
        const cardElement = document
            .querySelector(this._cardSelector)
            .content
            .querySelector('.card')
            .cloneNode(true);
        return cardElement;
    };


    _handleLiked() {
        if (this.isLiked()) {
            this._likeButton.classList.add("card__like_active");
        }
    };

    isLiked() {
        return this._likes.some(like => like._id === this._userId);
    };

    _deleteCard(){
        if(this._owner._id !== this._userId) {
            this._deleteButton.remove();
        }
    };

    handleLikesCard(data) {
        this._likes = data.likes;
        this._likeNumber.textContent = this._likes.length;
        this._likeButton.classList.toggle('card__like_active');
    };

    _setEventListeners() {
        this._likeButton.addEventListener('click', () => {
            this._handleCardLike(this._id);
        });
        this._deleteButton.addEventListener('click', () => {
            this._handleCardRemove(this._id);
        });
        this._cardImage.addEventListener('click', () => {
            this._handleShowPhoto(this._link, this._name);
        });
    };

    generateCard() {
        this._element = this._getTemplate();
        this._cardImage = this._element.querySelector(".card__photo");
        this._likeButton = this._element.querySelector(".card__like");
        this._deleteButton = this._element.querySelector(".card__delete-btn")
        this._likeNumber =  this._element.querySelector(".card__like-number")
        this._likeNumber.textContent = this._likes.length
        this._cardImage.src = this._link;
        this._cardImage.alt = this._name;
        this._element.querySelector(".card__title").textContent = this._name;

        this._deleteCard()
        this._handleLiked()
        this._setEventListeners();

        return this._element;
    };

    deleteCard() {
        this._element.remove()
    };
}
export default Card

