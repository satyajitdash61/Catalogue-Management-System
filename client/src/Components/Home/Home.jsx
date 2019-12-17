import React, { Component } from 'react';
import './Home.css';
import Navbar from '../Navbar/Navbar'
class Home extends Component {
    state = {
        status : "product_details"
    }
    render() { 
        return ( 
            <div>
                <Navbar />
                    
            </div>
         );
    }
}
 
export default Home;