class UserInfo {
    constructor({nameElement, infoElement}) {
        this._nameElement = nameElement;
        this._infoElement = infoElement;
    }

    getUserInfo() {
        return {
            name: this._nameElement.textContent,
            info: this._infoElement.textContent
        }
    }

    setUserInfo({name, info}) {
        this._nameElement.textContent = name;
        this._infoElement.textContent = info;
    }
}
export default UserInfo