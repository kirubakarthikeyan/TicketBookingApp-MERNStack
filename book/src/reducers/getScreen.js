import { stat } from "fs";

const initState = {
    state:[]
}

export default function(state=initState,action)
{

   
    const GET_SCREEN = "GET_SCREEN";
    const GET_ALL_SCREEN = "GET_ALL_SCREEN"
    const GET_SCREEN_RESET="GET_SCREEN_RESET"
    

switch(action.type)
{

case GET_ALL_SCREEN:

return action.payload;

case GET_SCREEN:

return {...state,state:action.payload}

case GET_SCREEN_RESET:
console.log(action.payload)
return {...state,state:[]}

default:
return state;

}

} 