let state = {
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
      { id: 2, name: "Delya", message: "Hi, how are u ?"  },
      { id: 3, name: "Max", message: "Can i take proxy ?"  },
      { id: 4, name: "Neket", message: "lets go have a drink!"  },
    ],

    messagesData: [
      { id: 2, message: "Hi, how are u ?" },
      { id: 3, message: "Can i take proxy ?" },
      { id: 4, message: "lets go have a drink!" },
    ],
  },

  friends: {
    friendsData: [
      { id: 2, name: "Delya" },
      { id: 3, name: "Max" },
      { id: 4, name: "Neket" },
    ],
  },
};

let rerenderEntireTree = () => {};

export const updateNewPostText = (text) => {
  state.profile.newPostText = text;
  rerenderEntireTree(state);
};

export const addPost = (text) => {
  let newPost = {
    id: 4,
    postText: text,
    likesCount: 100
  };

  state.profile.postsData.push(newPost);
  state.profile.newPostText = '';
  rerenderEntireTree(state);
};

export const subscribe = (observer) => {
  rerenderEntireTree = observer;
};

  export default state;