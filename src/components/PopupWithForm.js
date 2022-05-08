import Popup from "./Popup.js";
class PopupWithForm extends Popup {
    constructor(popupSelector, submitCallback)  {
        super(popupSelector);
        this._submitCallback = submitCallback;
        this._form = this._popup.querySelector(".popup__form");
        this._inputList = this._popup.querySelectorAll(".popup__line")
    }
    _getInputValues() {
        const formInput = {};
        this._inputList.forEach(input => formInput[input.name] = input.value);
        return formInput;
    }
    setEventListeners() {
        super.setEventListeners()
        this._form.addEventListener("submit", e => {
            e.preventDefault();
            this._submitCallback(this._getInputValues())
        })
    }
    close() {
        super.close();
        this._form.reset()
    }
}
export default PopupWithForm