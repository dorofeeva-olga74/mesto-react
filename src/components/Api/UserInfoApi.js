// import { Api } from "./Api.js";

// export class UserInfoApi extends Api {
//    constructor(apiConfig) {
//       super(apiConfig);
//    }

//     constructor({ userNameSelector, aboutUserSelector, avatarSelector }) {
//       this._userName = document.querySelector(userNameSelector);
//       this._aboutUser = document.querySelector(aboutUserSelector);
//       this._avatarFoto = document.querySelector(avatarSelector);
//     }
//     //публичный метод возвращает объект с данными пользователя
//     getUserInfo() {
//       return {
//         userName: this._userName.textContent,
//         aboutUser: this._aboutUser.textContent,
//         avatar: this._avatarFoto.src,
//       };
//     }
//     //публичный метод принимает новые данные пользователя и добавляет их на страницу
//     setUserInfo({ name, about, avatar, _id }) {
//       this._userName.textContent = name;
//       this._aboutUser.textContent = about;
//       this._avatarFoto.src = avatar;
//       this._userId = _id;//мой ID!!!    
//     }
  
//     getUserId() {
//       return this._userId;
//     }
  
//     setAvatar(avatarLink) {
//       this._avatarFoto.src = avatarLink;
//     }
//   } 