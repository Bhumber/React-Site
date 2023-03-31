import profileReducer from "./profileReducer";
import dialogsReducer from './dialogsReducer';

let store = {

  _state: {
    profile: {
      postsData: [
        { id: 1, postText: "Its my first post)", likesCount: 50 },
        { id: 2, postText: "Hi, how are u ?", likesCount: 88 },
        { id: 3, postText: "React — JavaScript-библиотека с открытым исходным кодом для разработки пользовательских интерфейсов. React разрабатывается и поддерживается Facebook, Instagram и сообществом отдельных разработчиков и корпораций. React может использоваться для разработки одностраничных и мобильных приложений.", likesCount: 32,
        },
      ],
      newPostText: []
    },
  
    dialogs: {
      dialogsData: [
        { id: 1, name: "Masha", message: "Hi)"  },
        { id: 2, name: "Delya", message: "Hi, how are u ?"  },
        { id: 3, name: "Max", message: "Can i take proxy ?"  },
        { id: 4, name: "Neket", message: "lets go have a drink!"  },
      ],
      
      messagesData: [
        { id: 2, message: "Hi, how are u ?" },
        { id: 3, message: "Can i take proxy ?" },
        { id: 4, message: "lets go have a drink!" },
      ],

      newMessText: []
    },
  
    friends: {
      friendsData: [
        { id: 1, name: "Masha" },
        { id: 2, name: "Delya" },
        { id: 3, name: "Max" },
        { id: 4, name: "Neket" },
      ]
    }
  },
  _callSubscriber() {},

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profile = profileReducer(this._state.profile, action);
    this._state.dialogs = dialogsReducer(this._state.dialogs, action);

    this._callSubscriber(this._state);    
  } 
}

export default store;

