let state = {
  profile: {
    postsData: [
      {id: 1, postText: 'Its my first post)', likesCount: 50},
      {id: 2, postText: 'Hi, how are u ?', likesCount: 88},
      {id: 3, postText: 'React — JavaScript-библиотека с открытым исходным кодом для разработки пользовательских интерфейсов. React разрабатывается и поддерживается Facebook, Instagram и сообществом отдельных разработчиков и корпораций. React может использоваться для разработки одностраничных и мобильных приложений.', likesCount: 32}
    ]
  },

  dialogs: {
    dialogsData: [
      {id: 1, name: 'Masha'},
      {id: 2, name: 'Delya'},
      {id: 3, name: 'Max'},
      {id: 4, name: 'Neket'}
    ],
    
    messagesData: [
      {id: 1, message: 'Hello)'},
      {id: 2, message: 'Hi, how are u ?'},
      {id: 3, message: 'Can i take proxy ?'},
      {id: 4, message: 'lets go have a drink!'}
    ]
  }
};

  export default state;