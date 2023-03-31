const SEND_MESS =  'SEND-MESS';
const UNMESST = 'UPDATE-NEW-MESS-TEXT';

let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {

  switch (action.type) {
    case SEND_MESS:
      let newMess = {
          id: 5,  
          message: state.newMessText 
        };
      
        state.messagesData.push(newMess);
        state.newMessText = '';

      return state;

    case UNMESST:
      state.newMessText = action.text;
      
      return state;

    default:
      return state;
  }


  // if (action.type === SEND_MESS) {
  //   let newMess = {
  //     id: 5,  
  //     message: state.newMessText 
  //   };

  //   state.messagesData.push(newMess);
  //   state.newMessText = '';

  // } else if (action.type === UNMESST) {
  //   state.newMessText = action.text;
  // }

  // return state;
}


export const sendMessActionCreator = () => {
    return {
      type: SEND_MESS
    }
}
  
export const UNMessTActionCreator = (text) => {
    return {
      type: UNMESST,
      text: text
    }
}

export default dialogsReducer;