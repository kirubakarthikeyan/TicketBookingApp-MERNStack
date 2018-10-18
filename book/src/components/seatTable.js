import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import "../App.css";
import Header from "../components/header";
import Carousel from "../components/carousel";
import Screens from "../components/screens";
import Modal from "../components/modal";
import "../../node_modules/@fortawesome/fontawesome-free/css/all.css";
import { connect } from "react-redux";
import * as action from "../actions/actions";
import Reservation from "./reservation";

class SeatTable extends React.Component {
  state = { id: this.props.id, tickets: [], toggle: [], selectedTicketNo: [] };

  componentDidMount() {
    

    this.props.getOneScreen(this.state.id);
  }

  componentWillUnmount()
  {
    this.props.resetOneScreen();
  }


  renderTickets() {
   
    if(this.props.tickets[0])
    {
      return this.props.tickets[0].row.map((seats, rowIndex) => {
        console.log(seats);
  
        return (
          <tr>
            <td>{seats.rowAlphabet}</td>
            {seats.seats.map((t, seatIndex) => {
              if (t.reserved == false) {
                return (
                  <td className={t.seatNumber}>
                    <i
                      onClick={event => {
                     
                        this.selectTickets(event, t, rowIndex, seatIndex,(rowIndex*10)+seatIndex);
                      }}
                      className="fas fa-chair"
                    />
                  </td>
                );
              } else {
                return (
                  <td>
                    <i style={{ opacity: 0.2 }} className="fas fa-chair" />
                  </td>
                );
              }
            })}
          </tr>
        );
      });
    }
   
  }
  
  selectTickets(e, t, rowIndex, seatIndex,no) {
    let toggle = [...this.state.toggle];
       toggle[no] = !this.state.toggle[no];
    this.setState({ toggle });
    
  
    if (toggle[no] === true) {
      e.target.style.color = "red";
      this.setState({
        tickets: this.state.tickets.concat(t._id),
        selectedTicketNo: this.state.selectedTicketNo.concat(
          `${this.props.tickets[0].row[rowIndex].rowAlphabet.toUpperCase()}${
            t.seatNumber
          }`
        )
      });
      console.log(this.state.tickets);
    } else {
      var ids = [...this.state.tickets];
      var ticketNos = [...this.state.selectedTicketNo];
      e.target.style.color = "black";
      this.state.tickets.forEach((id, index) => {
        if (t._id == id) {
          ids.splice(index, 1);
        }
      });

      this.state.selectedTicketNo.forEach((no, index) => {
        var ticketNo = `${this.props.tickets[0].row[
          rowIndex
        ].rowAlphabet.toUpperCase()}${t.seatNumber}`;
        if (ticketNo == no) {
          ticketNos.splice(index, 1);
        }
      });
      this.setState({ tickets: ids });
      this.setState({ selectedTicketNo: ticketNos });
      console.log(this.state.tickets);
    }
  }

  render() {
    if (this.props.tickets == null) {
      return <h1>Loading</h1>;
    }
    return (
      <div className="row">
        <div className="col-md-8">
          <table>
            <tbody>{this.renderTickets()}</tbody>
          </table>
        </div>
        <Reservation
          screenName={this.state.id}
          ticketNos={this.state.selectedTicketNo}
          selectedTickets={this.state.tickets}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    tickets: state.tickets.state
  };
};

export default connect(
  mapStateToProps,
  action
)(SeatTable);
