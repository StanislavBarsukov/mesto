import Popup from "./Popup.js";
class PopupWithForm extends Popup {
    constructor(popupSelector, submitCallback)  {
        super(popupSelector);
        this._submitCallback = submitCallback;
        this._form = this._popup.querySelector(".popup__form");
        this._inputList = this._popup.querySelectorAll(".popup__line")
        this._inputValues = {};
    }
    _getInputValues() {
        this._inputList.forEach(input => this._inputValues[input.name] = input.value);
        return this._inputValues;
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