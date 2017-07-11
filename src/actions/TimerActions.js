var Timer = function(){
    return{
        type: "TIMER_TICK",
        payload: new Date()
    }
};

export default Timer;