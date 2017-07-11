
import React, {Component} from 'react';


// we need some glue between react and redux. this component/container
// needs to know about redux state. the answer? the connect method from the
// react-redux module. the glue
// the connect method is like a waiter that communicates between customer and cook(react and redux)
import {connect} from 'react-redux';

// Get our actions...
import SelectStudent from '../actions/SelectStudentAction';
// console.log(SelectStudent);

// bindActionCreators is a redux function that we will tap into to let all
// reducers know anytime an aciton occurs
import {bindActionCreators} from 'redux';


import Timer from '../actions/TimerActions';



// ReduxStudents is an extenstion of Component. Means that everything Component has ReduxStudents has
// use 'super(props)' to have the ability to apply things from ReduxStudents to Component
class ReduxStudents extends Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        // use the rocket here because this function does not use its own 'this'
        setInterval(()=>{
            this.props.timerAction()
        },1000)
    }

    render(){
        // getting students from mapStateToProps, comes from rootReducer which contains studentReducer
        // console.log(this.props.students);
        var studentArray = [];
        this.props.students.map((student,index)=>{
            studentArray.push(
                <li key={index} onClick={()=> {this.props.selectStudent(student)}}>
                    {student}
                </li>
            )
        });
        return(
            <div>
                <h1>This is ReduxStudents</h1>
                {studentArray}
                <hr />
                {/*'this.props. ... comes from below in the return of 'mapStateToProps' function
                that is mapping redux state and allows us to use state*/}
                {this.props.selectedStudent} is Selected.
                <hr />
                {this.props.timer} is the apps current time.
            </div>
        )
    }
}


// all containers that need access to state will have this function
// we are creating a mapping between redux state and this components props
function mapStateToProps(state) {
    // mapStateToProps returns an object with each piece
    return {
        // from our master reducer, we have  a 'state' object
        // inside of that state object, we have a property: students
        // this exists because we made it a prop in the root reducer
        students: state.students,
        // created in rootReducer and added state here
        selectedStudent: state.selectedStudent,
        timer: state.timer
    };
}
    // mapDispatchToProps goes out to the dispatcher, grabs an action from it and sets
    // it as a prop to this component
function mapDispatchToProps(dispatch){
    return bindActionCreators({
        // these are called in the component with 'this.props. ... '
        selectStudent: SelectStudent,
        timerAction: Timer
        // below means send out to dispatcher
    },dispatch)
}



// INSTEAD of exporting the class (component), we export connect
// connect comes from 'react-redux' and allows them to talk
// connect takes 2 args which RETURNS A FUNCTION that takes 1 arg
// - connect takes state mapping function ( so its available in component props)
// - connect takes action mapping function (ditto)
// - the return function of the connect function, takes a component
export default connect(mapStateToProps, mapDispatchToProps) (ReduxStudents);

// exporting the class will send it up to index.js and be rendered as a normal component. we would
// not have access to the mapStateToProps function.
// ####################connect exports both components of react and redux!!! ##################
//         state/action(mapStateToProps) and component(ReduxStudents)

// connect is a function that takes mapStateToProps as an argument
// then connect MUST return a function, and that function takes ReduxStudents as an argument