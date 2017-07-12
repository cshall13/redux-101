export default function(state=[],action){
// this is a case statement
//     same as if(action.type == 'GET_WEATHER'){}
    switch(action.type){
        case "GET_WEATHER":
            // code will run if aciton.type = "GET_WEATHER"
            return action.payload
        // case "DoTheHokeyPokey":
        //     return state;
        // default:
        //     return state;
    }


    return state;
}