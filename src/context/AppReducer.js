const TransactionReducer=(state, action) =>{
    switch(action.type){
        case "ADD" : {
            return[action.payload, ...state];
        }
        case "DELETE" : {
            console.log('click');
            let num = [...state]
            num.splice(action.payload, 1)
            return num;
        }
        default:
            return state;
    }
}

export default TransactionReducer;