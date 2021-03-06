class Api {
    constructor(data) {
        this._url = data.url;
        this._headers = data.headers
    }

    getInitialCards() {
        return fetch(`${this._url}/cards`, {
            method:"GET",
            headers:this._headers
        }).then(this._checkResponse);
    }

    getUpdateCard(data) {
        return fetch(`${this._url}/cards`, {
            method:"POST",
            headers:this._headers,
            body: JSON.stringify({
                name:data.name,
                link:data.link
            })
        }).then(this._checkResponse);
    }

    getInitialUser() {
        return fetch(`${this._url}/users/me`, {
            method:"GET",
            headers:this._headers
        }).then(this._checkResponse);
    }

    getUpdateUser(data) {
        return fetch(`${this._url}/users/me`, {
            method:"PATCH",
            headers:this._headers,
            body: JSON.stringify({
                name: data.name,
                about: data.about,
            })
        }).then(this._checkResponse);
    }

    updateAvatar(link) {
        return fetch(`${this._url}/users/me/avatar`, {
            method:"PATCH",
            headers:this._headers,
            body: JSON.stringify({
                avatar: link
            })
        }).then(this._checkResponse);
    }

    deleteCard(cardId){
        return fetch(`${this._url}/cards/${cardId}`, {
            method:"DELETE",
            headers:this._headers,
        }).then(this._checkResponse);
    }

    addLike(cardId) {
        return fetch(`${this._url}/cards/likes/${cardId}`, {
            method:"PUT",
            headers:this._headers,
        }).then(this._checkResponse);
    }

    deleteLike(cardId) {
        return fetch(`${this._url}/cards/${cardId}/likes`, {
            method:"DELETE",
            headers:this._headers,
        }).then(this._checkResponse);
    }

    _checkResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    }

}
export default Api