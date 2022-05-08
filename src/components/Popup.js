class Popup {
    constructor(popupSelector) {
        this._popup = popupSelector;
    }
    _handlerClickEscape = (e) => {
        if (e.key === "Escape") {
            this.close();
        }
    }
    _handlerClickWindow = (e) => {
        if (e.target.classList.contains("popup")) {
            this.close();
        }
    }
    open() {
        this._popup.classList.add("popup_active");
        document.addEventListener("keydown", this._handlerClickEscape);
        document.addEventListener("mousedown", this._handlerClickWindow);
    }
    close() {
        this._popup.classList.remove("popup_active");
        document.removeEventListener("keydown",this._handlerClickEscape);
        document.removeEventListener("click", this._handlerClickWindow);
    }
    setEventListeners() {
        this._popup.querySelector(".popup__close").addEventListener("click", () => this.close());
    }
}
export default Popup