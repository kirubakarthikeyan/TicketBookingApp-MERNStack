const initialState = {
    tickets:[],
    error:null,
    loading:false
}
export default function(state=null,action)
{

   
    const RESERVE_TICKET = "RESERVE_TICKET";
    const RESERVE_TICKET_FAILURE = "RESERVE_TICKET_FAILURE";    

switch(action.type)
{

case RESERVE_TICKET:

return action.payload;




default:
return state;

}

} 