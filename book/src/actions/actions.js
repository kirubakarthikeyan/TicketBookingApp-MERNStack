import axios  from 'axios';


//GET ALL SCREENS

export const getScreen = ()=>
{

return function(dispatch)
{
    axios.get("/screens").then((res)=>dispatch({type:'GET_ALL_SCREEN',payload:res.data}));

}

}

//ADD A SCREEN

export const addScreen = (data)=>
{

return function(dispatch)
{
    axios.post("/screens",data).then((res)=>dispatch({type:'ADD_SCREEN',payload:res.data}));

}

}


//ADDING A SCREEN FAILED

export const addScreen_failed = (err)=>
{
    return function(dispatch)
    {
        dispatch({type:'ADD_SCREEN_FAILED',payload:err});
    }
}

//REST ERROR 
export const addScreen_reset = ()=>
{
    return function(dispatch)
    {
        dispatch({type:'ADD_SCREEN_RESET',payload:{message:null}})
    }
}


//GET A SPECIFIED SCREEN

export const getOneScreen = (data)=>
{

return function(dispatch)
{
    axios.get(`/${data}`).then((res)=>dispatch({type:'GET_SCREEN',payload:res.data}));

}

}

export const resetOneScreen = ()=>
{

    return function(dispatch)
    {
        dispatch({type:'GET_SCREEN_RESET',payload:[]})
    }

}



//RESERVE TICKETS
export const reserveTickets = (data)=>
{

    return function(dispatch)
    {
        axios.post(`/reserve`,data).then((res)=>dispatch({type:'RESERVE_TICKET',payload:res.data}));
    
    }


}

