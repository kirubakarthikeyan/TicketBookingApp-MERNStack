import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../node_modules/jquery/dist/jquery.js';
import '../App.css';
import '../../node_modules/bootstrap/js/src/carousel.js';


class Carousel extends React.Component{

render()
{
    return(
    <div>
        <div id="myCarousel" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" class=""></li>
          <li data-target="#myCarousel" data-slide-to="1" class="active"></li>
          <li data-target="#myCarousel" data-slide-to="2" class=""></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item">
            <img class="first-slide" src="https://mrmoviefiend.files.wordpress.com/2010/06/the-dark-knight-poster-11.jpg" alt="First slide"/>
          </div>
          <div class="carousel-item active">
            <img class="second-slide"src="http://www.underscores.fr/images/2010/09/iron-man-banner.jpg" alt="Second slide"/>
          </div>
          <div class="carousel-item">
            <img class="third-slide" src="https://postergirlpress.com/wp-content/uploads/2018/04/horizontal-movie-posters-bane-batman-standoff-the-dark-knight-rises-wall-poster1.jpg" alt="Third slide"/>
          </div>
        </div>
        <a class="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
    )
}

}

export default Carousel;