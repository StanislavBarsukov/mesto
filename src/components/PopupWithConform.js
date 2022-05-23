import Popup from "./Popup.js";
class PopupWithConform extends Popup {
    constructor(popupSelector, submitCallback) {
        super(popupSelector);
        this._button = this._popup.querySelector(".popup__save_conform")
        this._submitCallback = submitCallback;
    }
    setEventListeners() {
        super.setEventListeners()
        this._button.addEventListener("submit", e => {
            e.preventDefault();
            this._submitCallback(this._target)
        })
    }
    setTarget(target) {
        this._target = target;
    }
}
export default PopupWithConform