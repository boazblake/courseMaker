import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
  render(){
    return(
      <div className="jumbotron">
        <h1 className="display-3">HOME PAGE</h1>
        <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
        <Link to="about" className="btn btn-primary btn-lg">LEARN MORE</Link>
      </div>
    );
  }
}


export default HomePage;