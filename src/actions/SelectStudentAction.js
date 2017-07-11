
// This is an action. Actions MUST return an object.
// That object MUST have a type property.
// THis is similar to components, they MUST have a render function


var SelectStudent = function(student){
    console.log(student)
    return{
        type: "PICK_STUDENT",
        payload: student
    }
};

export default SelectStudent;
