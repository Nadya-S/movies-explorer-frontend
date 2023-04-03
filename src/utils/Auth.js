class Auth {
  constructor() {
    this.baseUrl = "https://api.movies-explorer.ns.nomoredomains.work";
    // this.baseUrl = "http://localhost:3000";
    this._headers = {
      "Content-Type": "application/json",
    };
  }

  register(name, email, password) {
    return fetch(`${this.baseUrl}/signup`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
      }),
    }).then(this._checkResponse);
  }

  authorize(email, password) {
    return fetch(`${this.baseUrl}/signin`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    }).then(this._checkResponse);
  }

  getMe(token) {
    return fetch(`${this.baseUrl}/users/me`, {
      method: "GET",
      headers: {
        ...this._headers,
        Authorization: `Bearer ${token}`,
      },
    }).then(this._checkResponse);
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка авторизации: ${res.status}`);
  }
}

export default new Auth();
