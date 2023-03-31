let initialState = {
        friendsData: [
                  { id: 1, name: "Masha" },
                  { id: 2, name: "Delya" },
                  { id: 3, name: "Max" },
                  { id: 4, name: "Neket" },
                ]
}

const friendsReducer = (state = initialState, action) => {
        return state; 
}

export default friendsReducer;