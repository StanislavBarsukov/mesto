import Popup from "./Popup.js";
class PopupWithConform extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._button = this._popup.querySelector(".popup__save_conform");
        this._buttonText = this._button.textContent;
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
    deleteLoading(loading) {
        if (loading) {
            this._button.textContent = "Удаление..."
        } else {
            this._button.textContent = this._buttonText
        }
    }
}
export default PopupWithConform