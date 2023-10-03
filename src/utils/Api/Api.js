export class Api {
  constructor({ url, headers }/*options*/) {//на входе некий обьект с url и headers
    this._url = url;// тело конструктора// или options.url 
    this._headers = headers;
  }
  //приватный метод ответа сервера
  _getResponse(response) {
    //console.log(response)
    if (response.ok) {
      return response.json();//дай мне ответ в формате json()
    }
    return Promise.reject(new Error("Возникла ошибка"));
  }
  //универсальный метод запроса с проверкой ответа, чтобы
  //не дублировать эту проверку в каждом запросе
  /*_request(url, options) {
    return fetch(url, options).then(this._checkResponse)
  }*///нужно заменить все fetch на this._request

  //инициировать карточки //получение данных с сервера
  getInitialCards() {//getAllToddos
    return fetch(`${this._url}/cards`, { //возврат fetch всегда промис-/tasks
      headers: this._headers,
    }).then(this._getResponse);//response - ответ 
    //console.log(response);     
  }
  //удалить карточку
  deleteCardApi(id) {
    return fetch(`${this._url}/cards/${id}`, { //возврат fetch всегда промис- /tasks=cards
      headers: this._headers,
      method: 'DELETE',
    }).then(this._getResponse);
  }
  //создать карточку
  creatCardApi(data) {
    return fetch(`${this._url}/cards`, { //возврат fetch всегда промис
      headers: this._headers,
      method: 'POST',
      body: JSON.stringify(data),
    }).then(this._getResponse);
  }
  /*профиль*/
  //получение данных пользователя с сервера
  getUserCardsData() {
    return fetch(`${this._url}/users/me`, {
      headers: this._headers,
    }).then(this._getResponse);//response - ответ

  }
  //Метод находит id пользователя в хранилище
  // getCurrentUser() {
  //   //console.log(res)
  //   this.getUserCardsData(_id)
  //     .then((response) => {
  //       localStorage.setItem('userId', response?._id);
  //       return response;
  //     });
  // }
  //отправка данных на сервер   
  changeUserData(data) {
    //console.log(data)
    return fetch(`${this._url}/users/me`, {
      headers: this._headers,
      method: 'PATCH',
      body: JSON.stringify({
        name: data.name,
        about: data.about,
        avatar: data.avatar,
      })
    }).then(this._getResponse);
  }  
  //отправка данных на сервер   
  changeAvatarUrl(data) {
    return fetch(`${this._url}/users/me/avatar`, {
      headers: this._headers,
      method: 'PATCH',
      body: JSON.stringify({ avatar: data.avatar }),
    }).then(this._getResponse);
  }
  //Метод  запроса последней версии лайка
  addLikeCardData(cardId) {
    //console.log(card)
    return fetch(`${this._url}/cards/${cardId}/likes`, {      
      headers: this._headers,
      method: 'PUT',
    }).then(this._getResponse);//response - ответ 
  }
  //удаление лайка с карточки    
  deleteLikeCardData(cardId) {
    return fetch(`${this._url}/cards/${cardId}/likes`, {
      headers: this._headers,
      method: 'DELETE',
    }).then(this._getResponse);
  }
  // другие методы работы с API
}
//для карточек
const apiConfig = {///1
  url: "https://mesto.nomoreparties.co/v1/cohort-74",
  headers: {
    "Content-Type": "application/json",
    "authorization": "ae84b954-9fdb-4967-8466-ffa99a62c9a2",
  },
};
/*API*/
const api = new Api(apiConfig);
export default api;