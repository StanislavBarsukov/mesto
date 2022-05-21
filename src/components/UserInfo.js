class UserInfo {
    constructor({ nameElement, infoElement, avatarElement}) {
        this._nameElement = nameElement;
        this._infoElement = infoElement;
        this._avatarElement = avatarElement;
    }

    getUserInfo() {
        return {
            name: this._nameElement.textContent,
            info: this._infoElement.textContent,
            avatar: this._avatarElement.src
        }
    }
    setUserInfo(name, info,avatar) {
        this._nameElement.textContent = name;
        this._infoElement.textContent = info;
        this._avatarElement.src = avatar;
    }
}
export default UserInfo