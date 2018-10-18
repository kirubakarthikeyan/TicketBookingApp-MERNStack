import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../node_modules/jquery/dist/jquery.js';
import '../App.css';
import '../../node_modules/bootstrap/js/src/modal.js';
import  * as action from '../actions/actions';
import {connect} from 'react-redux';

class Modal extends React.Component{


constructor(props)
{
 super(props);

  this.state={name:"",image:"",number:"",alpha:""};
  this.handleNumber=this.handleNumber.bind(this);
  this.handleRow=this.handleRow.bind(this);
  this.handleScreenName=this.handleScreenName.bind(this);
  this.handleUri=this.handleUri.bind(this);
}


handleSubmit()
{
  if(this.state.name =="" || this.state.number=="" || this.state.alpha =="")
  {
    alert("Fields cannot be empty")
  }
  else
  {
    this.props.addScreen(this.state);
  }
  
 

}

handleScreenName(e)
{
  
this.setState({
 name:e.target.value
})

}

handleRow(e)
{
this.setState({
  alpha:e.target.value
})
}

handleUri(e)
{
this.setState({
  image:e.target.value
})
}

handleNumber(e)
{
this.setState({
  number:e.target.value
})
}
componentWillUnmount()
{
 
  this.props.addScreen_reset();
 
}

showMessage()
{
  
  setTimeout(()=>
  {
    this.props.addScreen_reset();

  },7000)
  if(this.props.message)
  {
    const {success,error} = this.props.message;
    if(success)
    {
    
      return(
        <div class="alert alert-success" role="alert">
  {success}
</div>

      )
     
    }

    if(error)
    {
     
      return(
        <div class="alert alert-danger" role="alert">
                {error}
              </div>
               )
     
        
     
    }

  }

 
}

handleClose()
{
  
  this.props.getScreen();
}



render()
{
 
    return(
        <div className="modal fade" id="addModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Add Screen</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
          
         {this.showMessage()}
            
                        <form onSubmit={(e)=>e.preventDefault()}>
                                        <div className="form-group">
                                          <label for="inputScreen">Screen Name</label>
                                          <input onChange={this.handleScreenName} type="text" className="form-control" id="inputScreen" aria-describedby="emailHelp" placeholder="Enter screen name"/>
                                        </div>
                                        <div className="form-group">
                                          <label for="inputNumber">Number of seats</label>
                                          <input onChange={this.handleNumber} type="number" className="form-control" id="inputNumber" placeholder="Enter the number of seats"/>
                                        </div>
                                        <div className="form-group">
                                          <label for="inputRow">Row Alphabet</label>
                                          <input onChange={this.handleRow} type="text" className="form-control" id="inputRow" placeholder="Enter Row Alphabet"/>
                                        </div>
                                       
                                      </form>
            </div>
            <div className="modal-footer">
              <button onClick={()=>this.handleClose()}  type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              <button onClick={()=>this.handleSubmit()} type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    )
}



}

const mapStateToProps = state => {
  return {
    message: state.screens.message.message
  };
};


export default connect(mapStateToProps,action)(Modal);