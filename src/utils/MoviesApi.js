class MoviesApi {
  constructor() {
    this.baseUrl = "https://api.nomoreparties.co/beatfilm-movies";
    this._headers = {
      "Content-Type": "application/json",
    };
  }

  getCards() {
    return fetch(this.baseUrl, {
      method: "GET",
      headers: this._headers,
    }).then(this._checkResponse);
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }
}

export default new MoviesApi();
