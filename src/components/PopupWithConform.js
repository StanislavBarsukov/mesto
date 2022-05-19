import Popup from "./Popup.js";
class PopupWithConform extends Popup {
    constructor(popupSelector,submitCallback) {
        super(popupSelector);
        this._submitCallback = submitCallback

    }
    setEventListeners() {
        super.setEventListeners()
        this._popup.addEventListener("submit", e => {
            e.preventDefault();
            this._submitCallback(this._card);
        })
    }
    setCard(card) {
        this._card = card;
    }
}
export default PopupWithConform