import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../node_modules/jquery/dist/jquery.js';
import '../App.css';
import Header from '../components/header';
import Carousel from '../components/carousel';
import Screens from '../components/screens';
import Modal from '../components/modal';

class Home extends React.Component{

render()
{
  
    return(
        <div>
             <Header/>
            <Carousel/>
            <Screens/>
            <Modal/>
        </div>

 
    )
}

}

export default Home;