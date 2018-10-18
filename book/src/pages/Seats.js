import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../node_modules/jquery/dist/jquery.js';
import '../App.css';
import Header from '../components/header';
import SeatTable from '../components/seatTable';
import Reservation from '../components/reservation';


class Seats extends React.Component{




render()
{
console.log(this.props.tickets)  
    return(
        <div >
         <Header/>
         <div className="container"> 
         
          <SeatTable id={this.props.match.params.id} />
         
        
         </div>
        </div>

 
    )
}

}

export default Seats;    