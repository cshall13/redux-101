// reducers get state and action as params
// all reducers get EVERY action. the action object is in the action params

var SelectedStudent = function(state = "No one", action){
// console.log(action);
    if (action.type == 'PICK_STUDENT') {
        return action.payload;
    // }else if (action.type == 'TIMER_TICK'){
    //     var newState = state + action.payload
    //     return newState

    }else{
        return state;
    }
};

export default SelectedStudent;

