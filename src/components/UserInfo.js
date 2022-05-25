class UserInfo {
    constructor({nameElement, infoElement, avatarElement}) {
        this._nameElement = nameElement;
        this._infoElement = infoElement;
        this._avatarElement = avatarElement;
    }

    getUserInfo() {
        return {
            name: this._nameElement.textContent,
            about: this._infoElement.textContent,
            avatar: this._avatarElement.src

        }
    }

    setUserInfo(data) {
        this._nameElement.textContent = data.name;
        this._infoElement.textContent = data.about;
        this._avatarElement.src = data.avatar

    }
}
export default UserInfo