import Popup from "./Popup.js";
class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._photo = this._popup.querySelector(".modal__photo")
        this._title = this._popup.querySelector(".modal__desc")
    }
    open (link, name) {
        super.open();
        this._photo.src = link;
        this._photo.alt = name;
        this._title.textContent = name;
    }
}
export default PopupWithImage