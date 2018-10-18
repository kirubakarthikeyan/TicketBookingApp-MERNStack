import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../node_modules/jquery/dist/jquery.js';
import '../App.css';


class Header extends React.Component{

render()
{
    return(
        
        <div>
        <div className="collapse bg-dark" id="navbarHeader">
            <div className="container">
              <div className="row">
                <div className="col-sm-8 col-md-7 py-4">
                  <h4 className="text-white">About</h4>
                  <p className="text-muted">Add some information about the album below, the author, or any other background context. Make it a few sentences long so folks can pick up some informative tidbits. Then, link them off to some social networking sites or contact information.</p>
                </div>
                <div className="col-sm-4 offset-md-1 py-4">
                  <h4 className="text-white">Contact</h4>
                  <ul className="list-unstyled">
                    <li><a href="#" className="text-white">Follow on Twitter</a></li>
                    <li><a href="#" className="text-white">Like on Facebook</a></li>
                    <li><a href="#" className="text-white">Email me</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="navbar navbar-dark bg-dark shadow-sm">
            <div className="container d-flex justify-content-between">
                                      <div>
                                            <button data-toggle="modal" data-target="#addModal"  className="add btn btn-outline-secondary">Add Screen</button>
                                    </div>
              <a href="#" className="navbar-brand d-flex align-items-center">
                    <i style={{paddingRight:"20px"}} className="fas fa-film"></i>
                <strong>Ticket Booking App</strong>
              </a>
             
           
            </div>
            </div>
         </div>
    )
}

}

export default Header;