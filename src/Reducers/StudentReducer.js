// reducer - a function that returns state
// reducers get state and action as params
// all reducers get EVERY action. the action object is in the action param
export default function(state = null, action){
    console.log(action)
    return [
        'Chad',
        'Shane',
        'Drew',
        'YingRong',
        'Stephen',
        'Merilee',
        'Chris',
        'Marissa'
    ]
}
