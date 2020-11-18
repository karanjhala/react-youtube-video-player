import React from 'react';
import {Link} from 'react-router-dom';

function Home() {
  return (
    <div className="App">
      <Link to="/reactjs"> 
        <h1>ReactJs course</h1>
      </Link>
      <Link to="/nodejs"> 
        <h1>NodeJS course</h1>
      </Link>
      <h1>KVSJ</h1>
      
    </div>
  );
}

export default Home;