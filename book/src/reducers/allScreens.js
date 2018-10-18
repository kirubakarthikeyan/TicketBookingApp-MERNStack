const initState =
 {screens:{screens:[],
     loading:false, 
     error:null}}



export default function(state=initState,action)
{
    const GET_ALL_SCREEN="GET_ALL_SCREEN";
    const GET_ALL_SCREEN_FAILED = "GET_ALL_SCREEN_FAILED"
    

switch(action.type)
{

case GET_ALL_SCREEN:
return {...state,screens:{screens:action.payload,loading:false,error:null}};

case GET_ALL_SCREEN_FAILED:
return {...state,screens:{screens:[],loading:false,error:action.payload}};

default:
return state;

}

} 