const initialstate = {
  transactions: [],
};

function rootReducer(state = initialstate, action) {
  switch (action.type) {
    case "UPDATE_TRANSACTIONS":
      return { 
        ...state,
        transactions: [...state.transactions, action.payload]
        
       };
      default:
          return initialstate
  }
}

export default rootReducer;
