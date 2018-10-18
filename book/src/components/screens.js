import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/jquery/dist/jquery.js";
import "../App.css";
import * as action from "../actions/actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Screens extends React.Component {
  componentDidMount() {
    this.props.getScreen();
  }

  renderScreens() {
    const { error, screens, loading } = this.props.screens;
    if (this.props.screens.screens==null || undefined) {
      return <h1>LOADING</h1>;
    } 
    if (screens.screens!==null) {
      var screen = screens.screens.map(item => {
   
         
        return (
          <div class="col-md-4">
            <div class="card mb-4 shadow-sm">
              <img
                class="card-img-top"
                src="https://www.theatreinchicago.com/images/articles/privatebank-theatre-seating-view.jpg"
                alt="Card image cap"
              />
              <div class="card-body">
                <div>
                  <h2>{item.name}</h2>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                    {/* <button>View Seats</button> */}
                    <Link
                      type="button"
                      class="btn btn-sm btn-outline-secondary"
                      to={`/${item.name}`}
                    >
                      View Screen
                    </Link>
                  </div>
                  {/* <small class="text-muted">9 mins</small> */}
                </div>
              </div>
            </div>
          </div>
        );
      });

      return screen;
    }
  }

  render() {
    // console.log(this.props.screens);

    return (
      <div>
        <div class="album py-5 bg-light">
          <div class="container">
            <div class="row">{this.renderScreens()}</div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    screens: state.allScreens
  };
};

export default connect(
  mapStateToProps,
  action
)(Screens);
