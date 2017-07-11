
// This is an action. Actions MUST return an object.
// That object MUST have a type property.
// THis is similar to components, they MUST have a render function


var SelectStudent = function(student){
    console.log(student)
    // this return statement gets sent out via the dispatcher to EVERY SINGLE reducer
    return{
        type: "PICK_STUDENT",
        payload: student
    }
};

export default SelectStudent;
