import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../node_modules/jquery/dist/jquery.js';
import '../App.css';
import '../../node_modules/@fortawesome/fontawesome-free/css/all.css';
import {connect} from 'react-redux';
import * as action from '../actions/actions';

class Reservation extends React.Component{

    state={reserve:this.props.selectedTickets,screenName:this.props.screenName}


reserveSeats()
{
    if(this.props.selectedTickets.length<=10 && this.state.reserve!==[])
    {

       var reserve={

        reserve:this.props.selectedTickets
       }
        this.props.reserveTickets(reserve);
        this.props.getOneScreen(this.props.screenName)
        alert("successfully reserved ! Refreshing page wait a while")
    }
    else
    {
        alert("you can select only 10 tickets")
    }
   
}



render()
{
    console.log(this.props.selectedTickets);
    console.log(this.props.ticketNos)
    console.log(this.props)
  
    return(
        
        <div className="col-md-4" style={{width:400}}>
        <div className="booking-option">

         <div style={{marginTop:20}} className="text-center" >
                <h4>SELECTIONS</h4>  
                {this.props.ticketNos.map((ticket)=>
                    {
                        return(<div style={{float:"left",margin:10,padding:5,backgroundColor:"white",color:"black"}} >{ticket}</div>)
                    })}
            </div>
            <button onClick={()=>this.reserveSeats()} className="add btn btn-block btn-outline-secondary">Reserve seats</button>
        

        </div>
    </div>
    )
}

}

export default connect(null,action)(Reservation);    