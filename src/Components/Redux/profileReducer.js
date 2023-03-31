const UNPOSTT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';

let initialState = {
  postsData: [
    { id: 1, postText: "Its my first post)", likesCount: 50 },
    { id: 2, postText: "Hi, how are u ?", likesCount: 88 },
    { id: 3, postText: "React — JavaScript-библиотека с открытым исходным кодом для разработки пользовательских интерфейсов. React разрабатывается и поддерживается Facebook, Instagram и сообществом отдельных разработчиков и корпораций. React может использоваться для разработки одностраничных и мобильных приложений.", likesCount: 32,
    },
  ],

  newPostText: []
}

const profileReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 4,
        postText: state.newPostText,
        likesCount: 100
      };
      state.postsData.push(newPost);
      state.newPostText = '';

      return state;

    case UNPOSTT:
      state.newPostText = action.text;

      return state;

    default:
      return state;
  }
}

export const UNPTActionCreator = (text) => {
    return {
      type: UNPOSTT,
      text: text
    }
}
  
export const addPostActionCreator = () => {
    return {
      type: ADD_POST
    }
}


export default profileReducer;