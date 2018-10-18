const initState =
{
    message:{
        message:null
    }
}



export default function(state=initState,action)
{

   
    const ADD_SCREEN = "ADD_SCREEN";
    const ADD_SCREEN_FAILED="ADD_SCREEN_FAILED";
    const ADD_SCREEN_RESET="ADD_SCREEN_RESET";
    

switch(action.type)
{

case ADD_SCREEN:
return {...state,message:{message:action.payload}};

case ADD_SCREEN_FAILED:
return {...state,message:action.payload};
case ADD_SCREEN_RESET:
return {...state,message:{message:null}}


default:
return state;

}

} 