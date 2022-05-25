import Popup from "./Popup.js";
class PopupWithConform extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._button = this._popup.querySelector(".popup__save_conform");
    }

    submitCallback(item) {
       this._submitCallback = item
    };

    setEventListeners() {
        super.setEventListeners();
        this._button.addEventListener("click", (e) => {
            e.preventDefault();
            this._submitCallback()
        })
    };
}
export default PopupWithConform