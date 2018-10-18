renderScreens()
{
if(this.props.screens==null || undefined)
{
  return (<h1>Loading</h1>)
}
if(this.props.screens)
{
  var screens = this.props.screens.map((item)=>
  {
    return(
    
        <div class="col-md-4">
        <div class="card mb-4 shadow-sm">
          <img class="card-img-top" src="https://s3.ap-south-1.amazonaws.com/cms-abp-prod-media/library/THE_TELEGRAPH/mig/media/images/2016/10/02/PDP_0823.jpg" alt="Card image cap"/>
          <div class="card-body">
            <div><h2>{item.name}</h2></div>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                {/* <button>View Seats</button> */}
              <Link  type="button" class="btn btn-sm btn-outline-secondary" to={`/${item.name}`} >View Screen</Link>
              </div>
              {/* <small class="text-muted">9 mins</small> */}
            </div>
          </div>
        </div>
      </div>
      
    )
    
    
  })

  return screens;
}
}



render()
{
  console.log(this.props.screens);
  
    return(
    
        <div>
        <div class="album py-5 bg-light">
        <div class="container">

          <div class="row">
          {this.renderScreens()}
          </div>
        </div>
      </div>
        </div>
    )
}

}
const mapStateToProps=(state)=>
{
  return{
    screens:state.screens
  }
}
